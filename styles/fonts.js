import css from 'styled-jsx/css'

/*language=SCSS*/
export default css.global`
  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/subset-Roboto-Medium.eot');
    src: url('/fonts/subset-Roboto-Medium.eot?#iefix') format('embedded-opentype'),
      url('/fonts/subset-Roboto-Medium.woff2') format('woff2'), url('/fonts/subset-Roboto-Medium.woff') format('woff'),
      url('/fonts/subset-Roboto-Medium.ttf') format('truetype'),
      url('/fonts/subset-Roboto-Medium.svg#Roboto-Medium') format('svg');
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/subset-Roboto-Bold.eot');
    src: url('/fonts/subset-Roboto-Bold.eot?#iefix') format('embedded-opentype'),
      url('/fonts/subset-Roboto-Bold.woff2') format('woff2'), url('/fonts/subset-Roboto-Bold.woff') format('woff'),
      url('/fonts/subset-Roboto-Bold.ttf') format('truetype'),
      url('/fonts/subset-Roboto-Bold.svg#Roboto-Bold') format('svg');
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/subset-Roboto-Regular.eot');
    src: url('/fonts/subset-Roboto-Regular.eot?#iefix') format('embedded-opentype'),
      url('/fonts/subset-Roboto-Regular.woff2') format('woff2'), url('/fonts/subset-Roboto-Regular.woff') format('woff'),
      url('/fonts/subset-Roboto-Regular.ttf') format('truetype'),
      url('/fonts/subset-Roboto-Regular.svg#Roboto-Regular') format('svg');
    font-display: swap;
  }
`
