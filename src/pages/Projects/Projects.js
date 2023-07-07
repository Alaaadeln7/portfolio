import React, { Component } from "react";
import Project from "./Project";
import './projects.scss';
import data from "./projectsData";
import { FaStar } from "react-icons/fa";
class Projects extends Component {
  constructor() {
    super()
    this.state = {
      projectsData: data
    }
    this.mapping = this.mapping.bind(this);
  }
  mapping(value) {
    return (
      value.projects.map(el => <Project
        key={el.id}
        img={el.img}
        techniques={el.techniques}
        projectName={el.projectName}
        description={el.description}
        sourceCode={el.sourceCode}
        liveDiom={el.liveDiom} />)
    )
  }
  render() {
    return (
      <section className="projects">
        <div className="container">
          <div className="header-projects">
            <div className="stars">
              <span><FaStar /></span>
              <span><FaStar /></span>
              <span><FaStar /></span>
              <span><FaStar /></span>
              <span><FaStar /></span>
            </div>
            <h2 className="section-title">
              My Projects
            </h2>
          </div>
          <div className='content'>
            {this.mapping(this.state.projectsData)}
          </div>
        </div>
      </section>
    )
  }
}
export default Projects;