import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from '../features/bookSlice';

const EditBook = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const [id,setId]=useState(location.state.id);
    const[title,setTitle]=useState(location.state.title);
    const[author,setAuhtor]=useState(location.state.author);
    const dispatch=useDispatch()
    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(updateBook({id,title,author}));
        navigate('/', {replace:true});
    }
    return (
       
        <div>
            <h3>Edit Book....</h3>
            <form onSubmit={handleSubmit}>
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
                <button type='submit'>Update Book</button>
            </form>
        </div>
    );
};

export default EditBook;