import React, { useContext, useState } from 'react';
import { Button, Row, Col, FormControl, ListGroup } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importa icone da react-icons
import { ThemeContext } from '../../context/ThemeContextProvider';

export default function SingleComment({ comment, onEdit, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedComment, setEditedComment] = useState(comment);

    const {value} = useContext(ThemeContext);

    const handleSave = () => {
        const confirmed = window.confirm("Sei sicuro di voler modificare?");
        if (confirmed) {
            setIsEditing(false);
            onEdit(editedComment);
        }
    };

    function handleChange(e) {
        const { name, value } = e.target;
        setEditedComment({ ...editedComment, [name]: value });
    };

    function handleDelete() {
        const confirmed = window.confirm("Sei sicuro di voler cancellare?");
        if (confirmed) {
            onDelete(comment._id);
        }
      }

    return (
        <ListGroup.Item variant={value !== "dark" ? "light" : "dark"}>
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
                <Row className={`text-center`}>
                    <Col xs={8}>
                        <span>{comment.comment} - Rating: {comment.rate}</span>
                    </Col>
                    <Col xs={2}>
                        <Button variant="warning" onClick={() => setIsEditing(true)}><FaEdit /></Button>
                    </Col>
                    <Col xs={2}>
                        <Button variant="danger" onClick={handleDelete}><FaTrash /></Button>
                    </Col>
                </Row>
            )}
        </ListGroup.Item>
    );
}
