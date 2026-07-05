import "./SectionTitle.css";

function SectionTitle({
    tag,
    title,
    description,
    center = true,
}) {
    return (

        <div className={`section-title ${center ? "center" : ""}`}>

            {tag && (
                <span className="section-tag">
                    {tag}
                </span>
            )}

            <h2>
                {title}
            </h2>

            {description && (
                <p>
                    {description}
                </p>
            )}

        </div>

    );
}

export default SectionTitle;