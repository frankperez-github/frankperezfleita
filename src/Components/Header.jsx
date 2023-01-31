
function Header(props)
{
    return(
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
                <a className="aboutMe navbar-item selected">
                    About me
                </a>
                <a className="projects navbar-item">
                    Projects
                </a>
                <a className="contact navbar-item">
                    Contact
                </a>
            </div>
            {props.children}
        </header>
    );
}
export default Header;