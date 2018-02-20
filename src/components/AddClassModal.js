import React from 'react';
import Modal from 'react-modal';

export default class AddClassModal extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmitNewClass = this.handleSubmitNewClass.bind(this);
    this.state = {
      name: '',
      description: '',
      error: undefined
    }
  }

  handleSubmitNewClass(e){
    e.preventDefault();
    const newClass = {
      name: e.target.elements.classtitle.value,
      description: e.target.elements.description.value
    }
    const error = this.props.handleOnSubmit(newClass);
    this.setState(() => ({ error }));
  }
  render() {
    return(
      <Modal
        isOpen={this.props.AddClassModalOpen}
        contentLabel="Add new class modal"
        onRequestClose={this.props.handleOnCancel}
        closeTimeoutMS={200}
        className="modal"
      >
        <p className="modal__title">Add New Class in Course</p>
        {this.state.error && <p className="modal__error">{this.state.error}</p>}
        <form onSubmit={this.handleSubmitNewClass}>
          <label for="classtitle">Class-Title</label><br />
          <input
            id="classtitle"
            type="text"
            name="classtitle"
            autoFocus
            placeholder="Please, select your desired title…"
          /> <br />
          <label for="author">Description</label><br />

          <input
            id="description"
            type="text"
            name="description"
            placeholder="Explain what’s the purpose of this class if anyone has any doubts…"
          /> <br />

          <div className="modal-button">
            <button className="modal-button__create">Save</button>
            <button className="modal-button__cancel" onClick={this.props.handleOnCancel}>Cancel</button>
          </div>
        </form>
      </Modal>
    );
  }
}
