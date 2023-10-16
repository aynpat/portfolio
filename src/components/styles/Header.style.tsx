import styled from 'styled-components'

export const StyleHeader = styled.header`
    position : sticky;
    top : 0;
    z-index : 20;
    background-color : hsla(0,0%,7%,.25);
    display : flex;
    justify-content : space-between;
    align-items: center;
    height : 93px;
    padding : 0 2.4rem;
    backdrop-filter : blur(12px);
    font-weight : 700;
    width: 100%;

`

export const StyleIconContainer = styled.div`
      
        display : flex;
        gap : 20px;
`

export const StyleIcons = styled.a`
    color :grey;
    font-size : 21px;
    padding-top : 10px;
    
    &:hover {
        color : #0aff9d
    }
`

export const StyleButton = styled.button`
  position: relative;
  border: none;
  padding: 0.8rem 1.4rem;
  border: 1px solid #0aff9d;
  color : #0aff9d;
  background:  transparent;
  cursor: pointer;
  transition: all 0.2s ease-in; /* Reduced the transition duration */
  z-index: 4;
  border-radius : none;
  overflow : hidden;

  /* Add styles for ::before pseudo-element */
  &::before {
    content: "";
    position: absolute;
    background-color: #0aff9d;
    z-index: -1;
    width: 0; /* Initially set width and height to 0 */
    height: 0;
    left: 0;
    top: 0;
    transition: all 0.2s ease; /* Add a smooth transition for width and height */
    
  }

  &:hover::before {
   
    width: 100%; /* Expand to cover the button on hover */
    height: 100%;
    
  }
  &:hover {
    color : black;
  }
`;