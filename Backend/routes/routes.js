const express = require("express");
const router = express.Router();
const { Sequelize } = require("sequelize");
const { Country, Activity, ActivityCountry } = require("../bd/connections.js");
const {
  pedirPorNombre,
  pedirTodos,
  pedirPaises,
  createEvent,
  createActivity,
  getApiGames,
} = require("../controllers/controller.js");
const controller = require("../controllers/controller.js");


router.route("/countries").get(async (req, res) => {
  let { name } = req.query;
  try {
    let prueba = await Country.findAll();
    if (prueba.length === 0) {
      let country = await pedirTodos();
      let countries = await Country.bulkCreate(country);
      return res.json(countries);
    } else {
      if (name !== undefined) {
        var matchName = name.toLowerCase().split(' ');
   for (var i = 0; i < matchName.length; i++) {
       matchName[i] = matchName[i].charAt(0).toUpperCase() + matchName[i].substring(1);     
   }
        let countrySearch = await Country.findAll({
          where: { name: {
             [Sequelize.Op.iLike]: `${name}%`
          } },
          include: Activity,
        });
        if (countrySearch.length === 0) {
          res.status(400).json({ error: "País no encontrado" });
        } else {
          res.json(countrySearch);
        }
      } else {
        res.json(prueba);
      }
    }
  } catch (e) {
    res.status(400).json({ error: "País no encontrado" + e });
  }
});

router.route("/activities").get(async (req, res) => {
  try {
    let prueba = await Activity.findAll();
    if (prueba.length !== 0) {
      res.json(prueba);
    } else {
      prueba = []
      res.json(prueba);
    }
  } catch (e) {
    res.status(400).json({ error: "País no encontrado" + e });
  }
});

router.route("/relations").get(async (req, res) => {
  let prueba = await ActivityCountry.findAll();
  if (prueba.length !== 0) {
    return res.json(prueba);
  }
});

/*
router.route("/countries/country").get(async (req, res) => {
  try {
    let search = await Country.findAll();
    if (search.length !== 0) {
      let countryNames = await pedirPaises();
      console.log(countryNames);
      let countryList = await Promise.all(
        countryNames.map((e) => Country.find({ ID: e.ID, name: e.name }))
      );
      console.log(countryList);
      res.json(countryList);
    } else {
      console.log(search);
      res.json(search);
    }
  } catch (e) {
    res.status(400).json(e);
  }
});
*/
router.route("/countries/:id").get(async (req, res) => {
  const { id } = req.params;
  if (id) {
    try {
      let country = await Country.findByPk(id, {
        include: Activity,
      });
      res.json(country || "Country not found");
    } catch (e) {
      console.log("ERRROR" + e);
    }
  }
});

router.post("/activity", controller.createActivity);
/*.post(async(req, res) =>{
	const{ID, nombre,difficulty,duration,season}=req.body;
	console.log(ID, nombre,difficulty,duration,season)
	try{
		ID.forEach(element => console.log(element))
		const [key, value] =await Activity.findOrCreate({
			where: {nombre},
			defaults:{
				difficulty,
				duration,
				season,
			}
		})
		const country = await Country.findAll({
			where:{ID}
		})
		  await key.addCountries(country);
		res.json(key)
	}
	catch(e){
		res.status(400).json({error:'Country not found' + e})
	}
})*/



module.exports = router;
