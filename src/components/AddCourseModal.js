import React from 'react';
import Modal from 'react-modal';

export default class AddCourseModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmitNewCourse = this.handleSubmitNewCourse.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleSubmitNewCourse(e){
    e.preventDefault();
    const newCourse = {
      name: e.target.elements.title.value,
      authorName: e.target.elements.author.value
    }
    const error = this.props.handleOnSubmit(newCourse);
    this.setState(() => ({ error }));
  }

  render() {
    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        contentLabel="Add new course modal"
        onRequestClose={this.props.handleOnCancel}
        closeTimeoutMS={200}
        className="modal"
      >
        <p className="modal__title">Add New Course</p>
        {this.state.error && <p className="modal__error">{this.state.error}</p>}
        <form onSubmit={this.handleSubmitNewCourse}>
          <label for="title">Title</label><br />
          <input
            id="title"
            type="text"
            name="title"
            autoFocus
            placeholder="Please, select your desired title…"
          /> <br />
          <label for="author">Author-Name</label><br />

          <input
            id="authorName"
            type="text"
            name="author"
            placeholder="Please enter Author's name"
          /> <br />

          <div className="modal-button">
            <button className="modal-button__cancel" onClick={this.props.handleOnCancel}>Cancel</button>
            <button className="modal-button__create">Create</button>
          </div>
        </form>
      </Modal>
    );
  }
}
