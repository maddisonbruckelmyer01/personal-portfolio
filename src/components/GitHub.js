import githubimage from './logos/githubLogo.png';

const GitHub = () => {
    return (
        <div>
            <a href="https://github.com/maddisonbruckelmyer01" target="_blank">
                <img
                    src={githubimage}
                    alt="Link to GitHub"
                    style= {{
                        width: 100,
                        paddingLeft: 100,
                        paddingTop: 50,
                    }}
                    />
            </a>
        </div>
    )
}

export default GitHub;