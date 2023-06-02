// ShowSummary.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShowSummary = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then((response) => response.json())
            .then((data) => setShow(data))
            .catch((error) => console.log(error));
    }, [id]);

    if (!show) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{show.name}</h2>
            <img src={show.image?.medium} alt={show.name} className="mb-3" />
            <p>{show.summary}</p>
        </div>
    );
};

export default ShowSummary;
