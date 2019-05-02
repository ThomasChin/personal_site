import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Home extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img
                            src="https://i.redd.it/jkkl5ltfgnf01.png"
                            alt="aqua"
                            className="aqua-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>
                                Python | Django | JavaScript | React
                            </p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/thomas-c-b19804120/" rel="noopener noreferrer" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>

                                {/* GitHub */}
                                <a href="https://github.com/ThomasChin" rel="noopener noreferrer" target="_blank">
                                    <i class="fab fa-github-square"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;
