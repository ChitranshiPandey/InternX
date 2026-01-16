import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Chat = () => {
    const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const [messages, setMessages] = useState([
  {
    sender: "bot",
    text: "👋 Hi! I am InternX AI. Ask me anything about internships, skills, or careers.",
  },
]);

const [input, setInput] = useState("");

const botReplies = [
  "That’s a great question! 🌟 Internships help you gain real-world experience.",
  "InternX AI recommends focusing on skill-based internships for faster growth 🚀",
  "You can apply for internships that match your skills directly from InternX.",
  "Remote internships are trending a lot these days 💻",
  "Building projects alongside internships boosts your resume 📈",
  "Consistency is the key to cracking your first internship 🔑",
];

const sendMessage = () => {
  if (!input.trim()) return;

  const userText = input.toLowerCase();

  const userMessage = {
    sender: "user",
    text: input,
  };

  let botReply = "";

  // Greeting logic
  if (
    userText.includes("hi") ||
    userText.includes("hello") ||
    userText.includes("hey")
  ) {
    botReply = "👋 Hey! How can I help you with internships or careers today?";
  }

  // Internship logic
  else if (userText.includes("internship")) {
    botReply =
      "🎓 Internships help you gain real-world experience and improve your skills.";
  }

  // Remote logic
  else if (userText.includes("remote")) {
    botReply = "💻 Yes! Remote internships are very popular these days.";
  }

  // Default random reply
  else {
    botReply =
      botReplies[Math.floor(Math.random() * botReplies.length)];
  }

  const botMessage = {
    sender: "bot",
    text: botReply,
  };

  setMessages((prev) => [...prev, userMessage, botMessage]);
  setInput("");
};




    const faqs = [
  {
    question: "How do I find internships that match my skills?",
    answer:
      "InternX uses AI to analyze your skills, education, and interests to recommend the most relevant internships.",
  },
  {
    question: "Can InternX help me with remote internships?",
    answer:
      "Yes! InternX provides both remote and on-site internship recommendations tailored to your profile.",
  },
  {
    question: "Is there a fee to use InternX AI?",
    answer:
      "No, InternX AI is completely free for students.",
  },
  {
    question: "How do I track my internship applications?",
    answer:
      "You can track all your internship applications from the InternX dashboard in real time.",
  },
];



  return (

    <div className="min-h-screen bg-[#F8FAFC] px-6 py-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
            🤖
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            InternX AI
          </h2>
        </div>

        <button
          onClick={() => navigate("/")}
          className="border border-purple-500 text-purple-600 px-4 py-2 rounded-full text-sm hover:bg-purple-50"
        >
          Back to Home
        </button>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Chat Section */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md flex flex-col">
          
          {/* Chat Header */}
          <div className="bg-[#0F2A44] text-white px-4 py-3 rounded-t-xl font-medium">
            InternX AI Chatbot
          </div>

          {/* Messages */}
          {/* Messages */}
<div className="flex-1 p-4 overflow-y-auto space-y-3">
  {messages.map((msg, index) => (
    <div
      key={index}
      className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm ${
        msg.sender === "user"
          ? "ml-auto bg-purple-600 text-white"
          : "mr-auto bg-purple-100 text-gray-800"
      }`}
    >
      {msg.text}
    </div>
  ))}
</div>


          {/* Input */}
          <div className="border-t p-4 flex items-center gap-3">
            <input
  type="text"
  value={input}
  onChange={(e) => setInput(e.target.value)}
  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
  placeholder="Ask InternX AI about internships, skills, careers..."
  className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none"
/>

           <button
  onClick={sendMessage}
  className="bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700"
>
  ➤
</button>

          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className="font-semibold mb-4">Frequently Asked Questions</h3>

         {faqs.map((faq, i) => (
  <div key={i} className="border rounded-lg mb-3 overflow-hidden">
    
    {/* Question */}
    <button
      onClick={() => setOpenIndex(openIndex === i ? null : i)}
      className="w-full flex justify-between items-center px-4 py-3 text-sm font-medium hover:bg-gray-50"
    >
      {faq.question}
      <span
        className={`transition-transform duration-300 ${
          openIndex === i ? "rotate-180" : ""
        }`}
      >
        ▼
      </span>
    </button>

    {/* Answer */}
    {openIndex === i && (
      <div className="px-4 pb-4 text-sm text-gray-600">
        {faq.answer}
      </div>
    )}
  </div>
))}

        </div>
      </div>
    </div>
  );
};

export default Chat;
