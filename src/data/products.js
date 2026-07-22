import blastResistantDoor from "../assets/products/blast_resistant_door.png";
import bulletproofVisionDoor from "../assets/products/bulletproof_door_with_vision_panel.png";
import bulletproofDoor from "../assets/products/bulletproof_door.png";
import securityDoor from "../assets/products/Security-Doors.jpg";
import shieldDoor from "../assets/products/Shield-Doors.jpg";
import vaultDoor from "../assets/products/Vault-Doors.webp";
import hangarDoor from "../assets/products/Hangar-Doors.jpg";
import elephantDoor from "../assets/products/Elephant-Doors.jpg";
import blowOutDoor from "../assets/products/BlowOut-Door.jpeg";
import acousticalDoor from "../assets/products/Acoustical-Doors.jpg";
import thermalDoor from "../assets/products/thermal-door.png";
import xrayDoor from "../assets/products/XRay-Doors.webp";
import decorativeDoor from "../assets/products/Decorative-Doors.jpg";
import bookStoreDoor from "../assets/products/BookStore-Doors.jpg";
import grillDoor from "../assets/products/Prison-Doors.jpg";

import blastWindow from "../assets/products/Blast-window.png";
import speakThruWindow from "../assets/products/SpeakThru-Window.webp";
import forcedEntryWindow from "../assets/products/Forced-entry-window.jpg";
import acousticalWindow from "../assets/products/Acoustic-Window.jpg";
import burglaryResistantWindow from "../assets/products/burglary_resistant_window.png";
import bulletproofWindow from "../assets/products/BulletProof-Window.png";
import grillWindow from "../assets/products/burglaryresistant-window.avif";

import fireRatedDoor from "../assets/products/FireRated-Door.webp";
import fireSlidingDoor from "../assets/products/FireSliding-Door.jpg";
import fireExitDoor from "../assets/products/FireExit-Door.jpg";

import steelLouvers from "../assets/products/Steel-Louvers.jpg";
import steelTanks from "../assets/products/Steel-Tanks.jpg";
import steelTower from "../assets/products/Steel-Tower.jpg";
import steelPlatforms from "../assets/products/Steel-Platforms.jpeg";
import steelHandrail from "../assets/products/steel_hand_rail.png";
import stainlessSteelHandrail from "../assets/products/Steel-Handrails.jpg";
import heavyDutyGrating from "../assets/products/HeavyDuty-Grating.png";
import steelLadder from "../assets/products/steel_ladder.png";
import steelCageLadder from "../assets/products/Steel-Ladders.jpg";
import roofHatch from "../assets/products/ExitRoof-Hatch.jpg";
import spaceFrames from "../assets/products/Space-Frames.jpg";
import garbageChutes from "../assets/products/Garbage-Chutes.jpg";
import motorizedDampers from "../assets/products/MotorizedDampers-Louvers.jpg";
import concreteMoldings from "../assets/products/Concrete-Molds.webp";
import steelFence from "../assets/products/steel-fence.jpeg";
import plateForms from "../assets/products/Plate-Forms.png";
import blastResistantValves from "../assets/products/BlastResistant-Valves.jpg";

import digitalLocks from "../assets/products/Digital-Locks.webp";
import rollUpShutters from "../assets/products/RollUp-Shutters.jpg";
import shelterSystems from "../assets/products/Shelter-Systems.webp";
import tireKillers from "../assets/products/Tire-Killers.jpg";
import slidingGates from "../assets/products/Sliding-Gates.jpeg";
import collapsibleGates from "../assets/products/Collapsible-Gates.jpg";

