import "./Hero.css";
import heroImage from "./ThomasHero.jpg";

function Hero() {
    return (
        <section id="about" className="hero-container">
            <img className="heroImg" src={heroImage} alt="Thomas Pratama Hero Image" />
            <div className="content">
                <h1 className="titleHero">Full-Stack Developer 👨‍💻</h1>
                <p className="description">
                    Hi! I'm <b>Thomas Pratama</b>. An aspiring Full-Stack Developer currently based in Jakarta, Indonesia 🇮🇩 
                </p>
                <div className="buttonContainer">
                    <button className="buttonHero" onClick={() => window.location.href = "#projects"}>My Projects</button>
                    <button className="buttonHero" onClick={() => window.open("https://drive.google.com", "_blank")}>
                        Download CV
                    </button>
                </div>
                <div className="socialButtonContainer">
                    <a href="https://www.linkedin.com/in/thomas-pratama/" target="_blank" rel="noopener noreferrer">
                        <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" className="social-logo" />
                    </a>
                    <a href="https://github.com/scruffy1407" target="_blank" rel="noopener noreferrer">
                        <img src="https://skillicons.dev/icons?i=github" alt="GitHub" className="social-logo" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
