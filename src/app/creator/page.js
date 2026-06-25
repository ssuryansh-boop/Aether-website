"use client";

import { useEffect } from "react";

export default function CreatorPage() {

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
    <main className="creatorMain" style={styles.creatorMain}>
      {/* GLOBAL ANIMATION INJECTION */}
      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        .statCard, .stepCard, .trustCard, .dashCard, .diamondHover {
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), 
                      box-shadow 0.4s cubic-bezier(0.25, 1, 0.5, 1), 
                      border-color 0.4s cubic-bezier(0.25, 1, 0.5, 1) !important;
        }

        .statCard:hover, .stepCard:hover, .trustCard:hover, .dashCard:hover, .diamondHover:hover {
          transform: translateY(-10px) !important;
          box-shadow: 0 15px 35px rgba(123, 92, 255, 0.35), 
                      0 0 15px rgba(123, 92, 255, 0.15) !important;
          border-color: rgba(123, 92, 255, 0.5) !important;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="creatorHero reveal" style={styles.heroSection}>
        <div style={styles.badge}>THE CREATOR ENGINE</div>
        <h1 style={styles.heroTitle}>
          Monetize Your Influence. <br />
          <span style={styles.gradientText}>Turn Content Into Commerce</span> with ZAVELO.
        </h1>
        <div style={styles.problemBox}>
          <p style={styles.problemText}>
            <strong style={{ color: "#ef4444" }}>The Shift:</strong> Traditional affiliate channels limit payouts. With ZAVELO, your total balance compounds securely right inside your dashboard from day one.
          </p>
        </div>
        <p style={styles.heroSubtitle}>
          <strong>Our Mission:</strong> We reward authentic scaling. Accumulate your baseline flat 5% commissions throughout Bronze, and completely unlock full balance withdrawal access the exact second you hit Silver!
        </p>

        <div className="creatorButtons" style={styles.heroButtons}>
          <button className="btn primary big" style={styles.primaryBtn} onClick={() => alert('Coming Soon!')}>
            Join as Creator
          </button>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="creatorStats reveal" style={styles.statsSection}>
        <div className="statCard" style={styles.statCard}>
          <h2 style={styles.statNumber}>5% Flat</h2>
          <p style={styles.statLabel}>Guaranteed baseline network commission</p>
        </div>
        <div className="statCard" style={styles.statCard}>
          <h2 style={styles.statNumber}>Silver Tier</h2>
          <p style={styles.statLabel}>Unlock point for 100% full accumulated earnings withdrawal</p>
        </div>
        <div className="statCard" style={styles.statCard}>
          <h2 style={styles.statNumber}>1 Tap</h2>
          <p style={styles.statLabel}>From content embedding → automated payout tracking</p>
        </div>
      </section>

      {/* THE CREATOR FRAMEWORK */}
      <section className="creatorFramework reveal" style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle}>Why We Lead for Creators</h2>
        <div className="steps" style={styles.gridThreeColumn}>
          <div className="stepCard" style={styles.interactiveCard}>
            <div style={styles.cardIcon}>🌐</div>
            <h3 style={styles.cardHeader}>Own Your Engine</h3>
            <p style={styles.cardBody}>Easily assemble high-converting personal profiles containing product tags directly within your stream pages.</p>
          </div>
          <div className="stepCard" style={styles.interactiveCard}>
            <div style={styles.cardIcon}>🔓</div>
            <h3 style={styles.cardHeader}>Progressive Unlocks</h3>
            <p style={styles.cardBody}>Your Bronze earnings build up entirely securely. Tap into your full account balance once you step up to Silver.</p>
          </div>
          <div className="stepCard" style={styles.interactiveCard}>
            <div style={styles.cardIcon}>🏆</div>
            <h3 style={styles.cardHeader}>Milestones Unlocked</h3>
            <p style={styles.cardBody}>Your total sales history builds compounding payouts, high-status badges, and custom vendor capabilities directly.</p>
          </div>
        </div>
      </section>

      {/* HOW THE SYSTEM WORKS */}
      <section className="commissionStructure reveal" style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle}>How the Creator Milestone Scale Works</h2>
        <p style={styles.sectionSubText}>A rolling volume tracker designed to maximize your payouts as your community scales.</p>
        
        <div className="trustGrid" style={styles.gridThreeColumn}>
          <div className="trustCard" style={styles.infoCard}>
            <h3 style={styles.infoCardHeader}>🔄 Lifetime Aggregation</h3>
            <p style={styles.cardBody}>Your progress path computes continuously across your overall sales volume to avoid monthly resets.</p>
          </div>
          <div className="trustCard" style={styles.infoCard}>
            <h3 style={styles.infoCardHeader}>🛑 Bronze Reserve Phase</h3>
            <p style={styles.cardBody}>During the initial Bronze path, your earnings stack safely inside your wallet balance while you establish tracking authority.</p>
          </div>
          <div className="trustCard" style={styles.infoCard}>
            <h3 style={styles.infoCardHeader}>💰 Full Silver Cashout</h3>
            <p style={styles.cardBody}>Reaching Silver turns on your checkout wallet completely, enabling you to immediately withdraw your whole Bronze reserve pool.</p>
          </div>
        </div>
      </section>

      {/* THE TIER BREAKDOWN */}
      <section className="tierBreakdown reveal" style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle}>The Creator Tier System</h2>
        <div className="dashboardGrid" style={styles.tierGrid}>
          
          {/* BRONZE */}
          <div className="dashCard" style={{ ...styles.tierCard, border: "1px solid rgba(239, 68, 68, 0.2)" }}>
            <div style={styles.tierHeaderRow}>
              <span style={styles.tierEmoji}>🛡️</span>
              <div>
                <h3 style={styles.tierName}>Bronze Creator</h3>
                <span style={styles.tierIdentity}>Level 1 (Seeding)</span>
              </div>
            </div>
            <div style={styles.metricsBox}>
              <div style={styles.metricRow}><span>Commission:</span> <span style={styles.effectiveRate}>5.0%</span></div>
              <div style={styles.metricRow}><span>Withdrawal Status:</span> <span style={{ color: "#ef4444", fontWeight: "600" }}>Locked (Accumulating)</span></div>
            </div>
            <div style={styles.milestoneBox}>
              <h4 style={styles.milestoneTitle}>Target & Perks:</h4>
              <p style={styles.milestoneText}>• 15 successful orders.</p>
              <p style={styles.milestoneText}>• Grants Creator Profile & native product tagging tool access.</p>
              <p style={{ ...styles.milestoneText, color: "#94a3b8", fontSize: "0.8rem", marginTop: "8px" }}>*All commission cash generated in Bronze accumulates cleanly in your pending wallet until Silver level is crossed.</p>
            </div>
          </div>

          {/* SILVER */}
          <div className="dashCard" style={{ ...styles.tierCard, border: "1px solid rgba(16, 185, 129, 0.3)" }}>
            <div style={styles.tierHeaderRow}>
              <span style={styles.tierEmoji}>🥈</span>
              <div>
                <h3 style={styles.tierName}>Silver Creator</h3>
                <span style={styles.tierIdentity}>Level 2 (Active Gateway)</span>
              </div>
            </div>
            <div style={styles.metricsBox}>
              <div style={styles.metricRow}><span>Commission:</span> <span style={styles.effectiveRate}>5.0%</span></div>
              <div style={styles.metricRow}><span>Tier Reward:</span> <span style={{color:'#10b981'}}>₹500 Cash</span></div>
              <div style={styles.metricRow}><span>Withdrawal Status:</span> <span style={{ color: "#10b981", fontWeight: "700" }}>Unlocked (Full Payouts)</span></div>
            </div>
            <div style={styles.milestoneBox}>
              <h4 style={styles.milestoneTitle}>Target & Perks:</h4>
              <p style={styles.milestoneText}>• 75 successful orders.</p>
              <p style={styles.milestoneText}>• <strong>Withdraw 100%</strong> of accumulated Bronze reserve cash seamlessly.</p>
              <p style={styles.milestoneText}>• Unlocks official Silver Badge platform profile display.</p>
            </div>
          </div>

          {/* GOLD */}
          <div className="dashCard" style={styles.tierCard}>
            <div style={styles.tierHeaderRow}>
              <span style={styles.tierEmoji}>🥇</span>
              <div>
                <h3 style={styles.tierName}>Gold Creator</h3>
                <span style={styles.tierIdentity}>Level 3</span>
              </div>
            </div>
            <div style={styles.metricsBox}>
              <div style={styles.metricRow}><span>Commission:</span> <span style={styles.effectiveRate}>5.0%</span></div>
              <div style={styles.metricRow}><span>Tier Reward:</span> <span style={{color:'#10b981'}}>₹2,500 Cash</span></div>
              <div style={styles.metricRow}><span>Withdrawals:</span> <span style={{color:'#10b981'}}>Active</span></div>
            </div>
            <div style={styles.milestoneBox}>
              <h4 style={styles.milestoneTitle}>Target & Perks:</h4>
              <p style={styles.milestoneText}>• 300 successful orders.</p>
              <p style={styles.milestoneText}>• Unlocks premium Gold Badge profile system visibility.</p>
            </div>
          </div>

          {/* PLATINUM */}
          <div className="dashCard" style={styles.tierCard}>
            <div style={styles.tierHeaderRow}>
              <span style={styles.tierEmoji}>💎</span>
              <div>
                <h3 style={styles.tierName}>Platinum Creator</h3>
                <span style={styles.tierIdentity}>Level 4</span>
              </div>
            </div>
            <div style={styles.metricsBox}>
              <div style={styles.metricRow}><span>Commission:</span> <span style={styles.effectiveRate}>5.0%</span></div>
              <div style={styles.metricRow}><span>Tier Reward:</span> <span style={{color:'#10b981'}}>₹10,000 Cash</span></div>
              <div style={styles.metricRow}><span>Withdrawals:</span> <span style={{color:'#10b981'}}>Active</span></div>
            </div>
            <div style={styles.milestoneBox}>
              <h4 style={styles.milestoneTitle}>Target & Perks:</h4>
              <p style={styles.milestoneText}>• 1,200 successful orders.</p>
              <p style={styles.milestoneText}>• Unlocks prestigious Verified Creator Badge indicator.</p>
            </div>
          </div>

          {/* DIAMOND */}
          <div className="dashCard" style={styles.tierCard}>
            <div style={styles.tierHeaderRow}>
              <span style={styles.tierEmoji}>👑</span>
              <div>
                <h3 style={styles.tierName}>Diamond Creator</h3>
                <span style={styles.tierIdentity}>Level 5</span>
              </div>
            </div>
            <div style={styles.metricsBox}>
              <div style={styles.metricRow}><span>Commission:</span> <span style={styles.effectiveRate}>5.0%</span></div>
              <div style={styles.metricRow}><span>Tier Reward:</span> <span style={{color:'#10b981'}}>₹25,000 Cash</span></div>
              <div style={styles.metricRow}><span>Withdrawals:</span> <span style={{color:'#10b981'}}>Active</span></div>
            </div>
            <div style={styles.milestoneBox}>
              <h4 style={styles.milestoneTitle}>Target & Perks:</h4>
              <p style={styles.milestoneText}>• 1,200 successful orders.</p>
              <p style={styles.milestoneText}>• Unlocks combined Diamond + Verified high-status badge profile styling.</p>
            </div>
          </div>

          {/* LEGEND CREATOR (THE HERO CARD) */}
          <div className="dashCard diamondHover" style={{ ...styles.diamondCard, transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease" }}>
            <div style={styles.diamondBackgroundEffect}></div>
            <div style={{ position: "relative", zIndex: 2 }}>
              <div style={styles.tierHeaderRow}>
                <span style={styles.tierEmoji}>🚀</span>
                <div>
                  <h3 style={{ ...styles.tierName, color: "#f59e0b" }}>Legend Creator (Ultimate Peak)</h3>
                  <span style={styles.tierIdentity}>Identity: Infinite Limit</span>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px", marginTop: "20px" }}>
                <div style={styles.metricsBox}>
                  <div style={styles.metricRow}><span>Affiliate Commission Split:</span> <span style={{ fontWeight: "700", color: "#10b981" }}>5.0%</span></div>
                  <div style={styles.metricRow}><span>Custom Target Multipliers:</span> <span style={{ color: "#f59e0b", fontWeight: "600" }}>Tailored Rewards</span></div>
                  <div style={styles.metricRow}><span style={{ fontWeight: "700" }}>Milestone Path:</span> <span style={{ ...styles.effectiveRate, color: "#f59e0b", fontSize: "1.2rem" }}>5000+ Orders</span></div>
                </div>
                <div style={styles.retentionBox}>
                  <h4 style={{ ...styles.milestoneTitle, color: "#f59e0b" }}>Legend Status Benefits:</h4>
                  <p style={{ ...styles.milestoneText, color: "#e2e8f0" }}>Unlocks full creative control. Choose and establish a completely custom profile badge design of your own selection, alongside high-tier corporate cash pools assigned as you crush tailored platform velocity goals.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="howItWorks reveal" style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle}>How Influence Sharing Works</h2>
        <div className="steps" style={styles.gridFourColumn}>
          <div className="stepCard" style={styles.interactiveCard}>
            <h3 style={{...styles.cardHeader, color:"#a855f7"}}>1. Claim Links</h3>
            <p style={styles.cardBody}>Choose any product from the marketplace catalog instantly.</p>
          </div>
          <div className="stepCard" style={styles.interactiveCard}>
            <h3 style={{...styles.cardHeader, color:"#a855f7"}}>2. Post Media</h3>
            <p style={styles.cardBody}>Embed items straight inside your stories, bio links, or feeds.</p>
          </div>
          <div className="stepCard" style={styles.interactiveCard}>
            <h3 style={{...styles.cardHeader, color:"#a855f7"}}>3. Build Volumes</h3>
            <p style={styles.cardBody}>Followers purchase directly while your Bronze earnings stack securely.</p>
          </div>
          <div className="stepCard" style={styles.interactiveCard}>
            <h3 style={{...styles.cardHeader, color:"#a855f7"}}>4. Silver Payout</h3>
            <p style={styles.cardBody}>Hit 75 orders to open withdrawals and pull your full balance out.</p>
          </div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="dashboardPreview reveal" style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle}>Your Creator Dashboard Features</h2>
        <p style={styles.sectionSubText}>Everything you need to analyze tracking and conversions</p>
        <div style={styles.dashboardGrid}>
          <div className="dashCard" style={styles.dashPill}>📈 Click-Through Tracking</div>
          <div className="dashCard" style={styles.dashPill}>🔒 Vault Balance Lock Ledger</div>
          <div className="dashCard" style={styles.dashPill}>🔗 Smart Link Generators</div>
          <div className="dashCard" style={styles.dashPill}>📊 Community Demographics</div>
          <div className="dashCard" style={styles.dashPill}>🎨 Storefront Personalization</div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="trust reveal" style={styles.sectionContainer}>
        <h2 style={styles.sectionTitle}>Why Creators Partner with ZAVELO</h2>
        <div className="trustGrid" style={styles.gridThreeColumn}>
          <div className="trustCard" style={styles.infoCard}>
            <h3 style={styles.infoCardHeader}>⚡ Guaranteed Attribution</h3>
            <p style={styles.cardBody}>Engineered link architectures guarantee conversion points stay attached to you.</p>
          </div>
          <div className="trustCard" style={styles.infoCard}>
            <h3 style={styles.infoCardHeader}>🔒 Zero Entry Overheads</h3>
            <p style={styles.cardBody}>Access entire sets of promotional tracking tools absolutely free forever.</p>
          </div>
          <div className="trustCard" style={styles.infoCard}>
            <h3 style={styles.infoCardHeader}>📱 Social-First Design</h3>
            <p style={styles.cardBody}>Built native-ready for ultra-fast performance across mobile displays and application browsers.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="finalCTA reveal" style={styles.ctaSection}>
        <h1 style={styles.ctaTitle}>Start Your Creator Journey Today</h1>
        <button className="btn primary big" style={styles.ctaBtn} onClick={() => alert('Coming Soon!')}>
          Become a Creator
        </button>
      </section> 
    </main>
  );
}

/* PREMIUM INLINE EXPERT DESIGN SYSTEM STYLES */
const styles = {
  creatorMain: {
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
    backgroundColor: "rgba(168, 85, 247, 0.04)",
    borderLeft: "4px solid #a855f7",
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