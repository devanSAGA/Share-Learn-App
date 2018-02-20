import React from 'react';
import ClassList from './ClassList.js';
import ClassInfoHeader from './ClassInfoHeader.js';
import AddClassModal from './AddClassModal';
import { connect } from 'react-redux';
import { addClass } from '../actions/addClass.js';
import { withRouter } from 'react-router-dom';

class ClassesMainPage extends React.Component {
  constructor(props){
    super(props);
    this.handleAddNewClass = this.handleAddNewClass.bind(this);
    this.handleOnCancel = this.handleOnCancel.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);

    this.state = {
      AddClassModalOpen: false
    };
  }
  handleAddNewClass() {
    this.setState(() => ({
      AddClassModalOpen: true
    }));
  }

  handleOnCancel() {
    this.setState(() => ({
      AddClassModalOpen: false
    }));
  }

  handleOnSubmit(newClass) {
    if(!newClass.name && !newClass.description){
      return 'Please fill the information';
    }
    else if(!newClass.name){
      return 'Please fill the title for the class';
    }

    this.props.dispatch(addClass(this.props.match.params.id, newClass));
    this.handleOnCancel();
  }

  render() {
    return (
      <div>
        <ClassInfoHeader handleAddNewClass={this.handleAddNewClass} />
        <ClassList courseID = {this.props.match.params.id} />
        <AddClassModal
          AddClassModalOpen={this.state.AddClassModalOpen}
          handleOnSubmit={this.handleOnSubmit}
          handleOnCancel={this.handleOnCancel}
        />
      </div>
    );
  }
}
export default connect()(ClassesMainPage);
