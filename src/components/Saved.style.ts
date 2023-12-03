import styled from "styled-components";

export const SavedContainer = styled.div`
  border-radius: 1.2rem;
  margin-top: 2rem;
  max-width: 300px;
  width: 100%;
  h3 {
    margin: 0;
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 2.3rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
  }

  li {
    padding: 0.2rem 0;
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
