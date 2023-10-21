import { StyleLogo, StyledLink, StyledSideBar } from "./styles/SideBar.style"
import { useEffect, useRef } from 'react'
import { useInView, useAnimation} from 'framer-motion'

type PropType = {
   
    
    aboutProp : boolean;
    projectProp : boolean;
    ExpProp : boolean;
    contactProp : boolean;

}

const SideBar = ({ aboutProp,projectProp,ExpProp,contactProp } : PropType) => {


    const sidebarRef = useRef(null);
    const isInView = useInView(sidebarRef,{once: true})
    const mainControl = useAnimation();
    useEffect(()=> {
        if(isInView){
            mainControl.start("visible")
        
        }
    }, [isInView,mainControl])

        const NavItems = {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, }
        }


    return(
        <StyledSideBar ref={sidebarRef} variants={NavItems} initial="hidden" animate="visible" transition={{duration : 0.3, delay : 0.10}}>

                <StyleLogo href="#home">P<span></span></StyleLogo>
                <nav>

                    <StyledLink href="#about" 
                    variants={NavItems} initial='hidden' animate={mainControl}
                    transition={{ duration : 0.5, delay: 0.10}} isactive={aboutProp}>About</StyledLink>
                    <StyledLink href="#projects" 
                    variants={NavItems} initial='hidden' animate={mainControl}
                    transition={{ duration : 0.5, delay: 0.20}} isactive={projectProp}>Projects</StyledLink>
                    <StyledLink href="#skills" 
                    variants={NavItems} initial='hidden' animate={mainControl}
                    transition={{ duration : 0.5, delay: 0.30}} isactive={ExpProp}>Skills</StyledLink>
                    <StyledLink href="#contact" 
                    variants={NavItems} initial='hidden' animate={mainControl}
                    transition={{ duration : 0.5, delay: 0.40}} isactive={contactProp}>Contact</StyledLink>
              
                </nav>

      
        </StyledSideBar>
    )
}

export default SideBar