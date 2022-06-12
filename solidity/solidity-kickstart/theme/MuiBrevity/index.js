import { useMemo } from 'react';
// @mui
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
//
import componentsOverride from './overrides';

export default function ThemeProvider({ children }) {
    const themeOptions = useMemo(
        () => ({
            palette: {
                background: { default: '#F3F3F3' }
            },
            shadows: ["none"],
        }),
    );

    console.log(themeOptions);

    const theme = createTheme(themeOptions);
    // Solve Warning: The elevation provided <Paper elevation={xxx}> is not available in the theme.
    theme.shadows[1] = theme.shadows[0];
    theme.shadows[4] = theme.shadows[0];

    console.log(theme);

    theme.components = componentsOverride(theme);

    return (
        <MUIThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MUIThemeProvider>
    );
}