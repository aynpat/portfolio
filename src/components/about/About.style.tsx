import styled from "styled-components";



export const StyledAboutSection = styled.div`
            background-color:#111;
            padding-top:9.6rem;
            padding-left:9.6rem;
            padding-right:9.6rem;
            padding-bottom: 5rem;

            @media(max-width:1027px){
                padding:9rem 2.5rem 7.5rem 2.5rem;
             }
            @media(max-width:768px){
                padding:7rem 1.1rem 7rem 1.1rem;
            }

       
   
`;
// ////////////////// header section title with line optimize in one
export const StyledAboutHeader = styled.div`
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
        margin-bottom: 1rem;
        }   

`

export const StyledAboutTitle = styled.div`
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

export const StyledAboutLine = styled.div`
    background-color: #ebecf3;
    height:1px;
    width:100%;
    min-width: fit-content;
    opacity: .3;

`
///////////////////////////////////////////////////////

export const StyledContainer = styled.div`
    padding-top:3rem;
    display:flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 4rem;
    align-items:center;
    flex-wrap:nowrap;
    @media(max-width:780px){
        padding-top:7rem;
    }
    @media(max-width:671px){
            gap:3rem;
            flex-direction:column;
            text-align:left;
            word-spacing:3px;
        }
`
export const StyledAboutContent = styled.div`
        justify-self: start;
        width: 600px;
        max-width: fit-content;


    p {
        color :#ebecf3;
        font-size: 1.3rem;
        font-weight: 200;
        @media(max-width:800px){
            font-size:1rem;    
        }
        @media(max-width:671px){
                padding:0 2rem 0 2rem;
            }

    }
    span{
        text-align: center;
        padding: 5px 0px 5px 0px;
        margin-right: 6px;
        float: left;
        line-height: 180%;
        width: 1.3em;
        font-size: 130%;
        border: 1px solid #ebecf3;
        border-radius: 3px;
        font-weight:700;
        background-color:#1f1f1f;
        border: none;
    }
`


export const StyledAboutImage = styled.div`
    img{
       border:10px #1f1f1f red;
       border-radius:50%;
        height: auto;
        max-width: 320px;
        @media(max-width:1027px){
           max-width: 290px;
        }
        @media(max-width:768px){
            max-width: 250px;
        }
        @media(max-width:610px){
            max-width: 240px;
        }

    }
`

