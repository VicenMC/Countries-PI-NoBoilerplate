const { default: axios } = require("axios");
const { Activity } = require("../bd/connections.js");
const { Country } = require("../bd/connections.js");

//http://api.countrylayer.com/v2/all?access_key=e92fb250090460d9d89a034718115410

module.exports = {
  pedirPorNombre: (name) => {
    let obj = axios
      .get(`https://restcountries.com/v3/name/${name}`)
      //let obj = axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((resultado) => (resultado = resultado.data))
      .then((resu) => {
        let objeto = [];
        resu.forEach((e) =>
          objeto.push({
            ID: e.cca3,
            name: e.name.common,
            region: e.region,
            flag: e.flags[0],
            capital: e.capital[0],
            area: e.area,
          })
        );
        console.log(objeto);
        return objeto;
      });
    return obj;
  },
  pedirTodos: () => {
    let obj = axios
      .get(`https://restcountries.com/v3/all`)
      //let obj = axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((resultado) => (resultado = resultado.data))
      .then((resu) => {
        let objeto = [];
        resu.forEach((e) =>
          objeto.push({
            ID: e.cca3,
            name: e.name.common,
            region: e.region,
            flag: e.flags[0],
            capital: e.capital ? e.capital[0] : "Capital no encontrada",
            area: e.area,
            subregion: e.subregion,
            population: e.population,
          })
        );
        console.log(objeto);
        return objeto;
      });
    return obj;
  },
  async pedirPaises(req, res) {
    let obj = axios
      .get(`https://restcountries.com/v3/all`)
      .then((resultado) => resultado.data)
      .then((resu) => {
        let objeto = [];
        resu.forEach((e) =>
          objeto.push({
            ID: e.cca3,
            name: e.name.common,
          })
        );
        console.log(objeto);
        return objeto;
      });
  },
  async getUserById(req, res) {
    //Va a recibir el id por params, va a buscar si existe
    const { userId } = req.params; //detructured porque es un obj
    try {
      const user = await User.findById(userId);
      return res.json(user);
    } catch (error) {
      return res.status(400).json({
        message: `User ID does not exist, do you want to register instead?`,
      });
    }
  },
  async createActivity(req, res) {
    const { ID, nombre, difficulty, duration, season } = req.body;
    try {
      const [key, value] = await Activity.findOrCreate({
        where: { nombre },
        defaults: {
          difficulty,
          duration,
          season,
        },
      });
      const country = await Country.findAll({
        where: { ID },
      });
      await key.addCountries(country);
      res.json(key);
      /*const countryMap = await Promise.all(ID.map(element => Country.findByPk(element)));
		await Promise.all(countryMap.map(element => element.addActivity(key)))
		res.json({value:value,key,countryMap})*/
    } catch (e) {
      console.log("Error" + e);
    }
  },
};
