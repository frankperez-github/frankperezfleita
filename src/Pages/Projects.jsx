import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import Title from "../Components/Title";
import Text from "../Components/Text.jsx";

function Projects({projects})
{
    return(
        <div className="blackBack">
            <Title title="Projects"/>
            <Swiper loop={true} autoplay={{ delay: 20000 }} navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
                
                {projects.map ((project)=>
                (
                    <SwiperSlide key={project.id}>
                        <div className="ProjectPreview detailedProject">
                            <div className="projectFoot">
                                <div className="projectname">
                                    <h3>{project.Name}</h3>
                                    <a className="projectLink" href={project.Link}>{project.Link}</a>
                                </div>
                            </div>
                            
                            <div className="projectImage">
                                <img src={project.Image} alt="project image" height="100%" width="100%"/>
                            </div>
                        </div>

                        {project.Description.map((text) => (
                            <Text key={text}>
                                {text}
                            </Text> 
                        ))}

                        <Swiper loop={true} autoplay={{ delay: 5000 }} navigation={true} modules={[Navigation, Autoplay]}  className="mySwiper imagesSwipe">
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