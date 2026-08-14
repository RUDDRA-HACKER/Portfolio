
function SectionLabel({ number, label }) {
  return (
    <div className="section-label">
      <span className="section-number">
        {number}
      </span>

      <span className="section-label-text">
        {label}
      </span>
    </div>
  );
}

export default SectionLabel;

