import React, { useState } from 'react';
import './App.css';
import StorySlider from './components/molecules/StorySlider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import AccordionItem from './components/atoms/AccordionItem';

const items = [
  {
    image: 'image1.jpg',
    description: 'Started with Richard Ahlfeld in September 2016',
    year: '2016',
  },
  {
    image: 'image2.jpg',
    description: 'First paying projects with clients in March 2018 (LOreal, McLaren, Airbus)',
    year: '2018',
  },
  {
    image: <FontAwesomeIcon icon={faMoneyBillWave} />,
    description: 'Pre-seed round in August 2018',
    year: '2018',
  },
  {
    image: <FontAwesomeIcon icon={faMoneyBillWave} />,
    description: 'Seed round of £1.9M in April 2019',
    year: '2019',
  },
  {
    image: 'image4.jpg',
    description: 'Reached 20 employees in January 2020',
    year: '2020',
  },
  {
    image: 'image4.jpg',
    description: 'Named a “Gartner Cool Vendor” in May 2020',
    year: '2020',
  },
  {
    image: 'image4.jpg',
    description: 'Named a “Gartner Cool Vendor” in May 2020',
    year: '2020',
  },
];

function App() {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleAccordionClick = (index) => {
    if (index === openIndex) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const accordionItems = [
    {
      title: "Lender",
      text: "Simplify the mortgage process for every closing with a powerful pair of products: our award-winning eClose platform and best-in-class eVault.",
      imageUrl: "https://www.snapdocs.com/hubfs/Web%20Pages%20-%20Home/Lender-Accordion-eVault.png",
      learnMoreLink: "https://www.snapdocs.com/digital-mortgage-closing-platform"
    },
    {
      title: "Title & Escrow",
      text: "Accelerate every mortgage closing and connect instantly with over 140,000 notary signing agents & attorneys for mobile & RON eClosings.",
      imageUrl: "https://www.snapdocs.com/hubfs/Web%20Pages%20-%20Home/Title-Escrow.png",
      learnMoreLink: "https://www.snapdocs.com/scheduling-platform-for-title-companies"
    },
    {
      title: "Signing Service",
      text: "Instantly source, vet, schedule, and pay for a qualified notary anywhere in the country.",
      imageUrl: "https://www.snapdocs.com/hubfs/Web%20Pages%20-%20Home/Title-Escrow.png",
      learnMoreLink: "https://www.snapdocs.com/scheduling-platform-for-signing-services"
    },
    {
      title: "Notary Signing Agent",
      text: "Access over 250,000 mobile and RON loan signing opportunities each month, gain exposure to 100+ hiring companies, and efficiently manage your business online.",
      imageUrl: "https://www.snapdocs.com/hubfs/Web%20Pages%20-%20Home/Notary-signing-Agents.png",
      learnMoreLink: "https://www.snapdocs.com/join-notary-network"
    },
  ];

  return (
    <div>
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          text={item.text}
          imageUrl={item.imageUrl}
          isOpen={index === openIndex}
          onClick={() => handleAccordionClick(index)}
          learnMoreLink={item.learnMoreLink}
        />
      ))}
    </div>
  );
}

export default App;

