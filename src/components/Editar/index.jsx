import { useState } from "react";
import styled from "styled-components";

const EditarEstilizado = styled.div`
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
        border: 6px solid rgb(1, 61, 90);
        border-radius: 30px;
        opacity: 100%;
        background-color: rgb(189, 211, 206);
        width: 974px;
        height: 640px;

        .contenedor {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }
    }

    .imagen {
        display: flex;
        justify-content: flex-end;
        padding: 10px;
        img {
            width: 43.33px;
            height: 43.33px;
        }
    }

    h1 {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-style: italic;
        color: #013D5A;
    }

    label {
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-style: normal;
        color: #013D5A;
        align-self: flex-start;
        padding-left: 215px;
    }

    input {
        display: flex;
        flex-direction: column;
        width: 548.44px;
        height: 30px;
        border-radius: 10px;
        border: none;
    }

    .button-container {
        padding-top: 20px;
        display: flex;
        gap: 80px;
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

const Editar = ({ video, onCerrar }) => {
    const [videoEditado, setVideoEditado] = useState({ ...video });

    const setAttribute = (attribute) => (event => {
        videoEditado[attribute] = event.currentTarget.value;
        setVideoEditado({ ...videoEditado });
    });

    const actualizarVideo = () => {
        const updateVideo = async () => {
            try {
                const rawResponse = await fetch(`http://localhost:3000/videos/${video.id}`, {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(videoEditado)
                });
                const content = await rawResponse.json();
                return content;
            } catch (error) {
                console.error("Error creating video:", error);
            }
        };
        updateVideo().then(console.log).catch(console.error);
    }

    return <EditarEstilizado>
        <div className="form">
            <div className="imagen">
                <img src="./marca-x.png" alt="" onClick={ onCerrar }/>
            </div>
            <div className="contenedor">
                <h1>Editar vídeo</h1>
                <label>Titulo</label>
                <input type="text" placeholder="ingrese el título" value={videoEditado.titulo} onChange={setAttribute("titulo")} />
                <label>Categoría</label>
                <input type="text" placeholder="seleccione la categoría" value={videoEditado.categoria} onChange={setAttribute("categoria")} />
                <label>Imagen</label>
                <input type="text" placeholder="ingrese la foto" value={videoEditado.imagen} onChange={setAttribute("imagen")} />
                <label>vídeo</label>
                <input type="text" placeholder="ingrese el enlace del vídeo" value={videoEditado.video} onChange={setAttribute("video")} />
                <label>Descripción</label>
                <input type="text" placeholder="¿de qué trata este vídeo?" value={videoEditado.descripcion} onChange={setAttribute("descripcion")} />
                <div className="button-container">
                    <button onClick={ actualizarVideo }>Guadar</button>
                    <button onClick={() => setVideoEditado({ ...video })}>Limpiar</button>
                </div>
            </div>
        </div>
    </EditarEstilizado>
}

export default Editar;