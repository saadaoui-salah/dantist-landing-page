import Image from "next/image";
import A from "./assets/-9.png";
import B from "./assets/dam.png";
import C from "./assets/-8.png";
import D from "./assets/client.jpg";
import E from "./assets/1.png";
import F from "./assets/2.png";
import G from "./assets/3.png";
import H from "./assets/doc.jpg";
import R from "./assets/21.png";
import I from "./assets/10.png";
import J from "./assets/11.png";
import K from "./assets/12.png";

const Nav = () => {
  return (
    <div className="px-12 text-secondary py-6 bg-lightGreen flex items-center justify-between">
      <p className="font-bold text-secondary text-xl">@SmileGuard</p>
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

const StarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-yellow-300"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6 bg-primary rounded-full text-secondary"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
      />
    </svg>
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
                className="py-2 hover:text-white hover:bg-secondary max-w-[150px] text-center font-bold rounded-full border-2 border-secondary text-secondary"
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
          <p className="text-primary font-bold mb-2">INTRODUCTION</p>
          <h2 className="text-secondary font-bold text-4xl mb-6">
            Trusted dental services for you and your family .
          </h2>
          <p className="text-secondary mb-12">
            At our dental practice, we offer a comprehensive range of dental
            services to help you achieve optimal oral health and a beatiful
            smile. Our team of experienced and friendly dental professionals is
            committed to providing core in a comfortable.
          </p>
          <a
            href="#"
            className="py-2 hover:text-white hover:bg-secondary px-8 text-center font-bold rounded-full border-2 border-secondary text-secondary"
          >
            Meet doctors
          </a>
        </div>
        <Image src={C} className="max-sm:mt-8" />
      </section>
      <section className="flex gap-12 max-sm:gap-0 max-sm:flex-col-reverse py-12 md:px-20 max-sm:px-12 bg-lightGreen items-start justify-center">
        <Image
          className="w-[500px] h-[400px] max-sm:ml-0 rounded-r-[20px] max-sm:mt-8 rounded-l-[80px] max-sm:h-[350px] max-sm:w-[400px]"
          alt="client"
          src={D}
        />
        <div className="max-w-[500px]">
          <p className="font-bold text-primary mb-2">OUR SERVICE</p>
          <h2 className="text-secondary font-bold text-4xl mb-6">
            We provide dental care for you
          </h2>
          <p className="text-secondary ">
            At our dental practice, we offer comprehensive range of dental
            services to help you achieve optimal oral health and a beatiful
            smile
          </p>
        </div>
      </section>
      <section className="flex flex-wrap mt-[-170px] gap-12 max-sm:gap-0 max-sm:flex-col-reverse py-12 md:px-20 max-sm:px-12 bg-lightGreen items-center justify-center">
        <div className="bg-white max-sm:mt-8 w-[320px] shadow-xl rounded-[20px] px-12 py-8">
          <Image src={E} />
          <p className="text-secondary font-bold text-lg mb-4">
            Preventive Core
          </p>
          <p>
            Dental Cleanings: Regular cleanings to remove plaque, tartar, and
            starins
          </p>
          <p className="text-secondary cursor-pointer group font-bold mt-4">
            Read More{" "}
            <span className="group-hover:pl-2 transition-all">{"-->"}</span>{" "}
          </p>
        </div>
        <div className="bg-white max-sm:mt-8 w-[320px] shadow-xl rounded-[20px] px-12 py-8">
          <Image src={F} />
          <p className="text-secondary mt-2 font-bold text-lg mb-4">
            Preventive Core
          </p>
          <p>
            Dental Cleanings: Regular cleanings to remove plaque, tartar, and
            starins
          </p>
          <p className="text-secondary cursor-pointer group font-bold mt-4">
            Read More{" "}
            <span className="group-hover:pl-2 transition-all">{"-->"}</span>{" "}
          </p>
        </div>
        <div className="bg-white max-sm:mt-8 w-[320px] shadow-xl rounded-[20px] px-12 py-8">
          <Image src={G} />
          <p className="text-secondary font-bold text-lg mb-4">Cosmetic Core</p>
          <p>
            Dental Cleanings: Regular cleanings to remove plaque, tartar, and
            starins
          </p>
          <p className="text-secondary cursor-pointer group font-bold mt-4">
            Read More{" "}
            <span className="group-hover:pl-2 transition-all">{"-->"}</span>
          </p>
        </div>
      </section>
      <section
        id="#Home"
        className="bg-lightGreen w-full flex flex-col px-36 md:px-20 max-sm:px-12 py-8"
      >
        <div className="bg-secondary flex gap-4 max-[1000px]:flex-col-reverse items-center px-12 max-[1000px]:pt-8 max-[1000px]:pb-12   rounded-[40px] justify-evenly">
          <div className="max-w-[500px]">
            <p className="text-primary font-bold">ONLINE SUPPORT</p>
            <h2 className="text-white text-5xl font-bold mt-4">
              Your fingertips with our online services
            </h2>
            <div>
              <div className="flex gap-3 text-white my-6">
                <CheckIcon />
                <label>Stay connected with our online doctors</label>
              </div>
              <div className="flex gap-3 text-white my-6">
                <CheckIcon />
                <label>Help you achieved optimal oral health</label>
              </div>
              <div className="flex gap-3 mb-16 text-white my-6">
                <CheckIcon />
                <label>We offer a comprehensive range of services</label>
              </div>
            </div>
            <a
              className="px-[80px] text-[15px] py-[15px] bg-primary text-white font-bold rounded-full"
              href="#"
            >
              Book Now
            </a>
          </div>
          <div className="bg-lightGreen rounded-[50px]">
            <Image
              src={H}
              alt="6"
              className="rounded-t-[200px] w-[350px] h-[500px]"
            />
          </div>
        </div>
      </section>
      <section
        id="#Home"
        className="bg-lightGreen w-full flex flex-col items-center justify-center px-36 md:px-20 max-sm:px-12 py-16"
      >
        <div className="max-w-[500px] flex flex-col items-center justify-center">
          <p className="font-bold text-primary mb-4">TESTIMONIALS</p>
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Our happy patient says
          </h2>
          <p className="text-secondary text-center">
            These are some customers testimonials who are satisfied with the
            place and service we have provided
          </p>
        </div>
        <div className="flex mt-16 gap-x-20 gap-y-8 flex-wrap items-center justify-center">
          <div className="bg-white rounded-[20px] py-4 px-8 w-[300px] shadow-xl">
            <div className="flex mt-2 mb-4">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <p className="text-secondary">
              My dental anxiety has reduced significantly after visiting. I
              highly recommend their services to anyone seeking top-natch dental
              care.
            </p>
            <div className="flex items-center">
              <Image src={R} className="rounded-full mr-4" />
              <div className="py-8">
                <p className="text-lg font-bold text-secondary">Random Name</p>
                <p className="font-bold text-sm text-primary">Algeria</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[20px] py-4 px-8 w-[300px] shadow-xl">
            <div className="flex mt-2 mb-4">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <p className="text-secondary">
              My dental anxiety has reduced significantly after visiting. I
              highly recommend their services to anyone seeking top-natch dental
              care.
            </p>
            <div className="flex items-center">
              <Image src={R} className="rounded-full mr-4" />
              <div className="py-8">
                <p className="text-lg font-bold text-secondary">Random Name</p>
                <p className="font-bold text-sm text-primary">Algeria</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[20px] py-4 px-8 w-[300px] shadow-xl">
            <div className="flex mt-2 mb-4">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <p className="text-secondary">
              My dental anxiety has reduced significantly after visiting. I
              highly recommend their services to anyone seeking top-natch dental
              care.
            </p>
            <div className="flex items-center">
              <Image src={R} className="rounded-full mr-4" />
              <div className="py-8 ">
                <p className="text-lg font-bold text-secondary">Random Name</p>
                <p className="font-bold text-sm text-primary">Algeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex mb-20 flex-col items-center py-12 justify-evenly px-36 md:px-20 max-sm:px-12">
        <p className="font-bold text-primary">OUR BLOGS</p>
        <h1 className="text-4xl text-secondary font-bold mt-2 mb-10">
          Separating fact from fiction
        </h1>
        <div className="flex flex-wrap gap-x-12 gap-y-4 items-center justify-center">
          <div className="shadow-xl max-w-[400px] p-4 rounded-[30px]">
            <Image src={I} className="w-full" />
            <div className="p-4">
              <p className="text-sm">Aug 28, 2023</p>
              <p className="text-secondary text-lg font-bold">
                Smile Bright: Dental Care Tips and Insights
              </p>
              <p className="text-secondary cursor-pointer group font-bold mt-4">
                Read More{" "}
                <span className="group-hover:pl-2 transition-all">{"-->"}</span>
              </p>
            </div>
          </div>
          <div className="shadow-xl max-w-[400px] p-4 rounded-[30px]">
            <Image src={J} className="w-full" />
            <div className="p-4">
              <p className="text-sm">Aug 28, 2023</p>
              <p className="text-secondary text-lg font-bold">
                Dazzling Smiles: Your Guide to Dental Wellness
              </p>
              <p className="text-secondary cursor-pointer group font-bold mt-4">
                Read More{" "}
                <span className="group-hover:pl-2 transition-all">{"-->"}</span>
              </p>
            </div>
          </div>
          <div className="shadow-xl max-w-[400px] p-4 rounded-[30px]">
            <Image src={K} className="w-full" />
            <div className="p-4">
              <p className="text-sm">Aug 28, 2023</p>
              <p className="text-secondary text-lg font-bold">
                Healthy Grins: Dental Insights for Bright Smiles
              </p>
              <p className="text-secondary cursor-pointer group font-bold mt-4">
                Read More{" "}
                <span className="group-hover:pl-2 transition-all">{"-->"}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-lightGreen w-full pb-12 flex flex-col items-center justify-start px-36 md:px-20 max-sm:px-12 py-16">
        <div className="flex flex-wrap gap-20 items-center justify-center">
          <div>
            <p className="font-bold text-secondary text-xl">@SmileGuard</p>
            <p className="text-gray-500 my-4">
              SmileGuard with Our Exceptional
              <br /> Dental Services
            </p>
            <p className="text-gray-500">Made by @saadaoui-salah</p>
          </div>
          <div>
            <p className="text-secondary font-bold mb-6 text-2xl">
              Working Hours
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-secondary mt-2 text-sm">Monday - Thuesday</p>
                <p className="text-secondary mt-2 text-sm">Saturday</p>
                <p className="text-secondary mt-2 text-sm">Friday</p>
              </div>
              <div>
                <p className="text-secondary mt-2 text-sm">9:00 am - 6:00 pm</p>
                <p className="text-secondary mt-2 text-sm">Closed</p>
                <p className="text-secondary mt-2 text-sm">Closed</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-secondary mb-4 font-bold text-2xl">Contact</p>
            <div className="flex flex-col gap-6">
              <a
                href="#"
                className="py-2 hover:text-white hover:bg-secondary  text-center font-bold rounded-full border-2 border-secondary text-secondary"
              >
                +213 541 315 333
              </a>
              <a
                className="px-[22px] py-2 bg-primary text-white font-bold rounded-full"
                href="#"
              >
                Book an oppointment
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
