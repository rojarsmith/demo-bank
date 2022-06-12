import Container from '@mui/material/Container';
import Header from "./Header";
import { Box } from '@mui/material';

export default ({ children }) => {
    return (
        <div>
            <Container maxWidth="lg">
                <Header />
                <Box sx={{ bgcolor: '#FFFFFF', mt: 4, p: 5, borderRadius: '24px' }}>
                    {children}
                </Box>
            </Container>
        </div>
    );
}