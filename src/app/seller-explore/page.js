"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SellerExplorePage() {
  const router = useRouter();

  useEffect(() => {
    const cards = document.querySelectorAll(".premiumCard");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    cards.forEach((card) => observer.observe(card));

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
          <span>Aether Seller Studio</span>
        </div>
      </header>

      {/* HERO TITLE */}
      <section className="exploreHero">
        <h1 className="revealTitle">
          Inside <span>Seller System</span>
        </h1>

        <p className="revealSubtitle">
          Manage your business, track inventory, and launch products with a powerful seller ecosystem.
        </p>
      </section>

      {/* SHOWCASE GRID */}
      <section className="showcaseGrid">

        {/* CARD 1: DASHBOARD */}
        <div className="premiumCard cardFeed">
          <div className="cardGlow"></div>

          <div className="cardHeader">
            <span className="badgeLive">DASHBOARD</span>
            <h3>01 / Seller Overview</h3>
            <p>Track revenue, orders, and performance in real time.</p>
          </div>

          <div className="phoneBezel">
            <div className="phoneScreen">
              <img
                src="/screens/dashboard.jpeg"
                alt="Seller Dashboard"
                className="showcaseImg staticMobileImg"
              />
            </div>
          </div>
        </div>

        {/* CARD 2: INVENTORY */}
        <div className="premiumCard cardProduct">
          <div className="cardGlow"></div>

          <div className="cardHeader">
            <span className="badgeLive">INVENTORY</span>
            <h3>02 / Stock Management</h3>
            <p>Monitor product availability and stock updates instantly.</p>
          </div>

          <div className="phoneBezel">
            <div className="phoneSpeaker"></div>

            <div className="phoneScreen">
              <img
                src="/screens/inventory.jpeg"
                alt="Inventory"
                className="showcaseImg staticMobileImg"
              />
            </div>
          </div>
        </div>

        {/* CARD 3: ADD PRODUCT (HORIZONTAL FEEL IMAGE) */}
        <div className="premiumCard cardStore">
          <div className="cardGlow"></div>

          <div className="cardHeader">
            <span className="badgeLive">ADD PRODUCT</span>
            <h3>03 / Create Listings</h3>
            <p>Upload and launch products with a swipe-style interface.</p>
          </div>

          <div className="phoneBezel">
            <div className="phoneSpeaker"></div>

            <div className="phoneScreen">
   <div className="autoSlider">
  <div className="slide"><img src="/screens/step1.png" /></div>
  <div className="slide"><img src="/screens/step2.png" /></div>
  <div className="slide"><img src="/screens/step3.jpeg" /></div>
  <div className="slide"><img src="/screens/step4.jpeg" /></div>
  <div className="slide"><img src="/screens/step6.png" /></div>
</div>
            </div>
          </div>
        </div>

      </section>

      {/* FOOTER ACTION */}
      <footer className="exploreFooter">
        <h2>Start selling globally today</h2>

        <button
          className="ctaButton"
          onClick={() => router.push("/")}
        >
          Become A Seller
        </button>
      </footer>

    </main>
  );
}