import styled from "styled-components";

export const Container = styled.section`
  flex: 1;
  h3 {
    font-size: 1.5rem;
    color: var(--grey-900);
    margin-bottom: 1rem;
  }
  p,
  ul {
    padding: 0.5rem 0;
  }
  li {
    margin: 0.3rem 0 0.3rem 2rem;
  }
  a {
    text-decoration: underline;
    color: var(--yellow-600);
  }
`;