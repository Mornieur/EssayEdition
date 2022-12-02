import styled from "styled-components";

interface IProps {
  backgroundCard: string;
}

export const Container = styled.article<IProps>`
  background-color: ${({ backgroundCard }) => backgroundCard};
  padding: 1rem;
  width: 35rem;
  height: max-content;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  transition: all 0.5s;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  .title {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    h3 {
      color: var(--blue-dark);
    }
    p {
      color: var(--white);
    }
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      height: 3rem;
      width: 3rem;
      fill: var(--grey-100);
      transition: all 0.5s;
    }
  }
  :hover {
    opacity: 0.8;
    svg {
      fill: var(--yellow-600);
    }
  }
`;