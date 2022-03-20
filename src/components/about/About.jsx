import "./about.css"
import Award from "../../img/award.png"

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Nnx8fGVufDB8fHx8&w=1000&q=80" alt="" className="a-img" />
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