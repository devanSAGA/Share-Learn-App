import React, { Component } from 'react';
import AddClassModal from './AddClassModal.js';
import Header from './Header.js';
import Classes from './Classes.js'

class App extends Component {
  constructor(props){
    super(props);
    this.handleAddNew = this.handleAddNew.bind(this);
    this.handleSubmittedNewClass = this.handleSubmittedNewClass.bind(this);
    this.handleOnCancel = this.handleOnCancel.bind(this);
    this.state = {
      classes: props.classes,
      modalIsOpen: false
    };
  }

  handleAddNew() {
    this.setState(() => ({
      modalIsOpen:true
    }));
  }
  handleSubmittedNewClass(newClass) {
    if(!newClass.name && !newClass.authorName){
      return 'Please fill the data';
    }
    else if (newClass.name && !newClass.authorName) {
      return 'Please enter Author-Name';
    }
    else if(newClass.authorName && !newClass.name ) {
      return 'Please enter Class-Name';
    }

    this.setState((prevState) => ({classes : prevState.classes.concat([newClass])}));
    this.setState(() => ({
      modalIsOpen:false
    }));
  }
  handleOnCancel = () => {
    this.setState(() => ({
      modalIsOpen:false
    }));
  }

  render() {
    return (
      <div className="App">
        <Header handleAddNew={this.handleAddNew}/>
        <div className="container-homepage">
          <Classes classes={this.state.classes} />
          <AddClassModal
            modalIsOpen={this.state.modalIsOpen}
            handleSubmittedNewClass={this.handleSubmittedNewClass}
            handleOnCancel={this.handleOnCancel}
          />
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  classes: [ {name: "Class One", authorName: "abc"} , {name: "Class Two", authorName: "xyz"} ]
};

export default App;
