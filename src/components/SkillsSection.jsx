import React from 'react'
import SkillsCard from "./SkillsCard"


function SkillsSection() {
  const languages = [
    { "tech": "Python", "icon": "devicon-python-plain" },
    { "tech": "C++", "icon": "devicon-cplusplus-plain" },
    { "tech": "Java", "icon": "devicon-java-plain" },
    { "tech": "JavaScript", "icon": "devicon-javascript-plain" }
  ];
  
  const webdev = [
    { "tech": "HTML", "icon": "devicon-html5-plain" },
    { "tech": "CSS", "icon": "devicon-css3-plain" },
    { "tech": "JavaScript", "icon": "devicon-javascript-plain" },
    { "tech": "ReactJs", "icon": "devicon-react-plain" },
    { "tech": "Bootstrap", "icon": "devicon-bootstrap-plain" }
  ];
  
  const database = [
    { "tech": "MySQL", "icon": "devicon-mysql-plain" },
    { "tech": "MongoDB", "icon": "devicon-mongodb-plain" },
    { "tech": "Firebase", "icon": "devicon-firebase-plain" }
  ];
  
  const devtools = [
    { "tech": "Git", "icon": "devicon-git-plain" },
    { "tech": "VSCode", "icon": "devicon-vscode-plain" },
    { "tech": "Postman", "icon": "devicon-postman-plain" }
  ];
  
  const pythonlibs = [
    { "tech": "Flask", "icon": "devicon-flask-plain" },
    { "tech": "Numpy", "icon": "devicon-numpy-plain" },
    { "tech": "Pandas", "icon": "devicon-pandas-plain" },
    { "tech": "Tkinter", "icon": "devicon-tkinter-plain" },
    { "tech": "Matplotlib", "icon": "devicon-matplotlib-plain" }
  ];
  



  return (
    <div className='skillcards'>
      <div>
        <h5>1. Programming Languages</h5>
        <div className="cards">
          {languages.map((languages, index) => (
            <SkillsCard 
              key={index} 
              tech={languages.tech} 
              icon={languages.icon} 
            />
          ))}

        </div>
      </div>
      <div>
        <h5>2. WebDev</h5>
        <div className="cards">
          {webdev.map((webdev, index) => (
              <SkillsCard 
                key={index} 
                tech={webdev.tech} 
                icon={webdev.icon} 
              />
            ))}

        </div>
      </div>
      <div>
        <h5>3. Databases</h5>
        <div className="cards">
            {database.map((database, index) => (
                <SkillsCard 
                  key={index} 
                  tech={database.tech} 
                  icon={database.icon} 
                />
              ))}

        </div>
      </div>
      <div>
        <h5>4. Dev Tools</h5>
        <div className="cards">
          {devtools.map((devtools, index) => (
              <SkillsCard 
                key={index} 
                tech={devtools.tech} 
                icon={devtools.icon} 
              />
            ))}
        </div>
      </div>
      <div>
        <h5>5. Python Libraries</h5>
        <div className="cards">
            {pythonlibs.map((pythonlibs, index) => (
              <SkillsCard 
                key={index} 
                tech={pythonlibs.tech} 
                icon={pythonlibs.icon} 
              />
            ))}
        </div>
      </div>

    </div>
  )
}

export default SkillsSection
