const ROW_1 = ["WE MAKE DIFFERENCE", "WE CARE", "WE BRING EFFICIENCY"];
const ROW_2 = ["WE CARE", "WE BRING EFFICIENCY", "WE MAKE DIFFERENCE"];

function MarqueeRow({
    items,
    reverse = false,
}: {
    items: string[];
    reverse?: boolean;
}) {
    const group = (key: string) => (
        <div className="marquee-group" aria-hidden={key === "b"} key={key}>
            {items.map((text, i) => (
                <span className="marquee-item" key={`${key}-${i}`}>
                    <span>{text}</span>
                    <span className="marquee-star">*</span>
                </span>
            ))}
        </div>
    );

    return (
        <div className="marquee-row">
            <div className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}>
                {group("a")}
                {group("b")}
            </div>
        </div>
    );
}

export default function Quotes() {
    return (
        <section className="quotes-marquee" aria-label="Our values">
            <MarqueeRow items={ROW_1} />
            <MarqueeRow items={ROW_2} reverse />
        </section>
    );
}