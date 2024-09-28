import "./Projectcard.css"

export interface CardProps {
    image: string;
    title: string;
    description: string;
}

function Projectcard ({image, title, description}: CardProps) {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <div className="card-button-container">
                <button className="card-button">View Project</button>
                <button className="card-button">View Source</button>
            </div>
        </div>
    );
}

export default Projectcard;