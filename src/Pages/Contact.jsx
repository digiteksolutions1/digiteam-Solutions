import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ArrowRightIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const contactMethods = [
  {
    id: 1,
    title: "Visit Us",
    description: "The Central, Johar Town\nOpposite Emporium Mall, Lahore",
    icon: <MapPinIcon className="w-8 h-8 text-primary" />,
    link: "https://maps.app.goo.gl/neXGTNws8za7yqo48",
    linkText: "Get Directions",
  },
  {
    id: 2,
    title: "Call Us",
    description: "+1 (555) 123-4567\nMon-Fri: 9:00-18:00 PST",
    icon: <PhoneIcon className="w-8 h-8 text-primary" />,
    link: "tel:+15551234567",
    linkText: "Call Now",
  },
  {
    id: 3,
    title: "Email Us",
    description: "hr@digiteam-solutions.com\nResponse within 24 hours",
    icon: <EnvelopeIcon className="w-8 h-8 text-primary" />,
    link: "mailto:hr@digiteam-solutions.com",
    linkText: "Send Email",
  },
  {
    id: 4,
    title: "Office Hours",
    description: "Monday-Friday: 9:00-18:00 PST\nSaturday-Sunday: Closed",
    icon: <ClockIcon className="w-8 h-8 text-primary" />,
    link: "#contact-form",
    linkText: "Enquire Now",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.subject || !formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill in all fields.");
      setShowErrorModal(true);
      return;
    }

    setIsLoading(true);
    // setStatus("Sending your message...");

    try {
      const res = await fetch("https://digiteam-solutions.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ subject: "", name: "", email: "", message: "" });
        // Redirect after success
        navigate("/thankYou");
      } else {
        setErrorMessage(data.error || "Failed to send message. Please try again later.");
        setShowErrorModal(true);
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection and try again.");
      setShowErrorModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
    setErrorMessage("");
  };

  return (
    <>
      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <ExclamationTriangleIcon className="h-10 w-10 text-red-500" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Error</h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-600">{errorMessage}</p>
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    onClick={closeErrorModal}
                  >
                    Try Again
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white transform skew-x-12 -translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-2/5 h-1/2 bg-secondary-light rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 flex items-center justify-center min-h-[32rem] relative z-10">
          <div className="w-full max-w-4xl text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary-light">
                How to Reach Us
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-secondary-light max-w-2xl mx-auto">
              Multiple convenient ways to connect with our recruitment department
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method) => (
              <div
                key={method.id}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary bg-opacity-10 rounded-full mb-6">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-6 whitespace-pre-line">{method.description}</p>
                <a
                  href={method.link}
                  className="text-primary font-medium inline-flex items-center hover:text-primary-dark"
                >
                  {method.linkText}
                  <ArrowRightIcon className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
              <p className="text-xl text-gray-600">
                Have questions about our accounting services? We'll respond promptly.
              </p>
            </div>

            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              onSubmit={handleSubmit}
            >
              <div className="md:col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  required
                >
                  <option value="">Select a topic</option>
                  <option value="Accounting">Accounting</option>
                  <option value="Web Development">Web Development</option>
                  <option value="HR & Recruitment">HR & Recruitment</option>
                  <option value="AI Solutions">AI Solutions</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="Ali Saif"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="alisaif@example.com"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="Tell us about your needs..."
                  required
                ></textarea>
              </div>

              <div className="md:col-span-2 flex flex-col items-center space-y-2">
                <button
                  type="submit"
                  className="px-8 py-4 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors flex items-center justify-center min-w-40"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
                {status && (
                  <div className={`flex items-center text-sm ${status.includes("successfully") ? "text-green-600" : "text-gray-600"}`}>
                    {status.includes("successfully") ? (
                      <CheckCircleIcon className="w-5 h-5 mr-1" />
                    ) : null}
                    {status}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white pb-20">
        <div className="container mx-auto px-6">
          <div className="rounded-xl overflow-hidden shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13615.272398660136!2d74.267922!3d31.4666684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190334e62b097d%3A0x333bb6a25b443a99!2sThe%20Central!5e0!3m2!1sen!2s!4v1716278160000!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}