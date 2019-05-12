import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activeTab: 0
      };
    }

    toggleCategories() {
      if(this.state.activeTab === 0) {
        return (
          <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://static.djangoproject.com/img/logos/django-logo-negative.png) center / cover'}}>
                Lead Manager
              </CardTitle>
              <CardText>
                A full stack web application for managing leads with full user authentication. Uses Django Rest Framework and SQLite for the back-end.
              </CardText>
              <CardActions border>
                <a href="https://github.com/ThomasChin/lead-manager" rel="noopener noreferrer" target="_blank">
                  <Button colored>GitHub</Button>
                </a>
                <Button colored>Project Site</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://static.djangoproject.com/img/logos/django-logo-negative.png) center / cover'}}>
                COMING SOON
              </CardTitle>
              <CardText>
                Coming Soon
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>Project Site</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://static.djangoproject.com/img/logos/django-logo-negative.png) center / cover'}}>
                    COMING SOON
                </CardTitle>
                <CardText>
                    Coming Soon
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>Project Site</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
          </div>
        )
      } else if (this.state.activeTab === 1) {
        return (
          <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                Lead Manager
              </CardTitle>
              <CardText>
                A full stack web application for managing leads with full user authentication. Uses React for UI and Redux for managing state and 
                connecting to the Django back-end.
              </CardText>
              <CardActions border>
                <a href="https://github.com/ThomasChin/lead-manager" rel="noopener noreferrer" target="_blank">
                  <Button colored>GitHub</Button>
                </a>
                <Button colored>Project Site</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                COMING SOON
              </CardTitle>
              <CardText>
                Coming Soon
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>Project Site</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
        
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                COMING SOON
              </CardTitle>
              <CardText>
                Coming Soon
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>Project Site</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        )
      }
    }

  render() {
    return(
      <div>
        <div className="category-tabs">
          <Tabs style={{color: '#fff'}} activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>Django</Tab>
            <Tab>React</Tab>
          </Tabs>
        </div>

        <Grid className="full-projects-grid">
            <Cell col={12}>
              <div className="content">
                {this.toggleCategories()}
              </div>
            </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects;
