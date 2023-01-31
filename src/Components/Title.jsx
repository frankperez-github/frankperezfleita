function Title({title}) {
    return(
        <div className="titleComponent">
            <div className="arrow">
                <img src="/arrow.png" alt="arrow" height="100%" width="100%"/>
            </div>
            <div className="title">
                <p className="titleText">{title}</p>
            </div>
        </div>
    );
}
export default Title;