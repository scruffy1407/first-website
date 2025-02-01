import "./Projectcard.css";

export interface CardProps {
    image: string;
    logo: string;
    title: string;
    description: string;
    link: string;
}

function Projectcard({ image, logo, title, description, link }: CardProps) {
    const [projectName, ...rest] = title.split(" - ");

    return (
        <div className="card">
            <div className="image-container">
                <img src={image} alt={title} className="card-image" />
                <img src={logo} alt="Project Logo" className="project-logo" />
            </div>
            <div className="card-title">
                <span className="project-name">{projectName}</span>
                {rest.length > 0 && <span className="project-subtitle">{rest.join(" - ")}</span>}
            </div>
            <p className="card-description">{description}</p>
            <div className="card-button-container">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <button className="card-button">View Project</button>
                </a>
            </div>
        </div>
    );
}

export default Projectcard;
