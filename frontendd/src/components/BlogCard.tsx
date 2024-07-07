import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id:string
}

export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
  id
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b border-gray-300 py-4 cursor-pointer  ">
        <div className="flex gap-2 items-center">
          <div className="flex items-center">
            <Avatar name={authorName} />
          </div>
          <div className="font-extralight">{authorName}</div>
          <div>
            <Dot />
          </div>
          <div className="font-thin text-xs text-slate-300">
            {publishedDate}
          </div>
        </div>
        <div className="text-2xl font-bold pt-2">{title}</div>
        <div className="text-md font-thin">{content.slice(0, 100) + "..."}</div>
        <div className=" text-slate-400 text-sm font-thin py-6">{`${Math.ceil(
          content.length / 100
        )} minutes read`}</div>
      </div>
    </Link>
  );
};

export function Dot() {
  return <div className="h-1 w-1 rounded-full bg-gray-300"></div>;
}

export function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-500 rounded-full dark:bg-gray-600">
      <span className="font-medium text-sm text-gray-200 dark:text-gray-300">
        {name[0].toUpperCase()}
      </span>
    </div>
  );
}
