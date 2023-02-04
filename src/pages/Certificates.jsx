import Certificate from "../Components/Certificate";
import Title from "../Components/Title";

function Certificates({certificates, principalId})
{
    var principalID = principalId;
    var principal = certificates[0];
    console.log(principalId);
    function SetPrincipal(certf)
    {
        if(certf.id === principalId)
        {
            principalID = principalId
            console.log(principalID);

            // console.log(id);
            principal = certf;
        }
    }

    return(
        <div className="Certificates blackBack">
            <div className="Detailed">
                <Title title="Certificates"/>
                {certificates.map((certificate)=>(
                    SetPrincipal(certificate)
                ))}
                {/* <h1>{principal.id}</h1> */}
            </div>
            <div className="otherCertificates">
                <a href="/">
                    <Title title="Go_back_to_home"/>
                </a>
                <div className="certifsList">
                    {certificates.map((certificate)=>(
                        <Certificate key={certificate.id} certificate={certificate}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Certificates