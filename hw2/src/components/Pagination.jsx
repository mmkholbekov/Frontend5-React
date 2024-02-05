//        HOME WORK №3
const Pagination = ({ totalPages, onPageChange }) => {
  return (
    <div>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button key={page} onClick={() => onPageChange(page)}>
          {page}
        </button>
      ))}
    </div>
  )
}

export default Pagination;
