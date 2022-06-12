// theme
import ThemeProvider from "../theme/MuiBrevity";

export default function MyApp({ Component, pageProps, settings }) {
    return (
        <>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}