import {  StyledContactSection, StyledContactHeader, StyledContactLine, StyledContactTitle, ContactContainer, ContactInformation, ContactIcons } from "./Contact.styled"
import React from 'react'
import { ContactForm } from "./ContactForm";
import { FaLinkedin,FaGithub ,FaTwitter  } from 'react-icons/fa'

import { useEffect, useRef } from 'react'
import { useInView, useAnimation} from 'framer-motion'

type PropsType = {
    ref?: React.Ref<HTMLDivElement>;
    id: string;
    
}

const Contact = React.forwardRef((props: PropsType, ref: React.Ref<HTMLDivElement>) => {

    const cardRef = useRef(null);
    const isInView = useInView(cardRef,{once: true})
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
        
      
            <StyledContactSection id={props.id} ref={ref} >
                <StyledContactHeader>
                    <StyledContactTitle>
                        <h3>Contact<span>.</span></h3>
                    </StyledContactTitle>
                    <StyledContactLine/>
                </StyledContactHeader>
                <ContactContainer    variants={NavItems}
                        initial='hidden' animate={mainControl}
                        transition={{ duration : 0.8, delay: 0.50}}>
                        <ContactInformation >
                                <h2>Let's Connect! 📩</h2>
                                    <p>If you ever just want a quick chat  you can find me on social media or you can send me a message here!</p>
                                <ContactIcons ref={cardRef}>
                                    <span ><FaGithub/></span>
                                    <span><FaLinkedin/></span>
                                    <span><FaTwitter/></span>
                                </ContactIcons>
                        </ContactInformation>
                       <ContactForm />
                </ContactContainer>
             
            </StyledContactSection>        
     

    )
})
export default Contact