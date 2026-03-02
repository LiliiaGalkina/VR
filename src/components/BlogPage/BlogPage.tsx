import TitleBlock from "../TitleBlock/TitleBlock";
import BlogPageItems from "../BlogPageItems/BlogPageItems";

const BlogPage = () => {
  return (
    <main>
      <div className="container">
        <TitleBlock titletext="Blog" />
        <BlogPageItems />
      </div>
    </main>
  );
};

export default BlogPage;
