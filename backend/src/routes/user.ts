import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from 'hono/jwt'
// import signupInput from  '@priyanshu-medium/zod/dist'
// import {SignupInput} from '@priyanshu-medium/medium/dist';


export const userRouter = new Hono<
{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string
    }
}
>();


userRouter.post("/signup", async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();

    // const {success} = signupInput.safeParse(body)

    // if(!success){
    //   c.status(411)
    //   c.json({
    //     message:"Inputs not correct"
    //   })
    // }
  
    try {
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password,
          name: body.name
        },
      });
  
      const jwt = await sign({
        id: user.id,
      }, c.env.JWT_SECRET)
  
      return c.json({jwt})
    } catch (error) {
      console.log("Error in signup", error);
      c.status(403);
      return c.text('Invalid')
    }
  });
  
  userRouter.post("/signin", async(c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
  
    try {
      const user = await prisma.user.findFirst({
        where: {
          email: body.email,
          password: body.password,
        },
      });
  
      if(!user){
        c.status(403)
        return  c.text('Invalid')
      }
  
      const jwt = await sign({
        id: user.id,
      }, c.env.JWT_SECRET)
  
      return c.json({jwt})
    } catch (error) { 
      console.log("Error in signup", error);
      c.status(403);
      return c.text('Invalid')
    }
  });
  