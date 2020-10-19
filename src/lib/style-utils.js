import { css } from "styled-components";

export const media = {
  desktopL: (...arg) => css`
    @media only screen and (min-width: 1200px) {
      ${css(...arg)}
    }
  `,
  desktopS: (...arg) => css`
    @media (min-width: 992px) {
      ${css(...arg)}
    }
  `,
  tablet: (...arg) => css`
    @media (min-width: 768px) {
      ${css(...arg)}
    }
  `,
  mobileTablet: (...arg) => css`
    @media (min-width: 600px) {
      ${css(...arg)}
    }
  `,
  mobilePhone: (...arg) => css`
    @media (max-width: 600px) {
      ${css(...arg)}
    }
  `
};
