import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Books() {
    var [books,setBooks]=useState([])
    var [editFlag,setEditFlag]=useState(false)
    var [newbook,setNewBook]=useState({title:'',author:''})
    var [selectedBook,setSelectedBook] = useState(null)
    useEffect(function(){
        getBooks();
    },[])
    function addBook(){
        axios.post("http://localhost:4000/books",newbook)
        .then((res)=>{
            getBooks();
        })
    }
    function getBooks(){
        axios.get("http://localhost:4000/books").then((res)=>{
            setBooks([...res.data])
        }).catch(()=>{})
    }
    function deleteBook(id){
        axios.delete("http://localhost:4000/books/"+id).then(()=>{
            alert("deleted....")
            getBooks();
        })
    }
    function editBook(book){
        setSelectedBook({...book})
        setEditFlag(true)
    }
    function updateBook(){
        axios.put("http://localhost:4000/books/"+selectedBook.id,selectedBook).then(()=>{
            alert("Updated....")
            getBooks();
        })
    }
  return (
    <div className='mybox'>
        <h1>Books</h1>
        {
            !editFlag && (
                <div>
                    <input type="text" placeholder="enter title" onChange={(event)=>{setNewBook({...newbook,title:event.target.value})}}/>
                    <br />
                    <input type="text" placeholder="enter author" onChange={(event)=>{setNewBook({...newbook,author:event.target.value})}}/>
                    <br />
                    <button onClick={()=>{addBook()}}>Add Book</button>
                </div>
            )
        }
        {
            editFlag && (
                <div>
                    <input type="text" placeholder="enter title" value={selectedBook.title} onChange={(event)=>{setSelectedBook({...selectedBook,title:event.target.value})}}/>
                    <br />
                    <input type="text" placeholder="enter author" value={selectedBook.author} onChange={(event)=>{setSelectedBook({...selectedBook,author:event.target.value})}}/>
                    <br />
                    <button onClick={()=>{updateBook()}}>Update Book</button>
                </div>
            )
        }
        
        <ul id="books">
            {
                books.length>0 && books.map((book)=>{
                    return  <li>
                                <h4>{book.id}. {book.title}</h4>
                                <h5>{book.author.toUpperCase()}</h5>
                                <button onClick={()=>{deleteBook(book.id)}}>Delete</button>
                                <button onClick={()=>{editBook(book)}}>Edit</button>
                            </li>
                })
            }
        </ul>
    </div>
  )
}

export default Books