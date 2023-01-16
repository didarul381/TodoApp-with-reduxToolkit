import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../features/bookSlice';
const AddBook = () => {
    const[title,setTitle]=useState("");
    const[author,setAuhtor]=useState("");
    const bookNumber=useSelector((state)=>state.bookReducer.books.length);
     const dispatch=useDispatch();
    const navigate=useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault();
        const book={id:bookNumber+1,title,author};
         const storedbooke=dispatch(addBook(book));
         navigate("/",{replace:true});
        //  console.log(storedbooke);
           const addBooks={storedbooke};
        const storeBook=localStorage.getItem('books');
        if(storeBook){
            addBooks= JSON.parse(storeBook);
        }
        const quantity=addBooks[bookNumber];
        if( quantity){
            const newQuantity = quantity + 1;
            addBooks[bookNumber]=newQuantity
        }else{
            addBooks[bookNumber]=1;
        }
        localStorage.setItem('books',JSON.stringify(addBooks))
        // navigate("/show-book",{replace:true});

    }
    return (
        <div>
            <h2>Add Book...</h2>
            <form onSubmit={handleSubmit}  >
                <label htmlFor='title'>Title</label>
                <input type='text' id='title' name='title' required value={title} onChange={
                    (e)=>setTitle(e.target.value) 
                }></input><br></br>
                 <label htmlFor='author'>Author</label>
                <input type='text' id='author' name='author' required value={author} onChange={
                    (e)=>setAuhtor(e.target.value) 
                }></input>
                <br>
                </br>
                <button type='submit'>Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;