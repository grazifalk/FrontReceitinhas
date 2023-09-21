import styled from "styled-components";

export const ContainerSearch = styled.div`
  .search-collaborator {
    cursor: pointer;
  }

  input {
    outline: none !important;
    box-shadow: none !important;

    &:focus {
      border-bottom: 2px solid yellow !important;
      border: 0px;
      border-radius: 0px;
    }
  }
`;
