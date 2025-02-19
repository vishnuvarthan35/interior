import React from "react";
import { Link } from "react-router-dom";

export default function HomeHeroSection() {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: 'url("/asset/images/banner3.jpg")',
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
      <style>
        {`
          .hero-btn {
            display: inline-block;
            padding: 12px 30px;
            background-color: #fff;
            color: #000;
            text-decoration: none;
            border-radius: 4px;
            font-weight: bold;
            font-size: 16px;
            transition: all 0.3s ease, box-shadow 0.3s ease;
            position: relative;
            overflow: hidden;
            z-index: 1;
          }

          .hero-btn::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: #000;
            z-index: -1;
            transition: all 0.3s ease;
          }

          .hero-btn:hover::before {
            left: 0;
          }

          .hero-btn:hover {
            color: #fff;
            box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
            transform: scale(1.1);
          }
        `}
      </style>

      <div
        className="hero-content"
        style={{
          color: "#fff",
          zIndex: 2,
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "400",
            marginBottom: "10px",
          }}
        >
          MSAV
        </h2>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          Interiors
        </h1>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            maxWidth: "600px",
            margin: "0 auto 30px",
            color: "white",
            transition: "color 0.3s ease, transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "#FFD700"; // Gold color on hover
            e.target.style.transform = "scale(1.05)"; // Slightly enlarge on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "white"; // Revert to white
            e.target.style.transform = "scale(1)"; // Reset scale
          }}
        >
          MSAV Interiors is a creative interior design studio specializing in crafting elegant and functional spaces. They blend innovative designs with client preferences to deliver timeless and personalized environments for homes and businesses.
        </p>



        <Link to="/contact" className="hero-btn">
          Contact US <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </Link>
      </div>

      {/* Optional overlay for better text readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: 1,
        }}
      ></div>
    </div>
  );
}
