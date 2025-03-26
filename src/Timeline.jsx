import { useRef, useEffect } from "react";
import "./timeline.css";

const Timeline = () => {
  const timelineRef = useRef(null);

  const milestones = [
    {
      year: "Jul 2018 - Jul 2021",
      title: "Customer Service Assistant, Tesco",
      description:
        "Provided customer support, handled transactions, and trained new team members on service best practices.",
      icon: "🛒",
      highlights: [
        "Resolved customer issues efficiently",
        "Processed financial transactions",
        "Trained new staff members",
      ],
    },
    {
      year: "Jan - Jun 2020",
      title: "Advertising Executive Intern, BBH",
      description:
        "Collaborated on ad campaigns, ensured brand compliance, and improved ad quality through error detection.",
      icon: "✏️",
      highlights: [
        "Identified and corrected ad errors",
        "Bridged client-creative team communication",
        "Assisted in campaign development",
      ],
    },

    {
      year: "Nov 2021 - Nov 2022",
      title: "Data Analyst, The Marketing Practice",
      description:
        "Automated data cleaning with VBA (40% time savings), created data visualizations, and trained new colleagues.",
      icon: "📊",
      highlights: [
        "VBA automation reduced reporting time by 40%",
        "Promoted from Apprentice in <6 months",
        "Created Tableau/Excel dashboards",
      ],
    },
    {
      year: "Nov 2022 - Apr 2024",
      title: "Junior Software Developer, Barclays",
      description:
        "Developed UI features for banking app, improved UX through testing, and analyzed user metrics for feature deployments.",
      icon: "💼",
      highlights: [
        "Implemented UI features in banking app",
        "Conducted code reviews to improve quality",
        "Analyzed user interaction metrics",
      ],
    },
    {
      year: "Jun - Jul 2024",
      title: "Python for Data Science, Coursera",
      description:
        "Learned Python applications in data analysis, machine learning, and AI development.",
      icon: "🐍",
      highlights: [
        "Data analysis techniques",
        "Machine learning fundamentals",
        "Python programming",
      ],
    },

    {
      year: "Nov 2024 - Mar 2025",
      title: "Northcoders Bootcamp",
      description:
        "Full-stack JavaScript training covering React, Node.js, and industry best practices through project work.",
      icon: "🎓",
      highlights: [
        "JavaScript full-stack curriculum",
        "Practical project experience",
        "Agile methodologies",
      ],
    },
  ];

  // Auto-scroll animation
  useEffect(() => {
    const timeline = timelineRef.current;
    let animationFrame;
    let scrollSpeed = 0.5;

    const animateScroll = () => {
      if (timeline.scrollLeft < timeline.scrollWidth - timeline.clientWidth) {
        timeline.scrollLeft += scrollSpeed;
      } else {
        timeline.scrollLeft = 0;
      }
      animationFrame = requestAnimationFrame(animateScroll);
    };

    animationFrame = requestAnimationFrame(animateScroll);

    const handleMouseEnter = () => cancelAnimationFrame(animationFrame);
    const handleMouseLeave = () => {
      animationFrame = requestAnimationFrame(animateScroll);
    };

    timeline.addEventListener("mouseenter", handleMouseEnter);
    timeline.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      timeline.removeEventListener("mouseenter", handleMouseEnter);
      timeline.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="horizontal-timeline-section">
      <h2 id="white" className="section-title">
        PROFESSIONAL JOURNEY
      </h2>

      <div className="timeline-container">
        <div className="timeline-scroll" ref={timelineRef}>
          {milestones.map((item, index) => (
            <div key={index} className="timeline-card">
              <div className="timeline-icon">{item.icon}</div>
              <div className="timeline-year">{item.year}</div>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-description">{item.description}</p>

              <ul className="timeline-highlights">
                {item.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>

              <div className="timeline-connector"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-hint">
        <span>← Scroll →</span>
      </div>
    </section>
  );
};

export default Timeline;
