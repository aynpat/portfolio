import { StyleLogo, StyledLink, StyledSideBar } from "./styles/SideBar.style"

type PropType = {
   
    
    aboutProp : boolean;
    projectProp : boolean;
    ExpProp : boolean;
    contactProp : boolean;

}
const SideBar = ({ aboutProp,projectProp,ExpProp,contactProp } : PropType) => {





    return(
        <StyledSideBar>
                <StyleLogo href="#home">P<span></span></StyleLogo>
                <nav>
                
                    <StyledLink href="#about" isActive={aboutProp}>About</StyledLink>
                    <StyledLink href="#projects" isActive={projectProp}>Projects</StyledLink>
                    <StyledLink href="#skills" isActive={ExpProp}>Skills</StyledLink>
                    <StyledLink href="#contact" isActive={contactProp}>Contact</StyledLink>
              
                </nav>

      
        </StyledSideBar>
    )
}

export default SideBar