import "./Solutions.css";

import { Link } from "react-router-dom";

import SectionTitle from "../SectionTitle/SectionTitle";
import ProductCard from "../ProductCard/ProductCard";

import securityDoors from "../../assets/products/SecurityDoors.jpg";
import securityWindows from "../../assets/products/SecurityWindow.jpg";
import fireProtection from "../../assets/products/FireProtection.jpg";
import industrialSteel from "../../assets/products/IndustrialSteelProducts.jpg";
import engineering from "../../assets/products/SecuritySystems&Engineering.webp";

function Solutions() {

    const solutions = [

        {
            title: "Security Doors",
            image: securityDoors,
            description:
                "Blast resistant, bullet resistant, vault, shield, burglar and other specialized security doors engineered for critical facilities.",
            link: "/products#security-doors",
        },

        {
            title: "Security Windows",
            image: securityWindows,
            description:
                "Blast resistant, ballistic and forced-entry resistant window systems for critical infrastructure.",
            link: "/products#security-windows",
        },

        {
            title: "Fire Protection",
            image: fireProtection,
            description:
                "Fire-rated doors, fire exits and specialized fire protection products manufactured to international standards.",
            link: "/products#fire-rated",
        },

        {
            title: "Industrial Steel Products",
            image: industrialSteel,
            description:
                "Custom steel structures, tanks, platforms, ladders, handrails, louvers and fabricated industrial products.",
            link: "/products#industrial-steel",
        },

        {
            title: "Security Systems & Engineering",
            image: engineering,
            description:
                "Shelter systems, digital locks, tire killers, roll-up shutters and custom engineered security solutions.",
            link: "/products#engineering",
        },

    ];

    return (

        <section className="solutions">

            <div className="container">

                <SectionTitle
                    tag="OUR SOLUTIONS"
                    title="Security & Specialized Engineering Solutions"
                    description="SSW designs and manufactures advanced security products, industrial steel works and engineered solutions for government, military, petrochemical and commercial projects."
                />

                <div className="solutions-grid">

                    {solutions.map((item, index) => (

                        <ProductCard
                            key={index}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            link={item.link}
                        />

                    ))}

                </div>

                <div className="solutions-btn">

                   <Link to="/products" className="primary-btn">
                   View All Products
                    </Link>

                </div>

            </div>

        </section>

    );

}

export default Solutions;