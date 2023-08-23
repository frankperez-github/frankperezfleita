import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import AboutMe from './pages/AboutMe.jsx'
import Certificates from './pages/Certificates';
import Projects from './pages/Projects.jsx'


function App() {
  const [route, setRoute] = useState("About");

  const changeRoute = (route) =>{

    setRoute(route);
  
  }

  const projects = [
    {
      id: 1,
      Image: "enfasismagImages/main.png",
      Name: "Énfasis Magazine",
      Link: "https://enfasismag.com",
      
      Description:[
        "Blog site for the Enfasis Group, a magazine that focuses on supporting the work of Cuban artists and architects. Features on the website include subscribing to a mailing list, magazine PDFs download and a flexible article creation tool for the editors.",
      ],
      
      Images:[
        { id:1,
          path:"enfasismagImages/1.png"
        },
        { id:2,
          path:"enfasismagImages/2.png"
        },
        { id:3,
          path:"enfasismagImages/3.png"
        },
      ]
    },
    {
      id: 2,
      Image: "elencantoImages/main.png",
      Name: "El Encanto Liquidation",
      Link: "https://el-encanto.vercel.app",
      
      
      Description:[
        "E-commerce website for liquidation company. Features include user accounts, fast search, and secure payments with PayPal. (Not being currently used in production)",
      ],

      Images:[
        { id:1,
          path:"elencantoImages/main.png"
        },
        { id:2,
          path:"elencantoImages/1.png"
        },
        { id:3,
          path:"elencantoImages/2.png"
        },
        { id:4,
          path:"elencantoImages/3.png"
        }
      ]
    },
    {
      id: 3,
      Image: "connectravelImages/main.png",
      Name: "Connect Travel",
      Link: "https://connectravel.us",
      
      Description:[
        "Connect Travel is a travel reservation business located in Miami, offering customers a wide range of travel options to suit their needs. We specialize in booking flights for customers, but also offer a variety of other travel services, such as hotel reservations, car rentals, and vacation packages.",
      ],

      Images:[
        { id:1,
          path:"connectravelImages/1.png"
        },
        { id:2,
          path:"connectravelImages/2.png"
        },
        { id:3,
          path:"connectravelImages/3.png"
        }
      ]
    },
    {
    id: 4,
    Image: "seahorseImages/main.png",
    Name: "Sea Horse Jet Ski",
    Link: "https://seahorse-jetski.vercel.app",
    
    Description:[
      "Sea Horse Jet Ski is a watercraft rental business located in Miami, offering customers the thrill and excitement of riding on a jet ski. With their fleet of top-of-the-line jet skis, customers can explore the beautiful Miami coastline and participate in a variety of water sports activities. Promotional website to Sea Horse Enterprise. Includes reviews form, and public record of reviews."
    ],

    Images:[
      { id:1,
        path:"seahorseImages/1.png"
      },
      { id:2,
        path:"seahorseImages/2.png"
      },
      { id:3,
        path:"seahorseImages/3.png"
      },
    ]
    }
  ] 
  const certificates =[
    {
      id: 1,
      name: "CS50: Introduction to Computer Science",
      description: "CS50 is a free online course offered by Harvard University that provides an introduction to the field of computer science. It covers topics such as algorithms, programming languages (e.g. C, Python), web development, and databases. The course provides a challenging curriculum for experienced students. It emphasizes hands-on experience and problem-solving through coding projects and assignments. The course is available on the edX platform and can be taken at one's own pace.",
      image: "CS50x.png",
      link: "https://cs50.harvard.edu/certificates/07e6354d-e944-48dd-bbea-a694fff9165f"
    }
  ]

  const [principalId, setPrincipalId] = useState(-1);

  return (
    <div>
        <Header route={route} changeRoute={changeRoute}/>
        {
         route==="About" && <AboutMe id="AboutComponent" SetPrincipal={setPrincipalId} changeRoute={changeRoute} projects={projects} certificates={certificates}/>
        }
        {
          route==="Projects" && <Projects id="ProjectsComponent" projects={projects}/>
        }
        {
          route==="Certificates" && <Certificates certificates={certificates} principalID={principalId}/>
        }
    </div>
  );
}

export default App;
