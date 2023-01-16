import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../features/bookSlice';

const AddBook = () => {
    const[title,setTitle]=useState("");
    const[author,setAuhor]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const bookNumber=useSelector((state)=>state.bookReducer.books.length);
    const handleSubmit = (e) =>{
        e.preventDefault();
          const book={id:bookNumber+1,title,author};
          dispatch(addBook(book));
          navigate('/show-book', {replace:true});
    }
    return (
        <div>
            <h2>Add Book ...</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Title</label>
                <input type='text' id='title' name='title' required value={title} onChange={
                    (e)=>setTitle(e.target.value) 
                }></input><br></br>
                 <label htmlFor='author'>Author</label>
                <input type='text' id='author' name='author' required value={author} onChange={
                    (e)=>setAuhor(e.target.value) 
                }></input>
                <br>
                </br>
                <button type='submit'>Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;