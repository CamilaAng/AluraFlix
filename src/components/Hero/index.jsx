import styled from "styled-components";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext, useEffect, useState } from "react";

const HeroEstilizado = styled.section`
    display: flex;
    row-gap: row;
    justify-content: space-between;
    width: 100%;
    height: 532px;
    background-color: #FCF3E3 ;
`

const TextoEstilizado = styled.div`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-style: normal;
    color: #013D5A;
    align-content: center;
    padding: 30px;
    h1{
        font-size: 48px;
        background-color:  #BDD3CE;
        padding: 30px;
        border-radius: 20px;
    }
    h2{ 
        font-size: 42px; 
    }
    p {
        font-size: 18px;
    }
`

const ImagenEstilizada = styled.div`
    display: flex;
    align-items: center;
    padding: 30px;
    img {
        width: 647.79px;
        height: 333.58px;
        border-radius: 15px;
    }
`

const SectionImagen = ({ imagen }) => {
    return <ImagenEstilizada>
        <img src={ imagen }></img>
    </ImagenEstilizada>
}

const SectionDescripcion = ({ video }) => {
    return <TextoEstilizado>
        <h1>{ video?.categoria }</h1>
        <h2>{ video?.titulo }</h2>
        <p>{ video?.descripcion }</p>
    </TextoEstilizado>
}

const Hero = () => {
    const { videosDeHero } = useContext(GlobalContext);
    const [videoActual, setVideoActual] = useState(videosDeHero[0]);
    const [indexVideoActual, setIndexVideoActual] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (indexVideoActual + 1 < videosDeHero.length) {
                setIndexVideoActual(indexVideoActual + 1);
                setVideoActual(videosDeHero[indexVideoActual]);
            } else {
                setVideoActual(videosDeHero[0]);
                setIndexVideoActual(0);
            }
        }, 2000);

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [videosDeHero]);

    return <HeroEstilizado>
        <SectionDescripcion video={ videoActual } />
        <SectionImagen imagen={ videoActual?.imagen } />
    </HeroEstilizado>
}

export default Hero;