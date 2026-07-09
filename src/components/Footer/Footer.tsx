import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        {/* కేవలం బ్రాండ్ పేరు మాత్రమే */}
        <div className="footer-brand">
          <h2>CocoFresh</h2>
        </div>

        {/* కాపీరైట్ సమాచారం */}
        <div className="footer-bottom">
          <p>© 2026 CocoFresh. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;