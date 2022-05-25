import React from 'react';

function Pagination({postsPerPage, totalPosts, paginate}) {
  const pageNumber = [];

  for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
    pageNumber.push(i);
  }
  return (
    <>
    <nav aria-label="Page navigation example">
      <ul class="pagination mt-5">
      {pageNumber.map(number => {
        return <li className='page-item' key={number}>
          <button onClick={() => paginate(number)} className='page-link'>
            {number}
          </button>
        </li>
      })}
      </ul>
    </nav> 
  </>
  );
}

export default Pagination;