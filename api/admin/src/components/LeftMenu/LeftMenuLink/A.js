import styled, { css } from 'styled-components';

const A = styled.a`
${({ theme }) => css`
  position: relative;
  padding-top: 0.7rem;
  padding-bottom: 0.2rem;
  padding-left: 1.6rem;
  min-height: 3.6rem;
  border-left: 0.3rem solid transparent;
  cursor: pointer;
  color: ${theme.main.colors.leftMenu['link-color']};
  text-decoration: none;
  display: block;
  -webkit-font-smoothing: antialiased;

  &:hover {
    color: ${theme.main.colors.white};
    background: ${theme.main.colors.won.blue};

    border-left: 0.3rem solid ${theme.main.colors.won.orange};
    text-decoration: none;
  }

  &:focus {
    color: ${theme.main.colors.white};
    text-decoration: none;
  }

  &:visited {
    color: ${theme.main.colors.leftMenu['link-color']};
  }

  &.linkActive {
    color: white !important;
    border-left: 0.3rem solid ${theme.main.colors.won.orange};
  }
  `}
`;

export default A;
