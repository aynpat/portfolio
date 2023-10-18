
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
                    <p><span>A</span>s an enthusiastic and committed learner in the field of web development, I'm excited about creating dynamic, user-centered web applications. My strong foundation in HTML, CSS, and JavaScript enables me to design aesthetically pleasing and responsive front-end interfaces. I'm eager to apply my skills to contribute to the growth of businesses while working collaboratively in a team-oriented environment.</p>
            </StyledAboutContent>
              
                <StyledAboutImage>
                    <img src="/images/about-final.svg" alt="this is a banner"/>
                </StyledAboutImage>
            </StyledContainer> 
    
            </StyledAboutSection>        
          

    )
})
export default About