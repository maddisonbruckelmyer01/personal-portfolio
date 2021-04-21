import resumeimg from './logos/resumeimg.jpg';
import MyResume from './logos/MaddisonBruckelmyerResume.pdf';

const Resume = () => {
    return (
        <div>
            <a href={MyResume} target="_blank">
                <img 
                    src={resumeimg}
                    alt="Link to Resume"
                    style={{
                        width: 100,
                        paddingLeft: 100,
                        paddingTop: 50,
                    }}
                />
            </a>
        </div>
    )
}

export default Resume;