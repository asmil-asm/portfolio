import {useState} from 'react';
import image1 from "../assets/intership.png";
import image2 from "../assets/tot.png";

const EducationAndCertificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const educationList = [
    {
      degree: "Bachelor's Degree in Software Engineering",
      institution: "Al-Jazeera Private University",
      period: "2027 - Present",
      description: "Focused on Web Development, Software Architecture, and Database Systems."
    }
  ];

  const certificatesList = [
    {
      id: 1,
      title: "Internship Completion (Front-End Development)",
      issuer: "AQAVIA (American Technology & Innovation)",
      date: "2026/04/16",
      image: image1 
    },
    {
      id: 2,
      title: "Training Of Trainers (TOT)",
      issuer: "Sham Academy for Training and Qualification",
      date: "2026/09/29",
      image: image2 
    }
  ];

  return (
    <section id="education" className="py-16 px-4 max-w-6xl mx-auto bg-white text-gray-800">
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
          {educationList.map((edu, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl border border-purple-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="p-4 rounded-xl bg-purple-50 text-purple-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                  <span className="px-3 py-1 text-sm font-semibold rounded-full bg-pink-50 text-pink-600 w-fit">
                    {edu.period}
                  </span>
                </div>
                <p className="text-purple-600 font-medium mb-2">{edu.institution}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="certificates" className="w-full">
        <div className="w-full flex justify-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Certifications
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {certificatesList.map((cert) => (
            <div 
              key={cert.id} 
              className="group relative rounded-2xl border border-purple-100 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-purple-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    onClick={() => setSelectedImage(cert.image)}
                    className="p-3 bg-white text-purple-600 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                    <span className="text-xs font-semibold uppercase tracking-wider text-pink-500">{cert.issuer}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {cert.title}
                  </h3>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-400">
                  <span>Issued Date</span>
                  <span className="font-medium text-gray-600">{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 bg-gray-100 rounded-full p-2 text-sm font-bold z-10 w-10 h-10 flex items-center justify-center"
            >
              ✕
            </button>
            <img 
              src={selectedImage} 
              alt="Certificate Preview" 
              className="w-full h-auto max-h-[85vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default EducationAndCertificates;