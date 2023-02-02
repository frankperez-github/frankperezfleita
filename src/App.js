import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import AboutMe from './pages/AboutMe.jsx'
import Projects from './pages/Projects.jsx'


function App() {
  const projects = [
    {
      id: 1,
      Image: "elencantoImages/main.png",
      Name: "El Encanto Liquidation",
      Link: "https://elencantoliquidation.com",
      
      
      Description:[
        "E-commerce website for liquidation company. Features include user accounts, fast search, and secure payments with PayPal. (Not being currently used in production)",
      ],

      Images:[
        { id:1,
          path:"elencantoImages/main.png"
        },
        { id:2,
          path:"elencantoImages/main.png"
        }
      ]
    },
    {
        id: 2,
        Image: "enfasismagImages/main.png",
        Name: "Énfasis Magazine",
        Link: "https://enfasismag.com",
        
        Description:[
          "Blog site for the Enfasis Group, a magazine that focuses on supporting the work of Cuban artists and architects. Features on the website include subscribing to a mailing list, magazine PDFs download and a flexible article creation tool for the editors.",
        ],

        Images:[
          { id:1,
            path:"enfasismagImages/main.png"
          },
          { id:2,
            path:"enfasismagImages/main.png"
          },
          { id:3,
            path:"enfasismagImages/main.png"
          },
        ]
    },
    {
      id: 3,
      Image: "connectravelImages/main.png",
      Name: "Connect Travel",
      Link: "https://connectravel.us",
      
      Description:[
        "Blog site for the Enfasis Group, a magazine that focuses on supporting the work of Cuban artists and architects. Features on the website include subscribing to a mailing list, magazine PDFs download and a flexible article creation tool for the editors.",
      ],

      Images:[
        { id:1,
          path:"connectravelImages/main.png"
        },
        { id:2,
          path:"connectravelImages/main.png"
        },
        { id:3,
          path:"connectravelImages/main.png"
        },
      ]
    },
    {
    id: 4,
    Image: "seahorseImages/main.png",
    Name: "Sea Horse Jet Ski",
    Link: "https://seahorse-jetski.vercel.app",
    
    Description:[
      "Blog site for the Enfasis Group, a magazine that focuses on supporting the work of Cuban artists and architects. Features on the website include subscribing to a mailing list, magazine PDFs download and a flexible article creation tool for the editors.",
    ],

    Images:[
      { id:1,
        path:"seahorseImages/main.png"
      },
      { id:2,
        path:"seahorseImages/main.png"
      },
      { id:3,
        path:"seahorseImages/main.png"
      },
    ]
    }
  ] 

  return (
    <Router>
        <Routes>
            <Route key="index" exact path='/'  element={<AboutMe projects={projects}/>} />
        
            <Route key="projects" path='/Projects'  element={<Projects projects={projects}/>}/>
        </Routes>
    </Router>
  );
}

export default App;
