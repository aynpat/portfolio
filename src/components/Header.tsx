import { StyleButton, StyleHeader, StyleIconContainer, StyleIcons } from "./styles/Header.style"
import { FaLinkedin,FaGithub ,FaTwitter  } from 'react-icons/fa'

const Header = () => {
    return(  
        <StyleHeader>
            <StyleIconContainer>
                <StyleIcons><FaLinkedin/></StyleIcons>
                <StyleIcons><FaGithub/></StyleIcons>
                <StyleIcons><FaTwitter/></StyleIcons>
            </StyleIconContainer>
            <StyleButton>My resume</StyleButton>
        </StyleHeader>   
    )
}
export default Header