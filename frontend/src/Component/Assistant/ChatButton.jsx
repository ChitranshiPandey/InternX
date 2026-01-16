import { useState } from "react";
import "./assistant.css";

export default function ChatButton() {
  const [open, setOpen] = useState(true);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hi! I'm InternX Assistant. Ask me about internships, resumes, or skills."
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const reply = getBotReply(input);
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 700);
  };

  return (
    <>
      {open && (
        <div className="assistant-container">
          <div className="assistant-header">
            InternX Assistant ✨
            <span className="close-btn" onClick={() => setOpen(false)}>✖</span>
          </div>

          <div className="assistant-body">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`message ${msg.sender === "user" ? "user" : "bot"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="assistant-input">
            <input
              type="text"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>➤</button>
          </div>
        </div>
      )}

      {!open && (
        <button className="chat-float-btn" onClick={() => setOpen(true)}>
          💬
        </button>
      )}
    </>
  );
}

/* SIMPLE AI LOGIC */
function getBotReply(text) {
  const msg = text.toLowerCase();

  if (msg.includes("internship")) {
    return "🎯 I help you find internships based on your skills and education.";
  }
  if (msg.includes("resume")) {
    return "📄 Want help improving your resume? Tell me your domain.";
  }
  if (msg.includes("skills")) {
    return "🛠️ Skills matter! Are you into tech, design, management, or marketing?";
  }
  if (msg.includes("pm")) {
    return "✨ PM Internship Scheme 2025 is live. Want eligibility details?";
  }

  return "🤖 I'm still learning! Try asking about internships, resumes, or skills.";
}


















// import { useState } from "react";
// import AssistantPopup from "./AssistantPopup";
// import "./Assistant.css";

// const ChatButton = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <div className="chat-button" onClick={() => setOpen(!open)}>
//         💬
//       </div>

//       {open && <AssistantPopup close={() => setOpen(false)} />}
//     </>
//   );
// };

// export default ChatButton;
