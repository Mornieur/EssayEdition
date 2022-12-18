import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .canvas-container {
    height: 500px;
    width: 500px;
    border: 2px solid #000;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  background-color: var(--yellow-600);

  div {
    display: flex;
    justify-content: center;

    width: 100%;
    padding: 0.5rem;
    .draw {
      width: 100px;
      height: 50px;
      background-color: var(--blue-dark);
      font-size: 1rem;
      font-weight: 600;
      color: var(--white-100);
      border: none;
      border-radius: 10px;
      cursor: pointer;
      margin-right: 0.5rem;
    }

    .erase {
      width: 100px;
      height: 50px;
      background-color: var(--blue-dark);
      font-size: 1rem;
      font-weight: 600;
      color: var(--white-100);
      border: none;
      border-radius: 10px;
      cursor: pointer;
      margin-left: 0.5rem;
    }
  }

  a {
    width: 100%;
    display: flex;
    justify-content: center;
    color: var(--white-100);
    padding: 0.5rem;
  }
`;
