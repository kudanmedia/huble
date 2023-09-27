
function AccordionItem({ title, text, imageUrl, isOpen, onClick, learnMoreLink }) {
  return (
    <div className={`accordion-group ${isOpen ? 'accordion-opened' : ''}`}>
      <div className="gap-8 columns-2">
        <div className="LeftSide">
        <div className="accordion-header" onClick={onClick}>
        <span className="accordion-toggle" aria-expanded={isOpen ? 'true' : 'false'}>
          <h3 className="font-bold text-lg">{title}</h3>
          <span className="drop-icon">
            <i className={`fas ${isOpen ? 'fa-angle-up' : 'fa-angle-down'}`} aria-hidden="true"></i>
          </span>
        </span>
      </div>

      <div className={`accordion-content ${isOpen ? 'show' : ''}`}>
      {isOpen && (
        <div className="accordion-body">
          <div className="accordion-inner">
            <p>{text}</p>
            <a rel="nofollow" className="btn quaternary-button" href={learnMoreLink}>
              Learn more
            </a>
          </div>
        </div>
      )}
      </div>
        </div>
        <div className="RightSide">
            {isOpen && (
            <div className={`accordion-image`}>
                <img src={imageUrl} alt="Accordion Image" />
            </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;