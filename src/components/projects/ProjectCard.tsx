import { StyledDetailsContainer, StyledDetailsTech, StyledDetailsTitle, StyledImageContainer, StyledProjectContainer, StyledProjectInfo } from "./Project.style"

type TypeProps = {
    id : number;
    image:string;
    title:string;
    technology:string;
    info : string;
}
 const ProjectCard = (props : TypeProps) => {
    return(
  
        <StyledProjectContainer>
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