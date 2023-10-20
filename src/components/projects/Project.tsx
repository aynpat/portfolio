
import React,{useRef,useEffect} from "react"
import { StyledProjects, StyledProjectsHeader, StyledProjectsTitle, StyledProjectsLine, Container } from "./Project.style";
import { useInView,useAnimation } from 'framer-motion'

type PropsType = {
    ref?: React.Ref<HTMLDivElement>;
    id: string;
    children?:React.ReactNode

    
}

const Projects = React.forwardRef((props: PropsType,ref : React.Ref<HTMLDivElement>) => {
    const headerRef = useRef(null)
    const isInview = useInView(headerRef,{once: true})
    const Control = useAnimation()
    const variant = {
        hidden : {opacity: 0, y : 75},
        visible : {opacity : 1, y : 0}
    }
        useEffect(()=> {
            if(isInview){
                Control.start('visible')
            }
        },[isInview,Control])
    return(
        <StyledProjects id={props.id} ref={ref}>
           <StyledProjectsHeader>
                <StyledProjectsTitle variants={variant} initial="hidden" animate="visible" transition={{duration: 0.5,delay:0.25}}>
                    <h3>Projects<span>.</span></h3>
                </StyledProjectsTitle>
            <StyledProjectsLine/>
        </StyledProjectsHeader>
        <Container  ref={headerRef}>
            {props.children}
        </Container>
        </StyledProjects>
    )
})

export default Projects