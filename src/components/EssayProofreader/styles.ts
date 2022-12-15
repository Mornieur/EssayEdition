import styled from "styled-components";

export const Container = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .button-container {
    display: flex;
    width: 100%;
    justify-content: end;
  }
`;

export const GradesContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  height: max-content;
`

export const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  flex-direction: column;
  input{
    padding: 0.5rem 1rem;
  }
`