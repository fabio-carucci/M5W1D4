import React from 'react';
import SingleComment from './SingleComment';
import { ListGroup } from 'react-bootstrap';

export default function CommentList({ comments, onEdit, onDelete }) {
    return (
        <div className='pt-2'>
            <ListGroup>
                {comments.map((comment, index) => (
                    <SingleComment key={index} comment={comment} onEdit={onEdit} onDelete={onDelete}/>
                ))}
            </ListGroup>
        </div>
    );
}