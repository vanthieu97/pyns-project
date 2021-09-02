import css from 'styled-jsx/css'
import fonts from './fonts'

/* language=SCSS */
export default css.global`
  ${fonts}
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
    font-family: 'Roboto', sans-serif;
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

  .text-uppercase {
    text-transform: uppercase;
  }
  .d-block {
    display: block;
  }
  .d-inline-block {
    display: inline-block;
  }
  .w-100 {
    width: 100%;
  }
  .mt-8 {
    margin-top: 8px;
  }
  .mt-12 {
    margin-top: 12px;
  }
  /* Overwrite AntD styles */
  .ant-layout-content {
    margin: 0 16px;
  }

  .ant-breadcrumb {
    margin: 16px 0;
  }

  .ant-menu-submenu-popup {
    .ant-menu-sub {
      background-color: #fff !important;

      .ant-menu-item {
        color: rgba(0, 0, 0, 0.85);
        transition: all 0.2s;

        &.ant-menu-item-selected,
        &:hover {
          color: #ee4d2d;
        }
      }
    }
  }

  .ant-layout-footer {
    text-align: center;
  }

  .wrapper {
    .top-header {
      background: #fff;
      @media (max-width: 768px) {
        padding: 0 20px;
      }
      display: flex;
      .top-menu {
        border-bottom-color: #fff;
      }
    }
    .main-content {
      min-height: 360px;
      background-color: #fff;
      padding: 10px 20px;
    }
  }
  .form-wrapper {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
`
