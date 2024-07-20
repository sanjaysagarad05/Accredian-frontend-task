import React from "react";
import image1 from "../assets/image1.png";
import referImage from "../assets/roundimage.png";
import addFriendIcon from "../assets/add_friend.png";
import rimg2 from "../assets/rimg2.png";
import rimg3 from "../assets/rimg3.png";
import { useState } from "react";
import hat from "../assets/hat.png";
import Faqpage from "./Faqpage";
import Footer from "./Footer";

const cources = [
  "Product Management",
  "Strategy & Leadership",
  "Business Management",
  "Fintech",
  "Senior Management",
  "Data Science",
  "Digital Transformation",
  "Business Analytics",
];
const programsArray = [
  {
    Programs: "Professional Certificate Program in Product Management",
    Referrer_Bonus: "₹7,000",
    Referee_Bonus: "₹9,000",
  },
  {
    Programs: "PG Certificate Program in Strategic Product Management",
    Referrer_Bonus: "₹9,000",
    Referee_Bonus: "₹11,000",
  },
  {
    Programs: "Executive Program in Data Driven Product Management",
    Referrer_Bonus: "₹ 10,000",
    Referee_Bonus: "₹10,000",
  },
  {
    Programs:
      "Executive Program in Product Management and Digital Transformation",
    Referrer_Bonus: "₹10,000",
    Referee_Bonus: "₹10,000",
  },
  {
    Programs: "Executive Program in Product Management",
    Referrer_Bonus: "₹10,000",
    Referee_Bonus: "₹10,000",
  },
  {
    Programs: "Advanced Certification in Product Management",
    Referrer_Bonus: "₹10,000",
    Referee_Bonus: "₹10,000",
  },
  {
    Programs: "Executive Program in Product Management and Project Management",
    Referrer_Bonus: "₹10,000",
    Referee_Bonus: "₹10,000",
  },
];

