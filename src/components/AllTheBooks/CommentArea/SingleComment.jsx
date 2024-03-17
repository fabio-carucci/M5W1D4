import React, { useState } from 'react';

export default function SingleComment({ comment, onEdit, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedComment, setEditedComment] = useState(comment);

    const handleSave = () => {
        setIsEditing(false);
        // Invia una richiesta per salvare il commento modificato
        onEdit(editedComment);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedComment({ ...editedComment, [name]: value });
    };

    return (
        <li>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        name="comment"
                        value={editedComment.comment}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="rate"
                        value={editedComment.rate}
                        onChange={handleChange}
                    />
                    <button onClick={handleSave}>Save</button>
                </>
            ) : (
                <>
                    <span>{comment.comment} - Rating: {comment.rate}</span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => onDelete(comment._id)}>Delete</button>
                </>
            )}
        </li>
    );
}
