import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;

  .listItem {
    display: flex;
    align-items: center;
    padding: 5px;
    border: 1px solid grey;
    width: 250px;
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }

  .removeBtn {
    margin-left: auto;
  }
`;
export { List };
