import Header from "./Header";

export default ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <h1>Im a footer</h1>
        </div>
    );
}