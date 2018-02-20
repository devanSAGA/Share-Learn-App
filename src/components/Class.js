import React from 'react';

const Course = ({ name, description }) => (
  <div className="card">
    <div className="card__info">
      <span>{name}</span> <br />
      <span>{description}</span>
    </div>
  </div>
);

export default Course;
