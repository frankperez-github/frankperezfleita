import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import ProjectPreview from '../Components/ProjectPreview.jsx';
import Title from "../Components/Title";
import Text from "../Components/Text.jsx";

function Projects({projects})
{
    return(
        <div className="blackBack">
            <Title title="Projects"/>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                
                {projects.map ((project)=>
                (
                    <SwiperSlide key={project.id}>
                        <ProjectPreview 
                        projectImage={project.Image}
                        projectName = {project.Name}
                        projectLink = {project.Link}
                        />

                        {project.Description.map((text) => (
                            <Text key={text}>
                                {text}
                            </Text> 
                        ))}
                        
                    
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            {project.Images.map((img)=>
                            (
                                <SwiperSlide key={img.id}>
                                    <div className="projectDetailsImage">
                                        <img src={img.path} alt="project image" height="100%" width="100%"/>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
export default Projects;