import { useState } from "react";
import styled from "styled-components";
import NuevoVideo from "../NuevoVideo";

const HeaderEstilizado = styled.header`
    background-color: #BDD3CE;
    display: flex;
    row-gap: row;
    justify-content: space-between;
    padding: 20px;
    color: #013D5A;
    h1 {
        font-size: 20px;
        margin: 0;
        align-self: center;
    }
`

const BotonesEstilizados = styled.div`
    display: flex;
    gap: 25px;
    align-items: center;
    button {
        width: 140px;
        height: 34px;
        border-radius: 20px;
        border: 0;
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-style: normal;
        color: #013D5A;
        &:hover {
            border: 2px solid #F4A258;
            cursor: pointer;
        }        
    }

`

const BotonesHeader = ({ onNuevoVideo }) => {
    return <BotonesEstilizados>
        <button type="button">Home</button>
        <button type="button" onClick={onNuevoVideo}>Nuevo vídeo</button>
    </BotonesEstilizados>
}

const Header = () => {
    const [mostrarNuevoVideo, setMostrarNuevoVideo] = useState(false);
    return <HeaderEstilizado>
        <h1>AluraFlix</h1>
            <BotonesHeader onNuevoVideo={() => {setMostrarNuevoVideo(true)}}/>
                { mostrarNuevoVideo ? <NuevoVideo onCerrar={() => {setMostrarNuevoVideo(false)}} /> : null }
    </HeaderEstilizado>
}

export default Header;