import React from 'react';
import Class from './Class.js'

const Classes = (props) => {
  return(
    <div className="cards">
      {props.classes.map((classObj) => (
          <Class
            key={classObj.name}
            authorName = {classObj.authorName}
            nameOfClass = {classObj.name}
          />
        ))}
    </div>
  );
};

export default Classes;
