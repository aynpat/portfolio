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
            <StyleButton href="./public/resumeko.pdf" target="_blank">My resume</StyleButton>
        </StyleHeader>   
    )
}
export default Header