import React from 'react';

const HomePageHeader = (props) => {
  return (
    <div className="header">
      <p className="header__title">Courses Page</p>
      <button
        className="button"
        onClick = {props.handleAddNewCourse}
      >
        Add New
      </button>
    </div>
  );
};

export default HomePageHeader;
