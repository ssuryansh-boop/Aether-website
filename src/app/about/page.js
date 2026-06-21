export default function About() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "80px 20px",
      }}
    >
      {/* HERO */}
      <section style={{ textAlign: "center", marginBottom: "80px" }}>
        <h1
          style={{
            fontSize: "52px",
            fontWeight: "900",
            marginBottom: "20px",
          }}
        >
          About Aether
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            color: "#aaa",
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          Aether is a social commerce platform where content and commerce
          become one experience.
        </p>
      </section>

      {/* MISSION */}
      <section className="trustSection">
        <div className="trustHeader">
          <h2>Our Mission</h2>
          <p>
            Building the future of online shopping through social experiences.
          </p>
        </div>

        <div className="trustCard">
          <h2
            style={{
              textAlign: "center",
              fontSize: "42px",
              marginBottom: "15px",
            }}
          >
            Turn every scroll into a storefront.
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#aaa",
              lineHeight: "1.8",
            }}
          >
            We believe shopping should feel natural, engaging, and social.
            Instead of searching through endless catalogs, users should discover
            products through creators, communities, videos, and real experiences.
          </p>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="trustSection">
        <div className="trustHeader">
          <h2>Built for Everyone</h2>
          <p>
            Aether creates value for every participant in the ecosystem.
          </p>
        </div>

        <div className="trustGrid">

          <div className="trustCard">
            <h3>🛍️ Shoppers</h3>
            <p>
              Discover products through content, creators, and communities.
            </p>
          </div>

          <div className="trustCard">
            <h3>🎥 Creators</h3>
            <p>
              Build an audience, showcase products, and create your own store.
            </p>
          </div>

          <div className="trustCard">
            <h3>🏪 Sellers</h3>
            <p>
              Reach customers through engaging content instead of traditional
              listings alone.
            </p>
          </div>

        </div>
      </section>

      {/* VISION */}
      <section className="trustSection">
        <div className="trustHeader">
          <h2>Our Vision</h2>
          <p>
            A world where commerce is powered by content and community.
          </p>
        </div>

        <div className="trustCard">
          <p
            style={{
              color: "#aaa",
              lineHeight: "1.9",
              textAlign: "center",
            }}
          >
            We envision a future where every creator can become an entrepreneur,
            every product can tell a story, and every user can discover products
            through meaningful experiences instead of advertisements.
          </p>
        </div>
      </section>

      {/* WHY GLOBOSHOP */}
      <section className="trustSection">
        <div className="trustHeader">
          <h2>Why Aether?</h2>
        </div>

        <div className="trustGrid">

          <div className="trustCard">
            <h3>⚡ Social-First Shopping</h3>
            <p>Content and commerce work together.</p>
          </div>

          <div className="trustCard">
            <h3>🎥 Creator Powered</h3>
            <p>Creators become entrepreneurs.</p>
          </div>

          <div className="trustCard">
            <h3>🔒 Secure Transactions</h3>
            <p>Designed with trust and safety in mind.</p>
          </div>

          <div className="trustCard">
            <h3>🌍 Future Ready</h3>
            <p>Built for growth, scale, and innovation.</p>
          </div>

        </div>
      </section>

      {/* JOURNEY */}
      <section
        style={{
          textAlign: "center",
          marginTop: "80px",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>
          Building the Future
        </h2>

        <p
          style={{
            color: "#aaa",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          Aether is currently under active development. We are continuously
          improving the platform, introducing new features, and building the
          next generation of social commerce.
        </p>

        <p
          style={{
            marginTop: "30px",
            fontSize: "20px",
            fontWeight: "700",
          }}
        >
          Welcome to Aether 🚀
        </p>
      </section>
    </main>
  );
}