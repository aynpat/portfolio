import { StyledMain } from "./styles/Main.style"
import React from 'react'
type MainProps = {
    children : React.ReactNode;
}

const Main  = ({children} : MainProps) => {
    return(
        
        <StyledMain id="home">
            {children}
        </StyledMain>
    )
}

export default Main