import "./ProjectCard.css";

import {
    FaBuilding,
    FaHardHat,
    FaClipboardList,
    FaCheckCircle,
    FaFilePdf,
    FaArrowRight,
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

            {pdf && (

                <div className="approval-status">

                    <FaCheckCircle />

                    <span>Approval</span>

                </div>

            )}

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

                <div className="project-footer">

                    <div className="project-footer-left">

                        <FaFilePdf />

                        <span>View Approval Documents</span>

                    </div>

                    <FaArrowRight className="footer-arrow" />

                </div>

            )}

        </div>

    );

}

export default ProjectCard;