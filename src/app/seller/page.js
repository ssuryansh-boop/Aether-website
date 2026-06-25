"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SellerPage() {
  const router = useRouter();
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="sellerMain" style={styles.sellerMain}>
    {/* GLOBAL ANIMATION INJECTION */}
      <style jsx global>{`
        /* Existing reveal animations */
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        /* Universal Card Base Transition Styles */
        .statCard, .stepCard, .trustCard, .dashCard, .diamondHover {
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), 
                      box-shadow 0.4s cubic-bezier(0.25, 1, 0.5, 1), 
                      border-color 0.4s cubic-bezier(0.25, 1, 0.5, 1) !important;
        }

        /* Custom Violet Glow and Lift Hover Effect */
        .statCard:hover, .stepCard:hover, .trustCard:hover, .dashCard:hover, .diamondHover:hover {
          transform: translateY(-10px) !important;
          box-shadow: 0 15px 35px rgba(123, 92, 255, 0.35), 
                      0 0 15px rgba(123, 92, 255, 0.15) !important;
          border-color: rgba(123, 92, 255, 0.5) !important;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="sellerHero reveal" style={styles.heroSection}>
        <div style={styles.badge}>THE SELLER-FIRST FUTURE</div>
        <h1 style={styles.heroTitle}>
          The Seller-First, <br />
          <span style={styles.gradientText}>Community-Driven</span> E-Commerce Ecosystem.
        </h1>
        <div style={styles.problemBox}>
          <p style={styles.problemText}>
            <strong style={{ color: "#ef4444" }}>The Problem:</strong> Traditional marketplaces treat sellers like replaceable inventory. They control your data, block your communication, and squeeze your margins.
          </p>
        </div>
        <p style={styles.heroSubtitle}>
          <strong>Our Mission:</strong> We turn sellers into partners and creators. We don't just host your products; we help you build your empire.
        </p>

        <div className="sellerButtons" style={styles.heroButtons}>
          <button className="btn primary big" style={styles.primaryBtn} onClick={() => alert('Coming Soon!')}>
  Start Selling
</button>
          <button
  className="btn ghost big"
  style={styles.ghostBtn}
  onClick={() => router.push("/seller-explore")}
>
  View Dashboard Demo
</button>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="sellerStats reveal" style={styles.statsSection}>
        <div className="statCard" style={styles.statCard}>
          <h2 style={styles.statNumber}>₹0 → ₹1,00,000+</h2>
          <p style={styles.statLabel}>Average creator growth potential</p>
        </div>
        <div className="statCard" style={styles.statCard}>
          <h2 style={styles.statNumber}>10x</h2>
          <p style={styles.statLabel}>Higher engagement vs traditional e-commerce</p>
        </div>
        <div className="statCard" style={styles.statCard}>
          <h2 style={styles.statNumber}>1 Tap</h2>
          <p style={styles.statLabel}>From content → checkout system</p>
        </div>
      </section>

      {/* THE ANTI-AMAZON FRAMEWORK */}
      <section className="antiAmazon reveal" style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle}>
          Why We Are Different 
        </h2>
        <div className="steps" style={styles.gridThreeColumn}>
          <div className="stepCard" style={styles.interactiveCard}>
            <div style={styles.cardIcon}>🌐</div>
            <h3 style={styles.cardHeader}>Own Your Audience</h3>
            <p style={styles.cardBody}>Build fully customizable mini-websites and brand pages directly inside our platform.</p>
          </div>
          <div className="stepCard" style={styles.interactiveCard}>
            <div style={styles.cardIcon}>💬</div>
            <h3 style={styles.cardHeader}>Direct-to-Consumer</h3>
            <p style={styles.cardBody}>Break the silence. Message your buyers directly (within fair limits) to build real, lasting customer relationships.</p>
          </div>
          <div className="stepCard" style={styles.interactiveCard}>
            <div style={styles.cardIcon}>🏆</div>
            <h3 style={styles.cardHeader}>Loyalty Rewarded</h3>
            <p style={styles.cardBody}>The more you sell and the better you treat your customers, the less platform commission you pay.</p>
          </div>
        </div>
      </section>

      {/* HOW THE COMMISSION STRUCTURE WORKS */}
      <section className="commissionStructure reveal" style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle}>How the Gamified Commission Structure Works</h2>
        <p style={styles.sectionSubText}>A dynamic milestone system designed to fuel your profitability as your business scales.</p>
        
        <div className="trustGrid" style={styles.gridThreeColumn}>
          <div className="trustCard" style={styles.infoCard}>
            <h3 style={styles.infoCardHeader}>🔄 Rolling 30-Day Window</h3>
            <p style={styles.cardBody}>Your milestone metrics are evaluated continuously over a rolling 30-day window.</p>
          </div>
          <div className="trustCard" style={styles.infoCard}>
            <h3 style={styles.infoCardHeader}>⚡ Instant Upgrades</h3>
            <p style={styles.cardBody}>The exact second you cross a performance threshold, your tier upgrades automatically.</p>
          </div>
          <div className="trustCard" style={styles.infoCard}>
            <h3 style={styles.infoCardHeader}>💰 Cashback Mechanism</h3>
            <p style={styles.cardBody}>All sellers start at 15% commission. As you climb, cash back is credited to your platform wallet immediately post-return window.</p>
          </div>
        </div>
      </section>

      {/* THE TIER BREAKDOWN */}
      <section className="tierBreakdown reveal" style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle}>The Tier Breakdown</h2>
        <div className="dashboardGrid" style={styles.tierGrid}>
          
          {/* BRONZE */}
          <div className="dashCard" style={styles.tierCard}>
            <div style={styles.tierHeaderRow}>
              <span style={styles.tierEmoji}>🛡️</span>
              <div>
                <h3 style={styles.tierName}>Bronze Tier</h3>
                <span style={styles.tierIdentity}>The Boutique</span>
              </div>
            </div>
            <div style={styles.metricsBox}>
              <div style={styles.metricRow}><span>Upfront:</span> <span>15.0%</span></div>
              <div style={styles.metricRow}><span>Cashback:</span> <span>0%</span></div>
              <div style={styles.metricRow}><span style={{fontWeight:'600'}}>Effective Cost:</span> <span style={styles.effectiveRate}>15.0%</span></div>
            </div>
            <div style={styles.milestoneBox}>
              <h4 style={styles.milestoneTitle}>Next Tier Milestones:</h4>
              <p style={styles.milestoneText}>• 15 successfully delivered orders OR ₹10,000 gross revenue.</p>
              <p style={styles.milestoneText}>• Min 4.0★ rating & RTO under 25%.</p>
            </div>
          </div>

          {/* SILVER */}
          <div className="dashCard" style={styles.tierCard}>
            <div style={styles.tierHeaderRow}>
              <span style={styles.tierEmoji}>🥈</span>
              <div>
                <h3 style={styles.tierName}>Silver Tier</h3>
                <span style={styles.tierIdentity}>The Trend</span>
              </div>
            </div>
            <div style={styles.metricsBox}>
              <div style={styles.metricRow}><span>Upfront:</span> <span>15.0%</span></div>
              <div style={styles.metricRow}><span>Cashback:</span> <span style={{color:'#10b981'}}>3.0%</span></div>
              <div style={styles.metricRow}><span style={{fontWeight:'600'}}>Effective Cost:</span> <span style={styles.effectiveRate}>12.0%</span></div>
            </div>
            <div style={styles.milestoneBox}>
              <h4 style={styles.milestoneTitle}>Next Tier Milestones:</h4>
              <p style={styles.milestoneText}>• 75 successfully delivered orders OR ₹50,000 gross revenue.</p>
              <p style={styles.milestoneText}>• Min 4.2★ rating & RTO under 20%.</p>
            </div>
          </div>

          {/* GOLD */}
          <div className="dashCard" style={styles.tierCard}>
            <div style={styles.tierHeaderRow}>
              <span style={styles.tierEmoji}>🥇</span>
              <div>
                <h3 style={styles.tierName}>Gold Tier</h3>
                <span style={styles.tierIdentity}>The Vogue</span>
              </div>
            </div>
            <div style={styles.metricsBox}>
              <div style={styles.metricRow}><span>Upfront:</span> <span>15.0%</span></div>
              <div style={styles.metricRow}><span>Cashback:</span> <span style={{color:'#10b981'}}>5.5%</span></div>
              <div style={styles.metricRow}><span style={{fontWeight:'600'}}>Effective Cost:</span> <span style={styles.effectiveRate}>9.5%</span></div>
            </div>
            <div style={styles.milestoneBox}>
              <h4 style={styles.milestoneTitle}>Next Tier Milestones:</h4>
              <p style={styles.milestoneText}>• 300 successfully delivered orders OR ₹2,00,000 gross revenue.</p>
              <p style={styles.milestoneText}>• Min 4.4★ rating & RTO under 15%.</p>
            </div>
          </div>

          {/* PLATINUM */}
          <div className="dashCard" style={styles.tierCard}>
            <div style={styles.tierHeaderRow}>
              <span style={styles.tierEmoji}>💎</span>
              <div>
                <h3 style={styles.tierName}>Platinum Tier</h3>
                <span style={styles.tierIdentity}>The Fashion House</span>
              </div>
            </div>
            <div style={styles.metricsBox}>
              <div style={styles.metricRow}><span>Upfront:</span> <span>15.0%</span></div>
              <div style={styles.metricRow}><span>Cashback:</span> <span style={{color:'#10b981'}}>7.5%</span></div>
              <div style={styles.metricRow}><span style={{fontWeight:'600'}}>Effective Cost:</span> <span style={styles.effectiveRate}>7.5%</span></div>
            </div>
            <div style={styles.milestoneBox}>
              <h4 style={styles.milestoneTitle}>Next Tier Milestones:</h4>
              <p style={styles.milestoneText}>• 1,200 successfully delivered orders OR ₹8,00,000 gross revenue.</p>
              <p style={styles.milestoneText}>• Min 4.6★ rating & RTO under 12%.</p>
            </div>
          </div>

          {/* DIAMOND (THE ULTRA PREMIUM TIER) */}
          <div className="dashCard diamondHover" style={{ ...styles.diamondCard, transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease" }}>
            <div style={styles.diamondBackgroundEffect}></div>
            <div style={{ position: "relative", zIndex: 2 }}>
              <div style={styles.tierHeaderRow}>
                <span style={styles.tierEmoji}>👑</span>
                <div>
                  <h3 style={{ ...styles.tierName, color: "#f59e0b" }}>Diamond Tier (The Hyper-Brand)</h3>
                  <span style={styles.tierIdentity}>Identity: The Drop</span>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px", marginTop: "20px" }}>
                <div style={styles.metricsBox}>
                  <div style={styles.metricRow}><span>Upfront Platform Commission:</span> <span>15.0%</span></div>
                  <div style={styles.metricRow}><span>Wallet Cashback Bonus:</span> <span style={{ color: "#f59e0b", fontWeight: "600" }}>10.0%</span></div>
                  <div style={styles.metricRow}><span style={{ fontWeight: "700" }}>Effective Platform Cost:</span> <span style={{ ...styles.effectiveRate, color: "#f59e0b", fontSize: "1.4rem" }}>5.0%</span></div>
                </div>
                <div style={styles.retentionBox}>
                  <h4 style={{ ...styles.milestoneTitle, color: "#f59e0b" }}>Retention Criteria:</h4>
                  <p style={{ ...styles.milestoneText, color: "#e2e8f0" }}>Must maintain a minimum of 1,200 delivered orders or ₹8,00,000 in monthly sales volume to preserve Diamond benefits for the next calendar month.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="howItWorks reveal" style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle}>How Selling Works</h2>
        <div className="steps" style={styles.gridFourColumn}>
          <div className="stepCard" style={styles.interactiveCard}>
            <h3 style={{...styles.cardHeader, color:"#3b82f6"}}>1. Create Store</h3>
            <p style={styles.cardBody}>Set up your ZAVELO seller profile in minutes.</p>
          </div>
          <div className="stepCard" style={styles.interactiveCard}>
            <h3 style={{...styles.cardHeader, color:"#3b82f6"}}>2. Add Products</h3>
            <p style={styles.cardBody}>Upload products and link them to posts or videos.</p>
          </div>
          <div className="stepCard" style={styles.interactiveCard}>
            <h3 style={{...styles.cardHeader, color:"#3b82f6"}}>3. Go Viral</h3>
            <p style={styles.cardBody}>Products get discovered through social feed system.</p>
          </div>
          <div className="stepCard" style={styles.interactiveCard}>
            <h3 style={{...styles.cardHeader, color:"#3b82f6"}}>4. Earn Money</h3>
            <p style={styles.cardBody}>Get paid instantly on every successful order.</p>
          </div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="dashboardPreview reveal" style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle}>Your Seller Dashboard</h2>
        <p style={styles.sectionSubText}>Everything you need to grow your business</p>
        <div style={styles.dashboardGrid}>
          <div className="dashCard" style={styles.dashPill}>📊 Earnings Analytics</div>
          <div className="dashCard" style={styles.dashPill}>📦 Order Management</div>
          <div className="dashCard" style={styles.dashPill}>🚚 Delivery Tracking</div>
          <div className="dashCard" style={styles.dashPill}>📈 Growth Insights</div>
          <div className="dashCard" style={styles.dashPill}>🏪 Store Customization</div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="trust reveal" style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle}>Why Sellers Trust ZAVELO</h2>
        <div className="trustGrid" style={styles.gridThreeColumn}>
          <div className="trustCard" style={styles.infoCard}>
            <h3 style={styles.infoCardHeader}>⚡ Fast Payouts</h3>
            <p style={styles.cardBody}>Get paid quickly after order completion.</p>
          </div>
          <div className="trustCard" style={styles.infoCard}>
            <h3 style={styles.infoCardHeader}>🔒 Secure System</h3>
            <p style={styles.cardBody}>Verified sellers and safe transactions.</p>
          </div>
          <div className="trustCard" style={styles.infoCard}>
            <h3 style={styles.infoCardHeader}>📱 Mobile First</h3>
            <p style={styles.cardBody}>Manage everything directly from your phone.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="finalCTA reveal" style={styles.ctaSection}>
        <h1 style={styles.ctaTitle}>Start Your Seller Journey Today</h1>
        <button className="btn primary big" style={styles.ctaBtn} onClick={() => alert('Coming Soon!')}>
  Become a Seller
</button>
      </section> 
    </main>
  );
}

/* PREMIUM INLINE EXPERT DESIGN SYSTEM STYLES */
const styles = {
  sellerMain: {
    backgroundColor: "#0b0f19",
    color: "#f8fafc",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    padding: "0 20px",
    overflowX: "hidden",
  },
  heroSection: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "100px 0 60px 0",
    textAlign: "center",
  },
  badge: {
    background: "linear-gradient(90deg, rgba(59,130,246,0.1) 0%, rgba(147,51,234,0.1) 100%)",
    border: "1px solid rgba(59, 130, 246, 0.3)",
    color: "#60a5fa",
    padding: "6px 16px",
    borderRadius: "100px",
    fontSize: "0.85rem",
    fontWeight: "600",
    letterSpacing: "0.05em",
    display: "inline-block",
    marginBottom: "24px",
  },
  heroTitle: {
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    fontWeight: "800",
    lineHeight: "1.15",
    letterSpacing: "-0.02em",
    margin: "0 0 24px 0",
  },
  gradientText: {
    background: "linear-gradient(90deg, #3b82f6 0%, #a855f7 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  problemBox: {
    backgroundColor: "rgba(239, 68, 68, 0.04)",
    borderLeft: "4px solid #ef4444",
    padding: "18px 24px",
    borderRadius: "0 12px 12px 0",
    maxWidth: "750px",
    margin: "30px auto",
    textAlign: "left",
  },
  problemText: {
    margin: 0,
    fontSize: "1.05rem",
    lineHeight: "1.6",
    color: "#cbd5e1",
  },
  heroSubtitle: {
    fontSize: "1.2rem",
    color: "#94a3b8",
    maxWidth: "700px",
    margin: "0 auto 40px auto",
    lineHeight: "1.5",
  },
  heroButtons: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  primaryBtn: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    padding: "14px 32px",
    fontSize: "1rem",
    fontWeight: "600",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 10px 15px -3px rgba(37, 99, 235, 0.3)",
  },
  ghostBtn: {
    backgroundColor: "transparent",
    color: "#ffffff",
    border: "1px solid rgba(255,255,255,0.2)",
    padding: "14px 32px",
    fontSize: "1rem",
    fontWeight: "600",
    borderRadius: "8px",
    cursor: "pointer",
  },
  statsSection: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
    maxWidth: "1100px",
    margin: "40px auto 100px auto",
  },
  statCard: {
    background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
    border: "1px solid rgba(255,255,255,0.05)",
    borderRadius: "16px",
    padding: "30px 20px",
    textAlign: "center",
  },
  statNumber: {
    fontSize: "2rem",
    fontWeight: "700",
    margin: "0 0 8px 0",
    background: "linear-gradient(90deg, #ffffff, #94a3b8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  statLabel: {
    margin: 0,
    color: "#64748b",
    fontSize: "0.95rem",
  },
  sectionContainer: {
    maxWidth: "1200px",
    margin: "0 auto 120px auto",
  },
  sectionTitle: {
    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "40px",
    letterSpacing: "-0.01em",
  },
  sectionSubText: {
    textAlign: "center",
    color: "#94a3b8",
    fontSize: "1.1rem",
    marginTop: "-30px",
    marginBottom: "50px",
  },
  gridThreeColumn: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
  },
  gridFourColumn: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
  },
  interactiveCard: {
    backgroundColor: "rgba(255, 255, 255, 0.02)",
    border: "1px solid rgba(255, 255, 255, 0.06)",
    borderRadius: "12px",
    padding: "32px 24px",
  },
  cardIcon: {
    fontSize: "2rem",
    marginBottom: "16px",
  },
  cardHeader: {
    fontSize: "1.25rem",
    fontWeight: "600",
    margin: "0 0 12px 0",
    color: "#ffffff",
  },
  cardBody: {
    margin: 0,
    color: "#94a3b8",
    fontSize: "0.95rem",
    lineHeight: "1.6",
  },
  infoCard: {
    backgroundColor: "rgba(30, 41, 59, 0.3)",
    border: "1px solid rgba(255,255,255,0.05)",
    padding: "28px",
    borderRadius: "12px",
  },
  infoCardHeader: {
    fontSize: "1.15rem",
    margin: "0 0 12px 0",
    color: "#f1f5f9",
  },
  tierGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
    gap: "24px",
  },
  tierCard: {
    backgroundColor: "rgba(15, 23, 42, 0.6)",
    border: "1px solid rgba(255, 255, 255, 0.06)",
    borderRadius: "16px",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  tierHeaderRow: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    marginBottom: "20px",
  },
  tierEmoji: {
    fontSize: "2.2rem",
  },
  tierName: {
    fontSize: "1.2rem",
    fontWeight: "700",
    margin: 0,
  },
  tierIdentity: {
    fontSize: "0.85rem",
    color: "#64748b",
  },
  metricsBox: {
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  metricRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "0.9rem",
    color: "#94a3b8",
  },
  effectiveRate: {
    color: "#10b981",
    fontWeight: "700",
  },
  milestoneBox: {
    borderTop: "1px solid rgba(255,255,255,0.06)",
    paddingTop: "16px",
  },
  milestoneTitle: {
    fontSize: "0.85rem",
    textTransform: "uppercase",
    color: "#64748b",
    letterSpacing: "0.05em",
    margin: "0 0 8px 0",
  },
  milestoneText: {
    margin: "0 0 6px 0",
    fontSize: "0.85rem",
    color: "#cbd5e1",
    lineHeight: "1.4",
  },
  diamondCard: {
    gridColumn: "1 / -1",
    backgroundColor: "#161b26",
    border: "2px solid rgba(245, 158, 11, 0.3)",
    borderRadius: "20px",
    padding: "32px",
    position: "relative",
    overflow: "hidden",
  },
  diamondBackgroundEffect: {
    position: "absolute",
    top: "-50%",
    right: "-20%",
    width: "300px",
    height: "300px",
    background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
    zIndex: 1,
  },
  retentionBox: {
    borderLeft: "2px solid rgba(245, 158, 11, 0.3)",
    paddingLeft: "20px",
  },
  dashboardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
    width: "100%",
    justifyContent: "center",
  },
  dashPill: {
    backgroundColor: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: "12px 24px",
    borderRadius: "100px",
    fontSize: "0.95rem",
    fontWeight: "500",
  },
  ctaSection: {
    maxWidth: "800px",
    margin: "80px auto 140px auto",
    textAlign: "center",
    padding: "60px 20px",
    background: "radial-gradient(circle at center, rgba(37,99,235,0.1) 0%, transparent 70%)",
    borderRadius: "24px",
  },
  ctaTitle: {
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: "800",
    marginBottom: "30px",
  },
  ctaBtn: {
    backgroundColor: "#ffffff",
    color: "#0b0f19",
    border: "none",
    padding: "16px 40px",
    fontSize: "1.1rem",
    fontWeight: "700",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 20px 30px -10px rgba(255,255,255,0.15)",
  },
};