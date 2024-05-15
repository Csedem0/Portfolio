import "./about.css"
import Award from "../../img/award.png"

const About = () => {
  return (
    <div className='a'>
        <div className="aaa">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                
                <a href="https://www.udemy.com/certificate/UC-ead9f57d-e0a5-4efc-82be-869d1863931a/"><img src="https://i.ibb.co/THZfz5Q/cert1.jpg" alt="" className="a-img" /></a>
            </div>
        </div>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                
                <a href="https://www.udemy.com/certificate/UC-6fa78645-a2c0-46a0-b352-c58daa40f898/"><img src="https://i.ibb.co/zV4dd8X/cert2.jpg" alt="" className="a-img" /></a>
            </div>
        </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                We are everything you have been looking for in your world of website creation.
            </p>
            <p className="a-desc">
                I am the CEO of Demo Cse, which deals on programming, website creation, branding, logo making, portfolio designing, and other. We are upcoming but we have handled a lot of projects which were pure success and we are highly sort for. It will be our pleasure to handle your also.
            </p>
            <div className="a-award">
                <img src={Award} alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">
                        Interstate Design Awards 2022
                    </h4>
                    <p className="a-award-desc">
                        Am an award winning UI/UX designer from a interstate held programmers designing competition and i have even more awards...
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About