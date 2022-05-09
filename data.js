const classe1 = { id: 1, designation: "1er Génie civil" };
const classe2 = { id: 2, designation: "2e Génie civil" };

const classes = [classe1, classe2];

const eleve1 = { id: 1, noms: "Louis Musole", adresse: "Uvira" };
const eleve2 = { id: 2, noms: "Amani Bisimwa", adresse: "Bukavu" };

const eleves = [eleve1, eleve2];

const inscriptions = [
  {
    id: 1,
    idEleve: 1,
    idClasse: 1,
    anneeScolaire: "2021-2022",
    dateInscription: new Date(),
  },
  {
    id: 2,
    idEleve: 2,
    idClasse: 1,
    anneeScolaire: "2021-2022",
    dateInscription: new Date(),
  },
];

module.exports = { classes, eleves, inscriptions };
