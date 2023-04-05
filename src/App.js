import './App.css';
import {TwitterOutlined,GithubOutlined,LinkedinOutlined,MediumOutlined} from "@ant-design/icons"


const Tool=props=>{
  const {name} = props

  return(
    <div className='tool'>
      <div className='tool-logo' />
      <div className='tool-name'>{name}</div>
    </div>
  );
}


// const Social=props=>{
//   return(
//     <div className='social'>
//       <TwitterOutlined style={{fontSize:'25px'}}/>
//     </div>
//   );
// }

const Project=props=>{
  const {name,tag} = props
  return(
    <div className='project'>
      <div className='project-image'/>
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
  return (
    <>
      <div className="App">
        <div id="aboutme">
          <div className="inner-container">
            <div id="myname">EMMANUEL ATTAH-AZUZU</div>
            <div id="roles">Senoir Back-end Developer | Devops and Cloud Enginner</div>
          </div>
        </div>
        <div id="projects">
          <div className='inner-container'>
            <div id="info">
                Full-stack python and JavaScript developer 
                with over 6 years of experience designing and building
                web applications and APIs.
                Full-stack python and JavaScript developer 
                with over 6 years of experience designing and building
                web applications and APIs.
              </div>

              <div className='site-heading'>SOME OF MY WORK </div>
              <div id="project-container">
                <Project name="Sheet Music Africa" tag="web"/>
                <Project name="The Boys" tag="web"/>
                <Project name="Attahzu Farm" tag="web"/>
              </div>
          </div>
        </div>
        
      </div>

      <div id="navBar">
        <div id="hello">Hello..</div>
        <div id="hire_text">Contact Me | Hire Me</div>
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
        </div>
      </div>
      <div id="contact">
        <div className='inner-container'>
          <div className='site-heading'>HIRE ME</div>
          <div className='heading-caption'>Interested In Working Together</div>
          <div id="contact-inner">
            <div id="email">Send me an email : <span id="email-address">attahzuzu@gmail.com</span> Or connect with me on social media</div>
            <div id="socials">
              <div className='social'>
                <TwitterOutlined style={{fontSize:'25px'}}/>
              </div>
              <div className='social'>
                <GithubOutlined style={{fontSize:'25px'}}/>
              </div>
              <div className='social'>
                <LinkedinOutlined style={{fontSize:'25px'}}/>
              </div>
              <div className='social'>
                <MediumOutlined style={{fontSize:'25px'}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="tx">Powered by <b>TRINITYX</b></div>
    </>
  );
}

export default App;
