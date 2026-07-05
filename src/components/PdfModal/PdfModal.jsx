import "./PdfModal.css";

import { useEffect, useState } from "react";

function PdfModal({
    isOpen,
    onClose,
    title,
    pdf,
    pdfs = [],
}) {

    const [selectedPdf, setSelectedPdf] = useState(null);

    useEffect(() => {

        if (!isOpen) return;

        if (pdfs.length > 0) {
            setSelectedPdf(pdfs[0]);
        } else if (pdf) {
            setSelectedPdf({
                title,
                file: pdf,
            });
        }

    }, [isOpen, pdf, pdfs, title]);

    if (!isOpen) return null;

    return (

        <div
            className="pdf-overlay"
            onClick={onClose}
        >

            <div
                className="pdf-modal"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="pdf-header">

                    <h2>{title}</h2>

                    <button
                        className="pdf-close"
                        onClick={onClose}
                    >
                        ✕
                    </button>

                </div>

                {pdfs.length > 0 && (

                    <div className="pdf-list">

                        {pdfs.map((item, index) => (

                            <button
                                key={index}
                                className={`pdf-item ${
                                    selectedPdf?.file === item.file
                                        ? "active"
                                        : ""
                                }`}
                                onClick={() => setSelectedPdf(item)}
                            >
                                📄 {item.title}
                            </button>

                        ))}

                    </div>

                )}

                <div className="pdf-body">

                    {selectedPdf && (

                        <iframe
                            src={selectedPdf.file}
                            title={selectedPdf.title}
                        />

                    )}

                </div>

            </div>

        </div>

    );

}

export default PdfModal;