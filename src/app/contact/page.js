export default function Contact() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "80px 20px",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "15px",
        }}
      >
        Contact ZAVELO
      </h1>

      <p
        style={{
          color: "#aaa",
          maxWidth: "650px",
          margin: "0 auto 50px",
          lineHeight: "1.7",
        }}
      >
        We'd love to hear from you. Whether you have questions,
        feedback, partnership opportunities, or creator inquiries,
        the ZAVELO team is here to help.
      </p>

      <div className="trustGrid">

        <div className="trustCard">
          <h3>📧 Email</h3>
         <a href="mailto:zaveloapp@gmail.com">
  zaveloapp@gmail.com
</a>
        </div>

        <div className="trustCard">
  <h3>📸 Instagram</h3>
  <a
    href="https://instagram.com/zaveloapp"
    target="_blank"
    rel="noopener noreferrer"
  >
    @zaveloapp
  </a>
</div>

        <div className="trustCard">
  <h3>𝕏 </h3>
  <a
    href="https://x.com/zaveloapp"
    target="_blank"
    rel="noopener noreferrer"
  >
    @zaveloapp
  </a>
</div>
        <div className="trustCard">
  <h3>▶ YouTube</h3>
  <a
    href="https://www.youtube.com/@zaveloapp"
    target="_blank"
    rel="noopener noreferrer"
  >
    zaveloapp
  </a>
</div>

      </div>

      <div
        style={{
          marginTop: "60px",
          color: "#888",
        }}
      >
        <p>
          Turn every scroll into a storefront.
        </p>
      </div>
    </main>
  );
}