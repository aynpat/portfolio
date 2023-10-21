import styled from 'styled-components';
import { motion } from 'framer-motion'
export const StyledContactSection = styled.div`
     background-color: rgba(35, 35, 35,0.2);
     
    display: flex;
    flex-direction: column;
    padding: 5rem 9.6rem 9.6rem  9.6rem;

            @media(max-width:1027px){
                padding:9rem 2.5rem 5.5rem 2.5rem;
             }
            @media(max-width:768px){
                padding:.5rem 1.1rem 5.5rem 1.1rem;
            }
          

`

export const StyledContactHeader = styled.div`
    display: flex;
    flex-direction : row-reverse;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2.4rem;

`

export const StyledContactTitle = styled.div`
    h3 {
        font-size:4rem;
        color: #ebecf3;
        font-weight: 900;
        text-align:center;
        max-width:fit-content;
        
        @media(max-width:768px){
        font-size:2.3rem;
    }
        span{
        color :#0aff9d;
        border-radius: 50%;
        }
    }

`

export const StyledContactLine = styled.div`
    background-color: #ebecf3;
    height:1px;
    width:100%;
    opacity: .3;
    flex-shrink :2;

`


export const ContactContainer = styled(motion.div)` 
    display: grid;
    /* grid-template-columns: repeat(auto-fill, minmax(min-content, 1fr)); */
    grid-template-columns: 1fr repeat(1, minmax(min-content, 70%));
    gap: 20px;
    @media(max-width:768px){
       grid-template-columns: 1fr;
       padding : 2rem;
    }
   
`
export const ContactInformation = styled(motion.div)`
    min-width:auto;
    padding-top: 3.1rem;
    @media(max-width:800px){
        padding-top: 2rem;
        }        

    h2{
        font-size: 2rem;
        color: #0aff9d;
        margin-bottom: 1.8rem;
    }
    p{
        color: #ebecf3;
        font-size: 1.1rem;
        line-height: 1.6;
        text-align:left;
        margin-bottom: 1.7rem;
    }
  
`

export const ContactIcons = styled(motion.div)`
    display: flex;
    justify-content:space-around;
    
    a {
        color: #ebecf3;
        font-size: 1.6rem;
    }
    a:hover{
        color: #0aff9d;
    }
`

export const FormContainer = styled.div`
    margin-top: 4rem;
    width: 100%;

  
    @media(max-width:800px){
        margin-top:1.2rem;
    }
    form{
        display: flex;
        flex-direction: column;

        input {
            height: 3rem;
            width: 100%;
            border :1px solid #1f1f1f;;
            margin-bottom: 1.5rem;
            padding: 5px;
            border-radius: 6px;
            @media(max-width:800px){
            margin-bottom:1rem;
        }
        }
        textarea{
            width: 100%;
            border :1px solid #1f1f1f;
            margin-bottom: 1.5rem;
            padding: 10px;
            border-radius: 6px;
        }
        button {
            width:fit-content;
        }
        input::placeholder{
            font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
            font-size: 1rem;
        }
        textarea::placeholder{
            font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
            font-size: 1rem;
        }

    }
`