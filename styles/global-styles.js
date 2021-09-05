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
  .my-16 {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  .mt-40 {
    margin-top: 40px;
  }
  .form-wrapper {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  /* Overwrite AntD styles */
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
    height: 100vh;
    overflow: hidden auto;
    background: #fff;
    .ant-layout-header {
      background: #fff;
      display: flex;
      justify-content: space-between;
      box-shadow: 0 2px 8px 0 rgb(0 0 0 / 15%);
      position: sticky;
      top: 0;
      z-index: 100;
      height: 48px;
      line-height: 48px;
      @media (max-width: 768px) {
        padding: 0 20px;
      }
      .ant-menu {
        border-bottom-color: #fff;
      }
    }
    .ant-breadcrumb {
      margin: 12px 0;
    }
    .ant-layout-content {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 12px;
    }
  }
  .ant-btn,
  .ant-input,
  .ant-picker,
  .ant-select-selector,
  .ant-input-affix-wrapper {
    border-radius: 5px !important;
  }
  .ant-input-affix-wrapper .ant-input {
    border-radius: 0 !important;
  }
`
