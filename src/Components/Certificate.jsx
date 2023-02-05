
function Certificate({certificate, setPrincipal})
{
    return(
        <div className="certificate" onClick={()=>setPrincipal(certificate)}>
            <h3>{certificate.name}</h3>
            <img src={certificate.image} alt="certificate" width="100%"/>
            <p>{certificate.description}</p>
            <a href={certificate.link} className="siteButton">
                <button className="siteButton">Visit</button>
            </a>
        </div>
    );
}
export default Certificate