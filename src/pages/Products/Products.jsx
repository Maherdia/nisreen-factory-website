import "./Products.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageHeader from "../../components/PageHeader/PageHeader";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProductCard from "../../components/ProductCard/ProductCard";

import hero from "../../assets/images/factory.jpg";

import products from "../../data/products";

function Products() {

    return (

        <>
            <Navbar />

            <PageHeader
                title="Products"
                subtitle="Advanced Security & Specialized Industrial Solutions"
                image={hero}
            />

            <section className="products-page">

                <SectionTitle
                    tag="PRODUCT RANGE"A
                    title="Engineered Security Products"
                    description="Special & Safety Work manufactures a comprehensive range of security products, industrial steel solutions and engineered systems for military, governmental, commercial and industrial projects."
                />

                {/* SECURITY DOORS */}

                <div id="security-doors" className="product-section">

                    <h2 className="section-heading">
                        Security Doors
                    </h2>

                    <div className="products-grid">

                        {products.securityDoors.map((product, index) => (

                            <div id={product.id} key={index}>
                            <ProductCard
                             image={product.image}
                             title={product.title}
                             description={product.description}
                            />
                            </div>

                        ))}

                    </div>

                </div>

                {/* SECURITY WINDOWS */}

                <div id="security-windows" className="product-section">

                    <h2 className="section-heading">
                        Security Windows
                    </h2>

                    <div className="products-grid">

                        {products.securityWindows.map((product, index) => (

                            <div id={product.id} key={index}>
                                <ProductCard
                                    image={product.image}
                                    title={product.title}
                                    description={product.description}
                                />
                            </div>


                        ))}

                    </div>

                </div>

                {/* FIRE PROTECTION */}

                <div id="fire-rated" className="product-section">

                    <h2 className="section-heading">
                        Fire Protection
                    </h2>

                    <div className="products-grid">

                        {products.fireProtection.map((product, index) => (

                            <div id={product.id} key={index}>
                                <ProductCard
                                    image={product.image}
                                    title={product.title}
                                    description={product.description}
                                />
                            </div>

                        ))}

                    </div>

                </div>

                {/* INDUSTRIAL STEEL */}

                <div id="industrial-steel" className="product-section">

                    <h2 className="section-heading">
                        Industrial Steel Products
                    </h2>

                    <div className="products-grid">

                        {products.industrialSteel.map((product, index) => (

                            <div id={product.id} key={index}>
                                <ProductCard
                                    image={product.image}
                                    title={product.title}
                                    description={product.description}
                                />
                            </div>

                        ))}

                    </div>

                </div>

                {/* SECURITY SYSTEMS */}

                <div id="engineering" className="product-section">

                    <h2 className="section-heading">
                        Security Systems
                    </h2>

                    <div className="products-grid">

                        {products.securitySystems.map((product, index) => (

                            <div id={product.id} key={index}>
                                <ProductCard
                                    image={product.image}
                                    title={product.title}
                                    description={product.description}
                                />
                            </div>

                        ))}

                    </div>

                </div>

                <section className="products-cta">

                    <h2>
                        Need a Custom Security Solution?
                    </h2>

                    <p>
                        Our engineering team can design and manufacture products tailored specifically to your project requirements.
                    </p>

                    <a
                        href="/contact"
                        className="primary-btn"
                    >
                        Contact Us
                    </a>

                </section>

            </section>

<Footer />

        </>

    );

}

export default Products;