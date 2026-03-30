function Entry(props) {
    return (
        <section className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" src={props.img.src} alt={props.img.alt} />
            </div>
            <div className="info-container">
                <img className="marker" src="/src/assets/Fill 219 (1).png" alt="marker-icon" />
                <span className="country">{props.country}</span>
                <a href={props.mapLink} >View on Google Maps</a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.tripDate}</p>
                <p className="entry-text">{props.info}</p>
            </div>

        </section>
    )
}
export default Entry;