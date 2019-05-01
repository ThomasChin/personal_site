import React from 'react';
import { Route } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';

const BaseRouter = () => (
    <div>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/resume' component={Resume}/>
    </div>
);

export default BaseRouter;
