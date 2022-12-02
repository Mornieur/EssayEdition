import styled from "styled-components";

interface IProps {
  bgColor: string;
  border?: string;
  color?: string;
}

export const Button = styled.button<IProps>`
  background-color: ${({ bgColor }) => bgColor};
  border: ${({ border }) => (border ? border : 'none')};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  width: max-content;
  cursor: pointer;
  background-color: ${({ color }) => color && color};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  :hover{
    opacity: 0.8;
  }
`;