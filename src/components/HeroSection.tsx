import { HeroContainer, StyledBannerImage, StyledContentContainer, StyledHeroBtn, StyledHeroSection, StyledMainHeadContainer, StyledSubHeadContainer } from "./styles/HeroSection.style"
import { FaRegPaperPlane } from 'react-icons/fa'
import { useEffect, useRef } from 'react'
import { useInView, useAnimation} from 'framer-motion'

const HeroSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref,{once: true})
    const mainControl = useAnimation();
    useEffect(()=> {
        if(isInView){
            mainControl.start("visible")
        
        }
    }, [isInView])

    return (
        <HeroContainer ref={ref}>
            <StyledHeroSection>
                <StyledMainHeadContainer  variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0, }
        }}
            initial='hidden' animate={mainControl}
            transition={{ duration : 0.5, delay: 0.25}}>
                    <h1>Hey, I'm Pat <span>👋</span></h1>
                </StyledMainHeadContainer>
                <StyledSubHeadContainer ref={ref} variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0, }
        }}
            initial='hidden' animate={mainControl}
            transition={{ duration : 0.5, delay: 0.25}}>
                    <h2>I'm a <span>Software Engineer</span></h2>
                </StyledSubHeadContainer>
                <StyledContentContainer ref={ref} variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0, }
        }}
            initial='hidden' animate={mainControl}
            transition={{ duration : 0.5, delay: 0.25}}>
                    I've spent the last 5 years building and scaling software for some pretty cool companies. I also teach people to paint online (in case you've got an empty canvas layin' around 🎨). Let's connect!
                </StyledContentContainer>
                <StyledHeroBtn ref={ref} variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0, }
        }}
            initial='hidden' animate={mainControl}
            transition={{ duration : 0.5, delay: 0.25}}>
                    <a className="btnLink" href="#contact">Contact me</a> <FaRegPaperPlane />
                </StyledHeroBtn>
            </StyledHeroSection>

            <StyledBannerImage ref={ref} variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0, }
        }}
            initial='hidden' animate={mainControl}
            transition={{ duration : 0.5, delay: 0.25}}>
                <img src="image-hero.svg" alt="this is a banner" />
            </StyledBannerImage>
        </HeroContainer>
    )
}

export default HeroSection
