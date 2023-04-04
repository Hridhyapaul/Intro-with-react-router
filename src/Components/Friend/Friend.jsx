import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    // console.log(friend)
    const {name, id, phone, email, username, website} = friend
    return (
        <div className='friends'>
            <p>{name}</p>
            <p><Link to={`/friend/${id}`}>Details</Link></p>
        </div>
    );
};

export default Friend;