import styled from "styled-components";

export const Container = styled.article`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
  gap: 1rem;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
}
`;