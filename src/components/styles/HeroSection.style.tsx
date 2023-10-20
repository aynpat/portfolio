import styled from 'styled-components';
import {motion} from 'framer-motion'
export const HeroContainer = styled(motion.div)`
       
        display :flex;
        gap:50px;
        background-color:#111;
        padding-top:7rem;
        padding-left:9.5rem;
        padding-right:11rem;
        padding-bottom: 9rem;

        @media(max-width:1134px){
            display:flex;
            flex-direction : column;
            gap: 10px;
        }
        @media(max-width:1027px){
            padding-top:3.5rem;
            padding-left:2.5rem;
            padding-right:2.5rem;
            padding-bottom: 5rem;
        }
        @media(max-width:800px){
            padding-top:2.5rem;
            padding-left:1.5rem;
            padding-right:1.5rem;
            padding-bottom: 5rem;            
        }
        @media(max-width:576px){
            padding-bottom: 1rem; 
        }
      
`

export const StyledHeroSection = styled(motion.div)`
    position : relative;
    display:flex;
    flex-direction:column;
    justify-content:start;
    margin-top: 15px;
    margin-bottom: 85px;
    background-color :#111;
    width:auto;
    
`

export const StyledMainHeadContainer = styled(motion.div)`
    color: #ebecf3;
    h1{
        font-size : 4.2rem;
        font-weight : 900;
        line-height:1;
        @media(max-width:800px){
            font-size:3.5rem;
        }

}
span{
    display: inline-block;
    animation: wiggle .7s ease-in-out infinite
}


@keyframes wiggle {

    50% {
        transform: rotate(4deg)
    }
}
     


`;

export const StyledSubHeadContainer = styled(motion.div)`
      color : #ebecf3;
       h2{
            font-size: 2.6rem;
            margin-top :1.2rem;
            font-weight: 200;
            @media(max-width:800px){
            font-size:1.6rem;
        }
        }
        span{
            color: #0aff9d;
            font-weight : 700;
        }
`;

export const StyledContentContainer = styled(motion.div)`
        color : #ebecf3;
        max-width : 680px;
        margin: 2rem 0;
        font-weight : 200;
        font-size: 1.3rem;
        @media(max-width:800px){
            font-size:1rem;
        }

    `;

export const StyledHeroBtn = styled(motion.button)`
    background-color: #0aff9d;
    width : fit-content;
   
    .btnLink{
        color : #141414;
    }
    
`;

export const StyledBannerImage = styled(motion.div)`
    align-self : center;
    justify-self: center;

    img{
        align-self:flex-end;
        justify-self: start;
        max-width: 80%;
        min-width:400px;
        @media(max-width:576px){
        min-width: 250px;
        }
    }
    
`