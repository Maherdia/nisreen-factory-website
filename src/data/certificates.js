import ara from "../assets/certificates/ara.png";
import dnv from "../assets/certificates/dnv.jpg";
import intertek from "../assets/certificates/Intertek.png";
import iso9001 from "../assets/certificates/iso9001-2015.webp";
import iso45001 from "../assets/certificates/iso45001-2018.png";
import sirim from "../assets/certificates/SirimQAS.png";
import tuv from "../assets/certificates/tuv-nord.webp";
import joddb from "../assets/certificates/joddb.png";
import testex from "../assets/certificates/testex.png";

import intertekAssembly1 from "../assets/certificates/intertec-hatchdoor-assembly.pdf";
import intertekAssembly2 from "../assets/certificates/intertec-hatchdoor-assembly2.pdf";
import intertekBallistics from "../assets/certificates/Intertek-ballistics.pdf";
import iso9001Pdf from "../assets/certificates/iso-9001-2015.pdf";
import iso45001Pdf from "../assets/certificates/iso-45001-2018.pdf";
import tuvPdf from "../assets/certificates/tuv-nord-certificate.pdf";

const certificates = [

    {
        id: 1,
        name: "ARA",
        image: ara,

        pdfs:[],
    },

    {
        id: 2,
        name: "DNV",
        image: dnv,

        pdfs: [],
    },

    {
        id: 3,
        name: "Intertek",
        image: intertek,

        pdfs: [
            {
                title: "Ballistics Test",
                file: intertekBallistics,
            },
            {
                title: "Hatch Door Assembly",
                file: intertekAssembly1,
            },
            {
                title: "Hatch Door Assembly 2",
                file: intertekAssembly2,
            },
        ],
    },

    {
        id: 4,
        name: "ISO 9001:2015",
        image: iso9001,

        pdfs: [
            {
                title: "ISO 9001:2015 Certificate",
                file: iso9001Pdf,
            },
        ],
    },

    {
        id: 5,
        name: "ISO 45001:2018",
        image: iso45001,

        pdfs: [
            {
                title: "ISO 45001:2018 Certificate",
                file: iso45001Pdf,
            },
        ],
    },

    {
        id: 6,
        name: "SIRIM QAS",
        image: sirim,
        pdfs: [],
    },

    {
        id: 7,
        name: "TÜV NORD",
        image: tuv,
        pdfs: [
            {
                title: "TÜV NORD Certificate",
                file: tuvPdf,
            },
        ],
    },

    {
        id: 8,
        name: "JODDB",
        image: joddb,
        pdfs: [],
    },

    {
        id: 9,
        name: "TESTEX",
        image: testex,
        pdfs: [],
    },

];

export default certificates;