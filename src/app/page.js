"use client";
import { useEffect, useState } from "react";
import { getTrendingProducts } from "../utils/trendEngine";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Home() {
  // 1. Initialize trending as an empty array to match the server render
  const [trending, setTrending] = useState([]);
  const router = useRouter();
const handleComingSoon = () => {
    alert("Coming Soon! Stay tuned.");
  };
  useEffect(() => {
    // 2. Set the data safely only after the component mounts on the client
    setTrending(getTrendingProducts());

    
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    });

    elements.forEach((el) => observer.observe(el));

    // Optional Clean-up to prevent memory leaks
    return () => observer.disconnect();
  }, []);

  return (
    <main className="main">

      {/* NAVBAR */}
      <header className="nav">
        <div className="logoContainer" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Image 
            src="/brand-logo.png" 
            alt="GloboShop Logo"
            width={48}      /* Adjust width as needed */
            height={48}     /* Adjust height as needed */
            className="logoImg"
            priority        /* Ensures the logo loads immediately without flashing */
          />
          <span className="logoText">GloboShop</span>
        </div>

        <div className="navRight">
          <button className="btn primary" onClick={handleComingSoon}>Get GloboShop</button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero reveal">
        <h1 className="title">
          Turn every scroll into a storefront
        </h1>

        <p className="subtitle">
          GloboShop is not a marketplace — it’s a living social commerce ecosystem where every post can sell.
        </p>

        <div className="heroButtons">
          <button 
  className="btn primary big" 
  onClick={() => router.push('/explore')}
>
  Explore GloboShop
</button>
          <button 
  className="btn ghost big"
  onClick={() => router.push('/seller')}
>
  Sell on GloboShop?
</button>
        </div>

        <div className="badgeRow">
          <div className="badge">⚡ Instant Checkout</div>
          <div className="badge">🎥 Social Shopping</div>
          <div className="badge">🔒 Secure Payments</div>
        </div>
      </section>

    {/* IMMERSIVE PRODUCT PREVIEW - SINGLE PREMIUM CARD */}
      <section className="previewSection reveal" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="previewText" style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2>See shopping become social</h2>
          <p>
            Every post is a storefront. Every scroll is a shopping journey.
          </p>
        </div>

        <div 
          onClick={() => router.push('/preview')}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "400px", /* Keeps it constrained to a clean card size */
            borderRadius: "16px",
            overflow: "hidden",
            aspectRatio: "4/5",
            background: "#141419",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            cursor: "pointer",
            transition: "transform 0.3s ease, box-shadow 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow = "0 20px 40px rgba(169,112,255,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
          }}
        >
          {/* Card Image */}
          <Image 
            src="/screens/image.png" 
            alt="GloboShop Interface View"
            fill
            sizes="(max-width: 440px) 100vw, 400px"
            style={{ objectFit: "cover" }}
          />

          {/* Sleek Dark Gradient & CTA Text Overlay */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "24px",
            boxSizing: "border-box"
          }}>
            <span style={{ 
              color: "#A970FF", 
              fontSize: "12px", 
              fontWeight: "700", 
              letterSpacing: "2px", 
              textTransform: "uppercase" 
            }}>
              Live Platform Stream
            </span>
            <h3 style={{ margin: "4px 0 12px 0", fontSize: "1.2rem", color: "#fff" }}>
              Interactive Interface
            </h3>
            <div style={{ 
              color: "#fff", 
              fontSize: "14px", 
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "4px"
            }}>
              Tap to Preview ↗
            </div>
          </div>
        </div>
      </section>
      {/* VIRAL LIVE SECTION - SINGLE PREMIUM CARD */}
      <section className="viralSection reveal" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="viralHeader" style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2>Live on GloboShop 🔥</h2>
          <p>Real creators. Real products. Real-time commerce energy.</p>
        </div>

        <div 
          onClick={() => router.push('/product')}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "400px", /* Matches your layout card size constraints */
            borderRadius: "16px",
            overflow: "hidden",
            aspectRatio: "4/5",
            background: "#141419",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            cursor: "pointer",
            transition: "transform 0.3s ease, box-shadow 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow = "0 20px 40px rgba(169,112,255,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
          }}
        >
          {/* Live Tag Component Indicator */}
          <div style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            background: "#ff4757",
            color: "#fff",
            fontSize: "11px",
            fontWeight: "800",
            padding: "4px 10px",
            borderRadius: "4px",
            letterSpacing: "1px",
            zIndex: 2,
            boxShadow: "0 4px 10px rgba(255,71,87,0.4)"
          }}>
            LIVE DROP
          </div>

          {/* Card Image */}
          <Image 
            src="/screens/image2.jpeg" 
            alt="GloboShop Live Stream Interface"
            fill
            sizes="(max-width: 440px) 100vw, 400px"
            style={{ objectFit: "cover", objectPosition: "top" }}
          />

          {/* Sleek Dark Gradient & CTA Text Overlay */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "24px",
            boxSizing: "border-box",
            zIndex: 1
          }}>
            <span style={{ 
              color: "#A970FF", 
              fontSize: "12px", 
              fontWeight: "700", 
              letterSpacing: "2px", 
              textTransform: "uppercase" 
            }}>
              Featured Creator Feed
            </span>
           
            <div style={{ 
              color: "#fff", 
              fontSize: "14px", 
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "4px"
            }}>
              Tap to Preview ↗
            </div>
          </div>
        </div>
      </section>
      {/* SCROLL DEPTH PSYCHOLOGY SECTION */}
      <section className="trustSection reveal">
        <div className="trustHeader">
          <h2>Why people stay on GloboShop</h2>
          <p>Designed for attention, engagement, and instant buying behavior</p>
        </div>

        <div className="trustGrid">
          <div className="trustCard">
            <h3>⚡ Instant Desire Loop</h3>
            <p>Products appear like content, not ads.</p>
            <span>+37% conversion</span>
          </div>

          <div className="trustCard">
            <h3>🎥 Social Proof Engine</h3>
            <p>Every product feels trending and alive.</p>
            <span>viral behavior</span>
          </div>

          <div className="trustCard">
            <h3>🧠 Emotional Buying</h3>
            <p>Users don’t browse — they react.</p>
            <span>psychology driven</span>
          </div>
        </div>
      </section>

      {/* BRAND / WHY SECTION */}
      <section className="brand reveal">
        <h2>Why GloboShop exists</h2>
        <p>
          Traditional e-commerce is static. Social media is addictive but not shoppable.
          GloboShop merges both into one experience.
        </p>
      </section>

      {/* TRENDING TRUST SECTION */}
      <section className="trustSection reveal">
        <div className="trustHeader">
          <h2>Trending on GloboShop 🔥</h2>
          <p>Live demand signals (updated continuously)</p>
        </div>

        <div className="trustGrid">
          {trending.map((item, index) => (
            <div className="trustCard" key={index}>
              <h3>{item.name}</h3>
              <p>{item.views}+ views today</p>
              <p>{item.buyers}+ buyers</p>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* MEMORY HOOK SECTION */}
      <section className="memorySection reveal">
        <div className="memoryBox">
          <h2 className="memoryTitle">
            You don’t browse GloboShop.
          </h2>

          <h1 className="memoryBig">
            You experience shopping.
          </h1>

          <p className="memoryText">
            Every scroll learns your taste. Every post becomes a store built for you.
          </p>

          <div className="memoryStats">
            <div>
              <h3>1 Tap</h3>
              <p>Checkout</p>
            </div>

            <div>
              <h3>0 Delay</h3>
              <p>Discovery</p>
            </div>

            <div>
              <h3>100%</h3>
              <p>Social</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / ECOSYSTEM SECTION */}
      <section className="trustSection reveal">
        <div className="trustHeader">
          <h2>Built for trust. Designed for growth.</h2>
          <p>
            GloboShop is not a demo. It’s a real commerce ecosystem powered by creators and real users.
          </p>
        </div>

        <div className="trustGrid">
          <div className="trustCard">
            <h3>🔐 Verified Ecosystem</h3>
            <p>Every seller goes through identity and payment verification.</p>
            <span>Trust First</span>
          </div>

          <div className="trustCard">
            <h3>⚡ Real-Time Commerce</h3>
            <p>Products, posts, and orders update instantly across users.</p>
            <span>Live System</span>
          </div>

          <div className="trustCard">
            <h3>🌍 Built for Scale</h3>
            <p>Designed to handle thousands of creators and millions of users.</p>
            <span>Future Ready</span>
          </div>

          <div className="trustCard">
            <h3>💡 Creator Economy First</h3>
            <p>We don’t just sell products — we empower creators.</p>
            <span>Mission Driven</span>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="grid reveal">
        <div className="card">
          <h3>🔥 Creator Stores</h3>
          <p>Every creator becomes a full-fledged brand instantly.</p>
        </div>

        <div className="card">
          <h3>🛒 One-Tap Buying</h3>
          <p>Buy directly from content without friction.</p>
        </div>

        <div className="card">
          <h3>💬 Viral Engagement</h3>
          <p>Likes, comments, shares — built for growth loops.</p>
        </div>
      </section>

      {/* FINAL CTA HERO */}
      <section className="hero reveal">
        <h2 className="title">
          Start building the future of commerce
        </h2>

        <button className="btn primary big" onClick={handleComingSoon}>
  Join GloboShop
</button>
      </section>
      {/* FOOTER */}
<footer className="footer">

  <div className="footerBrand">
    <h2>GloboShop</h2>
    <p>Turn every scroll into a storefront.</p>
  </div>

  <div className="footerLinks">

    <a href="/about">About</a>

    <a href="/privacy">Privacy Policy</a>

    <a href="/terms">Terms</a>

    <a href="/contact">Contact</a>

  </div>

  <div className="footerBottom">
    <p>© 2026 GloboShop. All rights reserved.</p>
  </div>

</footer>

    </main>
  );
}