import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import ProjectPreview from '../Components/ProjectPreview.jsx';
import Text from '../Components/Text.jsx';
import Title from '../Components/Title.jsx'
import ContactSection from "../Components/ContactSection.jsx";

function AboutMe({changeRoute, projects, certificates, SetPrincipal}) {

    return(

        <div className="blackBack homePage">
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

            <div className="CertificatesCarr">
                <div className="CertifTitle">
                    <Title title="Certificates"/>
                </div>
                <Swiper loop={true} autoplay={{ delay: 4000 }} modules={[Navigation, Autoplay]} navigation={true} className="mySwiper">
                        {certificates.map((certificate)=>(
                            <SwiperSlide key={certificate.id}>
                                <div className="certificatePreview">
                                    <h3>{certificate.name}</h3>
                                    <img src={certificate.image} alt="alt" height="100%" width="100%" />
                                    <button onClick={()=>{changeRoute("Certificates"); SetPrincipal(certificate.id)}} className="siteButton certifButton">Details</button>
                                </div>
                            </SwiperSlide>
                        ))}  
                </Swiper>

            </div>
            
            <div className="ProjectsPreview">

                <Title title="Projects"/>
                    
                <Swiper loop={true} autoplay={{ delay: 5000 }} modules={[Navigation, Autoplay]} navigation={true} className="mySwiper projectsSwiper">
                    {projects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <ProjectPreview 
                            changeRoute={changeRoute}
                            projectImage={project.Image}
                            projectName = {project.Name}
                            projectLink = {project.Link}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                
            </div>
            
            {/* Contact Section (Visible only in mobile mode)*/}
            <div className="mobile">
                <ContactSection />
            </div>

        </div>
    );
}
export default AboutMe