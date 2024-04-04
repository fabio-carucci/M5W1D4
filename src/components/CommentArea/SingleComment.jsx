import React, { useContext, useState } from 'react';
import { Button, Row, Col, FormControl, ListGroup } from 'react-bootstrap';
import { FaEdit, FaTrash, FaRegUserCircle } from 'react-icons/fa';
import { ThemeContext } from '../../context/ThemeContextProvider';
import RatingStars from './RatingStars';

export default function SingleComment({ comment, onEdit, onDelete, isHomepage }) {
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
                <Row className="align-items-center">
                    <Col xs={9}>
                        {/* <div>
                            <div style={ {fontSize: isHomepage ? "10pt" : "12pt"} }>
                                <FaRegUserCircle className='me-1' />
                                <span className='text-success'>{comment.author}</span>
                            </div>
                            <span className='ms-3' style={ {fontSize: "12pt"} }>{comment.comment} - <RatingStars rating={comment.rate} /></span>
                        </div> */}
                        <Row className='align-items-center'>
                            <Col xs={8} className='text-start'>
                                <div style={ {fontSize: isHomepage ? "8pt" : "12pt"} }>
                                    <FaRegUserCircle className='me-1' />
                                    <span className='text-success'>{comment.author}</span>
                                </div>
                                <div className='ms-3 fst-italic' style={ {fontSize: "12pt"} }> 
                                    {comment.comment} 
                                </div>
                            </Col>
                            <Col xs={4}>
                                <div className='text-end'>
                                    <RatingStars rating={comment.rate} />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={3} className="text-end">
                        <Button 
                        onClick={() => setIsEditing(true)}
                        style={ {color: "rgb(192, 89, 34)", backgroundColor: "transparent", border: "0px", fontSize: isHomepage ? "9pt" : "12pt"} }>
                            <FaEdit />
                        </Button>
                        <Button 
                        variant="danger" 
                        onClick={handleDelete}
                        style={ {color: "rgb(200, 51, 51)", backgroundColor: "transparent", border: "0px", fontSize: isHomepage ? "9pt" : "12pt"} }>
                            <FaTrash />
                        </Button>
                    </Col>
                </Row>
            )}
        </ListGroup.Item>
    );
}
