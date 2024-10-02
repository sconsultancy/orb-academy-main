import Header from "@/components/Header";

import Blob from "@/components/Blob";
import HeroForm from "@/components/HeroForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <section className="flex justify-around  pt-28  ">
        {/* Left Section */}
        <div className="flex flex-col max-w-md  space-y-1 my-10  items-center py-5  ">
          <h1 className=" text-2xl font-semibold">Book your Free Class</h1>
          <p className=" font-semibold text-gray-500 ">
            Learn from India &apos; s Best Teachers
          </p>
          <h2 className=" text-xl font-semibold ">Enter Your Details</h2>
          <HeroForm></HeroForm>
        </div>
        {/* Right Section */}
        <div className="flex relative  w-1/3">
          <div className="absolte ">
            <Blob color="#59B2FF" width="500px"></Blob>
          </div>
          <div className="relative top-[300px] right-24 ">
            <Blob color="#80B2BD" width="300px"></Blob>
          </div>
          <div className="relative top-[250px] left-[300px] ">
            <Blob color="#FDCB6E" width="300px"></Blob>
          </div>

          <img
            src="assets/home/hero_boy.png"
            alt=""
            className=" absolute -bottom-24 right-28"
          />
          <img
            src="assets/home/hero_cat.png"
            alt=""
            className=" absolute -bottom-24 -right-20"
          />
        </div>
      </section>
      {/* Dashboard */}
      <section className=" mt-64 flex justify-evenly ">
        <div className="flex bg-[#EBFBF3] h-80 w-[549px] p-3 rounded">
          <div className="flex flex-col   justify-center  ">
            <h1 className=" font-bold  text-xl">Student Dashboard</h1>
            <h3 className=" w-72  text-gray-500 font-medium text-lg mt-5">
              Get Study Material, Sample Papers, Notes & NCERT Textbook Solution
            </h3>
            <button className="bg-gradient-to-r from-orange-400 to-rose-400 h-9  w-48 rounded-md text-white font-semibold mt-9">
              Student Dashboard
            </button>
          </div>
          <div className=" relative flex  items-end">
            <img
              src="/assets/home/dashboard/dna.png"
              alt=""
              className="absolute top-0 left-16 "
            />
            <img
              src="/assets/home/dashboard/earth.png"
              alt=""
              className="absolute  top-16 left-0 "
            />
            <img
              src="/assets/home/dashboard/satelite_small.png"
              alt=""
              className="absolute bottom-14 -left-3 "
            />
            <img
              src="/assets/home/dashboard/satelite.png"
              alt=""
              className="absolute  top-8 right-8"
            />
            <img
              src="/assets/home/dashboard/setting.png"
              alt=""
              className="absolute  bottom-20 -left-2"
            />
            <img
              src="/assets/home/dashboard/stu_boy.png"
              alt=""
              className="  z-10"
            />
          </div>
        </div>
        <div className="flex bg-[#EBFBF3] h-80 w-[549px] p-3 relative">
          <div className="flex flex-col   justify-center ">
            <h1 className="font-bold  text-xl">Teacher Dashboard</h1>
            <h3 className="w-72  text-gray-500 font-medium text-lg mt-5 z-10">
              View Your Dashboard and Manage Your Classes
            </h3>
            <button className="bg-gradient-to-r from-orange-400 to-rose-400 h-9  w-48 rounded-md text-white font-semibold mt-9">
              Teacher Dashboard
            </button>
          </div>

          <img
            src="/assets/home/dashboard/teacher.png"
            alt=""
            className="absolute bottom-12 right-3"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="flex justify-center my-20">
        <div className=" flex flex-col w-[80%]  ">
          <div>
            <h1 className=" text-4xl font-medium">Powerful Online Tuitions</h1>
            <h2 className=" text-3xl font-medium  text-black text-opacity-60">
              Designed for excellence
            </h2>
          </div>
          <div className=" flex justify-evenly my-16">
            <div className=" flex flex-col items-center">
              <img src="assets/home/benefits/benefit1.png" alt="" />
              <h4 className=" max-w-[200px] text-lg font-medium text-center mt-3">
                Build a Strong Conceptual Foundation
              </h4>
            </div>
            <div className=" flex flex-col items-center">
              <img
                src="assets/home/benefits/benefit2.png"
                className=" -mb-[60px]"
                alt=""
              />
              <h4 className=" max-w-[200px] text-lg font-medium text-center mt-3">
                Ace Your Career in your Life
              </h4>
            </div>
            <div className=" flex flex-col items-center">
              <img src="assets/home/benefits/benefit3.png" alt="" />
              <h4 className=" max-w-[200px] text-lg font-medium text-center mt-3">
                Get Help in your Development
              </h4>
            </div>
          </div>
          <h3 className=" text-lg font-medium text-center">
            Orb Academy`s unique improvement based Coaching helps you Bemome a
            Pro
          </h3>
        </div>
        <div></div>
      </section>
      {/* Resources Section */}
      <section className=" w-full flex flex-col items-center mb-14">
        <div className=" w-4/5 flex flex-col space-y-14 ">
          <div className=" flex flex-col space-y-4">
            <h1 className=" text-4xl font-medium">Resources</h1>
            <h2 className=" text-3xl font-medium  text-black text-opacity-60">
              To help you learn at your own pace
            </h2>
            <h3 className=" text-xl font-medium  text-black text-opacity-60 max-w-2xl">
              Be an independent self motivated learner. Our Classes are designed
              to improve your Career Potention many folds
            </h3>
          </div>

          <div className=" flex items-center justify-evenly">
            <img src="assets/home/resources/rsc1.png" alt="" />
            <div>
              <h1 className=" text-3xl font-semibold mb-5">
                Concept Videos & Cheat Sheet
              </h1>

              <span className="flex">
                <img
                  src="assets/home/resources/rscicon.svg"
                  className=" mr-3"
                  alt=""
                />
                Short & Crisp videos for better concept clarity
              </span>
              <span className="flex">
                <img
                  src="assets/home/resources/rscicon.svg"
                  className=" mr-3"
                  alt=""
                />
                A disciplined approach for self paced coaching and improving
                Skills
              </span>
              <span className="flex">
                <img
                  src="assets/home/resources/rscicon.svg"
                  className=" mr-3"
                  alt=""
                />
                A detailed Cheat Sheet to improve Efficiency and Effectictive
                Development
              </span>
            </div>
          </div>
          <div className=" flex items-center justify-evenly">
            <div>
              <h1 className=" text-3xl font-semibold mb-5">
                Test and Smart Results
              </h1>
              <span className="flex">
                <img
                  src="assets/home/resources/rscicon.svg"
                  className=" mr-3"
                  alt=""
                />
                Concept-wise Tests
              </span>
              <span className="flex">
                <img
                  src="assets/home/resources/rscicon.svg"
                  className=" mr-3"
                  alt=""
                />
                Identify Your Weak areas through smart results
              </span>
            </div>
            <img src="assets/home/resources/rsc2.png" alt="" />
          </div>
          <div className=" flex items-center justify-evenly">
            <img src="assets/home/resources/rsc3.png" alt="" />
            <div>
              <h1 className=" text-3xl font-semibold mb-5">
                Doubt`s Resolution
              </h1>
              <span className="flex">
                <img
                  src="assets/home/resources/rscicon.svg"
                  className=" mr-3"
                  alt=""
                />
                Clear Your doubts via chat and stay doubtfree
              </span>
              <span className="flex">
                <img
                  src="assets/home/resources/rscicon.svg"
                  className=" mr-3"
                  alt=""
                />
                Ask your question anytime - 24x7
              </span>
              <span className="flex">
                <img
                  src="assets/home/resources/rscicon.svg"
                  className=" mr-3"
                  alt=""
                />
                Connect with experts
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Articles */}

      {/* <div className="max-w-5xl mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold mb-6">
          Popular Articles &amp; what going on
        </h2>
        <div className="space-y-6">
          {articles.map((article, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-600">
                {article.title}
              </h3>
              <p className="text-gray-700 mt-2">{article.description}</p>
              <a
                href={article.link}
                className="text-orange-500 font-medium mt-4 inline-block hover:underline"
              >
                READ MORE
              </a>
            </div>
          ))}
        </div>
      </div> */}

      <Footer></Footer>
    </div>
  );
}
