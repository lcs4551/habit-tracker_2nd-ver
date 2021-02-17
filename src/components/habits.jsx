import React, { PureComponent } from 'react';
import AddHabitForm from './addHabitForm';
import Habit from './habit';

class Habits extends PureComponent {
  render() {
    return (
      <>
      <AddHabitForm onAddHabit={this.props.onAddHabit}/>
      <ul>
        {this.props.habits.map(habit => 
          <Habit
            key={habit.id}
            habit={habit}  
            onIncreament={this.props.onIncreament} 
            onDecreament={this.props.onDecreament} 
            onDelete={this.props.onDelete}
          />)}
      </ul>
      <button className="habit-reset" onClick={this.props.onReset}>Reset All</button>
      </>
    );
  }
}

export default Habits;