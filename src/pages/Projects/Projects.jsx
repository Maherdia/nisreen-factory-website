import "./Projects.css";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageHeader from "../../components/PageHeader/PageHeader";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import PdfModal from "../../components/PdfModal/PdfModal";

import hero from "../../assets/images/factory.jpg";
import projects from "../../data/projects";

function Projects() {

    const location = useLocation();
    const navigate = useNavigate();

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [activePdf, setActivePdf] = useState(null);

    const categories = [
        "All",
        "Military",
        "Government",
        "Industrial",
        "Commercial",
    ];

    useEffect(() => {

        const params = new URLSearchParams(location.search);
        const filter = params.get("filter");

        if (filter) {
            setSelectedCategory(filter);
        } else {
            setSelectedCategory("All");
        }

    }, [location]);

    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter(
                  project => project.category === selectedCategory
              );

    return (
        <>
            <Navbar />

            <PageHeader
                title="Projects"
                subtitle="Projects Successfully Delivered Across Multiple Sectors"
                image={hero}
            />

            <section className="projects-page">

                <SectionTitle
                    tag="PROJECT PORTFOLIO"
                    title="Selected Projects"
                    description="Special & Safety Work has successfully delivered security and industrial solutions for military, government, commercial and industrial facilities."
                />

                <div className="projects-stats">

                    <div className="stat">
                        <h2>{projects.length}+</h2>
                        <span>Projects</span>
                    </div>

                    <div className="stat">
                        <h2>15+</h2>
                        <span>Years Experience</span>
                    </div>

                    <div className="stat">
                        <h2>5</h2>
                        <span>Business Sectors</span>
                    </div>

                    <div className="stat">
                        <h2>100%</h2>
                        <span>Custom Solutions</span>
                    </div>

                </div>

                <div className="project-filters">

                    {categories.map(category => (

                        <button
                            key={category}
                            className={selectedCategory === category ? "active" : ""}
                            onClick={() => {

                                setSelectedCategory(category);

                                if (category === "All") {
                                    navigate("/projects");
                                } else {
                                    navigate(`/projects?filter=${category}`);
                                }

                            }}
                        >
                            {category}
                        </button>

                    ))}

                </div>

                <div className="projects-grid">

                    {filteredProjects.map(project => (

                        <ProjectCard
                            key={project.project}
                            project={project.project}
                            client={project.client}
                            contractor={project.contractor}
                            description={project.description}
                            category={project.category}
                            pdf={project.pdf}
                            onOpenPdf={setActivePdf}
                        />

                    ))}

                </div>

            </section>

            <PdfModal
                isOpen={!!activePdf}
                title="Project Approval"
                pdf={activePdf}
                onClose={() => setActivePdf(null)}
            />

            <Footer />
        </>
    );
}

export default Projects;