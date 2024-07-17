import styled from "styled-components";
import Seccion from "./Seccion";
import { GlobalContext } from "../../context/GlobalContext";
import { useEffect, useContext, useState } from "react";

const GaleriaEstilizado = styled.main`
    background-color: #013D5A ;
    padding-bottom: 60px;
    
`

const Galeria = () => {
    const { videosDeGaleria, setVideosDeGaleria } = useContext(GlobalContext);
    const [secciones, setSecciones] = useState([]);

    useEffect(() => {
        setSecciones([...new Set(videosDeGaleria.map(video => video.categoria))]);
    }, [videosDeGaleria]);

    return <GaleriaEstilizado>
        { secciones.map((seccion, index) => {
            return <Seccion key={ index } seccion={ seccion } videos={videosDeGaleria.filter(video => video.categoria == seccion)}/>
        }) }
    </GaleriaEstilizado>
}

export default Galeria;