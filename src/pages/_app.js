import GlobalStyles from "../styles/globalStyles";

import ThemeContextProvider from "../utils/context/themeContext";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default MyApp;
