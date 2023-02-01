function Text(props)
{
    return(
        <div className="Text">
            <br/>
            <br/>
            <p>{props.children}</p>
        </div>
    );
}
export default Text;