import React from 'react';

const Class = (props) => {
  return(
    <div className="card">
      <div className="card__info">
        <span className="card__title">{props.nameOfClass}</span> <br />
        <span className="card__author">Added by: {props.authorName}</span>
      </div>
    </div>
  );
};

export default Class;
