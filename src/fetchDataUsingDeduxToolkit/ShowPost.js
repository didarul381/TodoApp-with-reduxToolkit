import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postsSlice';

const ShowPost = () => {
    const {isLoading,posts,error}=useSelector((state)=>state.posts)
    const dispatch=useDispatch()
    useEffect(()=>{

           dispatch(fetchPosts())
    },[])
    return (
        <div>
            {isLoading && <p>Loading</p>}
            {error && <h3>{error}</h3>}
             {posts&& posts.map(post=><>
             
                <h3>{post.title}</h3>
                <p>{post.body}</p>
             </>)}
        </div>
    );
};

export default ShowPost;