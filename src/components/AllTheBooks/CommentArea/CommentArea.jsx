import React, { useState, useEffect, useContext } from "react";
import { Spinner } from "react-bootstrap";
import CommentList from './CommentList';
import AddComment from './AddComment';
import { ThemeContext } from "../../../context/ThemeContextProvider";

export default function CommentArea({ book }) {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [newComment, setNewComment] = useState({ comment: '', rate: '', elementId: book.asin });

    const { value } = useContext(ThemeContext);
    
    async function fetchComments() {
        if(!book.asin){
            return;
        }

        try {
            setLoading(true);
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${book.asin}/comments/`, {
                method: 'GET',
                headers: {
                    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0YmE1ZDljNDM3MDAwMTkzYzM2MzAiLCJpYXQiOjE3MTA2NzM2NTcsImV4cCI6MTcxMTg4MzI1N30.OhI7AQpUeYhuOn8A7o5bMFIwyI8txnZ374dX8P8tII0"
                } 
            });
            if (!response.ok) {
                throw new Error('Errore durante il recupero delle recensioni');
            }
            const data = await response.json();
            setLoading(false);
            setComments(data);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchComments();
    }, [book.asin]);

    async function handleAddComment() {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0YmE1ZDljNDM3MDAwMTkzYzM2MzAiLCJpYXQiOjE3MTA2NzM2NTcsImV4cCI6MTcxMTg4MzI1N30.OhI7AQpUeYhuOn8A7o5bMFIwyI8txnZ374dX8P8tII0"
                },
                body: JSON.stringify(newComment)
            });
            if (!response.ok) {
                throw new Error('Errore durante l\'invio della recensione');
            }
            // Aggiorna la lista dei commenti dopo l'aggiunta di una nuova recensione
            fetchComments();
        } catch (error) {
            setError(error.message);
        }
    };

    async function onEdit (editedComment) {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${editedComment._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0YmE1ZDljNDM3MDAwMTkzYzM2MzAiLCJpYXQiOjE3MTA2NzM2NTcsImV4cCI6MTcxMTg4MzI1N30.OhI7AQpUeYhuOn8A7o5bMFIwyI8txnZ374dX8P8tII0"
                },
                body: JSON.stringify(editedComment)
            });
            if (!response.ok) {
                throw new Error('Errore durante l\'aggiornamento della recensione');
            }
            // Aggiorna la lista dei commenti dopo la modifica di una nuova recensione
            fetchComments();
        } catch (error) {
            setError(error.message);
        }
    };

    async function onDelete (id) {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0YmE1ZDljNDM3MDAwMTkzYzM2MzAiLCJpYXQiOjE3MTA2NzM2NTcsImV4cCI6MTcxMTg4MzI1N30.OhI7AQpUeYhuOn8A7o5bMFIwyI8txnZ374dX8P8tII0"
                }
            });
            if (!response.ok) {
                throw new Error('Errore durante la cancellazione della recensione');
            }
            // Aggiorna la lista dei commenti dopo la cancellazione di una nuova recensione
            fetchComments();
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="p-2 sticky-top">
            <h2 className={`text-center text-${value === "dark" ? "light" : "dark"}`}>Comments</h2>
            {error && <p>Errore: {error}</p>}
            {loading ? ( // Mostra lo spinner se il caricamento è in corso
                <Spinner animation="border" role="status" variant={value === "dark" ? "light" : "dark"}>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                ) : (
                <CommentList 
                    comments={comments} 
                    onEdit={onEdit} 
                    onDelete={onDelete}/>
            )}
            <AddComment
                newComment={newComment}
                book={book}
                setNewComment={setNewComment}
                handleAddComment={handleAddComment}
            />
        </div>
    );
}
