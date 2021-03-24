import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Pagination from 'react-bootstrap/Pagination';
import Nav from 'react-bootstrap/Nav';

const Paginater = ({issuesPerPage, totalIssues, paginate}) => {
    const pageNumbers = [];

    for(let i =1; i <= Math.ceil(totalIssues/issuesPerPage); i++)
    {
        pageNumbers.push(i);
    }

    return (
        <div className = "container">
             <div class = "child">
               <Nav>
                   <Pagination>
                       {pageNumbers.map(number => (
                         <Pagination.Item key = {number} className = "page-item">
                                <a onClick={()=> paginate(number)} href = "!#" className = "page=link">

                                  {number}
                             </a>
                           </Pagination.Item>
                       ))}
                   </Pagination>
                </Nav>
             </div>
        </div>
    )
}

export default Paginater