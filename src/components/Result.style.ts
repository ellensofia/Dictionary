import styled from "styled-components";

export const ResultStyle = styled.div`
  section {
    position: relative;
  }

  h2 {
    font-size: 2rem;
    margin: 1rem 0 0;
  }

  h4 {
    margin: 0;
  }

  .phonetic {
    margin: 0 0 1rem;
    font-weight: 400;
  }

  .audio-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .save {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 1rem;

    span {
      font-weight: 600;
    }
  }

  ul {
    padding: 0 1.4rem;

    p {
      margin: 0;
      font-size: 0.85rem;
    }
  }

  .list {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 1rem 0 0.5rem -1rem;
  }

  .item {
    padding: 0.1rem 0rem;
    margin-bottom: 0.2rem;
    text-decoration: underline;
  }
`;
