import css from 'styled-jsx/css'

/* language=SCSS */
export default css.global`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  /* App styles */
  html {
    box-sizing: border-box;
    font-size: 14px;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  body {
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  .text-left {
    text-align: left !important;
  }

  .text-right {
    text-align: right !important;
  }

  .text-center {
    text-align: center !important;
  }
`
