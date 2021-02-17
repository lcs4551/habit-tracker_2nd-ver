import React, {Component} from 'react';
import './app.css';
import Habits from './components/habits';
import Header from './components/header';

class App extends Component {
  state = {
    habits: [
      {id: 1, name: "Reading", count: 0},
      {id: 2, name: "Cooking", count: 0},
      {id: 3, name: "Hiking", count: 0},
      {id: 4, name: "으녕님 바보", count: 0}
    ]
  }

  handleIncreament = (habit) => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1};
      }
      return item ;
    })
    this.setState({habits});
  };

  handleDecreament = (habit) => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count};
      }
      return item ;
    })
    this.setState({habits});
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter(line => line.id !== habit.id);
    this.setState({habits});
  };

  onAddHabit = (value) => {
    const habits = [...this.state.habits, {id: Date.now(), name: value, count: 0}];
    this.setState({habits});
  };

  handleReset = () => {
    const habits = this.state.habits.map(item => {
      if (item.count !== 0) {
        return { ...item, count: 0};
      }
      return item ;
    })
    this.setState({habits});
  }

render() {
  return (
    <>          
      <Header habits={this.state.habits}/>
      <Habits 
        habits={this.state.habits} 
        onIncreament={this.handleIncreament}
        onDecreament={this.handleDecreament}
        onDelete={this.handleDelete}
        onAddHabit={this.onAddHabit}
        onReset={this.handleReset}
        />
    </>
    );
  };
}

export default App;
