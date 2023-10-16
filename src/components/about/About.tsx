
import {  StyledAboutContent, StyledAboutHeader, StyledAboutImage, StyledAboutLine, StyledAboutSection, StyledAboutTitle, StyledContainer } from "./About.style"
import React from 'react'

type PropsType = {
    ref?: React.Ref<HTMLDivElement>;
    id: string;
    
}

const About = React.forwardRef((props: PropsType, ref: React.Ref<HTMLDivElement>) => {
    return(
        
      
            <StyledAboutSection id={props.id} ref={ref} > 
                <StyledAboutHeader>
                    <StyledAboutTitle>
                        <h3>About<span>.</span></h3>
                    </StyledAboutTitle>
                    <StyledAboutLine/>
                </StyledAboutHeader>

            <StyledContainer>
            <StyledAboutContent>
                    <p><span>A</span>s a dedicated and passionate learner in the field of development I have an interest in creating interactive and user focused web applications. I have built my foundation learning the fundamentals.HTML, CSS and JavaScript to build visually appealing and responsive front end interfaces. I am enthusiastic, about contributing my skills to design user experiences while working collaboratively within a team oriented setting.</p>
                </StyledAboutContent>
              
                <StyledAboutImage>
                    <img src="/images/about-final.svg" alt="this is a banner"/>
                </StyledAboutImage>
            </StyledContainer> 
    
            </StyledAboutSection>        
          

    )
})
export default About