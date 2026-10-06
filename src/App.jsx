import "./App.css";
import { useState } from "react";
import profileImage from "./assets/profile.jpg";

function App() {

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">

  <div className="logo">
    <div className="logo-icon">
      &lt;/&gt;
    </div>

    <div className="logo-name">
      SANGAMESHWARI S<span>.</span>
    </div>
  </div>


  <div className="nav-links">

    <a href="#home" className="nav-item active">
      
      Home
    </a>

    <a href="#about" className="nav-item">
     
      About
    </a>
   

    <a href="#skills" className="nav-item">
     
      Skills
    </a>

    <a href="#projects" className="nav-item">
      
      Projects
    </a>

    <a href="#experience" className="nav-item">
      
      Experience
    </a>

   

<a href="#certifications" className="nav-item">

  Certifications
</a>

    <a href="#contact" className="nav-item contact-nav">
      Contact <span>↗</span>
    </a>

  </div>

</nav>

      {/* Home Section */}
      <section className="home" id="home">

        {/* Left Side */}
        <div className="home-content">

          <div className="hello">
            👋 Hello, I'm
          </div>

          <h1>
            SANGAMESHWARI <span>S</span>
          </h1>

          <h2>
            <span>Java</span> Full Stack Developer
          </h2>

          <p>
            Computer Science Engineering graduate with strong knowledge
            of Java Full Stack Development, seeking a Software Developer
            role where I can apply my technical skills and continuously
            learn and grow.
          </p>

          <div className="buttons">

           <a
  href="/SANGAMESHWARI S.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="resume-button"
>
  📄 View My Resume →
</a>
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sangameshwari017@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-button"
>
  ✉ Contact Me
</a>
          </div>


          {/* Social Links */}
          <div className="social-links">

            <a
              href="https://github.com/sangameshwari017"
              target="_blank"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/sangameshwari"
              target="_blank"
            >
              LinkedIn
            </a>

          </div>

        </div>


        {/* Right Side */}
        <div className="home-image">

          <div className="glow-shape"></div>

          <div className="image-frame">
            <img
              src={profileImage}
              alt="Sangameshwari"
            />
          </div>

          <div className="code-text">
            Code<br />
            Build<br />
            Grow ♡
          </div>

        </div>

      </section>

      {/* About Section */}
<section className="about" id="about">

  <div className="section-title">
    <p>GET TO KNOW ME.!?</p>
    <h2>About <span>Me</span></h2>
  </div>

  <div className="about-content">

    <div className="about-text">

      <h3>I'm a Java Full Stack Developer</h3>

      <p>
        I am a Computer Science Engineering graduate with strong
        knowledge of Java Full Stack Development. I am passionate
        about building web applications and learning new technologies.
      </p>

      <p>
        I am currently gaining hands-on experience in Java Full Stack
        Development with Java, JDBC, Hibernate, Servlet, JSP, Springboot, REST API, SQL,
         HTML, CSS and JavaScript, React.js.
      </p>

    </div>


    <div className="education-card">

      <h3>🎓 Education</h3>

      <div className="education-item">
        <h4>B.E. Computer Science and Engineering</h4>
        <p>AVS College of Technology</p>
        <span>2023 - 2026 | CGPA: 8.3/10</span>
      </div>

      <div className="education-item">
        <h4>Diploma in Computer Science</h4>
        <p>Government Polytechnic College for Women</p>
        <span>2020 - 2023 | 94%</span>
      </div>

    </div>

  </div>

</section>


{/* Skills Section */}
<section className="skills" id="skills">

  <div className="section-title">
    <p>MY TECHNICAL SKILLS.!!</p>
    <h2>What I <span>Know</span></h2>
  </div>


  <div className="skills-container">

    {/* Backend */}
    <div className="skill-card">

      <div className="skill-icon">☕</div>

      <h3>Java Backend</h3>

      <p>
        Core Java, OOP, Collections, Java 8, JDBC,
        Hibernate, Servlets, JSP, Spring Framework and REST API.
      </p>

      <div className="skill-tags">
        <span>Java</span>
        <span>JDBC</span>
        <span>Hibernate</span>
        <span>Servlets</span>
        <span>JSP</span>
        <span>SpringBoot</span>
        <span>REST API</span>
      </div>

    </div>


    {/* Frontend */}
    <div className="skill-card">

      <div className="skill-icon">🌐</div>

      <h3>Frontend Development</h3>

      <p>
        Building responsive and interactive web interfaces
        using modern frontend technologies.
      </p>

      <div className="skill-tags">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React JS</span>
      </div>

    </div>


    {/* Database */}
    <div className="skill-card">

      <div className="skill-icon">🗄️</div>

      <h3>Database</h3>

      <p>
        Working with relational databases and writing SQL
        queries for storing and managing application data.
      </p>

      <div className="skill-tags">
        <span>MySQL</span>
        <span>DQL</span>
        <span>DDL</span>
        <span>DML</span>
        <span>Joins</span>
        <span>Subqueries</span>
    
      </div>

    </div>


    {/* Tools */}
    <div className="skill-card">

      <div className="skill-icon">🛠️</div>

      <h3>Tools & Technologies</h3>

      <p>
        Development tools and technologies used for building,
        testing and managing applications.
      </p>

      <div className="skill-tags">
        <span>Eclipse</span>
        <span>IntelliJ IDEA</span>
        <span>Maven</span>
        <span>Tomcat</span>
        <span>GitHub</span>
        <span>MySQL Workbench</span>
        <span>VS Code</span>
      </div>

    </div>

  </div>

</section>



{/* Projects Section */}
<section className="projects" id="projects">

  <div className="section-title">
    <p>MY WORK.!!</p>
    <h2>Featured <span>Projects</span></h2>
    <div className="title-line"></div>
  </div>


  <div className="projects-container">

  {/* Project 1 - Employee Management System */}
  <div className="project-card">

    <div className="project-top">
      <span className="project-number">01</span>
      <span className="project-icon">⚛️</span>
    </div>

    <h3>Employee Management System Using React</h3>

    <p>
      Developed an employee management application using React.js
      with CRUD operations for managing employee information.
    </p>

    <div className="project-tags">
      <span>React JS</span>
      <span>JavaScript</span>
      <span>HTML</span>
      <span>CSS</span>
    </div>

    <button
      className="view-project"
      onClick={() =>
        setSelectedProject({
          title: "Employee Management System",
          icon: "⚛️",
          description:
            "A responsive Employee Management System developed using React JS to manage employee information with complete CRUD operations.",
          features: [
            "Create employee",
            "View all employees",
            "View individual employee",
            "Update employee details",
            "Delete employee records"
          ],
          technologies:
            "React JS • JavaScript • HTML • CSS • CRUD",
          github:
            "https://github.com/sangameshwari017/employee-react-project"
        })
      }
    >
      View Project Details <span>↗</span>
    </button>

  </div>


  {/* Project 2 - Employee JDBC */}
  <div className="project-card">

    <div className="project-top">
      <span className="project-number">02</span>
      <span className="project-icon">☕</span>
    </div>

    <h3>Employee Management System Using JDBC</h3>

    <p>
      Developed a Employee management system using JDBC and MySQL
      for database operations and student record management.
    </p>

    <div className="project-tags">
      <span>Java</span>
      <span>JDBC</span>
      <span>MySQL</span>
    </div>

    <button
      className="view-project"
      onClick={() =>
        setSelectedProject({
          title: "Employee Management System - JDBC",
          icon: "☕",
          description:
            "A Employee management system developed using Java JDBC and MySQL for performing database operations and managing Employee records.",
          features: [
            "Add Employee details",
            "View Employee records",
            "Update Employee information",
            "Delete Employee records",
            "MySQL database connectivity"
          ],
          technologies:
            "Java • JDBC • MySQL",
          github:
            "https://github.com/sangameshwari017/student-jdbc-project"
        })
      }
    >
      View Project Details <span>↗</span>
    </button>

  </div>


  {/* Project 3 - Student Hibernate */}
  <div className="project-card">

    <div className="project-top">
      <span className="project-number">03</span>
      <span className="project-icon">🗄️</span>
    </div>

    <h3>Student Management Using Hibernate</h3>

    <p>
      Developed a database-driven Student management application
      using Hibernate and MySQL.
    </p>

    <div className="project-tags">
      <span>Java</span>
      <span>Hibernate</span>
      <span>Maven</span>
      <span>MySQL</span>
    </div>

    <button
      className="view-project"
      onClick={() =>
        setSelectedProject({
          title: "Student Management System - Hibernate",
          icon: "🗄️",
          description:
            "A database-driven Student Management System developed using Hibernate ORM and MySQL for efficient database operations.",
          features: [
            "Hibernate ORM integration",
            "Add Student records",
            "View Student records",
            "Update Student information",
            "Delete Student records",
            "Database persistence"
          ],
          technologies:
            "Java • Hibernate • Maven • MySQL",
          github:
            "https://github.com/sangameshwari017/student-maven-project"
        })
      }
    >
      View Project Details <span>↗</span>
    </button>

  </div>


  {/* Project 4 - Student Servlet */}
  <div className="project-card">

    <div className="project-top">
      <span className="project-number">04</span>
      <span className="project-icon">🌐</span>
    </div>

    <h3>Student Management System Using Servlets</h3>

    <p>
      Developed a web-based student management system with CRUD
      operations using Java Servlets.
    </p>

    <div className="project-tags">
      <span>Java</span>
      <span>Servlets</span>
      <span>HTML</span>
      <span>CSS</span>
      <span>MySQL</span>
    </div>

    <button
      className="view-project"
      onClick={() =>
        setSelectedProject({
          title: "Student Management System - Servlets",
          icon: "🌐",
          description:
            "A web-based Student Management System developed using Java Servlets, HTML, CSS and MySQL to manage student records.",
          features: [
            "Add student details",
            "View student records",
            "Update student information",
            "Delete student records",
            "Login functionality",
            "MySQL database connectivity"
          ],
          technologies:
            "Java • Servlets • HTML • CSS • MySQL",
          github:
            "https://github.com/sangameshwari017/Student-Management-System"
        })
      }
    >
      View Project Details <span>↗</span>
    </button>

  </div>


  {/* Project 5 - Personal Portfolio */}
  <div className="project-card">

    <div className="project-top">
      <span className="project-number">05</span>
      <span className="project-icon">💼</span>
    </div>

    <h3>Personal Portfolio Website</h3>

    <p>
      Developed a responsive personal portfolio website to showcase
      skills, projects and professional information.
    </p>

    <div className="project-tags">
      <span>React JS</span>
      <span>JavaScript</span>
      <span>HTML</span>
      <span>CSS</span>
    </div>

    <button
      className="view-project"
      onClick={() =>
        setSelectedProject({
          title: "Personal Portfolio Website",
          icon: "💼",
          description:
            "A responsive personal portfolio website developed using React JS to showcase skills, projects, education and professional information.",
          features: [
            "Responsive portfolio design",
            "About me section",
            "Skills section",
            "Projects section",
            "Contact section",
            "GitHub project links"
          ],
          technologies:
            "React JS • JavaScript • HTML • CSS",
          github:
            "https://github.com/sangameshwari017/portfolio"
        })
      }
    >
      View Project Details <span>↗</span>
    </button>

  </div>


{/* Project 6 - AI Classroom Monitoring Robot */}
<div className="project-card">

  <div className="project-top">
    <span className="project-number">06</span>
    <span className="project-icon">🤖</span>
  </div>

  <h3>AI-Based Classroom Monitoring Robot</h3>

  <p>
    Built an AI-based robot to monitor classroom activities
    and help teachers maintain discipline for effective learning.
  </p>

  <div className="project-tags">
    <span>Python</span>
    <span>AI</span>
    <span>Computer Vision</span>
    <span>HC-05</span>
  </div>

  <button
    className="view-project"
    onClick={() =>
      setSelectedProject({
        title: "AI-Based Classroom Monitoring Robot",
        icon: "🤖",
        description:
          "An AI-based robot developed to assist teachers by monitoring classroom activities and maintaining discipline during learning.",
        features: [
          "Classroom activity monitoring",
          "Face recognition",
          "Computer vision",
          "Automated monitoring",
          "HC-05 Bluetooth communication"
        ],
        technologies:
          "Python • Microcontroller • HC-05 Bluetooth • AI • Computer Vision • Face Recognition",
          github : null
      })
    }
  >
    View Project Details <span>↗</span>
  </button>

</div>


{/* Project 7 - Vehicular Black Box */}
<div className="project-card">

  <div className="project-top">
    <span className="project-number">07</span>
    <span className="project-icon">🚗</span>
  </div>

  <h3>Vehicular Black Box</h3>

  <p>
    Designed a vehicle monitoring system to record critical
    parameters during accidents for emergency response and investigation.
  </p>

  <div className="project-tags">
    <span>Arduino</span>
    <span>MySQL</span>
    <span>HTML</span>
    <span>PHP</span>
  </div>

  <button
    className="view-project"
    onClick={() =>
      setSelectedProject({
        title: "Vehicular Black Box with Automatic Emergency Assistance",
        icon: "🚗",
        description:
          "A vehicle monitoring system designed to record critical vehicle parameters during accidents to support emergency response and case investigation.",
        features: [
          "Vehicle parameter monitoring",
          "Speed monitoring",
          "Diesel level monitoring",
          "Driver condition monitoring",
          "Accident data recording",
          "Emergency assistance"
        ],
        technologies:
          "Arduino IDE • MySQL • HTML • PHP",
           github: null
          
      })
    }
  >
    View Project Details <span>↗</span>
  </button>

</div>
</div>

{/* Project Popup */}

{selectedProject && (

  <div
    className="project-overlay"
    onClick={() => setSelectedProject(null)}
  >

    <div
      className="project-modal"
      onClick={(e) => e.stopPropagation()}
    >

      <button
        className="close-modal"
        onClick={() => setSelectedProject(null)}
      >
        ×
      </button>


      <div className="modal-icon">
        {selectedProject.icon}
      </div>


      <p className="modal-label">
        PROJECT DETAILS
      </p>


      <h2>
        {selectedProject.title}
      </h2>


      <p className="modal-description">
        {selectedProject.description}
      </p>


      <h4>Key Features</h4>

      <div className="feature-list">

        {selectedProject.features.map(
          (feature, index) => (

            <div
              className="feature-item"
              key={index}
            >
              <span>✓</span>
              {feature}
            </div>

          )
        )}

      </div>


      <h4>Technologies</h4>

      <div className="modal-tech">
        {selectedProject.technologies}
      </div>


      {/* GitHub + Close Buttons */}

      <div className="modal-buttons">

  {selectedProject.github && (
    <a
      href={selectedProject.github}
      target="_blank"
      rel="noopener noreferrer"
      className="github-button"
    >
      GitHub ↗
    </a>
  )}

  <button
    className="close-button"
    onClick={() => setSelectedProject(null)}
  >
    Close
  </button>

</div>
    </div>

  </div>

)}

</section>


{/* Experience Section */}
<section className="experience" id="experience">

  <div className="section-title">
    <p>MY JOURNEY.!!</p>
    <h2>Experience & <span>Internship</span></h2>
    <div className="title-line"></div>
  </div>


  <div className="timeline">


    {/* QSpiders */}
    <div className="timeline-item">

      <div className="timeline-dot"></div>

      <div className="experience-card">

        <div className="experience-header">

          <div>
            <span className="experience-date">
              January 2026
            </span>

            <h3>Java Full Stack Development Intern</h3>

            <h4>QSpiders, Coimbatore</h4>
          </div>

          <div className="experience-icon">
            ☕
          </div>

        </div>


        <p>
          Gained hands-on experience in Java Full Stack
          Development and working with multiple technologies used
          for building web applications.
        </p>


        <div className="experience-skills">

          <span>Java</span>
           <span>JDBC</span>
            <span>Servlets</span>
          <span>Hibernate</span>
          <span>SpringBoot</span>
          <span>REST API</span>
          <span>SQL</span>
         
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
           <span>React.js</span>

        </div>

      </div>

    </div>


    {/* BSNL */}
    <div className="timeline-item">

      <div className="timeline-dot"></div>

      <div className="experience-card">

        <div className="experience-header">

          <div>
            <span className="experience-date">
              July 2022
            </span>

            <h3>Next Generation Data Networking</h3>

            <h4>Bharat Sanchar Nigam Limited, Coimbatore</h4>
          </div>

          <div className="experience-icon">
            🌐
          </div>

        </div>


        <p>
          Gained practical exposure to Next-generation Data
          Networking concepts, network infrastructure and
          communication technologies.
        </p>


        <div className="experience-skills">

          <span>Network Configuration</span>
          <span>Data Communication</span>
          <span>Network Infrastructure</span>

        </div>

      </div>

    </div>


  </div>

</section>




{/* Certifications & Achievements Section */}
<section className="certifications" id="certifications">

  <div className="section-title">
    <p>MY ACHIEVEMENTS.!! </p>

    <h2>
      Certifications <span>& Achievements</span>
    </h2>

    <div className="title-line"></div>
  </div>


  <div className="certifications-container">


    {/* Certificate 1 */}
    <div className="certificate-card">

      <div className="certificate-top">

        <div className="certificate-icon">
          🚀
        </div>

        <span className="certificate-number">
          01
        </span>

      </div>


      <div className="certificate-content">

        <span className="certificate-label">
          WORKSHOP & HACKATHON
        </span>

        <h3>
          Workshop and Hackathon at IIT Madras
        </h3>

        <p>
          Participated in a technical workshop and hackathon
          conducted at IIT Madras, gaining exposure to
          technical problem-solving and innovation.
        </p>

      </div>


      <div className="certificate-footer">

        <span>
          IIT Madras
        </span>

        <div className="certificate-badge">
          Certificate
        </div>

      </div>

    </div>


    {/* Certificate 2 */}
    <div className="certificate-card">

      <div className="certificate-top">

        <div className="certificate-icon">
          🏆
        </div>

        <span className="certificate-number">
          02
        </span>

      </div>


      <div className="certificate-content">

        <span className="certificate-label">
          DIPLOMA ACHIEVEMENT
        </span>

        <h3>
          C/DS Debugging
        </h3>

        <p>
          Received a Certificate and Shield for
          C/DS Debugging during Diploma, recognizing
          technical debugging and problem-solving skills.
        </p>

      </div>


      <div className="certificate-footer">

        <span>
          Certificate + Shield
        </span>

        <div className="certificate-badge">
          Achievement
        </div>

      </div>

    </div>


    {/* Certificate 3 */}
    <div className="certificate-card">

      <div className="certificate-top">

        <div className="certificate-icon">
          🥇
        </div>

        <span className="certificate-number">
          03
        </span>

      </div>


      <div className="certificate-content">

        <span className="certificate-label">
          TECHNICAL EVENTS
        </span>

        <h3>
          TECH HUNT & PROTOFEST
        </h3>

        <p>
          Received a Certificate in TECH HUNT (Quiz)
          and secured 2nd Prize in PROTOFEST
          (Project Presentation).
        </p>

      </div>


      <div className="certificate-footer">

        <span>
          2nd Prize
        </span>

        <div className="certificate-badge">
          Achievement
        </div>

      </div>

    </div>


  </div>

</section>
{/* Contact Section */}
<section className="contact" id="contact">

  <div className="contact-container">

    <div className="contact-left">

      <p className="contact-label">
        GET IN TOUCH
      </p>

      <h2>
        Let's Build Something
        <span> Great Together.</span>
      </h2>

      <p className="contact-description">
        I'm currently looking for opportunities to start my
        career as a Software Developer. If you have an
        opportunity or would like to connect, feel free to
        reach out.
      </p>


      <div className="contact-details">

        <a
          href="mailto:sangameshwari017@gmail.com"
          className="contact-item"
        >
          <div className="contact-icon">
            ✉
          </div>

          <div>
            <small>Email</small>
            <p>sangameshwari017@gmail.com</p>
          </div>
        </a>


        <a
          href="tel:+91 80155 84675"
          className="contact-item"
        >
          <div className="contact-icon">
            ☎
          </div>

          <div>
            <small>Phone</small>
            <p>+91 80155 84675</p>
          </div>
        </a>


        <div className="contact-item">

          <div className="contact-icon">
            📍
          </div>

          <div>
            <small>Location</small>
            <p>Coimbatore, Tamil Nadu</p>
          </div>

        </div>

      </div>

    </div>


    <div className="contact-right">

      <div className="contact-card">

        <div className="contact-card-glow"></div>

        <p className="contact-card-small">
          AVAILABLE FOR OPPORTUNITIES
        </p>

        <h3>
          Have a project or
          <br />
          opportunity in mind?
        </h3>

        <p>
          Let's connect and discuss how I can contribute
          to your team.
        </p>


        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sangameshwari017@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-button"
>
  ✉ Contact Me
</a>

        <div className="social-links">

          <a
            href="https://github.com/sangameshwari017"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sangameshwari"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </div>

  </div>

</section>
{/* Footer */}
<footer className="footer">

  <div className="footer-content">
<div className="footer-brand">

  <div className="footer-logo">
    &lt;/&gt; SANGAMESHWARI S<span>.</span>
  </div>  

  <p>
    JAVA FULL STACK DEVELOPER..!!
  </p>

  <div className="footer-signature">
    <img
      src="/signature.png.jpeg"
      alt="Sangameshwari signature"
    />
  </div>

</div>


    <div className="footer-links">

      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#education">Education</a>
      <a href="#contact">Contact</a>

    </div>


    <div className="footer-social">

      <a
        href="https://github.com/sangameshwari017"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/sangameshwari"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>

    </div>

  </div>


  <div className="footer-bottom">

    <p>
      © 2026 Sangameshwari S. All rights reserved.
    </p>
    

    <a href="#home">
      Back to top ↑
    </a>

  </div>

</footer>

    </div>
  );
}

export default App;