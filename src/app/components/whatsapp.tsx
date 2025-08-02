"use client";
import { useState } from "react";
import Image from "next/image";
import wp from "../../../public/wha.png";
import snd from "../../../public/send.png";

interface WhatsAppPopupProps {
  companyName?: string;
  phoneNumber?: string;
  defaultMessage?: string;
  position?: 'left' | 'right';
  theme?: 'default' | 'spiritual' | 'corporate';
}

const WhatsAppPopup: React.FC<WhatsAppPopupProps> = ({
  companyName = "Divine Mentors",
  phoneNumber = "+91 9156123575",
  defaultMessage = "Hello! I'm interested in learning more about your spiritual guidance services.",
  position = 'left',
  theme = 'spiritual'
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState(defaultMessage);

  const handleSendMessage = () => {
    if (!message.trim() || !phoneNumber.trim()) return;

    // Remove spaces and ensure proper number format
    const formattedPhoneNumber = phoneNumber.replace(/\s+/g, "");
    const url = `https://wa.me/${formattedPhoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, "_blank");
    setMessage("");
  };

  // Theme configurations
  const themes = {
    default: {
      buttonColor: "rgb(33, 202, 95)",
      buttonHoverColor: "rgb(33, 202, 95)",
      headerColor: "#075E54",
      sendButtonColor: "#25D366"
    },
    spiritual: {
      buttonColor: "rgb(33, 202, 95)", // Brown for spiritual theme
      buttonHoverColor: "rgb(33, 202, 95)",
      headerColor: "#8B4513",
      sendButtonColor: "#D2691E"
    },
    corporate: {
      buttonColor: "rgb(59, 130, 246)", // Blue for corporate theme
      buttonHoverColor: "rgb(37, 99, 235)",
      headerColor: "#1E40AF",
      sendButtonColor: "#3B82F6"
    }
  };

  const currentTheme = themes[theme];

  return (
    <>
      {/* WhatsApp Floating Button */}
      <button
        onClick={() => setShowPopup(!showPopup)}
        className="whatsapp-float-btn"
        style={{
          position: "fixed",
          bottom: "20px",
          left: "40px", // ✅ Changed to left side on desktop
          backgroundColor: "rgb(33, 202, 95)",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.15) rotate(5deg)";
          e.currentTarget.style.backgroundColor = currentTheme.buttonHoverColor;
          e.currentTarget.style.boxShadow = `0px 8px 20px ${currentTheme.buttonColor}40, 0px 4px 8px rgba(0, 0, 0, 0.3)`;
          e.currentTarget.style.border = "2px solid 0px 4px 6px rgba(0, 0, 0, 0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1) rotate(0deg)";
          e.currentTarget.style.backgroundColor = currentTheme.buttonColor;
          e.currentTarget.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.2)";
          e.currentTarget.style.border = "none";
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = "scale(0.95) rotate(2deg)";
          e.currentTarget.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.3)";
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = "scale(1.15) rotate(5deg)";
          e.currentTarget.style.boxShadow = `0px 8px 20px 0px 4px 6px rgba(0, 0, 0, 0.2) 40, 0px 4px 8px rgba(0, 0, 0, 0.3)`;
        }}
      >
        <Image 
          src={wp} 
          alt="WhatsApp" 
          width={35} 
          height={35}
          style={{
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
      </button>

      {/* WhatsApp Chat Popup */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            [position]: "20px",
            width: "320px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
            fontFamily: "Arial, sans-serif",
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#075E54",
              color: "#fff",
              padding: "12px",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            <span>{companyName}</span>
            <span onClick={() => setShowPopup(false)} style={{ cursor: "pointer", fontSize: "18px" }}>✖</span>
          </div>

          {/* Chat Body */}
          <div
            style={{
              padding: "12px",
              backgroundColor: "#ECE5DD",
              minHeight: "150px",
              maxHeight: "250px",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                backgroundColor: "#DCF8C6",
                padding: "8px",
                borderRadius: "8px",
                color: "black",
                maxWidth: "80%",
                marginBottom: "10px",
                fontSize: "14px",
                boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
              }}
            >
              {theme === 'spiritual' 
                ? "Namaste! 🙏 How can I assist you on your spiritual journey today?"
                : theme === 'corporate'
                ? "Hello! 👋 How can we help you with your business needs?"
                : "Hey! 👋 How can we help you today?"
              }
            </div>
          </div>

          {/* Chat Input */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "8px",
              color: "black",
              padding: "12px",
              backgroundColor: "#fff",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            {/* Message Input */}
            <input
              type="text"
              placeholder={theme === 'spiritual' ? "Share your spiritual questions..." : "Enter your message"}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                flex: 1,
                padding: "8px",
                borderRadius: "20px",
                border: "1px solid #ddd",
                outline: "none",
                fontSize: "14px",
              }}
            />

            {/* Send Button */}
            <button
              onClick={handleSendMessage}
              style={{
                backgroundColor: "#25D366",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Image src={snd} alt="Send" width={20} height={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppPopup;