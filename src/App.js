import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
// import AboutMe from './pages/AboutMe.jsx'
import Projects from './pages/Projects.jsx'


function App() {
  const projects = [
    {
        id: 1,
        Image: "projectImg.png",
        Name: "El Encanto Liquidation",
        Link: "https://elencantoliquidation.com",
        
        
        Description:[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus diam, pulvinar quis massa ac viverra semper libero. Suspendisse congue a elit et porttitor. Aenean vestibulum, nisi vitae pulvinar suscipit, dolor eros bibendum sem,quis viverra tellus mi non purus. Donec in erat orci. Proin sodales est at sem placerat accumsan. Sed nec nibh volutpat, elementum ligula sit amet, pharetra nisl. Nulla varius aliquet augue, ut consectetur nunc tempor eget.Maecenas varius nunc nec varius viverra, neque risus eleifend tortor, in sollicitudin ante nibh sit amet turpis. Sed vitae tortor mollis,finibus velit sed mattis massa. Vestibulum fermentum est scelerisque mollis rutrum, felis mi commodo quam, eu fermentum magna dui sit amet mauris. Curabitur sed lorem id nunc varius suscipit vitae et tortor. Nam et justo lorem. Quisque cursus venenatis eros, nec placerat dui lobortis in. Nullam scelerisque blandit purus pulvinar fringilla. In hac habitasse platea dictumst. Integer dignissim feugiat ullamcorper. Quisque eget facilisis sem, nec tincidunt urna. Proin vel ullamcorper lorem, non tempus augue. ",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus diam, pulvinar quis massa ac viverra semper libero. Suspendisse congue a elit et porttitor. Aenean vestibulum, nisi vitae pulvinar suscipit, dolor eros bibendum sem,quis viverra tellus mi non purus. Donec in erat orci. Proin sodales est at sem placerat accumsan. Sed nec nibh volutpat, elementum ligula sit amet, pharetra nisl. Nulla varius aliquet augue, ut consectetur nunc tempor eget.Maecenas varius nunc nec varius viverra, neque risus eleifend tortor, in sollicitudin ante nibh sit amet turpis. Sed vitae tortor mollis,finibus velit sed mattis massa. Vestibulum fermentum est scelerisque mollis rutrum, felis mi commodo quam, eu fermentum magna dui sit amet mauris. Curabitur sed lorem id nunc varius suscipit vitae et tortor. Nam et justo lorem. Quisque cursus venenatis eros, nec placerat dui lobortis in. Nullam scelerisque blandit purus pulvinar fringilla. In hac habitasse platea dictumst. Integer dignissim feugiat ullamcorper. Quisque eget facilisis sem, nec tincidunt urna. Proin vel ullamcorper lorem, non tempus augue. "
       ],

        Images:[
        { id:1,
          path:"projectImg.png"
        },
        { id:2,
          path:"img2.png"
        },
        { id:3,
          path:"img3.png"
        },
        ]
      },
    {
        id: 2,
        Image: "projectImg.png",
        Name: "El Encanto Liquidation",
        Link: "https://elencantoliquidation.com",
        
        Description:[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus diam, pulvinar quis massa ac viverra semper libero. Suspendisse congue a elit et porttitor. Aenean vestibulum, nisi vitae pulvinar suscipit, dolor eros bibendum sem,quis viverra tellus mi non purus. Donec in erat orci. Proin sodales est at sem placerat accumsan. Sed nec nibh volutpat, elementum ligula sit amet, pharetra nisl. Nulla varius aliquet augue, ut consectetur nunc tempor eget.Maecenas varius nunc nec varius viverra, neque risus eleifend tortor, in sollicitudin ante nibh sit amet turpis. Sed vitae tortor mollis,finibus velit sed mattis massa. Vestibulum fermentum est scelerisque mollis rutrum, felis mi commodo quam, eu fermentum magna dui sit amet mauris. Curabitur sed lorem id nunc varius suscipit vitae et tortor. Nam et justo lorem. Quisque cursus venenatis eros, nec placerat dui lobortis in. Nullam scelerisque blandit purus pulvinar fringilla. In hac habitasse platea dictumst. Integer dignissim feugiat ullamcorper. Quisque eget facilisis sem, nec tincidunt urna. Proin vel ullamcorper lorem, non tempus augue. ",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus diam, pulvinar quis massa ac viverra semper libero. Suspendisse congue a elit et porttitor. Aenean vestibulum, nisi vitae pulvinar suscipit, dolor eros bibendum sem,quis viverra tellus mi non purus. Donec in erat orci. Proin sodales est at sem placerat accumsan. Sed nec nibh volutpat, elementum ligula sit amet, pharetra nisl. Nulla varius aliquet augue, ut consectetur nunc tempor eget.Maecenas varius nunc nec varius viverra, neque risus eleifend tortor, in sollicitudin ante nibh sit amet turpis. Sed vitae tortor mollis,finibus velit sed mattis massa. Vestibulum fermentum est scelerisque mollis rutrum, felis mi commodo quam, eu fermentum magna dui sit amet mauris. Curabitur sed lorem id nunc varius suscipit vitae et tortor. Nam et justo lorem. Quisque cursus venenatis eros, nec placerat dui lobortis in. Nullam scelerisque blandit purus pulvinar fringilla. In hac habitasse platea dictumst. Integer dignissim feugiat ullamcorper. Quisque eget facilisis sem, nec tincidunt urna. Proin vel ullamcorper lorem, non tempus augue. "
        ],

        Images:[
          { id:1,
            path:"img1.png"
          },
          { id:2,
            path:"img2.png"
          },
          { id:3,
            path:"img3.png"
          },
        ]
    }
] 
  return (
    <Router>
      <div className="App">
        <Routes>
       
          {/* <Route key="index" exact path='/'  element={<AboutMe projects={projects}/>} /> */}
       
          <Route key="projects" exact path='/Projects'  element={<Projects projects={projects}/>}/>
       
        </Routes>
      </div>
    </Router>
  );
}

export default App;
