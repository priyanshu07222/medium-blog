import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="grid grid-cols-12 px-10 w-full py-10 max-w-screen-xl mx-auto  ">
        <div className="col-span-8 mx-4">
          <div className="text-5xl font-extrabold">{blog.title}</div>
          <div className="text-slate-500 text-sm pt-2">
            Post on 2nd December 2023
          </div>
          <div className="text-lg pt-6 font-base text-gray-700">
            {blog.content}
          </div>
        </div>
        <div className="col-span-4 ">
          <div className="text-slate-500">Author</div>
          <div className="flex gap-3 ">
            <div className="pr-2 flex flex-col justify-center">
              <Avatar name={blog.author.name || "Anonymous"} />
            </div>

            <div>
              <div className="text-xl font-bold">
                {blog.author.name || "Anonymous"}
              </div>
              <div className="pt-2 text-slate-500">
                Rondom catch phrase about hte author's ability to grab the
                user's attentions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
