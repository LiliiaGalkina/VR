import TitleBlock from "../TitleBlock/TitleBlock";
import BlogPageItems from "../BlogPageItems/BlogPageItems";
import Subscribe from "../Subscribe/Subscribe";

const BlogPage = () => {
  return (
    <main>
      <div className="container">
        <TitleBlock titletext="Blog" />
        <BlogPageItems />
        <Subscribe/>
      </div>
    </main>
  );
};

export default BlogPage;
