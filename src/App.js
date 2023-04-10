import './App.css';
import {TwitterOutlined,GithubOutlined,LinkedinOutlined,MediumOutlined,ArrowLeftOutlined,ArrowDownOutlined,MenuOutlined} from "@ant-design/icons"
import { Button } from 'antd';

import attahzu from "./images/projects/attahzu.png"
import tbs from "./images/projects/tbs.png"

import { useState } from 'react';

//import { motion,AnimatePresence } from 'framer-motion';


const Tool=props=>{
  const {name,short} = props

  return(
    <>
      {
        short?
          <div className='popup-tool'>{name}</div>
        :
        <div className='tool'>
          {/* <div className='tool-logo' /> */}
          <div className='tool-name'>{name}</div>
        </div>
      }
    </>
  );
}



const Project=props=>{
  const {name,tag,image,openPopUp,id} = props
  return(
    <div className='project' layoutId={id} onClick={()=>{openPopUp(id,{name:name})}}>
      <div className='project-image'>
        <img src={image} height="100%"  width="100%" alt='project'/>
      </div>
      <div className='project-detail-container'>
        <div className='project-info'>
          <div className='project-name'>{name}</div>
          <div className='project-tag'>#{tag}</div>
        </div>
        {/* <div className='project-link'></div> */}
      </div>
    </div>
  );
}


function App() {
  const [popupOpen,setpopUpState] = useState(null)
  const [stack,updateStack] = useState([])

  
  const openPopUp=(page,data=null)=>{
    if(!(stack.includes(page))){
      const myStack = [...stack]
      myStack.push(page)

      updateStack(myStack)
    }

    setpopUpState({
      page:page === "my-work"?"works":"project",
      data:data,
      heading:page === "my-work"?"MY WORKS":data.name
    })
  }

  const goback=()=>{
    if(stack.length === 1){
      updateStack([])
      setpopUpState(null)
    }else{
      updateStack(['works'])
      openPopUp("my-work")
    }
  }

  const projects=[
    {name:"Sheet Music Africa",tag:"e-commerce",image:attahzu,id:1},
    {name:"The boys",tag:"e-commerce",image:tbs,id:2},
    {name:"Attahzu Farm",tag:"Informational website",image:attahzu,id:3},
  ]

  return (
    <>
      <div className="App">
        <div id="aboutme">
          <div className="inner-container">
            <div id="pre-intro">
              Hi, my name is
            </div>
            <div id="myname">EMMANUEL ATTAH-AZUZU</div>
            <div id="roles">Back-end Developer | Devops and Cloud Enginner</div>

            <div id="post-intro">
            I am a Back-end developer with 6+ years of freelancing experience building websites and APIs that scale and are efficient. I am proficient with both front-end and back-end technologies but specialize mainly in the back-end. I pride myself in the development and deployment of web applications using DevOps best practices and tools.
I am also a technical writer. You can find me on Medium, where I write about devops, web development and other interesting things.
            </div>

          </div>
        </div>
        <div id="projects">
          <div className='inner-container'>
            <div id="info">
            I am a Back-end developer with 6+ years of freelancing experience building websites and APIs that scale and are efficient. I am proficient with both front-end and back-end technologies but specialize mainly in the back-end. I pride myself in the development and deployment of web applications using DevOps best practices and tools.
I am also a technical writer. You can find me on Medium, where I write about devops, web development and other interesting things.
            </div>

              <div className='site-heading'>SOME OF MY WORK </div>
              <div id="project-container">
                {
                  projects.map((project,index)=>(
                    <Project name={project.name} key={index} tag={project.tag} image={project.image} openPopUp={openPopUp} id={project.id}/>
                  ))
                }
              </div>
              {projects.length>6&&<div id="view-all-project-container">
                <div id="view-all-project" onClick={()=>{openPopUp("my-work")}}>Show more</div>
              </div>}
          </div>
        </div>

        <div id="small-menu"><MenuOutlined  style={{fontSize:'24px'}}/></div>
        <div id="scroll-down">
          <div id="scroll-down-icon">
          <ArrowDownOutlined style={{fontSize:"20px",color:'#ffffff'}}/>
          </div>
        </div>
        
      </div>

      <div id="navBar">
        <div id="hello">Hello..</div>
        <div id="hire_text">Get In Touch</div>
      </div>

      <div id="stack">
        <div className='inner-container'>
          <div className='site-heading'>SOME OF THE TECHNOLOGY I USE</div>
          <div id="tool-container">
            <Tool name="Python"/>
            <Tool name="Django"/>
            <Tool name="ReactJs"/>
            <Tool name="Javascript"/>
            <Tool name="NodeJs"/>
            <Tool name="ExpressJs"/>
            <Tool name="DRF"/>
            <Tool name="HTML5 & CSS3"/>
          </div>

          <div className='site-heading'>CLOUD PROVIDERS I USE</div>

        </div>
      </div>
      <div id="contact">
        <div className='inner-container'>
          <div className='site-heading'>GET IN TOUCH</div>
          <div className='heading-caption'>Interested In Working Together</div>

          <div id="contact-inner">
            <div id="email">Send me an email : <a className="email-link" href="mailto:attahzuzu@gmail.com" rel="noopener noreferrer" target="_blank">attahzuzu@gmail.com</a> <br/>Or<br/> connect with me on any of these platform</div>
            <div id="socials">
              <div className='social'>
                <TwitterOutlined style={{fontSize:'20px'}}/>
              </div>
              <div className='social'>
                <GithubOutlined style={{fontSize:'20px'}}/>
              </div>
              <div className='social'>
                <LinkedinOutlined style={{fontSize:'20px'}}/>
              </div>
              <div className='social'>
                <MediumOutlined style={{fontSize:'20px'}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="tx">Powered by <b>TRINITYX</b></div>

      {popupOpen&&
        <div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        id="popup-container" layoutId={popupOpen.data?popupOpen.data.id : 0}>
          <div id="popup">
            <div id="popup-head">
              <div id="popup-btn" onClick={goback}><ArrowLeftOutlined  style={{fontSize:'20px'}}/></div>
              <div id="popup-title">{popupOpen.heading}</div>
            </div>
            <div id="popup-body">
              {popupOpen.data?
                <>
                  <img src={tbs} alt="main" id="popup-image"/>
                  <div id="popup-content">
                    <div id="tools-used">
                      <div className='popup-heading'>Tools used</div>
                      <div id="popup-tools-container">
                        <Tool name="Django"  short={true}/>
                        <Tool name="React"  short={true}/>
                      </div>
                    </div>
                    <div id="discription">
                      <div className='popup-heading'>Project discription</div>
                      <div id="discription-text">
                        Full-stack python and JavaScript developer 
                        with over 6 years of experience designing and building
                        web applications and APIs.
                        Full-stack python and JavaScript developer 
                        with over 6 years of experience designing and building
                        web applications and APIs.
                      </div>
                    </div>
                    <div id="popup-footer">
                      <Button type="primary" size={"default"} ghost>
                        View Project
                      </Button>
                    </div>
                  </div>
                </>
              :
              <div id="popup-content">
                <div id="all-my-work">
                  {
                    projects.map((e,index)=>(
                      <div className='work' onClick={()=>{openPopUp("project",e)}} key={"popup_"+index}>
                        <div className='work-name'>{e.name}</div>
                        <div className='work-tag'>#{e.tag}</div>
                      </div>
                    ))
                  }
                </div>
              </div>
              }
              
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default App;
