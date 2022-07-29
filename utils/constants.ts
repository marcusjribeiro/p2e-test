export const months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

let date = new Date();
date.setDate(date.getDate() - 1);
date.setHours(0, 0, 0, 0);
const yesterday = new Date(date).toISOString();

export const prefetchReqs = {
  fullFetch: {
    from: "2022-07-01T00:00:00.000000Z",
    breedCount: [0, 3],
    legend: [0, 6],
    purity: [0, 6],
    crabClass: [
      "SURGE",
      "SUNKEN",
      "PRIME",
      "BULK",
      "CRABOID",
      "RUINED",
      "GEM",
      "ORGANIC",
    ],
  },
  SURGE: {
    from: "2022-07-01T00:00:00.000000Z",
    breedCount: [0, 3],
    legend: [0, 6],
    purity: [0, 6],
    crabClass: ["SURGE"],
  },
  SUNKEN: {
    from: "2022-07-01T00:00:00.000000Z",
    breedCount: [0, 3],
    legend: [0, 6],
    purity: [0, 6],
    crabClass: ["SUNKEN"],
  },
  PRIME: {
    from: "2022-07-01T00:00:00.000000Z",
    breedCount: [0, 3],
    legend: [0, 6],
    purity: [0, 6],
    crabClass: ["PRIME"],
  },
  BULK: {
    from: "2022-07-01T00:00:00.000000Z",
    breedCount: [0, 3],
    legend: [0, 6],
    purity: [0, 6],
    crabClass: ["BULK"],
  },
  CRABOID: {
    from: "2022-07-01T00:00:00.000000Z",
    breedCount: [0, 3],
    legend: [0, 6],
    purity: [0, 6],
    crabClass: ["CRABOID"],
  },
  RUINED: {
    from: "2022-07-01T00:00:00.000000Z",
    breedCount: [0, 3],
    legend: [0, 6],
    purity: [0, 6],
    crabClass: ["RUINED"],
  },
  GEM: {
    from: "2022-07-01T00:00:00.000000Z",
    breedCount: [0, 3],
    legend: [0, 6],
    purity: [0, 6],
    crabClass: ["GEM"],
  },
  ORGANIC: {
    from: "2022-07-01T00:00:00.000000Z",
    breedCount: [0, 3],
    legend: [0, 6],
    purity: [0, 6],
    crabClass: ["ORGANIC"],
  },
  yesterday: {
    from: yesterday,
    breedCount: [0, 3],
    legend: [0, 6],
    purity: [0, 6],
    crabClass: [
      "SURGE",
      "SUNKEN",
      "PRIME",
      "BULK",
      "CRABOID",
      "RUINED",
      "GEM",
      "ORGANIC",
    ],
  },
};
