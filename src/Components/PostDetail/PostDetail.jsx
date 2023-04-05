import React from 'react';
import './PostDetail.css'
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const postDetail = useLoaderData();
    const {userId , body} = postDetail;

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(-1);
    }

    return (
        <div className='detail-body'>
            <h3>All details are here.</h3>
            <div className='detail'>
                <p>User Id: {userId}</p>
                <p>{body}</p>
            </div>
            <button onClick={handleNavigate}>Go Back</button>
        </div>
    );
};

export default PostDetail;