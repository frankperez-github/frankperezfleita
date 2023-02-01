import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import AboutMe from './pages/AboutMe.jsx'
import Projects from './pages/Projects.jsx'


function App() {
  const projects = [
    {
      id: 1,
      Image: "projectImg.png",
      Name: "El Encanto Liquidation",
      Link: "https://elencantoliquidation.com",
      
      
      Description:[
        "E-commerce website for liquidation company. Features include user accounts, fast search, and secure payments with PayPal. (Not being currently used in production)",
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
        Name: "Énfasis Magazine",
        Link: "https://enfasismag.com",
        
        Description:[
          "Blog site for the Enfasis Group, a magazine that focuses on supporting the work of Cuban artists and architects. Features on the website include subscribing to a mailing list, magazine PDFs download and a flexible article creation tool for the editors.",
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
       
          <Route key="index" exact path='/'  element={<AboutMe projects={projects}/>} />
       
          <Route key="projects" exact path='/Projects'  element={<Projects projects={projects}/>}/>
       
        </Routes>
      </div>
    </Router>
  );
}

export default App;
