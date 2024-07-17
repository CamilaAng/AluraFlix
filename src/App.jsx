import styled from "styled-components";
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Galeria from './components/Galeria'
import GlobalContextProvider from "./context/GlobalContext";

const AppContainer = styled.div`
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
`

function App() {
    return (
        <GlobalContextProvider>
            <AppContainer>
                <Header></Header>
                <Hero></Hero>
                <Galeria></Galeria>
                <Footer></Footer>
            </AppContainer>
        </GlobalContextProvider>
    )
}

export default App;