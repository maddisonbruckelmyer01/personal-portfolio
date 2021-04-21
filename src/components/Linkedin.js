import linkimg from "./logos/linkedinimage.png";

const Linkedin = () => {
    return (
        <div>
            <a href="https://www.linkedin.com/in/maddison-bruckelmyer" target="_blank">
                <img
                    src={linkimg}
                    alt="Link to LinkedIn"
                    style={{
                        flexBasis: 40,
                        width: 100,
                        paddingLeft: 100,
                        paddingTop: 50
                    }}
                />
            </a>
        </div>
    )
}

export default Linkedin;