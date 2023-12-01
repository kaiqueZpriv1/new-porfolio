import { createGlobalStyle } from 'styled-components';
// #fca311
// #adb5bd
export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        scroll-behavior: smooth;
        background-color: #0d1b2a;
    }
    h1, h3, button{
        font-family: 'Inter', sans-serif;
    }
    p{
        font-family: 'Poppins', sans-serif;
    }
    a{
        text-decoration: none;
    }
    ::selection{
        background-color: #fca311;
        color: #adb5bd;
    }
    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 15px;
        background-color: #fca311;
    }
    ::-webkit-scrollbar-track{
        background: #0d1b2a;
    }
`;
