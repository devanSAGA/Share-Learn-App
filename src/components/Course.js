import React from 'react';

const Course = ({ name, authorName }) => (
  <div className="card">
    <div className="card__info">
      <span className="card__title">{name}</span> <br />
      <span className="card__author">Added by: {authorName}</span>
    </div>
  </div>
);

export default Course;
