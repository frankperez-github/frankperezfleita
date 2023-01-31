function ProjectPreview({imagePath, projectName, projectLink})
{
    return(
        <div className="ProjectPreview">
            <div className="projectImage">
                <img src="projectImg.png" alt="project image" height="100%" width="100%"/>
            </div>

            <div className="projectFoot">
                <div className="projectname">
                    <p>{projectName}</p>
                    <a className="projectLink" href={projectLink}>{projectLink}</a>
                </div>
                <button className="siteButton">Ver detalles</button>
            </div>
        </div>
    );
}
export default ProjectPreview;