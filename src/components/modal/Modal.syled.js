import styled from 'styled-components';

export const OpenModalBtn = styled.button`
  padding: 10px;
`;

export const Wrapper = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(128, 128, 128, 0.5);
`;

export const ModalWindow = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 40px 20px;
  border: 2px solid grey;
  border-radius: 10px;
  background-color: #fff;
  width: 400px;
  margin: auto;
`;
