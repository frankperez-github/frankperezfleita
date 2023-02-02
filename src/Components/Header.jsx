function Header({route, changeRoute})
{
    function handleSelection(e)
    {
        changeRoute(e);
    }
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

                <button onClick={()=>handleSelection("About")} className={route=="About" && "selected"}>
                    About me
                </button>

                <button onClick={()=>handleSelection("Projects")} className={route=="Projects" && "selected"}>
                    Projects
                </button>

                <button onClick={()=>handleSelection("Certificates")} className={route=="Certificates" && "selected"}>
                    Certificates
                </button>

            </div>
        </header>

    );
}
export default Header;