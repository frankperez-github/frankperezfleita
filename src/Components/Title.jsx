function Title({title}) {
    return(
        <div className="titleComponent">
            <div className="arrow">
                <img src="/arrow.png" alt="arrow" height="100%" width="100%"/>
            </div>
            <div className="title">
                <h2 className="titleText">{title}</h2>
            </div>
        </div>
    );
}
export default Title;