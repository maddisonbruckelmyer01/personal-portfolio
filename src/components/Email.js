import email from './logos/email.png';
import GitHub from './GitHub';
import Linkedin from './Linkedin';
import Resume from './Resume';
import Prime from './Prime';

const Email = () => {
    return (
        <div style={{display: "flex"}}>
            <a href="mailto:maddisonbruckelmyer01@gmail.com">
                <img 
                    src={email} 
                    alt="Link to email"
                    style={{
                        flexBasis: 40,
                        width: 100,
                        paddingLeft: 250,
                        paddingTop: 50,
                    }}
                />
            </a>
            <GitHub />
            <Linkedin />
            <Resume />
            <Prime />
        </div>
    )
}

export default Email;