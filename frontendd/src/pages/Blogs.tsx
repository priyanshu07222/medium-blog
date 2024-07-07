import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkelton } from "../components/BlogSkelton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        {" "}
        <BlogSkelton />
        <BlogSkelton />
        <BlogSkelton />
        <BlogSkelton />
      </div>
    );
  }
  return (
    <div>
      <Appbar />
      <div className=" max-w-2xl mx-auto mt-8">
        {blogs.map((blog, i) => (
          <BlogCard
            authorName={blog.author.name || "Priyanshu"}
            title={blog.title}
            content={blog.content}
            id={blog.id}
            publishedDate="20th june 2024"
            key={i}
          />
        ))}
      </div>
    </div>
  );
};
