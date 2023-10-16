import { HeroContainer, StyledBannerImage, StyledContentContainer, StyledHeroBtn, StyledHeroSection, StyledMainHeadContainer, StyledSubHeadContainer } from "./styles/HeroSection.style"


const HeroSection = () => {
    return(

      <HeroContainer>
        <StyledHeroSection>
            <StyledMainHeadContainer>
                <h1>Hey, I'm Pat <span>👋</span></h1>
            </StyledMainHeadContainer>
            <StyledSubHeadContainer>
                <h2>I'm a <span>Full Stack Developer</span></h2>
            </StyledSubHeadContainer>
            <StyledContentContainer>
                  I've spent the last 5 years building and scaling software for some pretty cool companies. I also teach people to paint online (incase you've got an empty canvas layin' around 🎨). Let's connect!
            </StyledContentContainer>
            <StyledHeroBtn>Contact me</StyledHeroBtn>
        </StyledHeroSection>

        <StyledBannerImage>
                    <img src="image-hero.svg" alt="this is a banner"/>
        </StyledBannerImage>

    </HeroContainer>  
    
     
    )
}

export default HeroSection