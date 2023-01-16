import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletBook } from '../features/bookSlice';

const Home = () => {
    const books=useSelector((state)=>state.bookReducer.books);
    const dispatch=useDispatch()
    const handleRemove = (id)=>{
        dispatch(deletBook(id));

    }
    return (
        <div>
            <h3>This is home page..</h3>
            <table className='table'>
                <thead>
                    <tr>
                      
                       <th>Title</th>
                       <th>Author</th>
                       <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {books.map((book)=>{
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

export default Home;