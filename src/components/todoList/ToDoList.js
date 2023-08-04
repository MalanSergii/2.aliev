import { Component } from 'react';
import initailTodos from 'data/todoList.json';
import { List } from './ToDoList.styled';

class ToDoList extends Component {
  state = {
    todoList: initailTodos,
  };

  removeTodoItem = id => {
    this.setState(prev => ({
      todoList: prev.todoList.filter(item => item.id !== id),
    }));
  };

  changeCompletedStatus = id => {
    this.setState(prev => ({
      todoList: prev.todoList.map(item =>
        item.id === id ? { ...item, compleated: !item.compleated } : item
      ),
    }));
  };

  render() {
    return (
      <List>
        {this.state.todoList.map(item => (
          <li className="listItem" key={item.id}>
            <label>
              <input
                id={item.id}
                type="checkbox"
                onChange={() => this.changeCompletedStatus(item.id)}
                checked={item.compleated}
              ></input>
              {item.text}
            </label>
            <button onClick={() => this.removeTodoItem(item.id)} className="removeBtn">
              remove
            </button>
          </li>
        ))}
      </List>
    );
  }
}

export default ToDoList;
