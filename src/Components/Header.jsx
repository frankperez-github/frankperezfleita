import ContactSection from "./ContactSection";

function Header({route, changeRoute})
{
    function handleSelection(e)
    {
        changeRoute(e);
    }
    return(

        <header>
            <div className="headerInfo">
                <div className="nameAndPic headerInfo">

                    <div className="headerImage">
                        <img src="/logo.jpg" alt="logo" width="100%"
                        height="100%"/>
                    </div>

                    <div className="nameAndTitle">
                        <a href="/" className="backToHome">
                            <h1>Frank Pérez Fleita</h1>
                            <p>/ web developer</p>
                        </a>
                    </div>
                </div>

                <div className="ContactHeader desktop">
                    <ContactSection />
                </div>
            </div>

            <div className="navBar">

                <button onClick={()=>handleSelection("About")} className={route==="About" ? "navbar-item selected" : "navbar-item"}>
                    About me
                </button>

                <button onClick={()=>handleSelection("Projects")} className={route==="Projects" ? "navbar-item selected" : "navbar-item"}>
                    Projects
                </button>

                <button onClick={()=>handleSelection("Certificates")} className={route==="Certificates" ? "navbar-item selected" : "navbar-item"}>
                    Certificates
                </button>

            </div>
        </header>

    );
}
export default Header;