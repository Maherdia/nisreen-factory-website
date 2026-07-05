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
}) {

    return (

        <div className="project-card">

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

        </div>

    );

}

export default ProjectCard;