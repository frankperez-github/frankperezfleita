import Title from "./Title";

function Certificate({certificate})
{
    return(
        <div className="certificate">
            <h3>{certificate.name}</h3>
            <img src={certificate.image} alt="certificate" width="100%"/>
            <p>{certificate.description}</p>
            <button className="siteButton">Visit</button>
        </div>
    );
}
export default Certificate