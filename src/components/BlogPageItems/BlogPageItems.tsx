import style from "./blogpageitems.module.scss";
import { blogItems } from "../../data";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import type { IBlogItems } from "../../types";
import BlogPageItem from "./BlogPageItem";
import useResponsiveEvent from "../../useResponsiveEvent";

const BlogPageItems = () => {
  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState<IBlogItems[]>([]);

  const isLaptop = useResponsiveEvent(1119);
  let count = isLaptop ? 10 : 9;

  useEffect(() => {
    return setFilterData(
      blogItems.filter((_, index) => {
        return index >= page * count && index < (page + 1) * count;
      }),
    );
  }, [page, count]);

  return (
    <>
      <div className={style.items}>
        {filterData &&
          filterData.map((item) => <BlogPageItem key={item.id} {...item} />)}
      </div>
      <ReactPaginate
        containerClassName={style.pagination}
        pageClassName={style.pageitem}
        activeClassName={style.active}
        onPageChange={(event) => setPage(event.selected)}
        pageCount={Math.ceil(blogItems.length / count)}
        previousLabel={""}
        nextLabel={""}
      />
    </>
  );
};

export default BlogPageItems;
