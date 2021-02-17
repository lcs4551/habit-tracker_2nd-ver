import React, { Component } from 'react';

class Header extends Component {
  render() {
    const numbers = this.props.habits.filter(habit => habit.count !== 0);
    const counts = numbers.length;
    return (
      <header>
        <div className="header-items">
          <i className="fas fa-leaf"></i>
          <span>Habit Tracker</span>
          <span>{counts}</span>
        </div>
      </header>
    );
  }
}

export default Header;