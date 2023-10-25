import Image from "next/image";
import A from "./assets/-9.png";
import B from "./assets/dam.png";
import C from "./assets/-8.png";
const Nav = () => {
  return (
    <div className="px-12 text-secondary py-6 bg-lightGreen flex items-center justify-between">
      <img src="" alt="logo" />
      <div className="flex items-center gap-4">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Services">Services</a>
      </div>
      <a
        className="px-[22px] py-2 bg-primary text-white font-bold rounded-full"
        href="#"
      >
        Book an oppointment
      </a>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Nav />
      <section
        id="#Home"
        className="bg-lightGreen w-full flex flex-col px-36 md:px-20 max-sm:px-12 py-8"
      >
        <div className="bg-secondary flex gap-4 max-[1000px]:flex-col items-center px-12 max-[1000px]:pt-12  rounded-[40px] justify-evenly">
          <div className="max-w-[500px]">
            <h1 className="text-white text-5xl font-bold mt-4">
              SmileGuard with Our Exceptional Dental Services!
            </h1>
            <p className="text-white my-6">
              Our skilled team of experienced dentists is dedicated to enhancing
              your smile's health and beauty
            </p>
            <a
              className="px-[40px] text-[15px] py-[10px] bg-primary text-white font-bold rounded-full"
              href="#"
            >
              Learn more
            </a>
          </div>
          <Image src={B} className="rounded-lg w-[450px] h-[500px]" />
        </div>
        <div className="flex flex-row-reverse max-[1000px]:flex-col max-[1000px]:items-center items-center justify-evenly relative">
          <div className="w-[450px] bg-white shadow-lg  mt-[-80px] rounded-[20px] px-8 py-8">
            <h2 className="text-secondary text-2xl font-bold mb-2">
              Book an appointment
            </h2>
            <p className="text-secondary text-sm">
              Get your dental health back on track with us
            </p>
            <div className="flex mt-12 flex-col gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="border px-4 py-[10px] text-gray-400 border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border px-4 py-[10px] text-gray-400 border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border px-4 py-[10px] text-gray-400 border-gray-300 rounded-md"
              />
              <div className="flex justify-between">
                <input
                  type="date"
                  placeholder="Date"
                  className="border px-4 py-[10px] text-gray-400 border-gray-300 rounded-md"
                />
                <input
                  type="time"
                  placeholder="Time"
                  className="border px-4 py-[10px] text-gray-400 border-gray-300 rounded-md"
                />
              </div>
              <textarea
                placeholder="Message"
                className="border border-gray-300 px-4 py-[10px] w-full h-[200px] rounded-md"
              ></textarea>
              <a
                href="#"
                className="w-full text-center text-white rounded-[20px] font-bold py-3 bg-primary"
              >
                Book Now
              </a>
            </div>
          </div>
          <div className="flex max-w-[700px]  max-sm:flex-col mx-8 items-center justify-center mt-16">
            <div className="flex flex-col">
              <p className="text-primary font-bold mb-4">WHAT WE DO</p>
              <h2 className="text-secondary text-4xl mb-4 font-bold">
                Provide genuine dental care
              </h2>
              <p className="text-secondary mb-8">
                We offer a comprehensive range of dental services to help you
                achieve optimal oral health and a beatiful smile. Our team of
                experienced
              </p>
              <a
                href="#"
                className="py-2 max-w-[150px] text-center font-bold rounded-full border-2 border-secondary text-secondary"
              >
                Learn More
              </a>
            </div>
            <Image
              src={A}
              alt="4"
              className="ml-6 w-[400px] h-[300px] max-sm:ml-0 max-sm:mt-8 max-sm:h-[280px] max-sm:w-[280px]"
            />
          </div>
        </div>
      </section>
      <section className="flex max-sm:flex-col items-center py-12 justify-evenly px-36 md:px-20 max-sm:px-12">
        <div className="max-w-[600px]">
          <p className="text-primary font-bold mb-2">INTORDUCTION</p>
          <h2 className="text-secondary font-bold text-4xl mb-6">
            Trusted dental services for you and our family .
          </h2>
          <p className="text-secondary mb-12">
            At our dental practice, we offer a comprehensive range of dental
            services to help you achieve optimal oral health and a beatiful
            smile. Our team of experienced and friendly dental professionals is
            committed to providing core in a comfortable.
          </p>
          <a
            href="#"
            className="py-2 px-8 text-center font-bold rounded-full border-2 border-secondary text-secondary"
          >
            Meet doctors
          </a>
        </div>
        <Image src={C} className="max-sm:mt-8" />
      </section>
    </>
  );
}
