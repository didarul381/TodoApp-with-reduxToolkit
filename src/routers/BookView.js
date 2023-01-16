import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { json, Link } from 'react-router-dom';
import { deletBook } from '../features/bookSlice';
import table from "./BookView.css"

const BookView = () => {
    // const booke =useSelector((state)=>state.bookReducer.books);
    const bookg=localStorage.getItem("books");
    const booke =JSON.parse(bookg);
   
    console.log(booke)
    const dispatch=useDispatch()
   
    const handleRemove =(id)=>{
        dispatch(deletBook(id));
    }
    return (
        <div>
            <h2>List of books.........</h2>
            <table className='table'>
                <thead>
                    <tr>
                      
                       <th>Title</th>
                       <th>Author</th>
                       <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {booke.books.map((book)=>{
                   const{id,title,author}=book;
                   return(
                    <tr>
                   
                    
                     <td>{title}</td>
                     <td>{author}</td>
                     <td>
                       <Link  to="/edit-book" state={{id,title,author}}>
                        <button>Edit</button></Link>
                        <button onClick={()=>handleRemove(book.id)}>Delete</button>
                     </td>
                   </tr>
                   )
                   
                 } )}
                </tbody>
            </table>
        </div>
    );
};

export default BookView;