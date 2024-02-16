import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* inter-300 - cyrillic_latin */
    @font-face {
        font-display: swap;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 300;
        src: url('../fonts/inter-v13-cyrillic_latin-300.eot'); /* IE9 Compat Modes */
        src: url('../fonts/inter-v13-cyrillic_latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('../fonts/inter-v13-cyrillic_latin-300.woff2') format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
            url('../fonts/inter-v13-cyrillic_latin-300.woff') format('woff'), /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+, iOS 5+ */
            url('../fonts/inter-v13-cyrillic_latin-300.ttf') format('truetype'), /* Chrome 4+, Firefox 3.5+, IE 9+, Safari 3.1+, iOS 4.2+, Android Browser 2.2+ */
    }
    /* inter-regular - cyrillic_latin */
    @font-face {
        font-display: swap;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        src: url('../fonts/inter-v13-cyrillic_latin-regular.eot'); /* IE9 Compat Modes */
        src: url('../fonts/inter-v13-cyrillic_latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('../fonts/inter-v13-cyrillic_latin-regular.woff2') format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
            url('../fonts/inter-v13-cyrillic_latin-regular.woff') format('woff'), /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+, iOS 5+ */
            url('../fonts/inter-v13-cyrillic_latin-regular.ttf') format('truetype'), /* Chrome 4+, Firefox 3.5+, IE 9+, Safari 3.1+, iOS 4.2+, Android Browser 2.2+ */
    }

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

`