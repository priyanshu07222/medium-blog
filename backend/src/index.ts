import { Hono } from "hono";

import { blogRouter } from "./routes/blog";
import { userRouter } from "./routes/user";
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string
  };
}>();

app.use('/*', cors())

app.use(
  '/*',
  cors({
    origin: 'http://localhost:5173',
    allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests'],
    allowMethods: ['POST', 'GET', 'OPTIONS'],
    exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
    maxAge: 600,
    credentials: true,
  })
)

app.route('/api/v1/user', userRouter)
app.route('/api/v1/blog', blogRouter)

export default app;
