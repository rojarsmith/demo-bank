// theme
import ThemeProvider from "../theme/MuiBrevity";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}