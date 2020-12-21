import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  padding: 1.25em;

  background: var(--clr-bg-default);

  display: flex;
  justify-content: space-between;
  align-items: center;

  button.icon {
    padding: 0.675em;
    color: #fff;
  }
  h1 {
    color: #fff;
  }

  @media screen and (min-width: 600px) {
    button.icon {
      &.menu {
        display: none;
      }
    }
  }
`;

export default StyledHeader;
