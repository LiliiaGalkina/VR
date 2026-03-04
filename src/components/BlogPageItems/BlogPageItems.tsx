import style from "./blogpageitems.module.scss";
import { blogItems } from "../../data";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import type { IBlogItems } from "../../types";
import BlogPageItem from "./BlogPageItem";

const BlogPageItems = () => {
  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState<IBlogItems[]>([]);
  const n = 9;

  useEffect(() => {
    return setFilterData(
      blogItems.filter((item, index) => {
        return index >= page * n && index < (page + 1) * n;
      }),
    );
  }, [page]);

  return (
    <>
      <div className={style.items}>
        {filterData &&
          filterData.map((item) => (
            <BlogPageItem
              key={item.id} {...item}
            />
          ))}
      </div>
      <ReactPaginate
        containerClassName={style.pagination}
        pageClassName={style.pageitem}
        activeClassName={style.active}
        onPageChange={(event) => setPage(event.selected)}
        pageCount={Math.ceil(blogItems.length / n)}
        previousLabel={""}
        nextLabel={""}
      />
      
    </>
  );
};

export default BlogPageItems;
