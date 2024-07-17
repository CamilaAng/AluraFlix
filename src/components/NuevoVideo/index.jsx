import { useState } from "react";
import styled from "styled-components";

const NuevoVideoEstilzado = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(252, 243, 227, 0.5);
    width: 100%;
    height: 100%;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;

    .form {
        display: flex;
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 6px solid rgb(1, 61, 90);
        border-radius: 30px;
        opacity: 100%;
        background-color: rgb(189, 211, 206);
        width: 974px;
        height: 640px;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-style: italic;
        color: #013D5A;
        
    }
    
    .imagen {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        img {
            padding-right: 5px;
            width: 43.33px;
            height: 43.33px;
        }
    }

    .contenedor-input {
        display: flex;
        flex-direction: column;
        gap: 8px;

        h1 {
            font-size: 30px;
        }

        h2 {
            font-size: 16px;
        }

        label {
            font-family: "Poppins", sans-serif;
            font-weight: 700;
            font-style: normal;
            color: #013D5A;
        }

        input {
            display: flex;
            flex-direction: column;
            width: 548.44px;
            height: 30px;
            border-radius: 10px;
            border: none;
        }

    }

    .button-container {
        display: flex;
        justify-content: space-around;
        padding: 20px;
        button {
            width: 130px;
            height: 36px;
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
    }
`

const NuevoVideo = ({ onCerrar }) => {
    const defaultVideo = { titulo: "", categoria: "", imagen: "", video: "", descripcion: "" };
    const [video, setVideo] = useState({ ...defaultVideo });

    const setAttribute = (attribute) => (event => {
        video[attribute] = event.currentTarget.value;
        setVideo({ ...video });
    });

    const guardarVideo = () => {
        const saveVideo = async () => {
            try {
                const rawResponse = await fetch("http://localhost:3000/videos", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(video)
                });
                const content = await rawResponse.json();
                return content;
            } catch (error) {
                console.error("Error creating video:", error);
            }
        };
        saveVideo().then(console.log).catch(console.error);
    }

    return <NuevoVideoEstilzado>
        <div className="form">
            <div className="imagen">
                <img src="./marca-x.png" alt="" onClick={onCerrar} />
            </div>
            <div className="contenedor-input">
                <h1>Nuevo vídeo</h1>
                <h2>Completa el formulario para crear una nueva tarjeta de vídeo</h2>
                <label>Titulo</label>
                <input type="text" placeholder="ingrese el título" value={video.titulo} onChange={setAttribute("titulo")} />
                <label>Categoría</label>
                <input type="text" placeholder="seleccione la categoría" value={video.categoria} onChange={setAttribute("categoria")} />
                <label>Imagen</label>
                <input type="text" placeholder="ingrese la foto" value={video.imagen} onChange={setAttribute("imagen")} />
                <label>vídeo</label>
                <input type="text" placeholder="ingrese el enlace del vídeo" value={video.video} onChange={setAttribute("video")} />
                <label>Descripción</label>
                <input type="text" placeholder="¿de qué trata este vídeo?" value={video.descripcion} onChange={setAttribute("descripcion")} />
                <div className="button-container">
                    <button onClick={ guardarVideo }>Guadar</button>
                    <button onClick={() => setVideo({ ...defaultVideo })}>Limpiar</button>
                </div>
            </div>
        </div>
    </NuevoVideoEstilzado>
}

export default NuevoVideo;