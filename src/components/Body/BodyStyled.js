import styled from "styled-components";

export const BodyContainerStyles = styled.section`

display: flex;
align-items: center;
justify-content: center;
background-color: var(--body-bg);
width: 100%;
`;


export const ArticlesFeaturedWrapperStyles = styled.div`
padding-top: 30px ;
padding-bottom: 30px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;



`;

export const ArticlesFeaturedContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
    padding-top: 20px;
    width: 100%;
    
    @media (max-width: 400px) {
        gap: 30px;
    }
`;

export const ArticlesFeaturedCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    border: 1px  solid violet;
    border-radius: 10px 10px 10px 10px;
    width: 300px;
    height: auto;
    color: black;
    
    img{
        width: 300px;
        height: 230px;
        overflow: hidden;
    }
    
    @media (max-width: 400px) {
        width: 230px;

        img{
            width: 230px;
            height: 170px;
        }
    }
`;


export const ArticlesCartText = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 20px;
    background-color: #4F4557;
    width: 100%;
    gap: 6px;

    h3{
        color: white;
    }
    
    @media (max-width: 400px) {
        padding-top: 20px;
        padding-bottom: 30px;

        h2{
            font-size: 23px;
            padding: 2px;
        }
    }
`;





export const ButtonCardStyle = styled.button`
    text-align: center;
    background-color: red;
    color: white;
    cursor: pointer;
    width: 100%;
    height:50px;
`;

