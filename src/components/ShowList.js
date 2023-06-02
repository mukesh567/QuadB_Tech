// ShowList.js
import React from 'react';
import { Link } from 'react-router-dom';

const ShowList = ({ shows }) => {
    return (
        <div>
            <h2>TV Shows</h2>
            <ul className="list-group">
                {shows.map((show) => (
                    <li
                        key={show.show.id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        <Link to={`/summary/${show.show.id}`}>{show.show.name}</Link>
                        <br />
                        <Link to={`/booking/${show.show.id}`} className="btn btn-primary">
                            Book Ticket
                        </Link>
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShowList;
