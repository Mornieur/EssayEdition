import styled from "styled-components";

interface IProps {
  bgColorSpan: string;
  colorSpan: string;
}

export const Container = styled.div<IProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  span {
    min-height: 2.5rem;
    min-width: 2.5rem;
    background-color: ${({ bgColorSpan }) => bgColorSpan};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ colorSpan }) => colorSpan};
    font-weight: 600;
  }
`;