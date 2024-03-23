import React, { useContext, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ThemeContext } from '../../../context/ThemeContextProvider';

export default function AddComment({ newComment, setNewComment, handleAddComment, book }) {

    const {value} = useContext(ThemeContext);

    useEffect(() => {
        setNewComment(prevComment => ({
            ...prevComment,
            elementId: book.asin
        }));
    }, [book, setNewComment]);
    

    function handleChange(e) {
        const { name, value } = e.target;
        setNewComment({ ...newComment, [name]: value });
    };

    return (
        <div className='pt-3'>
            <h2 className={`text-center text-${value === "dark" ? "light" : "dark"}`}>Add Comments</h2>
            <Form>
                <Form.Group controlId="commentText">
                    <Form.Label className={`text-${value === "dark" ? "light" : "dark"}`}>Comment</Form.Label>
                    <Form.Control
                        className={`bg-${value === "dark" ? "dark-subtle" : "light-subtle"}`}
                        as="textarea"
                        rows={3}
                        name="comment"
                        value={newComment.comment}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="commentRating">
                    <Form.Label className={`pt-2 text-${value === "dark" ? "light" : "dark"}`}>Rating</Form.Label>
                    <Form.Control
                        className={`bg-${value === "dark" ? "dark-subtle" : "light-subtle"}`}
                        name="rate"
                        value={newComment.rate}
                        onChange={handleChange}
                    />
                </Form.Group>
                <div className='text-center mt-4'>
                    <Button variant="success" onClick={handleAddComment}>
                        Add Comment
                    </Button>
                </div>
            </Form>
        </div>
    );
}