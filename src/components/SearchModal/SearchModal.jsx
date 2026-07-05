import "./SearchModal.css";

import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaTimes } from "react-icons/fa";

import searchData from "../../data/searchData";

function SearchModal({ open, onClose }) {

    const [query, setQuery] = useState("");

    useEffect(() => {

        if (!open) {

            setQuery("");

            return;

        }

        const closeOnEsc = (e) => {

            if (e.key === "Escape") {

                onClose();

            }

        };

        document.addEventListener("keydown", closeOnEsc);

        return () =>
            document.removeEventListener("keydown", closeOnEsc);

    }, [open, onClose]);

    const results = useMemo(() => {

        if (!query.trim()) return [];

        const q = query.toLowerCase();

        return searchData.filter((item) =>

            item.title.toLowerCase().includes(q) ||

            item.category.toLowerCase().includes(q) ||

            item.keywords?.some((keyword) =>
                keyword.toLowerCase().includes(q)
            )

        );

    }, [query]);

    if (!open) return null;

    return (

        <div
            className="search-overlay"
            onClick={onClose}
        >

            <div
                className="search-modal"
                onClick={(e) => e.stopPropagation()}
            >

                <button
                    className="search-close"
                    onClick={onClose}
                >
                    <FaTimes />
                </button>

                <div className="search-input-wrapper">

                    <FaSearch />

                    <input
                        autoFocus
                        type="text"
                        placeholder="Search products, projects, certifications, pages..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                </div>

                {query.trim() && (

                    <div className="search-results">

                        {results.length > 0 ? (

                            results.map((item, index) => (

                                <Link
                                    key={index}
                                    to={item.link}
                                    className="search-result"
                                    onClick={onClose}
                                >

                                    <span>{item.category}</span>

                                    <h4>{item.title}</h4>

                                </Link>

                            ))

                        ) : (

                            <div className="no-results">

                                No results found.

                            </div>

                        )}

                    </div>

                )}

            </div>

        </div>

    );

}

export default SearchModal;