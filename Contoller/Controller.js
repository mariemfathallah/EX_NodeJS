const Groupe = require("../Model/Groupe");

exports.Groupe = async (req,res) => {
  try {
    const {nom, nbrEtudiant} = req.body;

    let groupe= new Groupe({
      nom,
      nbrEtudiant,
    });
    await groupe.save();
    
    res.status(200).send(groupe);
    console.log(groupe)
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
