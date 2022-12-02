import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 90%;
  margin: auto;
  padding: 2rem;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;