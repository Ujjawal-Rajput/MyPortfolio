import React from 'react'
import SkillsCard from "./SkillsCard"


function SkillsSection() {
  return (
    <div className='skillcards'>
          <div>
            <h5>1. Programming Languages</h5>
            <div className="cards">
              <SkillsCard language="Python" icon="devicon-python-plain" />
              <SkillsCard language="C++" icon="devicon-cplusplus-plain" />
              <SkillsCard language="Java" icon="devicon-java-plain" />
              <SkillsCard language="Javascript" icon="devicon-javascript-plain" />
      
            </div>
          </div>
          <div>
            <h5>2. WebDev</h5>
            <div className="cards">
              <SkillsCard language="HTML" icon="devicon-html5-plain" />
              <SkillsCard language="CSS" icon="devicon-css3-plain" />
              <SkillsCard language="Javascript" icon="devicon-javascript-plain" />              
              <SkillsCard language="ReactJs" icon="devicon-react-plain" />              
              <SkillsCard language="Bootstrap" icon="devicon-bootstrap-plain" />              
              {/* <SkillsCard language="Python" icon="ri-javascript-line" /> */}
              {/* <SkillsCard language="Python" icon="ri-javascript-line" /> */}
             
            </div>
          </div>
          <div>
            <h5>3. Databases</h5>
            <div className="cards">
              <SkillsCard language="MySQL" icon="devicon-mysql-plain" />
              <SkillsCard language="MongoDB" icon="devicon-mongodb-plain" />
              <SkillsCard language="Firebase" icon="devicon-firebase-plain" />              
              
            </div>
          </div>
          <div>
            <h5>4. Dev Tools</h5>
            <div className="cards">
              <SkillsCard language="Git" icon="devicon-git-plain" />
              <SkillsCard language="VScode" icon="devicon-vscode-plain" />
              <SkillsCard language="Postman" icon="devicon-postman-plain" />              
              
            </div>
          </div>
          <div>
            <h5>5. Python Libraries</h5>
            <div className="cards">
              <SkillsCard language="Flask" icon="devicon-flask-plain" />
              <SkillsCard language="Numpy" icon="devicon-numpy-plain" />
              <SkillsCard language="Pandas" icon="devicon-pandas-plain" />              
              <SkillsCard language="Tkinter" icon="devicon-tkinter-plain" />              
              <SkillsCard language="Matplotlib" icon="devicon-matplotlib-plain" />              
              
            </div>
          </div>
          
        </div>
  )
}

export default SkillsSection
