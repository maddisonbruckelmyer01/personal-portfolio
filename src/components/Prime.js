import primeImage from './logos/primelogo.jpg';

const Prime = () => {
    return (
        <div>
            <a href="https://primeacademy.io/" target="_blank">
                <img 
                    src={primeImage}
                    alt="Link to Prime"
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

export default Prime;