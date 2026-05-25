import webgisDashboard from "@/assets/project-webgis-dashboard.jpg";
import webgisDb from "@/assets/project-webgis-db.jpg";
import webgisQuery from "@/assets/project-webgis-query.jpg";
import webgisAi from "@/assets/project-webgis-ai.jpg";
import washDistricts from "@/assets/project-wash-districts.jpg";
import groundwater from "@/assets/project-groundwater.jpg";
import geomorphology from "@/assets/project-geomorphology.jpg";
import lulc from "@/assets/project-lulc.jpg";
import ndvi from "@/assets/project-ndvi.jpg";
import coffee from "@/assets/project-coffee.jpg";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  cover: string;
  tags: string[];
  sdgs: string[];
  challenge: string;
  solution: string;
  impact: string;
  tools: string[];
  link?: string;
  gallery: { src: string; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: "webgis-municipal-asset-management",
    title: "WebGIS for Municipal Asset Management",
    subtitle: "Lae Urban Municipality — Ward 2",
    location: "Lae, Morobe Province, PNG",
    cover: webgisDashboard,
    tags: ["WebGIS", "Mapbox", "Supabase", "Dashboard"],
    sdgs: ["SDG 11", "SDG 12"],
    challenge:
      "Improving urban management and transparency in land-use planning across a rapidly growing municipal area.",
    solution:
      "Built a WebGIS interface using Mapbox + Supabase PostgreSQL to track payment status, property sections, total land area, and ownership — paired with an AI data-analysis assistant.",
    impact:
      "Enhanced urban management and maintenance of public infrastructure with a real-time dashboard for municipal managers to visualize outstanding tax and property distribution across 1,847+ properties.",
    tools: ["WebGIS", "Mapbox GL", "Supabase", "PostgreSQL/PostGIS", "AI Analytics"],
    link: "https://www.laeurbanmunicipal.com/",
    gallery: [
      { src: webgisDashboard, caption: "Municipal management dashboard — properties, payments and key metrics." },
      { src: webgisDb, caption: "Integrated attribute table in Supabase PostgreSQL." },
      { src: webgisQuery, caption: "Sample query result — property valuation by section." },
      { src: webgisAi, caption: "AI-powered insight generation over the GIS dataset." },
    ],
  },
  {
    slug: "elc-png-wash-scoping",
    title: "ELC-PNG COVID-19 WaSH Scoping",
    subtitle: "Multi-sectoral Spatial Mapping",
    location: "Morobe, Highlands & Madang — 17 Districts",
    cover: washDistricts,
    tags: ["CommCare", "Field Mapping", "Cartography"],
    sdgs: ["SDG 3", "SDG 6"],
    challenge:
      "ELCPNG and the Church Partnership Program urgently needed to assess and spatialize WaSH infrastructure vulnerabilities across 17 districts to optimize COVID-19 relief distribution.",
    solution:
      "Migrated synchronized cloud raw datasets into a customized desktop GIS workspace and produced interactive analytical charts contrasting population vs. water storage capacity, and latrine condition levels across surveyed facilities.",
    impact:
      "Cartographic province-level district scoping maps revealed that 52.8% of water sources were unimproved — directly guiding maintenance, reconstruction and new water-source siting decisions.",
    tools: ["ArcGIS", "QGIS", "CommCare", "Cloud Data Sync"],
    gallery: [
      { src: washDistricts, caption: "ELC PNG 17 districts — WaSH infrastructure overview." },
    ],
  },
  {
    slug: "groundwater-potentiality-mapping",
    title: "Groundwater Potentiality Mapping",
    subtitle: "Multi-Criteria Spatial Analysis",
    location: "East New Britain Province, PNG",
    cover: groundwater,
    tags: ["Remote Sensing", "MCDA", "AHP", "Weighted Overlay"],
    sdgs: ["SDG 6"],
    challenge:
      "Identifying sustainable groundwater sources to improve community health and inform water resource management.",
    solution:
      "Integrated lithology, geomorphology, hydrologic soil group, rainfall, slope, drainage density, lineament density, LULC and NDVI layers. Analyzed via MIF and Analytical Hierarchy Process (AHP) to derive normalized weights for a weighted-sum overlay.",
    impact:
      "Categorized the province into 'Very Poor' to 'Very Good' groundwater potential zones — directly contributing to Clean Water and Sanitation goals and supporting exploration planning.",
    tools: ["ArcGIS", "QGIS", "Remote Sensing", "Multi-Criteria Analysis"],
    link: "https://archives.palarch.nl/index.php/jae/article/view/7248",
    gallery: [
      { src: groundwater, caption: "Final groundwater potentiality classification map." },
      { src: geomorphology, caption: "Geomorphology thematic layer." },
      { src: lulc, caption: "Land Use / Land Cover classification." },
      { src: ndvi, caption: "NDVI classification map." },
    ],
  },
  {
    slug: "morobe-ecoffee-community-mapping",
    title: "Morobe E-Coffee Community Mapping",
    subtitle: "Mobile data collection for women coffee farmers",
    location: "Wain/Erap LLG, Morobe Province",
    cover: coffee,
    tags: ["CommCare", "GPS", "Field Mapping", "QGIS"],
    sdgs: ["SDG 2", "SDG 5", "SDG 8"],
    challenge:
      "Mapping coffee production areas and streamlining field data collection in rugged terrain to support local farmers — particularly women.",
    solution:
      "Integrated CommCare mobile applications with GPS devices and QGIS. Created detailed production maps showing farmer locations, village clusters, drop zones and access routes.",
    impact:
      "Empowered women farmers with digital footprints of their production, facilitated fairer market negotiations, and promoted sustainable agricultural practices through precise mapping.",
    tools: ["CommCare Mobile App", "GPS", "QGIS", "Field Mapping"],
    gallery: [
      { src: coffee, caption: "Coffee production areas across Wain/Erap LLG." },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
