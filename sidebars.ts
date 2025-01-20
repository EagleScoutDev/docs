import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "home",
    "getting-started",
    "forms",
    {
      type: "category",
      label: "Competitions",
      link: {
        type: "doc",
        id: "competitions/introduction",
      },
      items: ["competitions/scouting-assignments", "competitions/tba-code"],
    },
    "scouter-management",
    {
      type: "category",
      label: "Data Analysis",
      link: {
        type: "doc",
        id: "data-analysis/introduction",
      },
      items: [
        "data-analysis/team-overview",
        "data-analysis/team-rank",
        "data-analysis/weighted-team-rank",
        "data-analysis/match-predictor",
        "data-analysis/export-to-csv",
      ],
    },
    "picklists",
    "scoutcoin",
  ],
};

export default sidebars;
