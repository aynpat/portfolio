import { StyleButton, StyleHeader, StyleIconContainer, StyleIcons } from "./styles/Header.style"
import { FaLinkedin,FaGithub ,FaTwitter  } from 'react-icons/fa'
import { useEffect, useRef } from 'react'
import { useInView, useAnimation} from 'framer-motion'

const Header = () => {

    const cardRef = useRef(null);
    const isInView = useInView(cardRef,{once: true})
    const mainControl = useAnimation();
    useEffect(()=> {
        if(isInView){
            mainControl.start("visible")
        
        }
    }, [isInView,mainControl])

        const NavItems = {
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, }
        }

        // ref={cardRef} variants={NavItems}
        // initial='hidden' animate={mainControl}
        // transition={{ duration : 0.8, delay: 0.50}}
    return(  
        <StyleHeader>
            <StyleIconContainer ref={cardRef} >
                <StyleIcons 
                href='https://www.linkedin.com/in/ryan-dela-cruz-b33b4b290/'
                target="_blank"
                variants={NavItems}
                initial='hidden' animate={mainControl}
                transition={{ duration : 0.8, delay: 0.25}}
                ><FaLinkedin/></StyleIcons>
                <StyleIcons
                variants={NavItems}
                initial='hidden' animate={mainControl}
                transition={{ duration : 0.8, delay: 0.50}}
                ><FaGithub/></StyleIcons>
                <StyleIcons
                variants={NavItems}
                initial='hidden' animate={mainControl}
                transition={{ duration : 0.8, delay: 1}}
                ><FaTwitter/></StyleIcons>
            </StyleIconContainer>
            <StyleButton href="/files/resumeko.pdf" type="application/pdf" target="_blank">My resume</StyleButton>
        </StyleHeader>   
    )
}
export default Header