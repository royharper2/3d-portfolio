import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <div className="flex flex-col gap-6 items-start">
                {/* 👉 Replace these with your real details */}
                <a
                  href="mailto:shrustijirgu3893@gmail.com
                  className="flex items-center gap-3 hover:text-[#cd7c2e]"
                >
                  <img
                    src="/images/envelope-solid.svg"
                    alt="email"
                    className="w-6 h-6"
                  />
                  <span className="text-lg"><u>Email</u></span>
                </a>

                <a
                  href="https://www.linkedin.com/in/shrusti-jirgi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#cd7c2e]"
                >
                  <img
                    src="/images/linkedin.png"
                    alt="linkedin"
                    className="w-6 h-6"
                  />
                  <span className="text-lg"><u>Linked-in</u></span>
                </a>
              </div>
            </div>
          </div>

          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

