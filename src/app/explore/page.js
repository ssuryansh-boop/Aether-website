"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ExplorePage() {
  const router = useRouter();

  useEffect(() => {
    // Select all showcase cards
    const cards = document.querySelectorAll(".premiumCard");

    // Configure the scroll observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Adds the 'visible' class when the card enters the screen
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1, // Triggers as soon as 10% of the card is visible
        rootMargin: "0px 0px -50px 0px" // Triggers slightly before completely entering view
      }
    );

    cards.forEach((card) => observer.observe(card));

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <main className="exploreContainer">
      {/* BACKGROUND GLOW EFFECTS */}
      <div className="ambientGlow glowLeft"></div>
      <div className="ambientGlow glowRight"></div>

      {/* HEADER SECTION */}
      <header className="explorePageHeader">
        <button className="backBtn" onClick={() => router.push("/")}>
          ← Back to Home
        </button>
        <div className="exploreBrand">
          <span className="brandDot"></span>
          <span>Aether Experience</span>
        </div>
      </header>

      {/* HERO TITLE */}
      <section className="exploreHero">
        <h1 className="revealTitle">
          Inside <span>Aether</span>
        </h1>
        <p className="revealSubtitle">
          An immersive look at a living social commerce ecosystem. Scroll, discover, and checkout instantly.
        </p>
      </section>

      {/* THE WOW SHOWCASE GRID */}
      <section className="showcaseGrid">
        {/* CARD 1: HOME FEED (Now inside Phone Frame) */}
        <div className="premiumCard cardFeed">
          <div className="cardGlow"></div>
          <div className="cardHeader">
            <span className="badgeLive">LIVE FEED</span>
            <h3>01 / Home Feed</h3>
            <p>Scroll-based personalized shopping experience.</p>
          </div>
          <div className="phoneBezel">
         
            <div className="phoneScreen">
              <img src="/screens/feed.jpeg" alt="GloboShop Feed" className="showcaseImg staticMobileImg" />
            </div>
          </div>
        </div>

        {/* CARD 2: PRODUCT PAGE (Keeps Long Scrolling Frame) */}
        <div className="premiumCard cardProduct">
          <div className="cardGlow"></div>
          <div className="cardHeader">
            <span className="badgeLive">1-TAP BUY</span>
            <h3>02 / Product Page</h3>
            <p>See rich details, verified creator reviews, and dynamic pricing instantly.</p>
          </div>
          <div className="phoneBezel">
            <div className="phoneSpeaker"></div>
            <div className="phoneScreen">
              <img src="/screens/product.png" alt="GloboShop Product Long View" className="showcaseImg longScrollImg" />
            </div>
          </div>
        </div>

        {/* CARD 3: CREATOR STORE (Now inside Phone Frame) */}
        <div className="premiumCard cardStore">
          <div className="cardGlow"></div>
          <div className="cardHeader">
            <span className="badgeLive">ECOSYSTEM</span>
            <h3>03 / Creator Store</h3>
            <p>Where every creator turns their authentic influence into a global storefront.</p>
          </div>
          <div className="phoneBezel">
            <div className="phoneSpeaker"></div>
            <div className="phoneScreen">
              <img src="/screens/store.jpeg" alt="GloboShop Store" className="showcaseImg staticMobileImg" />
            </div>
          </div>
        </div>

      </section>
      {/* FOOTER ACTION */}
      <footer className="exploreFooter">
        <h2>Ready to change how you shop?</h2>
        <button className="ctaButton" onClick={() => router.push("/")}>
          Download Aether App
        </button>
      </footer>
    </main>
  );
}