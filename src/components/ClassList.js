import React from 'react';
import { connect } from 'react-redux';
import Class from './Class.js'

const ClassList = (props) => (
  <div className="cards">
    {props.course.classes.map((classIndividual, index) => {
      return (
        <div>
          <Class key={index} {...classIndividual} />
        </div>
      );
    })}
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    course: state.courses.find((course) => course.id == props.courseID)
  };
};

export default connect(mapStateToProps)(ClassList);
