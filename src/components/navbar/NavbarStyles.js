import styled from "styled-components"

export const NavbarContainerStyles = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: var(--header-bg);
    color: var(--decoratio-white);
    padding: 1.2rem  3rem;
    a img{
        height: 50px;
    }
    @media (max-width: 400px) {
        padding: 1.2rem ;
    }
`

export const LinkContainerStyled = styled.a`
    color: azure;
    font-size: 30px;
    cursor: pointer;
`