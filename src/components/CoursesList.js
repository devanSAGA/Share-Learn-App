import React from 'react';
import { connect } from 'react-redux';
import Course from './Course.js'
import { NavLink } from 'react-router-dom';

const CoursesList = (props) => (
  <div className="cards">
    {props.courses.map((course  ) => {
      return (
        <div>
          <NavLink to={`/course/${course.id}`} className="is-active">
              <Course key={course.name} {...course} />
          </NavLink>
        </div>
        );
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    courses: state.courses
  };
};

export default connect(mapStateToProps)(CoursesList);
