import Title from '../Components/Title.jsx'
function ContactSection()
{
    return(
        <div className="ContactSection">
                <Title title="Contact" className="contactTitleComp"/>

                <div className="contactIcons">
                    <a href="https://www.linkedin.com/in/frank-p%C3%A9rez-fleita-480153212/" className="contactIcon">
                        <img height="100%" width="100%" src="LinkedIn.png" alt="" />
                    </a>
                    <a href="https://github.com/frankperez-github" className="contactIcon">
                        <img height="100%" width="100%" src="Github.png" alt="" />
                    </a>
                    <a href="https://wa.me/+5353103058" className="contactIcon">
                        <img height="100%" width="100%" src="WhatsApp.png" alt="" />
                    </a>
                    <a href="mailto:fp848584@gmail.com" className="contactIcon">
                        <img height="100%" width="100%" src="Mail.png" alt="" />
                    </a>
                    <a href="https://t.me/frankperez24" className="contactIcon">
                        <img height="100%" width="100%" src="Telegram.png" alt="" />
                    </a>
                </div>
            </div>
    );
}
export default ContactSection;