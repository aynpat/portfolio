import styled from 'styled-components';


export const StyledProjects = styled.div`

    background-color:#111;
    padding: 5rem 9.6rem 5.6rem  9.6rem;
    display: grid;
    grid-template-columns:1fr;
    gap: 50px; 
    @media(max-width:1027px){
            padding-top:4rem;
            padding-left:2.5rem;
            padding-right:2.5rem;
            padding-bottom:4rem;
        }
        @media(max-width:800px){
            padding-top:7rem;
            padding-left:1.1rem;
            padding-right:1.1rem;
            padding-bottom: 2.5rem;
        }
`

export const StyledProjectsHeader = styled.div`
    display: flex;
    flex-direction : row-reverse;
    align-items: center;
    gap : 1rem;
    margin-bottom: 2.4rem;
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

export const StyledProjectsTitle = styled.div`
    
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
        }
    }

`

export const StyledProjectsLine = styled.div`
    background-color: #ebecf3;
    height:1px;
    width:100%;
    opacity: .3;
  
`
export const Container = styled.div`
    display : grid;
    grid-template-columns : repeat(2,1fr);
    grid-gap : 2rem;
    place-items:center;
    overflow : hidden;
        @media(max-width:800px){
        grid-template-columns: 1fr;
        }
`

export const StyledProjectContainer = styled.div`
    display :flex;
    flex-direction:column;
    width: 100%;
    place-items:center;
    border-radius: 0.4rem;
 
    @media(max-width:800px){
        display:grid;
        grid-template-columns:1fr;
        }

   

   
`

export const StyledImageContainer = styled.div`
    position:relative;
    width : 100%;
    height: 300px;
    overflow: hidden;
    border-radius :8px;
    display: flex;
    background-color:#232323;
    img{ 
       position : relative;
       width : 90%;
       height: 100%;
       transition : all .5s ease-in-out;
       z-index : -0;
       translate: -50% 20%;
       bottom: 0;
       left: 50%;
       border-radius: .3rem;
    }

    img:hover{
        transform: translateY(-5px) scale(1.2);
        opacity : .4;

        button {
            display: none;
        }
       
    }
 

`
    
export const StyledDetailsContainer = styled.div``

export const StyledDetailsTitle = styled.div`
    color: #ebecf3;
`
    
export const StyledDetailsTech = styled.div`
    color: #0aff9d;
`
    
export const StyledProjectInfo = styled.div`
    color: #ebecf3;
`