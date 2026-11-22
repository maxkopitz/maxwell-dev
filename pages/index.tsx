import Container from "components/ui/Container";
import { NextPage } from "next";

const links = [
  {
    text: "Resume",
    href: "https://maxwell-dev.s3.us-east-2.amazonaws.com/Kopitz_Maxwell_Resume.pdf",
  },
  { text: "GitHub", href: "https://github.com/maxkopitz" },
  { text: "LinkedIn", href: "https://www.linkedin.com/in/maxkopitz/" },
  { text: "Twitter", href: "https://twitter.com/maxkopitz" },
];

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
    position: "Software Engineering Intern",
    date: "June 2023 - August 2023",
    highlights: [
      "Revamped file uploader UI using React resulting in more intuitive user-friendly interface",
      "Investigated library upgrade creating steps needed to bring modern features to users",
      "Developed high-impact company admin UI using react and AG Grid to enhance user experience",
      "Created test cases to achieve 80% code coverage insuring releases to production",
    ],
  },
  {
    company: "Verizon",
    position: "Systems Engineering Intern",
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
    position: "Software Engineering Intern",
    date: "October 2021 - December 2021",
    highlights: [
      "Integrated video uploading with Google Drive API to improve client experience using product",
      "Executed sprint with colleagues across the world to efficiently implement new features",
      "Updated webhook to replace account details with encoded video URL to serve faster video playback",
    ],
  },
];

const Home: NextPage = () => {
  return (
    <Container
      title="Maxwell Kopitz"
      description="Maxwell Kopitz - software engineer at J.P. Morgan Chase & Co."
    >
      <header className="mb-12">
        <h3 className="text-black dark:text-white">Hi, my name is</h3>
        <h1 className="text-5xl md:text-6xl font-bold text-cyan-800">
          Maxwell Kopitz.
        </h1>
        <h1 className="text-5xl md:text-6xl font-bold text-cyan-700 mb-4 dark:text-cyan-300">
          I build things.
        </h1>
        <h2 className="text-2xl text-gray-800 dark:text-gray-400">
          Software Engineer at J.P. Morgan Chase &amp; Co.
        </h2>
        <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <a
              key={link.text}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-700 dark:text-slate-300 underline underline-offset-4 hover:text-slate-900 dark:hover:text-white transition"
            >
              {link.text}
            </a>
          ))}
        </nav>
      </header>

      <section className="mb-12">
        <h2 className="text-gray-800 dark:text-gray-400 font-bold mb-2">
          Where I&apos;ve Worked
        </h2>
        {experience.map((item) => (
          <div
            key={item.company}
            className="bg-white dark:bg-gray-900 border rounded-lg dark:border-gray-800 mb-6 w-full p-3"
          >
            <h3 className="text-slate-800 dark:text-slate-200 text-xl font-semibold">
              {item.position} @{" "}
              <span className="text-indigo-900 dark:text-indigo-300">
                {item.company}
              </span>
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-1">
              {item.date}
            </p>
            <ul className="pl-2">
              {item.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="text-slate-900 dark:text-slate-300"
                >
                  <span className="pr-1 text-green-900 text-lg dark:text-green-200">
                    ▹
                  </span>{" "}
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-16">
        <h2 className="text-gray-900 dark:text-gray-400 font-bold mb-2">
          Languages and Tools I&apos;ve Worked With
        </h2>
        <div className="bg-white dark:bg-gray-900 border rounded-lg dark:border-gray-800 p-3">
          <ul className="grid grid-cols-2 gap-2 text-gray-900 dark:text-gray-400">
            {skills.map((skill) => (
              <li key={skill}>
                <span className="text-green-900 text-sm dark:text-green-200">
                  ▹
                </span>{" "}
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Container>
  );
};

export default Home;
