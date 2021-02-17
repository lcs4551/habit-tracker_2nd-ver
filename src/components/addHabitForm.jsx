import React, { Component } from 'react';

class AddHabitForm extends Component {
  inputRef = React.createRef();

  addHabit = event => {
    event.preventDefault();
    const value = this.inputRef.current.value;
    value && this.props.onAddHabit(value);
    this.inputRef.current.value = "";
  };

  render() {
    return (
      <form onSubmit={this.addHabit}>
        <input 
          className="form-input" 
          type="text" 
          placeholder="Habit" 
          ref={this.inputRef}/>
        <button className="form-button" type="submit">Add</button>
      </form>
    );
  }
}

export default AddHabitForm;