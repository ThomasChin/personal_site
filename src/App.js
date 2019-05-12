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
            <a style={{ fontWeight: 'bold', opacity: 1 }} href="/">Home</a>
            <a style={{ fontWeight: 'bold', opacity: 1 }} href="/about">About Me</a>
            <a style={{ fontWeight: 'bold', opacity: 1  }} href="/resume">Resume</a>
            <a style={{ fontWeight: 'bold', opacity: 1  }} href="/projects">Projects</a>
        </Navigation>
        </Header>

        <Content style={{ background: 'linear-gradient(to right, #5B86E5, #36D1DC)' }}>
          <Router>
            <BaseRouter />
          </Router>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
