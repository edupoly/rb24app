import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useLazyGetAllBooksQuery, useUpdateBookMutation } from '../../services/booksApi'

function UpdateBook() {
    var [updateBookDetails] = useUpdateBookMutation();
    var [prefetchBooks] = useLazyGetAllBooksQuery();
    var [selectedBook,setSelectedBook]=useState({
        title:'',
        author:'',
        id:''
    })
    var {state} = useLocation()
    useEffect(()=>{
        setSelectedBook({...state})
    },[state])
    function updateBook(){
        updateBookDetails(selectedBook).then(()=>{
            prefetchBooks();
        })
    }
  return (
    <div>
        <h1>UpdateBook</h1>
        {
            state && (
                <div>
                    <input type="text" placeholder="enter title" value={selectedBook.title} onChange={(event)=>{setSelectedBook({...selectedBook,title:event.target.value})}}/>
                    <br />
                    <input type="text" placeholder="enter author" value={selectedBook.author} onChange={(event)=>{setSelectedBook({...selectedBook,author:event.target.value})}}/>
                    <br />
                    <button onClick={()=>{updateBook()}}>Add Book</button>
                </div>
            )
        }
    </div>
  )
}

export default UpdateBook