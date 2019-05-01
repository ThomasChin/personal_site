import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import BaseRouter from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header title="Thomas Chin" scroll>
                <Navigation>
                    <a href="/">Home</a>
                    <a href="/about">About Me</a>
                    <a href="/resume">Resume</a>
                    <a href="/projects">Projects</a>
                    <a href="/contact">Contact</a>
                </Navigation>
            </Header>
            <Content>
                <Router>
                  <BaseRouter />
                </Router>
            </Content>
        </Layout>
    </div>
  );
}

export default App;