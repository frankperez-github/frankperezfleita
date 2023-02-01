import { Link, BrowserRouter as Router } from "react-router-dom";


function Header(props)
{
    
    return(
        <div className="Header">

            <header>
                <div className="headerInfo">
                    <div className="headerImage">
                        <img src="/logo.jpg" alt="logo" width="100%"
                        height="100%"/>
                    </div>

                    <div className="nameAndTitle">
                        <h1>Frank Pérez Fleita</h1>
                        <p>/ web developer</p>
                    </div>
                </div>

                <div className="navBar">
                    <a onClick={changeSelected('About me')} id='About me' href='/' className="navbar-item selected">
                        About me
                    </a>
                    <a onClick={changeSelected('Projects')} id='Projects' href='/Projects' className="navbar-item">
                        Projects
                    </a>
                    <a onClick={changeSelected('Certificates')} id='Certificates' href='/Certificates' className="navbar-item">
                        Certificates
                    </a>
                </div>
            </header>

            <main>
                {props.children}
            </main>

        </div>
    );
    function changeSelected(e)
    {
        
        var element = document.getElementById(e);
        console.log(element);
    //    element.classList.toggle("selected");
    }
}
export default Header;