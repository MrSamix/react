function formatDate(isoDate) {
    const date = new Date(isoDate);
    return `${date.getDay() < 10? `0${date.getDay()}`: date.getDay()}.${date.getMonth() < 10? `0${date.getMonth()}`: date.getMonth()}.${date.getFullYear()}`;
}

function isPast(date) {
    const eventDate = new Date(date);
    const today = new Date();
    return eventDate < today;
}

const EventCard = ({ title, date, isFree }) => {
    const past = isPast(date);

    return (
        <div>
            <h2>{title}</h2>
            <p>Дата: {formatDate(date)}</p>
            <p>
                {past ? "⏰Подія вже відбулась" : isFree ? "🆓Безкоштовно" : "💸Платно"}
            </p>
        </div>
    );
};

export default EventCard;