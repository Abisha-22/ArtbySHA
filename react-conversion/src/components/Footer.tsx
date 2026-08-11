export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <span className="fbrand">Art by SHA</span>
        <span className="fmeta">© {2026} Art by SHA. Made with endeavor & care.</span>
      </div>
    </footer>
  );
}
