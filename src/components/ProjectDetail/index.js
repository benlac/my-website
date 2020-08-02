import React from 'react';

import './projectDetail.scss';

const ProjectDetail = (props) => {
  const id = parseInt(props.match.params.id);
  const project = props.projects.find((project) => project.id === id);
  console.log(project);
  return (
    <div className="project">
      {project.name}
    </div>
  );
}
export default ProjectDetail;
