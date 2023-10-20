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
            <StyleButton href="/files/resumeko.pdf" type="application/pdf" target="_blank">My resume ko</StyleButton>
        </StyleHeader>   
    )
}
export default Header