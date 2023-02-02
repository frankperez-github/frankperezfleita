import { Link, BrowserRouter as Router} from "react-router-dom";

function Header(props)
{
    function changeSelected(e)
    {
        var element = document.getElementById(e);
        console.log(element);
    }
    
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
                        <Link to='/' onClick={changeSelected('About me')} id='About me'  className="navbar-item selected">
                            About me
                        </Link>
                        <Link to='/Projects' onClick={changeSelected('Projects')} id='Projects' className="navbar-item">
                            Projects
                        </Link>
                        <Link to='/Certificates' onClick={changeSelected('Certificates')} id='Certificates' className="navbar-item">
                            Certificates
                        </Link>
                </div>
            </header>

            <main>
                {props.children}
            </main>

        </div>
    );
}
export default Header;