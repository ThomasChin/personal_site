import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <h6>{this.props.startYear} - {this.props.endYear}</h6>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
          <p>{this.props.schoolDescription}</p>
          <h5 style= {{marginTop: '0px'}}>Coursework:</h5>
          <p>{this.props.coursework}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Education;
