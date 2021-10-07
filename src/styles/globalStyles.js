import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        font-family: 'Poppins', sans-serif;
    } 
    body{
        #__next{
            display:flex;
            flex-direction: column;
            justify-content:space-between;
            min-height: 100vh;
        }
        background: #f5f5f5;
        font-size:15px;
        font-family: sans-serif;
        background: rgb(255,58,58);
        background: linear-gradient(135deg, rgba(255,58,58,1) 0%, rgba(228,64,64,1) 100%);
    }
    main{
        display:flex;
        align-items: center;
        justify-content: center;
    }
`;
