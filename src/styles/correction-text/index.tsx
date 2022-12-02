import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  width: 90%;
  margin: auto;
  h2 {
    font-size: 2rem;
    text-align: center;
  }
  .two-columns {
    display: flex;
    gap: 2rem;
    @media (max-width: 700px) {
      flex-direction: column;
    }
  }
`;