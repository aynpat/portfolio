
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
    }, [isInView])

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
                    <p><span>I</span>am an enthusiastic and dedicated software engineer with a passion for building efficient and reliable software solutions. My in-depth knowledge of software engineering ensures that I produce high-quality software. I'm eager to use my skills to help businesses grow while working collaboratively in a team.</p>
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