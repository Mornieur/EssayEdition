import styled from 'styled-components';

export const Container = styled.div`
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem; */
  min-width: 80vw;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 2rem;
  /* height: calc(100vh - 7rem); */
  min-height: max-content;
  margin: auto;
  margin-top: 10rem;
`;
