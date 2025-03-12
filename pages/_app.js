import { MantineProvider } from "@mantine/core";
import "../styles/globals.css"; // Keep your global styles

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;


