// import CardList from 'components/cardList';

// import Counter from "./counter/Counter";

import { Component } from 'react';
// import LoginForm from "./loginForm";
// import Modal from "./modal";
// import ToDoList from "./todoList";
import Radio from './radioBtnsTest';

// import data from 'data/photoList.json';
class App extends Component {
  state = {
    loginForm: {},
  };
  getDataFromLoginForm = data => {
    this.setState({
      loginForm: data,
    });
  };

  render() {
    return (
      <>
        {/* <CardList data={data}></CardList> */}
        {/* <Counter></Counter> */}
        {/* <Modal>
          <LoginForm getDataFromLoginForm={ this.getDataFromLoginForm}></LoginForm>
        </Modal> */}
        {/* <ToDoList></ToDoList> */}
        <Radio></Radio>
      </>
    );
  }
}

export default App;
