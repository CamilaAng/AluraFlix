import styled from "styled-components";

const FooterEstilizado = styled.footer`
    background-color: #BDD3CE;
    display: flex;
    justify-content: center;
    padding: 20px;
    color: #013D5A;
    h1 {
        font-size: 20px;
        margin: 0;
        align-self: center;
    }
`

const Footer = () => {
    return <FooterEstilizado>
        <h1>AluraFlix</h1>
    </FooterEstilizado>
}

export default Footer;