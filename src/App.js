import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import BaseRouter from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title="Thomas Chin" scroll>
                <Navigation>
                    <a href="/">Home</a>
                    <a href="/about">About Me</a>
                    <a href="/resume">Resume</a>
                    <a href="/projects">Projects</a>
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
