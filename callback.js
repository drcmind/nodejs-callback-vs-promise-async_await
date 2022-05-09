const data = require("./data");

function getInscriptions(id, callback) {
  let error = false;
  setTimeout(() => {
    const inscription = data.inscriptions.filter(
      (inscription) => inscription.id == id
    );
    callback(inscription[0], error);
  }, 2000);
}

function getClasse(id, callback) {
  let error = false;
  setTimeout(() => {
    const classe = data.classes.filter((classe) => classe.id == id)[0];
    callback(classe, error);
  }, 2000);
}

function getEleve(id, callback) {
  let error = false;
  setTimeout(() => {
    const eleve = data.eleves.filter((eleve) => eleve.id == id)[0];
    callback(eleve, error);
  }, 2000);
}

getInscriptions(1, (inscription, error) => {
  if (error) {
    console.error(new Error("Erreur lors de la récupération de l'inscription"));
  } else {
    getClasse(inscription.idClasse, (classe, error) => {
      if (error) {
        console.error(new Error("Erreur lors de la récupération de la classe"));
      } else {
        getEleve(inscription.idEleve, (eleve, error) => {
          if (error) {
            console.error(
              new Error("Erreur lors de la récupération de l'élève")
            );
          } else {
            console.log(inscription, classe, eleve);
          }
        });
      }
    });
  }
});
