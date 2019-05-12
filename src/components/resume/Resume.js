import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://i.redd.it/jkkl5ltfgnf01.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '.3em', color: '#fff'}}>Thomas Chin</h2>
            <h4 style={{color: '#fff'}}>Software Engineer (Intern)</h4>
            <hr style={{borderTop: '3px solid #fff', width: '100%'}}/>
            <p style={{color: '#fff'}}>Software engineer interested in full stack web development and DevOps. Experienced with
             multiple languages as well as web application development and deployment.</p>
            <hr style={{borderTop: '3px solid #fff', width: '75%'}}/>
            <h5 style={{color: '#fff'}}>Email</h5>
            <p style={{color: '#fff'}}>tchin10@outlook.com</p>
            <hr style={{borderTop: '3px solid #fff', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Experience</h2>
            <Experience
                startYear='Nov. 2018'
                endYear='Present'
                jobName="Full Stack and Ops Engineering Intern"
                company="at ModusBox"
                jobDescription="Developed production-ready, user-facing APIs using Django Rest Framework and write
                complementary React components using Redux on the front-end. Integrated software with AWS Cognito for
                user authentication and Docker-compose for deployment."
              />
            <Experience
              startYear='Jun. 2017'
              endYear='Aug. 2017'
              jobName="Programming Instructor"
              company="at Coding with Kids"
              jobDescription="Planned and lectured weekly computer science curriculum reviewing core computer science fundamentals in pseudo-code and Java to classes of 8 or more students from grades
               1 – 8 resulting in students’ increased understanding of basic concepts.
              Mentored students with individual coding projects from ideation through project completion by offering one-on-one coaching resulting 
              in students presenting projects that demonstrated competence"
            />

            <hr style={{borderTop: '3px solid #fff'}} />

            <h2>Education</h2>
            <Education
              startYear={2016}
              endYear={2020}
              schoolName="Seattle University"
              schoolDescription="Bachelors in Computer Science | GPA: 3.7"
              coursework="Data Structures | Design and Analysis of Algorithms |
              Object Oriented Development | Fundamentals of Databases | Languages and Computation 
              | Computer Organization | Discrete Mathematics | Probability and Statistics"
               />

            <hr style={{borderTop: '3px solid #fff'}} />

            <h2>Skills</h2>
            <Skills
              skill="Python"
              progress={80}
            />
            <Skills
              skill="Django"
              progress={75}
            />
            <Skills
              skill="Java"
              progress={45}
            />
            <Skills
              skill="SQL"
              progress={45}
            />
            <Skills
              skill="Docker"
              progress={40}
            />
            <Skills
              skill="JavaScript"
              progress={40}
            />
            <Skills
              skill="React | Redux"
              progress={25}
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
