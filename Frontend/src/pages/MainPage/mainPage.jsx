import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Filtrar,
  FiltrarAZ,
  Generar,
  Mostrar,
  Actividades,
  FiltrarActivities,
} from "../../store/actions/actions";
import CrearActividad from "../../components/BotonCrear";
import BotonFiltrado from "../../components/BotonFiltrado";
import BotonActividades from "../../components/BotonActividades";
import BotonFiltradoAZ from "../../components/BotonFiltradoAZ";
import SearchBar from "../../components/SearchBar";
import Paises from "../../components/Paises";
import Pagination from "../../components/Pagination";
import "./mainPage.css";

export default function MainPage(props) {
  const dispatch = useDispatch();
  /*const Busqueda=(arg)=>{
    if(arg){
        dispatch(Generar(arg))
    }

    }*/
  useEffect(() => {
    dispatch(Mostrar());
  }, [dispatch]);

  const handleOnClick = async (evt) => {
    dispatch(Mostrar());
    var selectElemAZ = document.getElementById('filtredAZ');
    selectElemAZ.selectedIndex = 0;
    var selectElemRegion = document.getElementById('filteredRegion');
    selectElemRegion.selectedIndex = 0;

  }
  const Filtrado = (arg) => {
    dispatch(Filtrar(arg));
    setCurrentPage(1)
  };
  const FiltradoAZ = (arg) => {
    if (arg !== "") {
      dispatch(FiltrarAZ(arg));
    } else {
      dispatch(Mostrar());
    }
  };
  const FiltradoActividades = (arg) => {
    dispatch(FiltrarActivities(arg));
  };
  const paises = useSelector((state) => state.Paises);
  const filtradosAZ = useSelector((state) => state.FiltradosAZ);
  const filtrados = useSelector((state) => state.Filtrado);
  const filtradosActiv = useSelector((state) => state.FiltradoActivities);

  let contenedor = paises;
  if (filtradosActiv.length !== 0) {
    contenedor = filtradosActiv;
  }
  if (filtradosAZ.length !== 0) {
    contenedor = filtradosAZ;
  }
  if (filtrados.length !== 0) {
    contenedor = filtrados;
  }

  const [loading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const indexOfLastPost = currentPage * postsPerPage;
  const indxOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = contenedor.slice(indxOfFirstPost, indexOfLastPost);

  //Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const Busqueda = (arg) => {
    arg === ""
      ? dispatch(Mostrar())
      : //else
        dispatch(Generar(arg));
        setCurrentPage(1)
  };
  
  dispatch(Actividades());
  return (
    <div className="mainBody">
      <div className="mainContainer">
        <nav className="navMain">
          <div className="elements">
            <img
            alt=""
              className="navGif"
              src="https://i.pinimg.com/originals/11/b7/9e/11b79e852bd58eb35cb97dd01b0de23f.gif"
            />
            <CrearActividad className="buttonCreate" />
            <BotonFiltrado Filtrado={Filtrado} />
            <BotonFiltradoAZ FiltradoAZ={FiltradoAZ} />
            <BotonActividades
              Actividades={Actividades}
              FiltradoActividades={FiltradoActividades}
            />
            <button className="createButton" onClick={handleOnClick} > Reset filters </button>
            <SearchBar busqueda={Busqueda} />
          </div>
        </nav>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={contenedor.length}
          paginate={paginate}
        />
        <Paises posts={currentPosts} loading={loading} />
      </div>
    </div>
  );
}
