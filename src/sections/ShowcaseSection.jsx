import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/ft.png" alt="Finance Tracker WebApp" />
            </div>
            <div className="text-content">
              <h2>
                  Effortless Financial Management with a Clean, Intuitive Web App

              </h2>
              <p className="text-white-50 md:text-xl">
                  A dynamic finance tracker built using Flask, Python, and Chart.js, offering users a seamless way to input, manage, and visualize their financial data with real-time insights.

              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/ai.png"
                  alt="AI Sass Platfrom for Image Editing"
                />
              </div>
              <h2>"AI Sass Platfrom for Image Editing</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/kv.png" alt="Nain 2.0 project" />
              </div>
              <h2>  Turning Motion into Power with an Innovative Energy Solution – KineVolt
</h2>
              <p className="text-white-50 md:text-xl">
  Selected in the top 10 teams of NAIN 2.0, KineVolt is a kinetic energy-based prototype designed to convert human motion into electricity. Developed using smart mechanical design and real-time power analysis for sustainable energy generation.
</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
