import { Component } from 'react';
import { ModalWindow, OpenModalBtn, Wrapper } from './Modal.syled';

class Modal extends Component {
  state = {
    modalVisible: false,
  };

  togleModal = () => {
    this.setState(prev => ({
      modalVisible: !prev.modalVisible,
    }));

    if (this.state.modalVisible) {
      document.querySelector('body').style.overflow = 'visible';
    } else {
      document.querySelector('body').style.overflow = 'hidden';
    }
  };

  render() {
    return (
      <>
        <OpenModalBtn onClick={this.togleModal}>open modal</OpenModalBtn>
        {this.state.modalVisible && (
          <Wrapper>
            <ModalWindow>
              {this.props.children}

              <button onClick={this.togleModal}>send</button>
            </ModalWindow>
          </Wrapper>
        )}
      </>
    );
  }
}

export default Modal;
