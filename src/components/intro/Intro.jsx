import "./intro.css"
import Me from "../../img/me.png"

const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, My name is</h2>
            <h1 className="i-name">Emmanuel Chukwu</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">React Devloper</div>
                <div className="i-title-item">UI/UX Designer</div>
                <div className="i-title-item">Node JS Pro</div>
                <div className="i-title-item">Hacker</div>
              </div>
            </div>
            <p className="i-desc">
              I design and develope services for customers of all sizes,
              specializing in creating stylish, modern websites, wed services and
              online stores
            </p>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src={Me} alt="" className="i-img" />
        </div>
    </div>
  )
}

export default Intro