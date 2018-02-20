import React from 'react';

const ClassInfoHeader = (props) => {
  return (
    <div className="header">
      <p className="header__title">Courses Page</p>
      <button
        className="button"
        onClick={props.handleAddNewClass}
      >
        Add New Class
      </button>
    </div>
  );
};

export default ClassInfoHeader;
