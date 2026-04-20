import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Dev Intern</h4>
                <h5>ESC & HCDS Techh</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed 'ParkNGo', a full-stack Flask app, and contributed to Azure DevOps Server projects for scalable data workflows along with LLM-RAG integrations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science & Backend Intern</h4>
                <h5>Indian Navy (WESEE)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed RESTful backend services using FastAPI and PostgreSQL. Supported machine learning model training with PyTorch and integrated LLM RAG pipelines.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Engineer & QA Intern</h4>
                <h5>Ekam Apps</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Built 'Turrant App' with OCR pipelines and ML algorithms. Designed system infrastructure with Claude Code Interpreter, Docker CI/CD, and third-party API integrations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
