import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body} = post;

    // Have to use useNavigate hook to show dynamic data by click on button
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className='post'>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Show details</Link>
            <button onClick={handleNavigation}>Show details</button>
        </div>
    );
};

export default Post;