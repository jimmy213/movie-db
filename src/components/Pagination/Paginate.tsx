import { FC, useMemo } from "react";
import ReactPaginate from "react-paginate";
import { useLocation, useNavigate } from "react-router-dom";

interface PaginationProps {
  total: number;
  per: number;
  currentPage: number;
  onPageChange?: Function;
  changeLocation?: boolean;
}

export const Pagination: FC<PaginationProps> = ({
  total = 0,
  per,
  currentPage,
  onPageChange,
  changeLocation = true
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pageCount = useMemo(() => Math.ceil(total / per), [total, per]);

  const onChange = (selected: any) => {
    changeLocation && navigate(urlBuilder(location)(selected));

    onPageChange && onPageChange(selected);
  };

  if (total === 0) return null;

  return (
    <>
      <ReactPaginate
        previousLabel="previous"
        nextLabel="next"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination justify-content-center mt-5"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
        hrefAllControls
        disableInitialCallback
        pageCount={pageCount}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        hrefBuilder={urlBuilder(location)}
        forcePage={currentPage - 1}
        onPageChange={onChange}
      />
    </>
  );
};

function urlBuilder(location: any) {
  const { pathname } = location;
  const search = new URLSearchParams(location.search);

  return (page: any) => {
    search.set("page", page + 1);

    // console.log(page);

    return `${pathname}?${search}`;
  };
}
