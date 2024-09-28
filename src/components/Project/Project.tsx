import Projectcard, { CardProps } from "../Card/project-card/Projectcard";
import "./Project.css";

const data = [
    {
        image: "https://img.freepik.com/free-vector/colleagues-discussing-accounting-statistics-report-using-software_74855-5315.jpg?t=st=1727017839~exp=1727021439~hmac=52a56369cdf54a3335321ac9c1bb6061728b837ec6ea0465e9460ff449f1c678&w=1800",
        title: "Media Creative - Social Media Agency",
        description: "MediaKreatif is your go-to social media agency, dedicated to helping brands amplify their online presence. We specialize in crafting engaging content, managing your social platforms, and running targeted campaigns that resonate with your audience."
    },
    {
        image: "https://img.freepik.com/free-vector/scientific-research-landing-page-template_23-2150210618.jpg?t=st=1727017962~exp=1727021562~hmac=5505bf74b7971d86c1f20cef21f187607e77702ded3d836175be8324a1419ab2&w=1800",
        title: "PasarOnline - E-Commerce Store",
        description: "PasarOnline is an innovative e-commerce platform that connects buyers and sellers seamlessly. Our user-friendly interface and diverse product offerings make shopping a delightful experience.",
    },
    {
        image: "https://img.freepik.com/premium-vector/professional-services-sector-economy-web-template-landing-page-human-resourses-employment-idea-recruitment-job-management-headhunter-select-worker-vector-illustration_277904-10656.jpg?w=1800",
        title: "DanaDigital - Financial Platform",
        description: "DanaDigital is a financial platform designed to empower users with smart investment and budgeting tools. We provide real-time analytics, personalized insights, and secure transactions, making finance accessible and straightforward for everyone.",
    },
];

function Project() {
    return (
        <section id="projects" className="outer-container">
            <h1 className="project-title">Previous <u>Projects</u></h1>
            <div className="card-container"> 
                {data.map((card: CardProps) => (
                    <Projectcard
                        key={card.title}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </section>
    )
}

export default Project;
