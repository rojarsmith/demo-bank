export default ({children}) => {
    return (
        <div>
            <h1>Im a header</h1>
            {children}
            <h1>Im a footer</h1>
        </div>
    );
}