import Projectcard, { CardProps } from "../Card/project-card/Projectcard";
import "./Project.css";

const data: CardProps[] = [
    {
        image: "./projects/Pathway Preview.webp",
        logo: "./logos/Pathway.svg",
        title: "Pathway - Online Job Board Website",
        description: "A scalable job board platform with real-time job postings, advanced filtering, role-based access, secure authentication, payment integration, and analytics.",
        link: "https://pathway-job.vercel.app",
    },
    {
        image: "./projects/FRUGMART Preview.webp",
        logo: "./logos/FRUGMART.svg",
        title: "FRUGMART - E-Commerce Platform",
        description: "A modern e-commerce platform featuring a seamless shopping experience, secure payments, PostgreSQL-backed inventory management, and real-time order tracking.",
        link: "https://frugmart.shop",
    },
    {
        image: "./projects/Seatly Preview.webp",
        logo: "./logos/Seatly.svg",
        title: "Seatly - Reservation Booking Website",
        description: "A real-time seat reservation system with an intuitive UI, PostgreSQL-based data management, email notifications, and CI/CD deployment on Vercel.",
        link: "https://seatly.vercel.app",
    },
    {
        image: "./projects/MoneyTree Preview.webp",
        logo: "./logos/MoneyTree.svg",
        title: "MoneyTree - Budget Management Platform",
        description: "A personal finance tracking app allowing users to manage expenses, visualize spending trends, and interact with dynamic financial insights.",
        link: "https://moneytree.vercel.app",
    }
];

function Project() {
    return (
        <section id="projects" className="outer-container">
            <h1 className="project-title">Previous <u>Projects</u></h1>
            <div className="card-container">
                {data.map((card) => (
                    <Projectcard
                        key={card.title}
                        image={card.image}
                        logo={card.logo}
                        title={card.title}
                        description={card.description}
                        link={card.link}
                    />
                ))}
            </div>
        </section>
    );
}

export default Project;
