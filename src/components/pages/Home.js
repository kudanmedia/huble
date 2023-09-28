import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center">Frontend Software Architect Assessment</h1>
        <h6 className="text-2xl font-bold text-center mb-8">By Kudakwshe Nyengera</h6>

        {/* Task 1: Monolith Hero Banner with Logo Slider */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">Task 1: Monolith Hero Banner with Logo Slider</h2>
          <p className="text-gray-700 mb-4">
          In developing this module, I adhered to the Atom design pattern, aligning with Huble's design principles. This pattern promotes modularity and reusability of components, facilitating code maintenance and scalability. Additionally, I integrated the Tailwind CSS framework to enhance styling and responsiveness, resulting in a polished and modern appearance. To address client feedback, I adjusted the spacing between Call-to-Action (CTA) buttons while preserving the module's visual appeal.
          </p>
          <Link to="/hero" className="text-primary font-bold hover:text-black">View More <FontAwesomeIcon icon={faChevronRight} /></Link>
        </div>

        {/* Task 2: Calculator */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">Task 2: Calculator</h2>
          <p className="text-gray-700 mb-4">
          For the second task, I was tasked with recreating a calculator using React to ensure a superior user experience and code maintainability. The calculator I developed offers essential functionality, including support for arithmetic operations, decimal numbers, and real-time display of input and results, providing users with a seamless and interactive calculation experience.
          </p>
          <Link to="/calculator" className="text-primary font-bold hover:text-black">View More <FontAwesomeIcon icon={faChevronRight} /></Link>
        </div>

        {/* Documentation: The Significance of Meticulous Documentation */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-primary">Documentation</h2>
          <p className="text-gray-700 mb-4">
            As part of the full software design cycle, meticulous documentation plays a critical role in ensuring clarity, replicability, and effective communication within a development team. This document, created earlier, highlights the importance of documentation by providing a comprehensive guide to the technical assessment tasks. It showcases a meticulous approach to task execution and reflects the skills I bring to the table. The ability to articulate technical solutions, implement best practices, and contribute to project success through detailed documentation is a key aspect of my expertise.
          </p>
          <Link to="https://github.com/kudanmedia/huble/blob/master/public/resources/FEA_Kudakwashe_Nyengera.pdf" className="text-primary font-bold hover:text-black">Download <FontAwesomeIcon icon={faChevronDown} /></Link>
        </div>

      </div>
    </div>
  );
};

export default Home;
