// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowSummary from './components/ShowSummary';
import BookingForm from './components/BookingForm';

const App = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route exact path="/"
            element={<ShowList shows={shows} />} />

          <Route path="/summary/:id"
            element={<ShowSummary />} />

          <Route path="/booking/:id"
            element={<BookingForm />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
