import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const programs = [
    'Data Science & AI',
    'Product Management',
    'Business Analytics',
    'Digital Transformation',
    'Business Management',
    'Project Management',
    'Strategy & Leadership',
    'Senior Management',
    'Fintech'
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 w-1000px" >
      <div className="container mx-auto px-4  " style={{    display: "flex",
    flexDirection: "column",alignItems: "center"}}>
        <div className="flex justify-between items-start">
          <div className="flex-1 " style={{width:"284px"}}>
            <h2 className="text-xl font-bold mb-4">Programs</h2>
            <ul style={{justifyContent:"space-between"}}>
              {programs.map((program, index) => (
                <li key={index} className="flex items-center mb-5">
                  <span>{program}</span>
                  <span className="ml-2 text-xl">+</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div style={{    padding: "2px 55px",
    width: "578px"}}>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p>Email us (For Data Science Queries): admissions@accredian.com</p>
            <p>Email us (For Product Management Queries):pm@accredian.com</p>
            <p>Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)</p>
            <p>Product Management Admission Helpline:+91 9625811095</p>
            <p>Enrolled Student Helpline: +91 7969322507</p>
            <p>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>
            <h3 className="text-lg font-bold mt-4 mb-2">Why Accredian</h3>
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <FaFacebookF className="text-2xl" />
              <FaLinkedinIn className="text-2xl" />
              <FaTwitter className="text-2xl" />
              <FaInstagram className="text-2xl" />
              <FaYoutube className="text-2xl" />
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4">Accredian</h2>
            <ul>
              <li className="mb-2">About</li>
              <li className="mb-2">Career</li>
              <li className="mb-2">Blog</li>
              <li className="mb-2">Admission Policy</li>
              <li className="mb-2">Referal Policy</li>
              <li className="mb-2">Privacy Policy</li>
              <li className="mb-2">Terms Of Service</li>
              <li className="mb-2">Master FAQs</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;