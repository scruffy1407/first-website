import "./About.css";

function About() {
  const languages = [
    { name: "HTML", logo: "https://skillicons.dev/icons?i=html" },
    { name: "CSS", logo: "https://skillicons.dev/icons?i=css" },
    { name: "JavaScript", logo: "https://skillicons.dev/icons?i=js" },
    { name: "TypeScript", logo: "https://skillicons.dev/icons?i=ts" },
    { name: "React", logo: "https://skillicons.dev/icons?i=react" },
    { name: "Tailwind CSS", logo: "https://skillicons.dev/icons?i=tailwind" },
  ];

  return (
    <section id="experience" className="about-container">
        <div className="text-section">
          <h1 className="about-title">Tech <u>Stack</u></h1>
          <div className="languages-container">
            {languages.map((lang) => (
              <div key={lang.name} className="language-card">
                <img src={lang.logo} alt={lang.name} className="language-logo" />
                <span>{lang.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="image-section">
          <img src="https://cdn.autonomous.ai/static/upload/images/common/upload/20211030/4-White-Gaming-Setups-PC-Desk--More-to-Bring-a-Clean-Aesthetic_9606744749d.jpg" alt="Computer" className="right-image" />
      </div>
    </section>
    
  );
}

export default About;