const products = {
  securityDoors: [
    {
      id: "blast-resistant-doors",
      title: "Blast Resistant Doors",
      image: blastResistantDoor,
      description:
        "Heavy-duty engineered doors designed for blast-resistant applications.",
    },
    {
      id: "bulletproof-door-vision-panel",
      title: "Bulletproof Door with Vision Panel",
      image: bulletproofVisionDoor,
      description:
        "Ballistic-resistant steel door fitted with a secure glazed vision panel.",
    },
    {
      id: "bulletproof-door",
      title: "Bulletproof Door",
      image: bulletproofDoor,
      description:
        "Solid ballistic-resistant steel door for high-security facilities.",
    },
    {
      id: "vault-doors",
      title: "Vault Doors",
      image: vaultDoor,
      description:
        "Heavy-duty vault door systems for secure rooms and protected storage.",
    },
    {
      id: "shield-doors",
      title: "Shield Doors",
      image: shieldDoor,
      description:
        "Protective steel doors for demanding security applications.",
    },
    {
      id: "security-doors",
      title: "Security Doors",
      image: securityDoor,
      description:
        "Fabricated security doors designed to resist forced entry.",
    },
    {
      id: "acoustical-doors",
      title: "Acoustical Doors",
      image: acousticalDoor,
      description:
        "Specialized doors designed to provide high levels of sound insulation.",
    },
    {
      id: "thermal-doors",
      title: "Thermal Doors",
      image: thermalDoor,
      description:
        "Insulated doors for cold rooms, controlled environments and temperature-sensitive facilities.",
    },
    {
      id: "xray-doors",
      title: "Lead / X-Ray Doors",
      image: xrayDoor,
      description:
        "Radiation-shielding doors for hospitals, laboratories and X-ray rooms.",
    },
    {
      id: "hangar-doors",
      title: "Hangar Doors",
      image: hangarDoor,
      description:
        "Large industrial door systems for aircraft hangars and wide openings.",
    },
    {
      id: "elephant-doors",
      title: "Elephant Doors",
      image: elephantDoor,
      description:
        "Extra-heavy-duty industrial doors for oversized and demanding openings.",
    },
    {
      id: "blow-out-doors",
      title: "Blow Out Doors",
      image: blowOutDoor,
      description:
        "Pressure-relief doors designed for industrial safety applications.",
    },
    {
      id: "decorative-doors",
      title: "Decorative Door",
      image: decorativeDoor,
      description:
        "Decorative fabricated metal doors for architectural applications.",
    },
    {
      id: "book-store-doors",
      title: "Book Store Doors",
      image: bookStoreDoor,
      description:
        "Specialized secure doors for controlled retail and storage areas.",
    },
    {
      id: "grill-doors",
      title: "Grill Doors",
      image: grillDoor,
      description:
        "Heavy-duty steel grill doors for secure and controlled access.",
    },
  ],

  securityWindows: [
    {
      id: "blast-resistant-windows",
      title: "Blast Resistant Windows",
      image: blastWindow,
      description:
        "Reinforced window systems designed to reduce blast-related hazards.",
    },
    {
      id: "speak-thru-windows",
      title: "Speak-Thru Windows",
      image: speakThruWindow,
      description:
        "Secure communication windows for controlled service and transaction areas.",
    },
    {
      id: "forced-entry-windows",
      title: "Forced Entry Windows",
      image: forcedEntryWindow,
      description:
        "Reinforced window systems designed to resist forced-entry attempts.",
    },
    {
      id: "acoustical-windows",
      title: "Acoustical Windows",
      image: acousticalWindow,
      description:
        "High-performance windows designed to reduce sound transmission.",
    },
    {
      id: "burglary-resistant-windows",
      title: "Burglary Resistant Windows",
      image: burglaryResistantWindow,
      description:
        "Reinforced security windows offering enhanced resistance to break-ins.",
    },
    {
      id: "bulletproof-windows",
      title: "Bulletproof Windows",
      image: bulletproofWindow,
      description:
        "Ballistic-resistant glazing systems for high-security applications.",
    },
    {
      id: "grill-windows",
      title: "Grill Windows",
      image: grillWindow,
      description:
        "Fabricated steel grill windows for secure openings and controlled areas.",
    },
  ],

  fireProtection: [
    {
      id: "fire-rated-doors",
      title: "Fire Rated Doors",
      image: fireRatedDoor,
      description:
        "Certified door systems designed to limit the spread of fire and smoke.",
    },
    {
      id: "fire-sliding-doors",
      title: "Fire Sliding Doors",
      image: fireSlidingDoor,
      description:
        "Industrial sliding door systems designed for fire-rated openings.",
    },
    {
      id: "fire-exit-doors",
      title: "Fire Exit Doors",
      image: fireExitDoor,
      description:
        "Emergency exit door systems designed for safe and rapid evacuation.",
    },
  ],

  industrialSteel: [
    {
      id: "steel-louvers",
      title: "Steel Louvers",
      image: steelLouvers,
      description:
        "Fabricated steel ventilation louvers for industrial facilities.",
    },
    {
      id: "steel-tanks",
      title: "Steel Tanks",
      image: steelTanks,
      description:
        "Custom-fabricated steel tanks for industrial storage applications.",
    },
    {
      id: "steel-towers",
      title: "Steel Towers",
      image: steelTower,
      description:
        "Engineered steel tower structures for industrial and infrastructure projects.",
    },
    {
      id: "steel-platforms",
      title: "Steel Platforms",
      image: steelPlatforms,
      description:
        "Fabricated industrial platforms for safe access and equipment support.",
    },
    {
      id: "steel-hand-rail",
      title: "Steel Hand Rail",
      image: steelHandrail,
      description:
        "Durable fabricated steel hand rail systems for industrial access areas.",
    },
    {
      id: "stainless-steel-hand-rail",
      title: "Stainless Steel Hand Rail",
      image: stainlessSteelHandrail,
      description:
        "Corrosion-resistant stainless steel hand rail systems for architectural and access applications.",
    },
    {
      id: "heavy-duty-grating",
      title: "Heavy Duty Grating",
      image: heavyDutyGrating,
      description:
        "Heavy-duty steel grating for industrial walkways, platforms and plant access areas.",
    },
    {
      id: "steel-ladder",
      title: "Steel Ladder",
      image: steelLadder,
      description:
        "Fixed fabricated steel ladders for industrial access applications.",
    },
    {
      id: "steel-cage-ladder",
      title: "Steel Cage Ladder",
      image: steelCageLadder,
      description:
        "Fixed steel access ladders fitted with protective safety cages.",
    },
    {
      id: "roof-hatch",
      title: "Roof Hatch",
      image: roofHatch,
      description:
        "Secure fabricated roof-access hatch systems for industrial and commercial buildings.",
    },
    {
      id: "space-frames",
      title: "Space Frames",
      image: spaceFrames,
      description:
        "Large-span structural steel framing systems for architectural and industrial projects.",
    },
    {
      id: "garbage-chutes",
      title: "Garbage Chutes",
      image: garbageChutes,
      description:
        "Commercial and residential waste-management chute systems.",
    },
    {
      id: "motorized-dampers",
      title: "Motorized Dampers",
      image: motorizedDampers,
      description:
        "Automated ventilation and air-control dampers for industrial systems.",
    },
    {
      id: "concrete-moldings",
      title: "Concrete Moldings",
      image: concreteMoldings,
      description:
        "Custom-fabricated molds and formwork solutions for concrete production.",
    },
    {
      id: "steel-fence",
      title: "Steel Fence",
      image: steelFence,
      description:
        "Fabricated steel fencing systems for perimeter protection and access control.",
    },
    {
      id: "plate-forms",
      title: "Plate Forms",
      image: plateForms,
      description:
        "Fabricated steel plate-form solutions for industrial and construction applications.",
    },
    {
      id: "blast-resistant-valves",
      title: "Blast Resistant Valves",
      image: blastResistantValves,
      description:
        "Protective valves engineered for blast-resistant ventilation systems.",
    },
  ],

  securitySystems: [
    {
      id: "digital-locks",
      title: "Digital Locks",
      image: digitalLocks,
      description:
        "Electronic locking systems for secure access-control applications.",
    },
    {
      id: "roll-up-shutters",
      title: "Roll Up Shutters",
      image: rollUpShutters,
      description:
        "Industrial rolling shutters for secure commercial and industrial openings.",
    },
    {
      id: "shelter-systems",
      title: "Shelter Systems",
      image: shelterSystems,
      description:
        "Protective shelter systems designed for safety and emergency applications.",
    },
    {
      id: "tire-killers",
      title: "Tire Killers",
      image: tireKillers,
      description:
        "Vehicle access-control systems designed to stop unauthorized entry.",
    },
    {
      id: "sliding-gates",
      title: "Sliding Gates",
      image: slidingGates,
      description:
        "Heavy-duty automated sliding gates for controlled vehicle access.",
    },
    {
      id: "collapsible-gates",
      title: "Collapsible Gates",
      image: collapsibleGates,
      description:
        "Expandable steel security gates for commercial and industrial openings.",
    },
  ],
};

export default products;