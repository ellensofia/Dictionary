import styled from "styled-components";

export const SavedContainer = styled.div`
  border-radius: 1.2rem;
  padding: 1rem;
  min-width: 20vw;

  h3 {
    margin: 0;
    text-decoration: underline;
    margin-bottom: 1rem;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    padding: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    cursor: pointer;
  }

  .remove {
    background-color: transparent;
    border-radius: 50%;
    border: none;
    cursor: pointer;
  }
`;
