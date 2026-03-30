function Header() {
    const fname = "Abdulmuiz";
    const hours = new Date().getHours();
    let timeOfDay;
    if (hours < 12) {
        timeOfDay = "morning";
    } else if (hours < 17) {
        timeOfDay = "afternoon";
    } else if (hours < 21) {
        timeOfDay = "evening";
    } else {
        timeOfDay = "night";
    }

    return (
        <header>
            <img src="/src/assets/Globe (1).png" alt="" />
            <h1>{fname}'s travel journal scheduled at {timeOfDay}</h1>
        </header>
    )
}
export default Header;