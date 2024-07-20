import React, { useState } from 'react';

const Faqpage = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = [
    {
      category: 'Eligibility',
      questions: [
        {
          question: 'Do I need to have prior Product Management and Project Management experience to enroll in the program?',
          answer: 'No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.'
        },
        {
          question: 'What is the minimum system configuration required?',
          answer: 'The minimum system configuration details are not provided in the image.'
        }
      ]
    },
    { category: 'How To Use?' },
    { category: 'Terms & Conditions' }
  ];

  const mydownsvg = <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.40982 7.40997L5.99982 2.82997L10.5898 7.40997L11.9998 5.99997L5.99982 -2.67029e-05L-0.000183105 5.99997L1.40982 7.40997Z" fill="black" fill-opacity="0.54"/>
  </svg>
  
  return (
    <div className="container mx-auto px-4 py-8 "style={{width:'1000px'}}>
      <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          {faqData.map((category, index) => (
            <button
              key={index}
              className={`w-full text-left p-3 mb-2 rounded ${
                category.category === 'Eligibility' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>
        
        <div className="md:col-span-3">
          {faqData[0].questions.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full p-4 bg-white border rounded shadow"
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
              >
                <span className="font-semibold text-blue-600">{item.question}</span>
                <span>{openQuestion === index ? <mydownsvg /> : '▼'}</span>
              </button>
              {openQuestion === index && (
                <div className="p-4 bg-gray-50 border-t">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 bg-blue-600 text-white p-6 rounded-lg flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-white p-2 rounded-full mr-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold">Want to delve deeper into the program?</h2>
            <p>Share your details to receive expert insights from our program team!</p>
          </div>
        </div>
        <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition-colors">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Faqpage;