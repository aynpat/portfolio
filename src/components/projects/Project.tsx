
import React from "react"
import { StyledProjects, StyledProjectsHeader, StyledProjectsTitle, StyledProjectsLine, Container } from "./Project.style";


type PropsType = {
    ref?: React.Ref<HTMLDivElement>;
    id: string;
    children?:React.ReactNode

    
}

const Projects = React.forwardRef((props: PropsType,ref : React.Ref<HTMLDivElement>) => {
    return(
        <StyledProjects id={props.id} ref={ref}>
           <StyledProjectsHeader>
                <StyledProjectsTitle>
                    <h3>Projects<span>.</span></h3>
                </StyledProjectsTitle>
            <StyledProjectsLine/>
        </StyledProjectsHeader>
        <Container>
            {props.children}
        </Container>
        </StyledProjects>
    )
})

export default Projects