import styled from "styled-components";

export const Searchfield = styled.form`
  input,
  button {
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid var(--color-secondary);
  }

  input {
    border-radius: 20px 0 0 20px;
    min-width: 230px;
  }

  button {
    border-radius: 0 20px 20px 0;
    border-left: none;
    cursor: pointer;
    padding: 0.8rem 1.2rem;
  }
`;
