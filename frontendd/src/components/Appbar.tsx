import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <div className="cursor-pointer">
        <Link to={"/blogs"}>Medium</Link>
      </div>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        <Link to={"/publish"}>New Blog</Link>
      </button>

      <div>
        <Avatar name="priyanshu" />
      </div>
    </div>
  );
};
