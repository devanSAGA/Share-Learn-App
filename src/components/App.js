import React from 'react';
import HomePageHeader from './HomePageHeader.js';
import CoursesList from './CoursesList.js';
import AddCourseModal from './AddCourseModal.js';
import { connect } from 'react-redux';
import { addCourse } from '../actions/addCourse.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.handleAddNewCourse = this.handleAddNewCourse.bind(this);
    this.handleOnCancel = this.handleOnCancel.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.state = {
      modalIsOpen: false
    };
  }

  handleAddNewCourse() {
    this.setState(() => ({
      modalIsOpen: true
    }));
  }

  handleOnCancel() {
    this.setState(() => ({
      modalIsOpen: false
    }));
  }

  handleOnSubmit(newCourse) {
    if(!newCourse.name && !newCourse.authorName){
      return 'Please fill the information';
    }
    else if (!newCourse.authorName) {
      return 'Please enter Author-Name';
    }
    else if(!newCourse.name ) {
      return 'Please enter Course Title';
    }

    this.props.dispatch(addCourse(newCourse));
    this.handleOnCancel();
  }
  render() {
    return (
      <div>
        <HomePageHeader handleAddNewCourse = {this.handleAddNewCourse}/>
        <CoursesList />
        <AddCourseModal
          modalIsOpen={this.state.modalIsOpen}
          handleOnCancel={this.handleOnCancel}
          handleOnSubmit={this.handleOnSubmit}
        />
      </div>
    );
  }
}

export default connect()(App);
