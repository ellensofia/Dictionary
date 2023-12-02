import styled from "styled-components";

export const Searchfield = styled.form`
  input,
  button {
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid var(--color-secondary);
    background-color: var(--color-primary);
    color: var(--color-secondary);
  }

  input {
    border-radius: 40px 0 0 40px;
    margin-top: 2rem;
    background-color: var(--color-primary);
    color: var(--color-secondary);

    &:focus-visible {
      outline: transparent;
    }
  }

  button {
    border-radius: 0 40px 40px 0;
    border-left: none;
    cursor: pointer;
    padding: 0.8rem 1.2rem;
  }
`;
