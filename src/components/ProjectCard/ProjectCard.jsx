import "./ProjectCard.css";

import {
    FaBuilding,
    FaHardHat,
    FaClipboardList,
} from "react-icons/fa";

function ProjectCard({
    project,
    client,
    contractor,
    description,
    category,
    pdf,
    onOpenPdf,
}) {

    const handleClick = () => {
        if (pdf && onOpenPdf) {
            onOpenPdf(pdf);
        }
    };

    return (

        <div
            className={`project-card ${pdf ? "clickable" : ""}`}
            onClick={handleClick}
        >

            <span className="project-category">
                {category}
            </span>

            <h3>{project}</h3>

            <div className="project-row">

                <div className="project-label">

                    <FaBuilding />

                    <span>Client</span>

                </div>

                <p>{client}</p>

            </div>

            <div className="project-row">

                <div className="project-label">

                    <FaHardHat />

                    <span>Contractor</span>

                </div>

                <p>{contractor}</p>

            </div>

            <div className="project-row">

                <div className="project-label">

                    <FaClipboardList />

                    <span>Scope</span>

                </div>

                <p>{description}</p>

            </div>

            {pdf && (

                <div className="approval-badge">
                    📄 View Approval
                </div>

            )}

        </div>

    );

}

export default ProjectCard;