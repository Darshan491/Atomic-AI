import { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import ReactMarkdown from 'react-markdown';

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    newChat,
    darkMode,
    setDarkMode,
    error,
  } = useContext(Context);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSent();
    }
  };

  return (
    <div className={`main ${darkMode ? 'dark-mode' : ''}`}>
      <div className="nav">
        <div className="social">
          <a
            href="https://github.com/Darshan491/Atomic-AI.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            
          </a>
        </div>
        <p>Atomic AI</p>
        <div className="nav-actions">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '☀️' : '🌙'}
          </button>
          <img src={assets.user_icon} alt="" />
        </div>
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Atomic AI</span><br></br>
                <span>An Academic doubts Solving website</span>
              </p>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <ReactMarkdown>{resultData}</ReactMarkdown>
              )}
            </div>
            {error && <div className="error-message">{error}</div>}
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
              onKeyDown={handleKeyDown}
            />
            <div>
              
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <div className="bottom-actions">
            <button onClick={newChat} className="clear-btn">Clear Conversation</button>
          </div>
          <p className="bottom-info">
          Nobody is Perfect. Even Our Atomic AI can make mistakes. Check important info
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;