import Container from '@mui/material/Container';
import Header from "./Header";

export default ({ children }) => {
    return (
        <div>
            <Container maxWidth="lg">
                <Header />
                {children}
            </Container>
        </div>
    );
}