import React, { useContext, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ThemeContext } from '../../context/ThemeContextProvider';
import Rating from 'react-rating-stars-component';
import { FaRegStar, FaStar } from 'react-icons/fa';

export default function AddComment({ newComment, setNewComment, handleAddComment, book, isHomepage }) {

    const {value} = useContext(ThemeContext);

    const [showForm, setShowForm] = useState(false);
    
    useEffect(() => {
        isHomepage ? setShowForm(false) : setShowForm(true);
    }, [])

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
                    <Button className='fs-5' variant={value} onClick={() => setShowForm(!showForm)}>{!showForm ? "Clicca per iniziare a scrivere una recensione!" : `Compila il form e premi "INVIO"`}</Button>
                </div>
                ) : (
                <h2 className={`pt-2 m-0 text-center text-${value === "dark" ? "light" : "dark"}`}>Aggiungi una recensione</h2>
            )}
            {showForm && <Form>
                <Form.Group controlId="commentRating" className='d-flex justify-content-center mb-2'>
                    <Rating
                        count={5} // Numero di stelle
                        size={30} // Dimensione delle stelle
                        value={newComment.rate} // Valore selezionato
                        onChange={(newRating) => setNewComment({ ...newComment, rate: newRating })} // Funzione chiamata al cambio di voto
                        emptyIcon={<FaRegStar />} // Icona per stelle non selezionate
                        filledIcon={<FaStar />} // Icona per stelle selezionate
                        key={newComment.key} // Chiave per forzare l'aggiornamento del componente Rating
                    /> 
               </Form.Group>
               <Form.Group controlId="commentText" className='d-flex flex-column align-items-center'>
                    <Form.Label className={`text-${value === "dark" ? "light" : "dark"}`}>Recensione</Form.Label>
                    <Form.Control
                        className={`bg-${value === "dark" ? "dark-subtle" : "light-subtle"}`}
                        placeholder='Incomincia a digitare...'
                        as="textarea"
                        rows={2}
                        name="comment"
                        value={newComment.comment}
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