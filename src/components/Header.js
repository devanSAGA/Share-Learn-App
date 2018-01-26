import React from 'react';

const Header = (props) => {
  return (
    <div className="header">
      <p className="header__title">Courses Page</p>
      <button className="button" onClick={props.handleAddNew}>
        Add New Class
      </button>
    </div>
  );
};

export default Header;
