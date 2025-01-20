import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  leadsSidebar: [
    "leads/home",
    "leads/getting-started",
    "leads/forms",
    {
      type: "category",
      label: "Competitions",
      link: {
        type: "doc",
        id: "leads/competitions/introduction",
      },
      items: ["leads/competitions/scouting-assignments", "leads/competitions/tba-code"],
    },
    "leads/scouter-management",
    {
      type: "category",
      label: "Data Analysis",
      link: {
        type: "doc",
        id: "leads/data-analysis/introduction",
      },
      items: [
        "leads/data-analysis/team-overview",
        "leads/data-analysis/team-rank",
        "leads/data-analysis/weighted-team-rank",
        "leads/data-analysis/match-predictor",
        "leads/data-analysis/export-to-csv",
      ],
    },
    "leads/picklists",
    "leads/scoutcoin",
  ],
  scoutersSidebar: [
      "scouters/home"
  ],
};

export default sidebars;
