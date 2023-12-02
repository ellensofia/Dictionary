import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 3rem 2rem;

  .container {
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
  }

  .search-container {
    width: 50vw;
    min-width: 350px;
  }

  @media screen and (max-width: 860px) {
    .search-container {
      min-width: 250px;
      width: 100%;
    }
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`;
