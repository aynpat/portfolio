import {  StyledSkillsSection, StyledSkillsHeader, StyledSkillsTitle,  StyleSkillsContainer, StyledSkillsLine } from "./Skills.style"
import React from 'react'
type PropsType = {
    ref?: React.Ref<HTMLDivElement>;
    id: string;
    children : React.ReactNode;
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
                          {props.children}
                </StyleSkillsContainer>
            </StyledSkillsSection>        
     

    )
})
export default Skills