import afconsKnpc from "../assets/projects/afcons-knpc.pdf";
import alArrabKap2Approval from "../assets/projects/al-arrab-kap2-approval.pdf";
import alBawaniBlastBulletDoorsWindowsApproval from "../assets/projects/al-bawani-blast-bullet-doors-windows-approval.pdf";
import alBawaniPrequalification from "../assets/projects/al-bawani-prequalification.pdf";
import alBawaniRoadBlockerApproval from "../assets/projects/al-bawani-road-blocker-approval.pdf";
import alBenatSlidingDoorApproval from "../assets/projects/al-benat-sliding-door-approval.pdf";
import alJabreenMaterialApproval from "../assets/projects/al-jabreen-material-approval.pdf";
import alJabreenRoadBlockerApproval from "../assets/projects/al-jabreen-road-blocker-approval.pdf";
import allatifiaBlastDoors from "../assets/projects/allatifia-blastdoors.pdf";
import bouruqElSharqiya from "../assets/projects/bouruq-elsharqiya.pdf";
import cscecAccessDoorApproval from "../assets/projects/cscec-access-door-approval.pdf";
import mofaBlastBulletDoorsWindowsApproval from "../assets/projects/mofa-blast-bullet-doors-windows-approval.pdf";
import patriotTestingReport from "../assets/projects/patriot-testing-report.pdf";
import redSeaGlobalAmaalaApproval from "../assets/projects/red-sea-global-amaala-approval.pdf";
import saudiAramcoKacwcVisionPanelsApproval from "../assets/projects/saudi-aramco-kacwc-vision-panels-approval.pdf";
import kap3steelgate from "../assets/projects/kap3-steelgate-saud-ibinladen.pdf";
import saudibinladenshelterdoors from "../assets/projects/saudi-binladen-shelterdoor.pdf";
import moisouthborder from "../assets/projects/moi-south-border-approval.pdf";




const projects = [
    {
        project: "Prince Sultan Air Base, Al Kharj / King Fahad Air Base, Taif / King Abdulaziz Air Base, Dhahran",
        client: "Ministry of Defence and Aviation",
        contractor: "Al Bawani General Contracting",
        description: "Blast Resistant Swing & Sliding Doors",
        category: "Military",
        pdf: alBawaniBlastBulletDoorsWindowsApproval,
    },

    {
        project: "MOFA Diplomatic Institute",
        client: "Ministry of Foreign Affairs",
        contractor: "Al Bawani General Contracting",
        description: "Bullet Proof & Blast Proof Doors and Windows",
        category: "Government",
        pdf: mofaBlastBulletDoorsWindowsApproval,
    },

    {
        project: "30 Bunkers, Al Hasa",
        client: "Saudi Arabian National Guard",
        contractor: "Latifia Trading & Contracting",
        description: "Blast Bunker Doors",
        category: "Military",

        pdf: allatifiaBlastDoors,
    },

    {
        project: "Igloo Store 1/6/138",
        client: "Ministry of Defence and Aviation",
        contractor: "Bouruq El Sharqiya",
        description: "Anti Blast Sliding Door",
        category: "Military",

        pdf: bouruqElSharqiya,
    },

    {
        project: "Patriot Missile Storage",
        client: "Ministry of Defence and Aviation",
        contractor: "Bouruq El Sharqiya",
        description: "Anti Blast Sliding Door",
        category: "Military",

        pdf: patriotTestingReport,
    },

    {
        project: "KNPC Sulphur Handling Facilities",
        client: "Daelim Korea",
        contractor: "Afcons Infrastructure Co.",
        description: "Blast Resistant Windows",
        category: "Industrial",

        pdf: afconsKnpc,
    },

    {
        project: "Diriyah Gate Infrastructure Construction General Contractor",
        client: "Diriyah Gate Company Limited (DGCL)",
        contractor: "ESEC - CSCEC JV",
        description: "Access Door",
        category: "Government",
        pdf: cscecAccessDoorApproval,
    },

    {
        project: "Military Maintenance Facilities - Rimah & Tabuk",
        client: "Al Bawani Company Ltd.",
        contractor: "Al Bawani Company Ltd.",
        description: "Road Blockers",
        category: "Military",
        pdf: alBawaniRoadBlockerApproval,
    },

    {
        project: "King Saud Air Base - KKMC",
        client: "Ministry of Defence and Aviation",
        contractor: "Al Jabreen Contracting",
        description: "Road Blockers & Bullet Resistant Windows",
        category: "Military",
        pdf: alJabreenRoadBlockerApproval,
    },

    {
        project: "Northern Region Tactical Areas - Hafr Al Batin",
        client: "Ministry of Defence and Aviation",
        contractor: "Al Jabreen Contracting",
        description: "Watch Towers & Reinforced Sliding Gates",
        category: "Military",
        pdf: alJabreenMaterialApproval,
    },

    {
        project: "Red Sea Global Development",
        client: "Red Sea Global",
        contractor: "Saudi Binladin Group",
        description: "Fire Rated Doors & Security Doors",
        category: "Commercial",
        pdf: redSeaGlobalAmaalaApproval,
    },

    {
        project: "KING ABDULAZIZ CENTER FOR WORLD CULTURE PROJECT",
        client: "Saudi Aramco",
        contractor: "Saudi Oger Limited",
        description: "Glass Vision Panels",
        category: "Industrial",
        pdf: saudiAramcoKacwcVisionPanelsApproval,
    },

    {
        project: "Ministry of Foreign Affairs",
        client: "Al Bawani Company",
        contractor: "Buro Happold Engineering",
        description: "Bullet Proof Doors and Windows",
        category: "Material Approval",
        pdf: alBawaniPrequalification,
    },

    {
        project: "Ammunition Warehouse",
        client: "Ministry of Defence/GDMW",
        contractor: "Al Benat Contracting Company",
        description: "Anti Blast Sliding Doors",
        category: "Material Approval",
        pdf: alBenatSlidingDoorApproval,
    },

    {
        project: "KAP-3 Security Facilities",
        client: "Ministry of Interior",
        contractor: "Saudi Binladin Group",
        description: "Security Steel Gate",
        category: "Government",
        pdf: kap3steelgate,
    },

    {
        project: "South Border Security Fence",
        client: "Ministry of Interior",
        contractor: "Saudi Binladin Group",
        description: "Bullet Proof Steel Doors",
        category: "Government",
        pdf: moisouthborder,
    },

    {
        project: "Military Shelter Facilities",
        client: "Saudi Binladin Group",
        contractor: "Saudi Binladin Group",
        description: "Blast Resistant Shelter Doors",
        category: "Military",
        pdf: saudibinladenshelterdoors,
    },

];
export default projects;