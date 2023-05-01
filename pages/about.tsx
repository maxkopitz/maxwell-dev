import Container from "components/ui/Container";
import ExperienceCard from "components/ui/ExperienceCard";
import { NextPage } from "next";

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "NextJS",
  "Node.js",
  "Python",
  "Postgres",
  "AWS",
];
const experience = [
  {
    company: "JPMorgan Chase & Co",
    position: "Software Enginering Intern",
    date: "Incoming Summer 2023",
    highlights: [],
  },
  {
    company: "Verizon",
    position: "Systems Enginering Intern",
    date: "June 2022 - August 2022",
    highlights: [
      "Automated 6 new Onetalk Enterprise product test cases, enabling new feature deployment to production network",
      "Refactored 29 outdated Onetalk tests by updating incorrect references to create clarity",
      "Created 86 test cases contributing towards end-of-year target for new automated tests",
      "Triaged automation suites daily to identify any recurring issues and opened tickets as necessary",
      "Created 7 health check automations and notified test plan author of recurring failures",
    ],
  },
  {
    company: "RideJam.app",
    position: "Cofounder/Developer",
    date: "June 2021 - September 2022",
    highlights: [
      "Refactored Python backend and implemented Postgres to improve performance and maintainability",
      "Developed CI/CD pipelines with GitHub actions for quick code deployment to AWS",
      "Secured $1,000 in cloud computing credits from AWS Activate and $1,000 from grant funding for MVP testing",
      "Created an onboarding process in Figma and React for new drivers in order to enable smooth product adoption",
    ],
  },
  {
    company: "Tour.Video by LeaseMagnets",
    position: "Software Enginering Intern",
    date: "October 2021 - December 2021",
    highlights: [
      "Integrated video uploading with Google Drive API to improve client experience using product",
      "Executed sprint with colleagues across the world to efficiently implement new features",
      "Updated webhook to replace account details with encoded video URL to serve faster video playback",
    ],
  },
];

const About: NextPage = () => {
  return (
    <Container title="Maxwell Kopitz - About" description="My about page">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Hi! I&apos;m max. I love building.{" "}
        </p>
        <h3 className="text-gray-900 dark:text-gray-400 text-l font-bold mb-2">
          Languages and Tools I&apos;ve Worked With
        </h3>
        <div className="metric-card bg-white dark:bg-gray-900 border rounded-lg dark:border-gray-800 mb-6 p-2">
          <ul className="grid grid-cols-2 gap-2 text-gray-900 dark:text-gray-400">
            {skills &&
              skills.map((skill, i) => (
                <li key={i}>
                  <span className="text-green-900 text-sm dark:text-green-200">
                    ▹
                  </span>{" "}
                  {skill}
                </li>
              ))}
          </ul>
        </div>
        <h2 className="text-gray-800 dark:text-gray-400 text-l font-bold mb-2">
          Where I&apos;ve Worked
        </h2>
        {experience.map((item, key) => (
          <ExperienceCard
            key={key}
            company={item.company}
            position={item.position}
            date={item.date}
            highlights={item.highlights}
          />
        ))}
      </div>
    </Container>
  );
};

export default About;
