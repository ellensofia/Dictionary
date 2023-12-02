import styled from "styled-components";

export const ResultStyle = styled.div`
  article {
    position: relative;
  }

  .title {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    border-bottom: 1px solid var(--color-secondary);
    line-height: 2;
    h2 {
      font-size: 2.8rem;
    }
    h3 {
      font-size: 1.8rem;
      font-weight: 300;
    }
  }

  .phonetic {
    font-weight: 400;
  }

  .partOfSpeech {
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  h4 {
    font-size: 1.2rem;
  }

  .audio-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
  }

  audio {
    border: 1px solid rgb(17, 17, 17);
    border-radius: 40px;
    background-color: pink;
  }

  .save {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 1rem;
    font-weight: 300;

    svg {
      font-size: 1.4rem;
    }

    path {
      fill: var(--color-secondary);
    }

    &:hover {
      background-color: transparent;
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  ul {
    margin-top: 0.5rem;
    list-style: none;
  }

  li {
  }
`;
