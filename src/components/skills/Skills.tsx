import {  StyledSkillsSection, StyledSkillsHeader, StyledSkillsTitle, ImageContainer, StyleSkillsContainer, StyledSkillsLine } from "./Skills.style"
import React from 'react'

type PropsType = {
    ref?: React.Ref<HTMLDivElement>;
    id: string;
    
}

const Skills = React.forwardRef((props: PropsType, ref: React.Ref<HTMLDivElement>) => {
    return(
            <StyledSkillsSection id={props.id} ref={ref} >
                <StyledSkillsHeader>
                    <StyledSkillsTitle>
                        <h3>Skills<span>.</span> </h3>
                    </StyledSkillsTitle>
                    <StyledSkillsLine/>
                </StyledSkillsHeader>
                <StyleSkillsContainer>
                     <ImageContainer>
                     <img src="/images/mysql_icon.svg" alt=""/> 
                       <p>MySQL</p>
                     </ImageContainer>
                     <ImageContainer>
                     <img src="/images/nodejs_icon.svg" alt="" />
                       <p>NodeJS</p>
                     </ImageContainer>
                     <ImageContainer>
                     <img src="/images/html_icon.svg" alt="" /> 
                       <p>HTML</p>
                     </ImageContainer>
                     <ImageContainer>
                     <img src="/images/css_icon.svg" alt="" /> 
                       <p>CSS</p>
                     </ImageContainer>
                     <ImageContainer>
                     <img src="/images/git_icon.svg" alt="" />
                       <p>Git</p>
                     </ImageContainer>
                     <ImageContainer>
                     <img src="/images/expressjs_icon.svg" alt="" /> 
                       <p>Express.Js</p>
                     </ImageContainer>
                     <ImageContainer>
                     <img src="/images/mongodb_icon.svg" alt="" />
                       <p>MongoDB</p>
                     </ImageContainer>
                     <ImageContainer>
                     <img src="/images/react_icon.svg" alt="" /> 
                       <p>React</p>
                     </ImageContainer>
                     <ImageContainer>
                     <img src="/images/typescript_icon.svg" alt="" />
                       <p>TypeScript</p>
                     </ImageContainer>
                     <ImageContainer>
                     <img src="/images/csharp_icon.svg" alt="" />
                       <p>CSharp</p>
                     </ImageContainer>
                     <ImageContainer>
                     <img src="/images/tailwind_icon.svg" alt="" />
                       <p>TailWind</p>
                     </ImageContainer>
                </StyleSkillsContainer>
            </StyledSkillsSection>        
     

    )
})
export default Skills