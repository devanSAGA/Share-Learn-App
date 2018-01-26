import React, { Component } from 'react';
import Modal from 'react-modal';

export default class AddClassModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmittedNewClass = this.handleSubmittedNewClass.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleSubmittedNewClass(e) {
    e.preventDefault();
    const classTitle = e.target.elements.title.value;
    const authorName = e.target.elements.author.value;
    const error = this.props.handleSubmittedNewClass({name: classTitle , authorName: authorName });

    this.setState(() => ({ error : error }));
  }

  render() {
    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        onRequestClose={this.props.handleOnCancel}
        contentLabel="Add new class modal"
        closeTimeoutMS={200}
        className="modal"
      >
        <p className="modal__title">Add Class</p>
        {this.state.error && <p className="modal__error">{this.state.error}</p>}
        <form onSubmit={this.handleSubmittedNewClass}>
          <label for="title">Title</label><br />
          <input id="title "type="text" name="title" placeholder="Please, select your desired title…"/><br />
          <label for="authorName">Author-Name</label><br />
          <input id="authorName" type="text" name="author" placeholder="Please enter Author's name"/><br />
          <div className="modal-button">
            <button className="modal-button__cancel" onClick={this.props.handleOnCancel}>Cancel</button>
            <button className="modal-button__create">Create</button>
          </div>
        </form>
      </Modal>
    );
  }
}
