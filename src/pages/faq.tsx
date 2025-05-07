import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import CloseSVG from "../icons/close.svg";
import ExpandSVG from "../icons/expand.svg";
import AppBar from "../components/appbar";
import { useNavigate } from "react-router-dom";

const FAQs = [
  {
    question: "What is the goal behind launching this app?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae lacinia nisl. Proin pharetra scelerisque condimentum.",
  },
  {
    question: "Which educational entities are enrolled in the Salama app?",
    answer: "The Salama app is available for various schools and institutions.",
  },
  {
    question: "How does the app contribute to road safety?",
    answer:
      "It provides real-time updates, tracking, and alerts to ensure student safety.",
  },
  {
    question: "What details does the app provide about students' journey?",
    answer:
      "The app offers live tracking, estimated arrival times, and emergency notifications.",
  },
  {
    question: "How can I report any complaints concerning the use of the app?",
    answer:
      "You can report complaints through the in-app feedback section or customer support.",
  },
];

const FAQ = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen">
      <AppBar title={"FAQ"} isProfile={false} />
      <div
        className={`max-w-lg mx-auto p-4 ${
          i18n.language === "ar" ? "rtl" : "ltr"
        }`}
      >
        {FAQs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 bg-blue-50 p-4 rounded-2xl shadow-sm"
          >
            <div
              className="flex justify-between items-start gap-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-tight">
                {faq.question}
              </h3>
              <button
                className="w-8 h-8 min-w-[2.5rem] min-h-[2.5rem] bg-blue-200  shadow rounded-full flex items-center justify-center"
              >
                <img
                  src={openIndex === index ? CloseSVG : ExpandSVG}
                  alt="toggle"
                  className="w-8 h-8"
                />
              </button>
            </div>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-3 text-sm text-gray-700 leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
