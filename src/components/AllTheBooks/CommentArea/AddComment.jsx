import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function AddComment({ newComment, setNewComment, handleAddComment }) {
    function handleChange(e) {
        const { name, value } = e.target;
        setNewComment({ ...newComment, [name]: value });
    };

    return (
        <div>
            <h5 className='text-center'>Add Comment</h5>
            <Form>
                <Form.Group controlId="commentText">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="comment"
                        value={newComment.comment}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="commentRating">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control
                        name="rate"
                        value={newComment.rate}
                        onChange={handleChange}
                    />
                </Form.Group>
                <div className='text-center mt-2'>
                    <Button variant="primary" onClick={handleAddComment}>
                        Add Comment
                    </Button>
                </div>
            </Form>
        </div>
    );
}