import React from 'react';
import SingleComment from './SingleComment';

export default function CommentList({ comments, onEdit, onDelete }) {
    return (
        <div>
            <h5 className='text-center'>Comments</h5>
            <ul>
                {comments.map((comment, index) => (
                    <SingleComment key={index} comment={comment} onEdit={onEdit} onDelete={onDelete}/>
                ))}
            </ul>
        </div>
    );
}