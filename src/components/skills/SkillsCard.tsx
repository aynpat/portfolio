import { ImageContainer } from "./Skills.style";
import { useEffect, useRef } from 'react'
import { useInView, useAnimation} from 'framer-motion'

type PropsType = {
    id: number;
    imageSource: string;
    language: string;
};

const SkillsCard = (props: PropsType) => {

    const NavItems = {
        hidden: { opacity: 0, scale: 0},
        visible: { opacity: 1, scale :1 }
    }
    
    const skillsRef = useRef(null);
    const isInView = useInView(skillsRef,{once: true})
    const mainControl = useAnimation();
    useEffect(()=> {
        if(isInView){
            mainControl.start("visible")
        
        }
    }, [isInView,mainControl])
  

    return (
        <ImageContainer ref={skillsRef}  variants={NavItems}
        initial='hidden' animate={mainControl}
        transition={{ duration : 0.2, delay: 0.2}}>
            <img src={props.imageSource} alt="" />
            <p>{props.language}</p>
        </ImageContainer>
    );
};

export default SkillsCard;
