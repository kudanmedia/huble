import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAccordion = (index) => {
    if (index === openIndex) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          text={item.text}
          imageUrl={item.imageUrl}
          isOpen={index === openIndex}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
}

export default Accordion;
