import React from 'react'
import { useDeleteBookMutation, useGetAllBooksQuery, useLazyGetAllBooksQuery } from '../../services/booksApi'
import { Link, Outlet, useNavigate } from 'react-router-dom';

function Books() {
    var {isLoading,data}= useGetAllBooksQuery();
    var [deleteBookByID] = useDeleteBookMutation();
    var [prefetchBooks]=useLazyGetAllBooksQuery()
    var navigate = useNavigate()
    console.log(data)
    function deleteBook(ind){
        deleteBookByID(ind).then(()=>{
            prefetchBooks();
        })
    }
  return (
    <div>
        <h1>
            Books
        </h1>
        <Link to="addBook"><button > +Add Book</button></Link>

        {
            isLoading && <h4>Loading....</h4>
        }
        <div className='d-flex flex-wrap'>
            <div className='w-50'>
                <ul>
                    {
                        !isLoading && (
                            data.map((book)=>{
                                return(
                                    <li>
                                        <h3>{book.title}</h3>
                                        <h3>{book.author}</h3>
                                        <button onClick={()=>{deleteBook(book.id)}}>Delete</button>
                                        <button onClick={()=>{navigate("updateBook",{state:book})}}>Update Book</button>
                                    </li>
                                )
                            })
                        )
                    }
                </ul>
            </div>
            <div className='w-50'>
                <Outlet></Outlet>
            </div>
        </div>
    </div>
  )
}

export default Books