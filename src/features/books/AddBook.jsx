import React,{useState} from 'react'
import { useAddBookMutation, useLazyGetAllBooksQuery } from '../../services/booksApi'

function AddBook() {
    var [newbook,setNewBook]=useState({title:'',author:''})
    var [addNewBook] = useAddBookMutation()
    var [refetchBooks] = useLazyGetAllBooksQuery();

    function addBook(){
      addNewBook(newbook).then(()=>{
        refetchBooks();
      })
    }
  return (
    <div>
        <h1>AddBooks</h1>
        <div>
            <input type="text" placeholder="enter title" onChange={(event)=>{setNewBook({...newbook,title:event.target.value})}}/>
            <br />
            <input type="text" placeholder="enter author" onChange={(event)=>{setNewBook({...newbook,author:event.target.value})}}/>
            <br />
            <button onClick={()=>{addBook()}}>Add Book</button>
        </div>
    </div>
  )
}

export default AddBook