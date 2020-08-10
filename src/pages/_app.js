import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/theme';
import 'src/styling/defaults.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
