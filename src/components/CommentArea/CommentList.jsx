import React, { useContext } from 'react';
import SingleComment from './SingleComment';
import { ListGroup } from 'react-bootstrap';
import { ThemeContext } from '../../context/ThemeContextProvider';

export default function CommentList({ comments, onEdit, onDelete }) {

    const { value } = useContext(ThemeContext);

    return (
        <div className='pt-2'>
            {comments.length > 0 ? (
                <ListGroup>
                    {comments.map((comment, index) => (
                        <SingleComment key={index} comment={comment} onEdit={onEdit} onDelete={onDelete}/>
                    ))}
                </ListGroup>
                ) : (
                <p className={`text-center fs-4 text-warning`}>Non ci sono ancora recensioni</p>
                )
            }
        </div>
    );
}