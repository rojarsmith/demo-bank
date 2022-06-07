import Container from '@mui/material/Container';
import Header from "./Header";

export default ({ children }) => {
    return (
        <div>
            <Container maxWidth="lg">
            <Header />
            {children}
            <h1>Im a footer</h1>
            </Container>
        </div>
    );
}