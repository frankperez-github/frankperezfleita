function ProjectPreview({projectImage, projectName, projectLink})
{
    return(
        <div className="ProjectPreview">
            <div className="projectImage">
                <img src={projectImage} alt="project image" height="100%" width="100%"/>
            </div>

            <div className="projectFoot">
                <div className="projectname">
                    <h3>{projectName}</h3>
                    <a className="projectLink" href={projectLink}>{projectLink}</a>
                </div>
                <button className="siteButton">Ver detalles</button>
            </div>
        </div>
    );
}
export default ProjectPreview;