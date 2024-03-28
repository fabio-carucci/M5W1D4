import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import { Spinner } from "react-bootstrap";

export default function BookDetails( { selectedCategory } ) {

    const { asin } = useParams();
    const book = selectedCategory.find((book) => book.asin === asin);


    return (
        <div>{book.asin}</div>
    )
}