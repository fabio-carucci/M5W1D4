import React, { useContext, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ThemeContext } from '../../context/ThemeContextProvider';

export default function AddComment({ newComment, setNewComment, handleAddComment, book, isHomepage }) {

    const {value} = useContext(ThemeContext);

    const [showForm, setShowForm] = useState(false);

    
    useEffect(() => {
        isHomepage ? setShowForm(false) : setShowForm(true);
    }, [])

    useEffect(() => {
        console.log(showForm);
    }, [showForm])

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

    function handleSubmit() {
        handleAddComment();
        if(isHomepage){
            setShowForm(!showForm);
        }
    }

    return (
        <div className='pt-3'>
            {isHomepage ? (
                <div className='d-flex justify-content-center'>
                    <Button className='fs-5' variant={value} onClick={() => setShowForm(!showForm)}>{!showForm ? "Clicca per iniziare a scrivere una recensione!" : `Compila il form sottostante e premi "INVIO"`}</Button>
                </div>
                ) : (
                <h2 className={`py-2 text-center text-${value === "dark" ? "light" : "dark"}`}>Aggiungi una recensione</h2>
            )}
            {showForm && <Form>
                <Form.Group controlId="commentText">
                    <Form.Label className={`text-${value === "dark" ? "light" : "dark"}`}>Recensione</Form.Label>
                    <Form.Control
                        className={`bg-${value === "dark" ? "dark-subtle" : "light-subtle"}`}
                        placeholder='Incomincia a digitare...'
                        as="textarea"
                        rows={3}
                        name="comment"
                        value={newComment.comment}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="commentRating">
                    <Form.Label className={`pt-2 text-${value === "dark" ? "light" : "dark"}`}>Voto</Form.Label>
                    <Form.Control
                        className={`bg-${value === "dark" ? "dark-subtle" : "light-subtle"}`}
                        type="number"
                        min={1}
                        max={5}
                        name="rate"
                        value={newComment.rate}
                        onChange={handleChange}
                    />
                </Form.Group>
                <div className='text-center mt-4'>
                    <Button variant="success" onClick={handleSubmit}>
                        INVIO
                    </Button>
                </div>
            </Form>}
        </div>
    );
}