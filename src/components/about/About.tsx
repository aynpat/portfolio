
import {  StyledAboutContent, StyledAboutHeader, StyledAboutImage, StyledAboutLine, StyledAboutSection, StyledAboutTitle, StyledContainer } from "./About.style"
import React,{ useEffect, useRef } from 'react'
import { useInView, useAnimation} from 'framer-motion'
type PropsType = {
    ref?: React.Ref<HTMLDivElement>;
    id: string;
    
}

const About = React.forwardRef((props: PropsType, ref: React.Ref<HTMLDivElement>) => {

    const aboutRef = useRef(null);
    const titleRef = useRef(null);
    const imageRef = useRef(null);
    const isInView = useInView(aboutRef,{once: true})
    const mainControl = useAnimation();
    useEffect(()=> {
        if(isInView){
            mainControl.start("visible")
        
        }
    }, [isInView,mainControl])

        const NavItems = {
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0, }
        }

    return(
        
      
            <StyledAboutSection  id={props.id} ref={ref} > 
                <StyledAboutHeader>

                    <StyledAboutTitle 
                    ref={titleRef} 
                        variants={NavItems}
                        initial='hidden' animate={mainControl}
                        transition={{ duration : 0.5, delay: 0.25}}>
                        <h3>About<span>.</span></h3>
                    </StyledAboutTitle>

                    <StyledAboutLine/>
                </StyledAboutHeader>

            <StyledContainer>
            <StyledAboutContent  
                        ref={aboutRef} 
                        variants={NavItems}
                        initial='hidden' animate={mainControl}
                        transition={{ duration : 0.5, delay: 0.25}}>
                    <p><span>A</span>s an enthusiastic and committed learner in the field of web development, I'm excited about creating dynamic, user-centered web applications. My strong foundation in HTML, CSS, and JavaScript enables me to design aesthetically pleasing and responsive front-end interfaces. I'm eager to apply my skills to contribute to the growth of businesses while working collaboratively in a team-oriented environment.</p>
            </StyledAboutContent>
              
                <StyledAboutImage variants={NavItems}  ref={imageRef} 
                        initial='hidden' animate={mainControl}
                        transition={{ duration : 0.5, delay: 0.25}}>
                    <img src="/images/about-final.svg" alt="this is a banner"/>
                </StyledAboutImage>
            </StyledContainer> 
    
            </StyledAboutSection >        
          

    )
})
export default About