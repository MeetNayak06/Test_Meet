import styled from "styled-components";

export const Button = styled.button`

    text-decoration: none;
    max-width: auto;
    background-color: rgb(98 24 243);
    color: rgb(255 255 255);
    padding: 0.4rem 0.4rem;
    border: none;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;


    &:hover,
    &:active {
        box-shadow: 0.2rem 0 rgb(132 144 255 / 30%);
        box-shadow: ${({ theme}) => theme.colors.shodowSupport};
        transform: scale(0.96);
        background-color: rgb(98 24 243);
    }
    a{
        text-decoration: none;
       
        color: rgb(255 255 255);
        font-size: 1.2rem;
        
    }



`;