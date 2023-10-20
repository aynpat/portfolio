import { useState, useEffect} from 'react'
import { useInView } from 'react-intersection-observer'
import contents from './content'
import './App.css'
import SideBar from './components/SideBar'
import Main from './components/Main'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import About from './components/about/About'
import Projects from './components/projects/Project'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import ProjectCard from './components/projects/ProjectCard'
import ContainerStyled from './components/Container.style'
import Footer from './components/footer/Footer'

function App() {

  const [ isInViewAbout, setIsInViewAbout ] = useState<boolean>(false)
  const [ isInViewProject, setIsInViewProject ] = useState<boolean>(false)
  const [ isInViewSkills, setIsInViewSkills ] = useState<boolean>(false)
  const [ isInViewContact, setIsInViewContact ] = useState<boolean>(false)
  
  const { ref : aboutRef, inView : isAboutInView } = useInView({threshold : 0.7})
  const { ref : projectRef, inView : isProjectInView } = useInView({threshold : 0.1})
  const { ref : skillRef, inView : isSkillsInVIew } = useInView({threshold : 0.5})
  const { ref : contactRef, inView : isContactInView } = useInView({threshold : 0.1})

   // Update the isInView state whenever inView properties change
   useEffect(() => {
    if (isAboutInView ) {
      setIsInViewAbout(true);
      setIsInViewProject(false)
      setIsInViewSkills(false)
      setIsInViewContact(false)
    }
    
    else if(isProjectInView){
      setIsInViewProject(true)
      setIsInViewAbout(false);
      setIsInViewSkills(false)
      setIsInViewContact(false)
    }
    else if(isSkillsInVIew) {
      setIsInViewSkills(true)
      setIsInViewAbout(false);
      setIsInViewProject(false)
      setIsInViewContact(false)
    }
    else if(isContactInView) {
      setIsInViewContact(true)
      setIsInViewAbout(false);
      setIsInViewProject(false)
      setIsInViewSkills(false)
     
    }
    else {
      setIsInViewAbout(false)
    }
   
    }
    
, [isAboutInView, isProjectInView, isSkillsInVIew, isContactInView]);

  return (
    <>
    
    <Main>
    <SideBar aboutProp={isInViewAbout} projectProp={isInViewProject} ExpProp={isInViewSkills} contactProp={isInViewContact}/>
      <ContainerStyled>
          <Header/>
          <HeroSection/>
          <About id="about" ref={aboutRef}/>
          <Projects id="projects" ref={projectRef}>
            {
              contents?.map((content,index)=> {
                 return(
                      <ProjectCard key={index}
                          id={content.contentId}
                          image={content.image}
                          title={content.title}
                          technology={content.technology}
                          info={content.info}
                      /> )})
            }
 
          </Projects>
          <Skills id='skills' ref={skillRef}/>
          <Contact id='contact' ref={contactRef}/>
          <Footer/> 
        </ContainerStyled>   
        
      </Main>
    </>
    
  )
}

export default App












 {/* <div id="about" style={{width : '100%',height:'100vh',backgroundColor:'green',color:'white', textAlign:'center'}} ref={aboutRef}>about${isAboutInView.toString()}</div> */}
          {/* <div id="projects" style={{width : '100%',height:'100vh',backgroundColor:'hsla(0,0%,7%,.25)',color:'white', textAlign:'center'}} ref={projectRef}>projects${isProjectInView.toString()}</div> */}
          {/* <div id="skills" style={{width : '100%',height:'100vh',backgroundColor:'hsla(0,0%,7%,.25)',color:'white', textAlign:'center'}} ref={skillRef}>exp${isExpInVIew.toString()}</div> */}
          {/* <div id="contact" style={{width : '100%',height:'100vh',backgroundColor:'blue',color:'hsla(0,0%,7%,.25)', textAlign:'center'}} ref={contactRef}>contact${isContactInView.toString()}</div> */}