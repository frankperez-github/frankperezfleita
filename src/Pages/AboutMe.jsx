import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import ProjectPreview from '../Components/ProjectPreview.jsx';
import Text from '../Components/Text.jsx';
import Title from '../Components/Title.jsx'
function AboutMe() {
    return(
        <div className="AboutMe">
            <div className="Information">
                <Title title="Hey there!"/>

                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus diam, pulvinar quis massa ac, 
                    viverra semper libero. Suspendisse congue a elit et porttitor. Aenean vestibulum, nisi vitae pulvinar suscipit, dolor eros bibendum sem,
                    quis viverra tellus mi non purus. Donec in erat orci. Proin sodales est at sem placerat accumsan. Sed nec nibh volutpat, elementum ligula sit amet, pharetra nisl. 
                    Nulla varius aliquet augue, ut consectetur nunc tempor eget.
                    <br/>
                    <br/>
                    Maecenas varius, nunc nec varius viverra, neque risus eleifend tortor, in sollicitudin ante nibh sit amet turpis. Sed vitae tortor mollis,
                    finibus velit sed, mattis massa. Vestibulum fermentum, est scelerisque mollis rutrum, felis mi commodo quam, eu fermentum magna dui sit amet mauris. 
                    Curabitur sed lorem id nunc varius suscipit vitae et tortor. Nam et justo lorem. Quisque cursus venenatis eros, nec placerat dui lobortis in. Nullam scelerisque blandit purus pulvinar fringilla. 
                    In hac habitasse platea dictumst. Integer dignissim feugiat ullamcorper. Quisque eget facilisis sem, nec tincidunt urna. Proin vel ullamcorper lorem, non tempus augue. Morbi rhoncus sit amet felis vel congue. 
                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </Text>
            </div>
            
            <div className="ProjectsPreview">

                <Title title="Projects"/>
                    
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    
                    <SwiperSlide>
                        <ProjectPreview 
                        projectName="El Encanto Liquidation"
                        projectLink="https://elencantoliquidation.com"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        Slide 2
                    </SwiperSlide>

                </Swiper>
                
            </div>

            <div className="ContactPreview">
                <Title title="Contact"/>
            </div>

        </div>


      

    );
}
export default AboutMe