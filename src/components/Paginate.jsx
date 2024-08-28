import React, { } from 'react'
import ReactPaginate from 'react-paginate';

const Paginate = ({ handlePageClick, pageCount }) => {

    return (
        <div>
            <ReactPaginate
                className='paginate'
                breakLabel="..."
                nextLabel=" >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={6}
                pageCount={pageCount}
                previousLabel="< "
                renderOnZeroPageCount={null}
            />
        </div>
    )
}

export default Paginate
