const initialState = {
  Paises: [],
  Actividades: [],
  Filtrado: [],
  Details: [],
  Countries: [],
  FiltradosAZ: [],
  FiltradoActivities: [],
  PaisesActividades: [],
  PaisesAct: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOSTRAR": {
      state = initialState;
      // console.log("reducer" + action.payload[0].name)
      return {
        ...state,
        Paises: state.Paises.concat(action.payload.countries),
      };
    }
    case "ACTIVIDADES": {
      // console.log("reducer" + action.payload[0].name)
      return {
        ...state,
        Actividades: action.payload.actis,
      };
    }
    case "GENERAR": {
      state = initialState;
      return {
        ...state,
        Paises: state.Paises.concat(action.payload.detshow),
      };
    }
    case "MOSTRARDETALLES": {
      return {
        ...state,
        Details: action.payload.detis,
      };
    }
    case "FILTRAR": {
      if (state.Filtrado.length === 0) {
        return {
          ...state,
          Filtrado: state.Paises.filter(
            (elemento) => elemento.region === action.payload
          ),
        };
      } else if (state.Filtrado.length !== 0) {
        return {
          ...state,
          Filtrado: state.Filtrado.filter(
            (elemento) => elemento.region === action.payload
          ),
        };
      } else if (action.payload === "") {
        return {
          FiltradosAz: state.Filtrado,
        };
      }
      break;
    }

    case "FILTRARAZ": {
      if (action.payload === "AZ") {
        if (state.Filtrado.length === 0) {
          return {
            ...state,
            Filtrado: [...state.Paises].sort((a, b) =>
              a.name.localeCompare(b.name)
            ),
          };
        } else if (state.Filtrado.length !== 0) {
          return {
            ...state,
            Filtrado: [...state.Filtrado].sort((a, b) =>
              a.name.localeCompare(b.name)
            ),
          };
        }
      } else if (action.payload === "ZA") {
        if (state.Filtrado.length === 0) {
          return {
            ...state,
            Filtrado: [...state.Paises].sort((a, b) =>
              b.name.localeCompare(a.name)
            ),
          };
        } else if (state.Filtrado.length !== 0) {
          return {
            ...state,
            Filtrado: [...state.Filtrado].sort((a, b) =>
              b.name.localeCompare(a.name)
            ),
          };
        }
      } else if (action.payload === "PopulationASC") {
        if (state.Filtrado.length === 0) {
          return {
            ...state,
            Filtrado: [...state.Paises].sort((a, b) =>
              parseInt(a.area) > parseInt(b.area)
                ? 1
                : parseInt(b.area) > parseInt(a.area)
                ? -1
                : 0
            ),
          };
        } else if (state.Filtrado.length !== 0) {
          return {
            ...state,
            Filtrado: [...state.Filtrado].sort((a, b) =>
              parseInt(a.area) > parseInt(b.area)
                ? 1
                : parseInt(b.area) > parseInt(a.area)
                ? -1
                : 0
            ),
          };
        }
      } else if (action.payload === "PopulationDES") {
        if (state.Filtrado.length === 0) {
          return {
            ...state,
            Filtrado: [...state.Paises].sort((a, b) =>
              parseInt(a.area) < parseInt(b.area)
                ? 1
                : parseInt(b.area) < parseInt(a.area)
                ? -1
                : 0
            ),
          };
        } else if (state.Filtrado.length !== 0) {
          return {
            ...state,
            Filtrado: [...state.Filtrado].sort((a, b) =>
              parseInt(a.area) < parseInt(b.area)
                ? 1
                : parseInt(b.area) < parseInt(a.area)
                ? -1
                : 0
            ),
          };
        }
      }
      break;
    } 
    case "FILTRARACTIVITIES": {
      var newArr = [];
      for (let i = 0; i < action.payload[1].length; i++) {
        if (action.payload[1][i].ActivityId === parseInt(action.payload[0])) {
          newArr.push(action.payload[1][i].CountryID);
        } 
      }if(state.Filtrado.length === 0){
      return {
        ...state,
        Filtrado: state.Paises.filter(function (element) {
          return newArr.includes(element.ID);
        }),
      };
    }else if(state.Filtrado.length !== 0){
      return {
        ...state,
        Filtrado: state.Filtrado.filter(function (element) {
          return newArr.includes(element.ID);
        }),
      };
    }
    break;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
