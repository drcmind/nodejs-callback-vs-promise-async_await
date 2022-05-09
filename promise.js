const data = require("./data");

function getInscriptions(id) {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const inscription = data.inscriptions.filter(
        (inscription) => inscription.id == id
      )[0];
      if (!error) {
        resolve(inscription);
      } else {
        reject(new Error("Erreur lors de la récupération de l'inscription"));
      }
    }, 2000);
  });
}

function getClasse(inscription) {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const classe = data.classes.filter(
        (classe) => classe.id == inscription.idClasse
      )[0];
      if (!error) {
        resolve({ inscription, classe });
      } else {
        reject(new Error("Erreur lors de la récupération de la classe"));
      }
    }, 2000);
  });
}

function getEleve(inscriptionClasse) {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const eleve = data.eleves.filter(
        (eleve) => eleve.id == inscriptionClasse.inscription.idEleve
      )[0];
      if (!error) {
        resolve({
          inscription: inscriptionClasse.inscription,
          classe: inscriptionClasse.classe,
          eleve,
        });
      } else {
        reject(new Error("Erreur lors de la récupération de l'élève"));
      }
    }, 2000);
  });
}

getInscriptions(1)
  .then((inscription) => {
    return getClasse(inscription);
  })
  .then((inscriptionClasse) => {
    return getEleve(inscriptionClasse);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
