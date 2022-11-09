import '../styles/globals.scss'
import { SocketsProvider } from "../src/context/use-socket";
import {ThemeProvider} from "../src/context/use-theme";

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider>
    <SocketsProvider>
      <Component {...pageProps} />
    </SocketsProvider>
  </ThemeProvider>
)

export default MyApp
