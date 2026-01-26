import Image from "next/image";

export default function Home() {
  return (
    <div className="hero-section">
      <div className="hero-background" />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: 700,
            marginBottom: "1.5rem",
            lineHeight: 1.1,
          }}
        >
          Welcome to <span className="text-gradient">Path Finder</span>
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            color: "rgba(255,255,255,0.7)",
            maxWidth: "600px",
            margin: "0 auto 2.5rem",
          }}
        >
          Explore the future of web applications with our premium,
          high-performance foundation built on Next.js.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-outline">Learn More</button>
        </div>

        <div
          className="glass-panel animate-float"
          style={{
            marginTop: "4rem",
            padding: "2rem",
            maxWidth: "800px",
            margin: "4rem auto 0",
          }}
        >
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Next-Generation Features
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)" }}>
            Built with the latest technologies including React 19, Next.js 15,
            and a custom design system for unparalleled performance and
            aesthetics.
          </p>
        </div>
      </div>
    </div>
  );
}
