/*export const Mostrar=()=>{
    return function(dispatch){
     fetch('http://localhost:3001/countries')
        .then(resultado => resultado.json())
        .then(resu => dispatch({type:'MOSTRAR', payload:resu}))
    };
}*/

import axios from 'axios';

export const Mostrar =() => {
  return async (dispatch) => {
    try{
      const response = await axios.get('/countries');
      if(response?.data){
        dispatch({type: "MOSTRAR", payload: {countries: response.data}})
      }
    }catch(error){
      console.log(error)
    }
  }
}


/*export const Mostrar = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/countries")
      .then((result) => result.json())
      .then((r) => {
        dispatch({ type: "MOSTRAR", payload: r });
      });
  };
};
*/


export const Actividades =() => {
  return async (dispatch) => {
    try{
      const response = await axios.get('/activities');
      if(response?.data){
        dispatch({type: "ACTIVIDADES", payload: {actis: response.data}})
      }
    }catch(error){
      console.log(error)
    }
  }
}
/*
export const Actividades = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/activities")
      .then((result) => result.json())
      .then((r) => {
        dispatch({ type: "ACTIVIDADES", payload: r });
      });
  };
};*/

export const MostrarDetalles =(arg) => {
  return async (dispatch) => {
    try{
      const response = await axios.get(`/countries/${arg}`);
      if(response?.data){
        dispatch({type: "MOSTRARDETALLES", payload: {detis: response.data}})
      }
    }catch(error){
      console.log(error)
    }
  }
}

/*
export const MostrarDetalles = (arg) => {
  return function (dispatch) {
    fetch(`http://localhost:3001/countries/${arg}`)
      .then((result) => result.json())
      .then((r) => {
        dispatch({ type: "MOSTRARDETALLES", payload: r });
      });
  };
};*/

export const Generar =(arg) => {
  return async (dispatch) => {
    try{
      const response = await axios.get(`/countries?name=${arg}`);
      if(response?.data){
        dispatch({type: "GENERAR", payload: {detshow: response.data}})
      }
    }catch(error){
      console.log(error)
    }
  }
}

/*
export const Generar = (arg) => {
  return function (dispatch) {
    if (arg) {
      fetch(`http://localhost:3001/countries?name=${arg}`)
        .then((resultado) => resultado.json())
        .then((resu) => dispatch({ type: "GENERAR", payload: resu }));
    }
  };
};
*/
export const Filtrar = (arg) => {
  return {
    type: "FILTRAR",
    payload: arg, //contenido de lo que vas a cambiar
  };
};
export const FiltrarAZ = (arg) => {
  if (arg !== "") {
    return {
      type: "FILTRARAZ",
      payload: arg,
    };
  }
};

export const FiltrarActivities =(arg) => {
  return async (dispatch) => {
    try{
      const response = await axios.get(`/relations`);
      if(response?.data){
        dispatch({type: "FILTRARACTIVITIES", payload: [arg, response.data] })
      }
    }catch(error){
      console.log(error)
    }
  }
}

/*
export const FiltrarActivities = (arg) => {
  return function (dispatch) {
    fetch("http://localhost:3001/relations")
      .then((result) => result.json())
      .then((r) => {
        dispatch({ type: "FILTRARACTIVITIES", payload: [arg, r] });
      });
  };
};
*/




/*
export const GetCountries = () => {
  return function (dispatch) {
    fetch(`http://localhost:3001/countrie/country`)
      .then((result) => result.json())
      .then((r) => {
        console.log(r);
        dispatch({ type: "GETGENRES", payload: r });
      });
  };
};
*/