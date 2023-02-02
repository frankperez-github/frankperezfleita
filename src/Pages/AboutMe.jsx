import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import ProjectPreview from '../Components/ProjectPreview.jsx';
import Text from '../Components/Text.jsx';
import Title from '../Components/Title.jsx'
import Header from "../Components/Header.jsx";

function AboutMe({projects}) {

    return(
        <Header>

            <div className="blackBack">
                <div className="Information">
                    <Title title="Hey there!"/>

                    <Text>
                        My name is Frank Pérez Fleita and I am {new Date().getFullYear() - 2002} years old.
                        <br/>
                        I study Computer Science in University of Havana.  My mother tongue is Spanish, but I speak English too.
                        <br/>
                        My career as a Web Developer started {new Date().getFullYear() - 2020} years ago  and nowadays I have experience using:
                    </Text>
                        <br/>
                        <div className="Text skills">
                            <p className="skill">
                                * ReactJS
                            </p>
                            <p className="skill">
                                * NextJS
                            </p>
                            <p className="skill">
                                * Git & Github
                            </p>
                            <p className="skill">
                                * FireBase
                            </p>
                            <p className="skill">
                                * Otras cosillas
                            </p>
                        </div>
                    <Text>
                        I have experience with .NET and C# too and have developed school projects 
                        like Search Engines and 2D Games with that language using Razor and Godot respectively. 
                    </Text>
                    <Text>
                        Last year I took CS50's Introduction to Computer Science course, you can see the cetificate in Certificates section.
                        <br/>
                        And since 2020 I have been working as a freelance developer, you can see some of my previous work on Projects section.
                    </Text>
                </div>
                
                <div className="ProjectsPreview">

                    <Title title="Projects"/>
                        
                    <Swiper loop={true} autoplay={{ delay: 5000 }} modules={[Navigation, Autoplay]} navigation={true} className="mySwiper">
                        {projects.map((project) => (
                            <SwiperSlide key={project.id}>
                                <ProjectPreview 
                                projectImage={project.Image}
                                projectName = {project.Name}
                                projectLink = {project.Link}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    
                </div>

                <div className="ContactPreview">
                    <Title title="Contact"/>

                    <div className="contactIcons">
                        <a href="https://www.linkedin.com/in/frank-p%C3%A9rez-fleita-480153212/" className="contactIcon">
                            <img height="100%" width="100%" src="LinkedIn.png" alt="" />
                        </a>
                        <a href="https://github.com/frankperez-github" className="contactIcon">
                            <img height="100%" width="100%" src="Github.png" alt="" />
                        </a>
                        <a href="https://wa.me/+5353103058" className="contactIcon">
                            <img height="100%" width="100%" src="WhatsApp.png" alt="" />
                        </a>
                        <a href="mailto:fp848584@gmail.com" className="contactIcon">
                            <img height="100%" width="100%" src="Mail.png" alt="" />
                        </a>
                        <a href="https://t.me/frankperez24" className="contactIcon">
                            <img height="100%" width="100%" src="Telegram.png" alt="" />
                        </a>
                    </div>
                </div>

            </div>
        </Header>


      

    );
}
export default AboutMe