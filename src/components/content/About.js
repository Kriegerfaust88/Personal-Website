import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="content-area">
                <h2>Hey there!</h2>
                <br />
                <p>I am an aspiring Software Developer currently living in Langley, British Columbia, Canada. I am working hard on making a career transition from general IT to software development.</p>
                <p>My development experience includes full-stack Javascript (Node/React/JQuery), ASP.NET and version control with Git.</p>
                <p>You can check out a portfolio of my GitHub repositories under the 'Projects' tab.</p>
                <p>In my spare time, I love to fly (and crash) RC aircraft and build <a href="http://kriegerfaust.imgur.com/">scale models</a>.</p>
            </div>
        );
    }
}

export default About;
