import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledSkillsSection = styled.div`
    padding : 9.6rem 9.6rem 9.6rem 9.6rem;
    background-color:#111;

            @media(max-width:1027px){
                padding:9rem 2.5rem 2.5rem 2.5rem;
             }
            @media(max-width:768px){
                padding:7rem 1.1rem 5.5rem 1.1rem;
            }
   
`


export const StyledSkillsHeader = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 1rem;
margin-bottom: 7.4rem;

@media(max-width:800px){
    margin-bottom: 5rem;
}
@media(max-width:768px){
    align-items: center;
    } 
@media(max-width:671px){
    margin-bottom: 3.4rem;
    }   

`

export const StyledSkillsTitle =  styled(motion.div)`
h3 {
    font-size:4rem;
    color: #ebecf3;
    font-weight: 900;
    text-align:center;
    max-width:fit-content;
    span{
        color :#0aff9d;
        border-radius: 50%;
        }
    @media(max-width:768px){
        font-size:2.3rem;
        text-align:left;
    }
}

`

export const StyledSkillsLine = styled.div`
background-color: #ebecf3;
height:1px;
width:100%;
min-width: fit-content;
opacity: .3;
`

export const StyleSkillsContainer = styled.div`
    display: grid;
    /* grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); */
    grid-template-columns: repeat(6, minmax(100px, 1fr));
    background-color: rgba(35, 35, 35,0.2);
    border-radius: 10px;
    margin: 0 auto;
    place-items: center;
    min-height:400px;
    padding: 1rem;
    grid-row-gap: 1rem;
    grid-column-gap: 0;
    @media(max-width:1027px){
           display: grid;
           grid-template-columns: repeat(4, minmax(100px, 1fr));  
             }
    @media(max-width:768px){
        grid-template-columns: repeat(4,auto);
        width:100%;
        }
        @media(max-width:480px){
        grid-template-columns: repeat(3,auto);
        width:100%;
        }
        @media(max-width:380px){
        grid-template-columns: repeat(2,auto);
        width:100%;
        }
    img {
        
        max-width: 70px;
        height: 70px;
        border-radius: 10px;
        box-shadow: -5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3);
      
        &:hover{
            /* transform: translateY(-5px) scale(1.2); */
            box-shadow: -5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3);      
        }
    }
    /* & img:nth-child(10){
        grid-column:3/4;
    }
    & img:nth-child(9){
        grid-column:2/3;
    } */

`
export const ImageContainer = styled(motion.div)`
    display : flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    
    width: fit-content;
    height: auto;
    transition: all ease .5s;
    &:hover{
            transform: translateY(-5px) scale(1.2) !important;
        }
    p {
        color : #ebecf3;
        font-size: 1rem;
        font-family: inherit;
        font-weight: 200;
    }
    
`