function Refer() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.referrerName)
      errors.referrerName = "Referrer name is required";
    if (!formData.referrerEmail)
      errors.referrerEmail = "Referrer email is required";
    if (!formData.refereeName) errors.refereeName = "Referee name is required";
    if (!formData.refereeEmail)
      errors.refereeEmail = "Referee email is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await fetch(
          "https://accredian-backend-task-ap5o.onrender.com/api/referrals",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        const result = await response.json();
        if (response.ok) {
          setShowModal(false); // Close modal on successful form submission
          setSuccessMessage(result.message);
        } else {
          setErrors({ form: result.error });
        }
      } catch (error) {
        setErrors({ form: "An error occurred while submitting the form" });
      }
    }
  };
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <div
        className="mx-auto w-1/2 text-center p-4 rounded-3xl shadow-lg border mt-8 mb-16 "
        style={{ width: "1000px" }}
      >
        <div className=" flex lg:gap-x-12 item-center">
          <div className="  items-center">
            <div className="text-4xl font-bold text-blue-500 w-60 p-4 ml-16 mb-12 mt-12 ">
              Let's Learn & Earn
            </div>
            <div className="font-semibold">
              <p className="text-xl my-20 ">
                Refer your friends and earn upto 20% discount on your next
                course
              </p>
            </div>
            <a
              href="#"
              onClick={() => setShowModal(true)}
              className="rounded-full  bg-blue-500 px-10 py-3   text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Refer Now
            </a>
          </div>
          <img
            className="w-120"
            src={image1}
            alt="image1"
            style={{ height: "500px" }}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-blue-50 py-10">
        <h2 className="text-2xl font-bold mb-10">
          How Do I <span className="text-blue-600">Refer?</span>
        </h2>
        <div className="relative flex items-center justify-center w-full  mb-10 font-semibold">
          <img src={referImage} alt="Refer" className=" w-4/5 " />
          <div
            className="absolute flex flex-col items-center text-center"
            style={{ top: "30%", left: "16%" }}
          >
            <img
              src={addFriendIcon}
              alt="Submit referrals"
              className="w-16 h-14 mb-2"
            />
            <div className="text-sm w-2/4">
              Submit referrals easily via our website's referral section.
            </div>
          </div>
          <div
            className="absolute flex flex-col items-center text-center"
            style={{ top: "30%", left: "37%" }}
          >
            <img src={rimg2} alt="Earn rewards" className="w-16 h-14 mb-2" />
            <div className="text-sm w-2/4 ">
              Earn rewards once your referral joins an Accredian program.
            </div>
          </div>
          <div
            className="absolute flex flex-col items-center text-center"
            style={{ top: "30%", left: "59%" }}
          >
            <img src={rimg3} alt="Receive bonus" className="w-16 h-14 mb-2" />
            <div className="text-sm w-2/4">
              Both parties receive a bonus of 30 days after program enrollment.
            </div>
          </div>
        </div>
        <button
          className="mt-10 bg-blue-500 text-white px-10 py-3 rounded-full hover:bg-blue-600 transition duration-200"
          onClick={() => setShowModal(true)}
        >
          Refer Now
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Referral Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Referrer Name
                </label>
                <input
                  type="text"
                  name="referrerName"
                  value={formData.referrerName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
                {errors.referrerName && (
                  <p className="text-red-500 text-sm">{errors.referrerName}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Referrer Email
                </label>
                <input
                  type="email"
                  name="referrerEmail"
                  value={formData.referrerEmail}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
                {errors.referrerEmail && (
                  <p className="text-red-500 text-sm">{errors.referrerEmail}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Referee Name
                </label>
                <input
                  type="text"
                  name="refereeName"
                  value={formData.refereeName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
                {errors.refereeName && (
                  <p className="text-red-500 text-sm">{errors.refereeName}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Referee Email
                </label>
                <input
                  type="email"
                  name="refereeEmail"
                  value={formData.refereeEmail}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
                {errors.refereeEmail && (
                  <p className="text-red-500 text-sm">{errors.refereeEmail}</p>
                )}
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-4 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-200"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="items-center justify-center">
        <div className="items-center justify-center flex text-2xl font-bold pt-10 pb-5">
          What Are{" "}
          <strong className="text-blue-600"> The Referral Benefits?</strong>{" "}
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className=" divide-gray-100 m-3 overflow-x-auto rounded-3xl border  ">
            <table className=" w-72 rounded border-gray-300 ">
              <thead>
                <tr className="w-full bg-blue-500  leading-6 ">
                  <th className="py-3 px-6 text-left text-white">
                    All Programs
                  </th>
                </tr>
              </thead>
              <tbody className=" text-sm ">
                {cources.map((course, index) => (
                  <tr
                    className="  border-gray-200 hover:bg-gray-100 "
                    key={index}
                  >
                    <td className="py-3 px-6 text-left flex font-normal flex-row uppercase ">
                      <strong>{course}</strong>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto rounded-3xl border m-8">
            <table className="min-w-full border-gray-300 ">
              <thead>
                <tr className="w-full bg-blue-300  leading-6 ">
                  <th className="py-3 px-6 text-left text-blue-900">Program</th>
                  <th className="py-3 px-6 text-center text-blue-900">
                    Referrer Amount 2
                  </th>
                  <th className="py-3 px-6 text-center text-blue-900">
                    Referee Amount
                  </th>
                </tr>
              </thead>
              <tbody className=" text-sm ">
                {programsArray.map((program, index) => (
                  <tr
                    className="  border-gray-200 hover:bg-gray-100 "
                    key={index}
                  >
                    <td className="py-3 px-6 text-left w-96  flex gap-x-4">
                      <img className=" h-6" src={hat} alt="hat image"></img>
                      {program.Programs}
                    </td>

                    <td className="py-3 px-6 text-center">
                      {program.Referrer_Bonus}
                    </td>
                    <td className="py-3 px-6 text-center">
                      {program.Referee_Bonus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button
            className=" mt-10 bg-blue-500 text-white px-10 py-3 rounded-full hover:bg-blue-600 transition duration-200"
            onClick={() => setShowModal(true)}
          >
            Refer Now
          </button>
        </div>
      </div>
      <Faqpage />
      <Footer />
    </>
  );
}

export default Refer;
