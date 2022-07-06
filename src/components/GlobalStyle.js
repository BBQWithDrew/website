import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;

}

body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
    overflow-x:hidden;
}
html{
    @media (max-width: 1700px){
        font-size:75%;
    }
    @media (max-width: 1300px){
        
    }
}
button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #EDC491;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: #EDC491;
        color: white;
    }
}
h2
{
    font-weight: lighter;
    font-size: 4rem;
}
    
h3{
    color:white;
}
p{
    padding: 3rem 0rem;
     color: #cccc;
     font-size: 1.4rem;
     line-height: 150%;
}
h4{
    font-weight: bold;
    font-size: 2rem;
    
}
span{
    font-weight: bold;
    color: #EDC491;
}
a{
    font-size: 1.1rem;
}
`;
export default GlobalStyle;
