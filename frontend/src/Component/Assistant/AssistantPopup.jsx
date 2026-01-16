
import "./Assistant.css";

const AssistantPopup = ({ close }) => {
  return (
    <div className="assistant-popup">
      <div className="assistant-header">
        <div>
          <strong>InternX Assistant</strong>
          <p>Your internship guide ⭐</p>
        </div>
        <button onClick={close}>✖</button>
      </div>

      <div className="assistant-body">
        <div className="assistant-message">
          👋 Hi! I'm InternX Assistant.  
          I'm here to help you find internships, build resumes, and guide you.
        </div>
      </div>

      <div className="assistant-footer">
        <input type="text" placeholder="Type your question..." />
        <button>➤</button>
      </div>
    </div>
  );
};

export default AssistantPopup;


