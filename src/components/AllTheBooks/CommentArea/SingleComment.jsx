import React, { useState } from 'react';
import { Button, Row, Col, FormControl } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importa icone da react-icons

export default function SingleComment({ comment, onEdit, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedComment, setEditedComment] = useState(comment);

    const handleSave = () => {
        setIsEditing(false);
        onEdit(editedComment);
    };

    function handleChange(e) {
        const { name, value } = e.target;
        setEditedComment({ ...editedComment, [name]: value });
    };

    return (
        <li className="my-3">
            {isEditing ? (
                <Row>
                    <Col xs={12}>
                        <FormControl
                            type="text"
                            name="comment"
                            value={editedComment.comment}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col xs={6}>
                        <FormControl
                            type="number"
                            name="rate"
                            value={editedComment.rate}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col xs={6}>
                        <Button variant="success" onClick={handleSave}>Save</Button>
                    </Col>
                </Row>
            ) : (
                <Row>
                    <Col xs={12}>
                        <span>{comment.comment} - Rating: {comment.rate}</span>
                    </Col>
                    <Col xs="auto">
                        <Button variant="warning" onClick={() => setIsEditing(true)}><FaEdit /></Button>
                    </Col>
                    <Col xs="auto">
                        <Button variant="danger" onClick={() => onDelete(comment._id)}><FaTrash /></Button>
                    </Col>
                </Row>
            )}
        </li>
    );
}
