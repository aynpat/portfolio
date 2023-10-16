import {  StyledContactSection, StyledContactHeader, StyledContactLine, StyledContactTitle, ContactContainer, ContactInformation, ContactIcons } from "./Contact.styled"
import React from 'react'
import { ContactForm } from "./ContactForm";
import { FaLinkedin,FaGithub ,FaTwitter  } from 'react-icons/fa'

type PropsType = {
    ref?: React.Ref<HTMLDivElement>;
    id: string;
    
}

const Contact = React.forwardRef((props: PropsType, ref: React.Ref<HTMLDivElement>) => {
    return(
        
      
            <StyledContactSection id={props.id} ref={ref} >
                <StyledContactHeader>
                    <StyledContactTitle>
                        <h3>Contact<span>.</span></h3>
                    </StyledContactTitle>
                    <StyledContactLine/>
                </StyledContactHeader>
                <ContactContainer>
                        <ContactInformation>
                                <h2>Let's Connect! 📩</h2>
                                    <p>If you ever just want a quick chat  you can find me on social media or you can send me a message here!</p>
                                <ContactIcons>
                                    <span><FaGithub/></span>
                                    <span><FaLinkedin/></span>
                                    <span><FaTwitter/></span>
                                </ContactIcons>
                        </ContactInformation>
                       <ContactForm/>
                </ContactContainer>
             
            </StyledContactSection>        
     

    )
})
export default Contact