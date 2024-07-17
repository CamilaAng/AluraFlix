import { useState } from "react";
import styled from "styled-components";
import Editar from "../../../Editar";

const VideoEstilizado = styled.main`
    background-color:#FCF3E3;
    border-radius: 20px;
    img {
        width: 430px;
        height: 325px;
        border-radius: 20px 20px 0 0;
    }
`

const BotonesEstilizados = styled.div`
    display: flex;
    justify-content: center;
    gap: 60px;
    button {
        border-radius: 10px;
        padding: 10px;
        background-color:#FCF3E3;
        border: none;
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-style: normal;
        color: #013D5A;
        &:hover {
            color: #F4A258 ;
            cursor: pointer;
        }        
    }
`

const BotonesVideo = ({ onEditar, onBorrar }) => {
    return <BotonesEstilizados>
        <button type="button" onClick={ onBorrar }>Borrar</button>
        <button type="button" onClick={ onEditar }>Editar</button>
    </BotonesEstilizados>
}

const Video = ({ video }) => {
    const [mostrarEditar, setMostrarEditar] = useState(false);
    const eliminarVideo = id => {
        const deleteVideo = async () => {
            try {
                const rawResponse = await fetch(`http://localhost:3000/videos/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
                const content = await rawResponse.json();
                return content;
            } catch (error) {
                console.error("Error deleting video:", error);
            }
        };
        deleteVideo().then(console.log).catch(console.error);
    };
    return <VideoEstilizado>
        <img src={ video.imagen } onClick={ () => window.open(video.video, '_blank').focus() }></img>
        <BotonesVideo onEditar={() => {setMostrarEditar(true)}}  onBorrar={() => { eliminarVideo(video.id) }} />
        { mostrarEditar ? <Editar onCerrar={() => {setMostrarEditar(false)}} video={ video } /> : null }
    </VideoEstilizado>
}

export default Video;