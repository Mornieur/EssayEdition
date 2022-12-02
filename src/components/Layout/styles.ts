import styled from "styled-components";

export const Header = styled.header`
  background-color: var(--blue-dark);
  height: 4rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  h2 {
    color: var(--yellow-600);
    font-size: 2rem;
  }
`;

export const Children = styled.main`
  height: calc(100vh - 4rem - 3rem);
  overflow-y: auto;
  overflow-x: hidden;
`

export const Footer = styled.footer`
  background-color: var(--blueTwo-light);
  height: 3rem;
  padding: 0.7rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  a {
    text-decoration: underline;
    color: var(--blue-dark);
    transition: all 0.5s;
    :hover {
      color: var(--yellow-600);
      scale: 1.1;
    }
  }
`;