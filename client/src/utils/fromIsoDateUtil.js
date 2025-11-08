export default function fromIsoDateUtil(isoDateString) {
    const date = new Date(isoDateString);

    const options = {
        year: 'numeric',
        month: "short",
        day: '2-digit'
    };

    return date.toLocaleDateString("en-US", options);
}