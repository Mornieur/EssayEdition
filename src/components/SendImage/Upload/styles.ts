import styled from 'styled-components';

export const Container = styled.div`
  .AvatarRemoveIcon {
    position: relative;
    bottom: 55px;
    left: 32px;
    color: rgb(211, 99, 255);
  }

  .AvatarRemoveIcon:hover {
    color: rgb(170, 78, 206);
    cursor: pointer;
  }
`;

export const Button = styled.div`
  width: 300px;
  height: 70px;
  border-radius: 7px;
  background-color: var(--vereda-blue);
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;

  p {
    color: #fff;
    font-weight: 500px;
    font-size: 1.5rem;
  }
`;
