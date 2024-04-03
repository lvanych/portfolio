import React from "react"; 
import { ProjectList } from "./ProjectList";
import { Toolbar } from "./Toolbar";
import { project } from "./project";

export class Portfolio extends React.Component {
  constructor() {
    super();
    const selected = ["All", "Websites", "Flayers", "Business Cards"];
    this.state = {
      selected: selected,
      project: project,
      proj: project
    }
  }

  handleSelectFilter = (e) => {
    this.setState({proj: project.filter((el) => e === el.category)})
}
  
  render() {
    
    return (
      <div className="container">
        <Toolbar
          selected={["All", "Websites", "Flayers", "Business Cards"]} 
          handleSelectFilter={this.handleSelectFilter}
        />
        <ProjectList state={this.state}/>
      </div>
    );
  }
}


