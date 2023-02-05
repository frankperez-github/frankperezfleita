import { useState, useEffect } from "react";
import Certificate from "../Components/Certificate";
import Title from "../Components/Title";

function Certificates({certificates, principalID})
{
    const[principal, setPrincipal] = useState({});
    useEffect(()=>
    {
        setPrincipal(certificates[principalID-1]);
    },[certificates, principalID])
    return(
        <div className="Certificates blackBack">
            {window.innerWidth > 500 &&
                <div className="Detailed desktop">
                    <Title title="Certificates"/>
                    
                    <div className="principal">
                        <h1>{principal.name}</h1>
                        <div className="principalImage">
                            <img src={principal.image} alt="" />
                        </div>
                        <p>{principal.description}</p>
                    </div>

                </div>
            }
            <div className="otherCertificates">
                {window.innerWidth > 500 &&
                    <a href="/">
                        <Title title="Go_back_to_home"/>
                    </a>
                }
                <div className="certifsList">
                    {certificates.map((certificate)=>(
                        <Certificate setPrincipal={setPrincipal} key={certificate.id} certificate={certificate}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Certificates