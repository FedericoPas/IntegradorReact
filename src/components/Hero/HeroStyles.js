import styled from "styled-components";


export const HeroContainerStyled = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #6D5D6E;
    width: 100%;
    padding: 30px;
    h1{
        padding: 20px;
        font-weight: 700;
        text-align: center;
    }
    @media (max-width: 400px) {
        h1{
            padding: 10px;
            font-size: 20px;
        }
    }
`;

export const HeroTextContainerStyled = styled.div``;

export const HeroCarrouselStyled = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`;
