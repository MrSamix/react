function CurrentTime() {
    const currentTime = new Date().toLocaleTimeString();
    return (
        <h2>Поточний час: {currentTime}</h2>
    );
}
export default CurrentTime;