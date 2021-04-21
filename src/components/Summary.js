import PersonalPicture from './logos/PersonalPicture.png';

const Summary = () => {
    return (
        <>
        <div style={{
            display: "flex",
             }}>
                <img
                    src={PersonalPicture}
                    alt="Info"
                    style={{
                    flexBasis: 40,
                        width: 200,
                        paddingLeft: 150,
                    }}
                />
            <div style={{paddingLeft: 20}}>
                <p>Hi, my name is Maddison Bruckelmyer! You must be visiting my personal website to learn more about me! <br />
                    I attended Prime Digital Academy in 2019. Prime is a 20-week immersive bootcamp for Software Development. <br />
                    Throughout Prime I learned JavaScript, Node.js, React, and Redux just to name a few things. Also I learned about project planning and execution. <br />
                    I graduated Prime at the end of 2019 with a Full-Stack Software Engineering Certification! <br />
                    I am an avid learner. In my first job I went in not knowing the languages they were working with. <br />
                    I learned Xamarin.Forms and C# in about 2 months, I also used Vue.js, and Ionic. <br />
                    In my free time I enjoy spending time with the people closest to me, being outside doing just about anything from fishing to hiking. <br />
                    I also do paint by numbers, they are a great stress reliever! <br />
                    Below I have linked my email, resume, and LinkedIn. I also put a link for the Prime website if you want to learn more!
                </p>
            </div>
            </div>
        </>
    )
}

export default Summary;