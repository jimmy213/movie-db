import { useMemo } from "react";
import ReactPaginate from "react-paginate";
import { useLocation, useNavigate } from "react-router-dom";

interface PaginationProps {
  total: number;
  pageSize: number;
  currentPage: number;
  onPageChange?: Function;
  changeLocation?: boolean;
}

export const Pagination = (props: PaginationProps) => {
  const { total = 0, pageSize, currentPage, onPageChange, changeLocation = true } = props;

  const navigate = useNavigate();
  const location = useLocation();
  const pageCount = useMemo(() => Math.ceil(total / pageSize), [total, pageSize]);

  const onChange = ({ selected }: any) => {
    changeLocation && navigate(urlBuilder(location)(selected));

    onPageChange && onPageChange(selected);
  };

  if (total === 0) return null;

  return (
    <>
      <ReactPaginate
        previousLabel="&#10140;"
        nextLabel="&#10140;"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
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

    return `${pathname}?${search}`;
  };
}
