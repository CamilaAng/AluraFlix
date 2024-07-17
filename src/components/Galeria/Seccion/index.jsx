import styled from "styled-components";
import Video from "./Video";

const SeccionEstilizado = styled.main`
    .videosAcomodados{
        display: flex;
        row-gap: gap;
        justify-content: space-around;
    }
`
const TituloEstilizado = styled.div`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-style: normal;
    color: #FCF3E3 ;
    padding: 30px;
`

const TituloSeccion = ({ seccion }) => {
    return <TituloEstilizado>
        <h1>{ seccion }</h1>
    </TituloEstilizado>
}

const Seccion = ({ seccion, videos }) => {
    return <SeccionEstilizado>
        <TituloSeccion seccion={ seccion }/>
        <div className="videosAcomodados">
            { videos.map(video => <Video key={ video.id } video={ video } />) }
        </div>
    </SeccionEstilizado>
}

export default Seccion;