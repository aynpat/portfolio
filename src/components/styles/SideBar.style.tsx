import styled from "styled-components";
type LinkProp = {
    isActive : boolean;
}

export const StyledSideBar = styled.nav`
    position: sticky;
    top : 0;
    left : 0;
    display : flex;
    flex-direction : column;  
    background-color: #080808;
    width : 100%;
    height: 100vh;
    padding : 0;
    margin : 0;
    z-index : 20;
    /* overflow-y: scroll; */
`   

export const StyledLink = styled.a<LinkProp>`
    
    transform : none;
    writing-mode: vertical-lr;
    color :#ebecf3;
    display : flex;
    align-items : center;
    justify-content : center;
    font-size : 1.2rem;
    font-weight : 200;
    align-items : center;
    height :100px;
    width : 100%;
    background-color : ${({isActive}) => isActive ? '#1f1f1f' : '#080808'} ;
    border-right: 2px solid ${({ isActive }) => (isActive === true ?  '#0aff9d' :`transparent` )};
    transition : all .1s;
    

    &:hover {
        scroll-behavior : smooth;
        color :#ebecf3; 
        background-color : #1f1f1f;
        border-right: 2px solid #0aff9d;
        opacity: 1 ;
    }
    /* &:focus {
        
        color :#ebecf3; 
        background-color : ${({isActive}) => isActive ? '#1f1f1f' : '#1f1f1f'} ;
         ${({ isActive }) => isActive && `border-right: 2px solid #0aff9d !important;`}
        opacity: ${({ isActive }) => (isActive ? '1' : '0.5')};
    } */
    
    &:active {
        scroll-behavior : smooth;
        color :#ebecf3; 
        background-color : #1f1f1f;
        border-right: 2px solid #0aff9d;
        opacity: 1 ;
    }
    ` 
    

export const StyleLogo = styled.a`
    
    width : 45px;
    height : 45px;
    margin : 1.5rem .4rem;
    font-size : 1.5rem;
    
    font-weight : 900;
    text-align : center;
    background-color :#111;
    border-radius : 5px;
    color : white;
    padding : 5px 5px 0px 5px;
    span {
        display : inline-block;
        background-color :#0aff9d;
        width : 4px;
        height : 4px;
        border : 1px solid #0aff9d;
        border-radius:50%;
    }
    &:hover{
            color: #12c57e;
            
       }
`;