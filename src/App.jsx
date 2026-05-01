import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [repos, setRepos] = useState([]);

  // Fetch GitHub repos
  useEffect(() => {
    fetch("https://api.github.com/users/mehrnfeldt/repos")
      .then(res => res.json())
      .then(data => {
        const filtered = data
          .filter(repo => !repo.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(filtered);
      });
  }, []);

  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-left">ME</div>
        <ul className="nav-right">
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="container">

        {/* HERO */}
<section id="home" className="hero">
  <h1 className="name">Megan Ehrnfeldt</h1>

  <p className="qualifications">
    B.S. in Computer Science, Drexel University — June 2026  
    Concentrations: Artificial Intelligence & Machine Learning, Algorithms & Theory  
    Minors: Data Science, Mathematics
  </p>

  <p className="tagline">
    I’m a Computer Science graduate specializing in AI, Machine Learning, and full‑stack development.  
    I build intelligent systems that combine computer vision, cloud architecture, and data engineering  
    to solve real‑world problems with clarity, accuracy, and scale.
  </p>

  <p className="open-to">
  Open to opportunities across Software Engineering, Machine Learning Engineering, AI Engineering,  
  Data Science, Analytics, Business Intelligence, Cloud Engineering, and Full‑Stack Development.
</p>

  <p className="location">Philadelphia, PA</p>
</section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <h2 className="section-title">Skills</h2>

          <div className="skills-grid">

            <div className="skill-card">
              <h3>Programming Languages</h3>
              <ul>
                <li>Python</li>
                <li>Java</li>
                <li>C / C++</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>Bash</li>
              </ul>
            </div>

            <div className="skill-card">
              <h3>Machine Learning & AI</h3>
              <ul>
                <li>Computer Vision</li>
                <li>Pose Estimation</li>
                <li>Object Detection</li>
                <li>Deep Learning</li>
                <li>Model Training & Evaluation</li>
                <li>Feature Engineering</li>
              </ul>
            </div>

            <div className="skill-card">
              <h3>ML Libraries & Frameworks</h3>
              <ul>
                <li>PyTorch</li>
                <li>TensorFlow</li>
                <li>Scikit-learn</li>
                <li>NumPy</li>
                <li>Pandas</li>
                <li>MediaPipe</li>
                <li>YOLOv8</li>
              </ul>
            </div>

            <div className="skill-card">
              <h3>Cloud & DevOps (AWS)</h3>
              <ul>
                <li>S3</li>
                <li>Lambda</li>
                <li>SageMaker</li>
                <li>API Gateway</li>
                <li>DynamoDB</li>
                <li>Athena</li>
                <li>Serverless Architecture</li>
              </ul>
            </div>

            <div className="skill-card">
              <h3>Data & Analytics Tools</h3>
              <ul>
                <li>Alteryx</li>
                <li>Tableau</li>
                <li>Power BI</li>
                <li>Excel Modeling</li>
                <li>Data Cleaning & Transformation</li>
              </ul>
            </div>

            <div className="skill-card">
              <h3>Software Engineering</h3>
              <ul>
                <li>Object-Oriented Design</li>
                <li>Algorithms & Data Structures</li>
                <li>React.js Development</li>
                <li>REST API Design</li>
                <li>Docker</li>
                <li>Git & GitHub</li>
              </ul>
            </div>

            <div className="skill-card">
              <h3>Leadership & Coaching</h3>
              <ul>
                <li>Team Leadership</li>
                <li>Mentorship</li>
                <li>Training Plan Design</li>
                <li>Motivational Communication</li>
              </ul>
            </div>

            <div className="skill-card">
              <h3>Athletic Mindset</h3>
              <ul>
                <li>Discipline & Consistency</li>
                <li>High-Pressure Performance</li>
                <li>Team Collaboration</li>
                <li>Goal Setting & Accountability</li>
              </ul>
            </div>

          </div>
        </section>

        {/* EXPERIENCE */}
<section id="experience" className="section">
  <h2 className="section-title">Experience</h2>

  <div className="experience-item">
    <h3>Comcast Corporation — Indirect Tax Co-op</h3>
    <p className="date">March 2025 – September 2025</p>
    <ul>
      <li>Integrated an AI-driven validation tool into compliance workflows, automating large-scale tax data checks and reducing manual review time.</li>
      <li>Designed, implemented, and documented a taxability workflow in Alteryx for NBCUniversal, improving consistency and operational efficiency.</li>
      <li>Developed a comprehensive process flowchart to standardize compliance procedures and enhance cross-team clarity.</li>
      <li>Performed taxability research and data analysis to address business inquiries and corrected account balances by auditing historical company returns.</li>
    </ul>
  </div>

  <div className="experience-item">
    <h3>PE Metalworks, Inc — Business Intern</h3>
    <p className="date">March 2024 – September 2024</p>
    <ul>
      <li>Redesigned and modernized the company website using WordPress and HTML/CSS, improving navigation and customer engagement.</li>
      <li>Built Excel-based manufacturing process models to analyze production times, identify bottlenecks, and support process improvement efforts.</li>
      <li>Conducted pricing analyses on manufactured products to ensure profitability and maintain competitive service pricing.</li>
      <li>Managed administrative workflows including list maintenance, reporting, and project organization to support daily operations.</li>
    </ul>
  </div>

  <div className="experience-item">
    <h3>Race-Walking Analysis & Compliance Evaluation — Senior Design Project</h3>
    <p className="date">September 2025 – Present</p>
    <ul>
      <li>Developed a Python-based computer vision system using YOLOv8, MediaPipe, and OpenCV to detect race-walking rule violations such as bent knees and loss of ground contact.</li>
      <li>Expanded a full-stack, cloud-native application by extending its AWS backend (Lambda, API Gateway, S3) for scalable video processing and athlete analysis.</li>
      <li>Improved ML pipeline accuracy through feature engineering, iterative model tuning, and SageMaker-based training workflows.</li>
      <li>Built a dynamic React.js frontend for real-time visualization, athlete feedback, and performance analytics.</li>
      <li>Implemented DynamoDB for metadata storage and Athena for SQL querying of JSON-based results stored in S3.</li>
    </ul>
  </div>

  <div className="experience-item">
    <h3>PennDOT — Summer Transportation Intern</h3>
    <p className="date">Summer 2023</p>
    <ul>
      <li>Assisted with roadway inspection, field data collection, and documentation for state transportation projects.</li>
      <li>Analyzed pavement quality, compliance metrics, and vehicle specifications to support engineering decisions.</li>
      <li>Verified inspection reports and contributed to workflow optimization across multi-department engineering teams.</li>
      <li>Gained hands-on experience with public-sector infrastructure operations and safety compliance.</li>
    </ul>
  </div>

  <div className="experience-item">
    <h3>Drexel Swim & Dive Team — Student-Athlete</h3>
    <p className="date">2022 – Present</p>
    <ul>
      <li>Balanced Division I athletics with a rigorous Computer Science curriculum, demonstrating discipline, resilience, and time management.</li>
      <li>Maintained competitive performance through daily training, developing consistency and high-pressure execution skills.</li>
      <li>Contributed to a collaborative, high-performance team environment and supported teammates in achieving shared goals.</li>
      <li>Applied athletic mindset to academic and technical problem-solving, improving focus and adaptability.</li>
    </ul>
  </div>

  <div className="experience-item">
    <h3>Swim Coach & Mentor</h3>
    <p className="date">Seasonal</p>
    <ul>
      <li>Coached youth swimmers in technique, conditioning, and race preparation, tailoring instruction to individual skill levels.</li>
      <li>Developed structured training plans and performance tracking metrics to support athlete improvement.</li>
      <li>Taught discipline, teamwork, and goal-setting fundamentals through hands-on coaching and mentorship.</li>
      <li>Strengthened leadership, communication, and motivational skills through athlete development and team coordination.</li>
    </ul>
  </div>

</section>
{/* PROJECTS */}
<section id="projects" className="section">
  <h2 className="section-title">Projects</h2>

  <div className="projects-grid">
    {repos.map(repo => (
      <a
        key={repo.id}
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        className="project-card"
      >
        <h3>{repo.name}</h3>
        <p>{repo.description || "No description provided."}</p>
        <span className="repo-lang">{repo.language}</span>
      </a>
    ))}
  </div>
</section>

      

        {/* CONTACT */}
        <section id="contact" className="section">
          <h2 className="section-title">Contact</h2>

          <p>Email: <a href="mailto:mee72@drexel.edu">mee72@drexel.edu</a></p>

          

          <div className="contact-buttons">
            <a href="/Ehrnfeldt Resume 2026.pdf" download className="btn">
              Download Resume
            </a>
            <a
              href="https://github.com/mehrnfeldt"download className="btn">
          
              GitHub Profile
            </a>
            <a
              href="https://www.linkedin.com/in/megan-ehrnfeldt-848aa0292/"download className="btn">
              LinkedIn Profile
            </a>
          </div>
        
        </section>

        <footer>
          <p>© 2026 Megan Ehrnfeldt</p>
        </footer>

      </div>
    </div>
  );
}
