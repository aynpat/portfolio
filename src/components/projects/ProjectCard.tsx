import { StyledDetailsContainer, StyledDetailsTech, StyledDetailsTitle, StyledImageContainer, StyledProjectContainer, StyledProjectInfo } from "./Project.style"
import React,{ useEffect, useRef } from 'react'
import { useInView, useAnimation} from 'framer-motion'
type TypeProps = {
    id : number;
    image:string;
    title:string;
    technology:string;
    info : string;
}
 const ProjectCard = (props : TypeProps) => {

    const cardRef = useRef(null);
    const isInView = useInView(cardRef,{once: true})
    const mainControl = useAnimation();
    useEffect(()=> {
        if(isInView){
            mainControl.start("visible")
        
        }
    }, [isInView])

        const NavItems = {
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0, }
        }

    return(
  
        <StyledProjectContainer ref={cardRef} variants={NavItems}
                        initial='hidden' animate={mainControl}
                        transition={{ duration : 0.8, delay: 0.50}}>
        <StyledImageContainer><img src={props.image} alt="" /></StyledImageContainer>
            <StyledDetailsContainer>
                <StyledDetailsTitle><h2>{props.title}</h2></StyledDetailsTitle>
                <StyledDetailsTech><span>{props.technology}</span></StyledDetailsTech>
                <StyledProjectInfo><p>{props.info}</p></StyledProjectInfo>
            </StyledDetailsContainer>
        </StyledProjectContainer>
  
    )
}

export default ProjectCard