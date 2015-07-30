import React from 'react';
import Notes from './Notes';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.addItem = this.addItem.bind(this);

    this.state = {
      notes: [
        {
          task: 'Learn webpack'
        },
        {
          task: 'Learn react'
        },
        {
          task: 'Do laundry'
        }
      ]
    };
  }

  render() {
    const notes = this.state.notes;

    return (
      <div>
        <button onClick={this.addItem}>+</button>
        <Notes items={notes} />
      </div>
    );
  }

  addItem() {
    this.setState({
      notes: this.state.notes.concat([{
        task: 'new task'
      }])
    });
  }
}
