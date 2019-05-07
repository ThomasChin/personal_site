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

            <h2 style={{paddingTop: '.3em'}}>Thomas Chin</h2>
            <h4>Software Engineer (Intern)</h4>
            <hr style={{borderTop: '3px solid orange', width: '100%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid orange', width: '50%'}}/>
            <h5>Email</h5>
            <p>tchin10@outlook.com</p>
            <hr style={{borderTop: '3px solid #fff', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2016}
              endYear={2020}
              schoolName="Seattle University"
              schoolDescription="Bachelors in Computer Science | GPA: 3.7"
               />
              <hr style={{borderTop: '3px solid #fff'}} />
            <h2>Experience</h2>
            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #fff'}} />

              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
              />
              <Skills
                skill="HTML/CSS"
                progress={80}
              />
              <Skills
                skill="NodeJS"
                progress={50}
              />
              <Skills
                skill="React"
                progress={25}
              />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
