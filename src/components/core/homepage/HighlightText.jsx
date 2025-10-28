import './HighlightText.css';

function HighlightText({ text }) {
  return (
    <span className="textBg">
      {text}
    </span>
  );
}

export default HighlightText;
