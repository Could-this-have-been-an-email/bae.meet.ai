import React, { useEffect } from 'react';
import './style.css';
import Navbar from '../../components/Navbar';
import AOS from 'aos';

function Landing() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div>
        <section className="py-10 px-4 mainheight bg-yellow-300	">
          <div className="md:flex md:px-12 md:mx-16">
            <div className="md:w-2/5 md:py-20">
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
                className="text-6xl pb-6"
              >
                Build a <strong>better</strong> meeting
              </p>
              <p
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="600"
                className="text-xl text-gray-600	pb-6 "
              >
                We are building better, efficient, and on-topic meetings. Do you
                ever leave a meeting and think, "That could have been an email?"
                Same. So we are changing things!
              </p>
              <a
                href="/signup"
                className="button is-link"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="400"
              >
                Sign Up
              </a>
            </div>
            <div className="flex justify-center md:w-3/5">
              <img
                className="self-center "
                src="https://via.placeholder.com/550x300?text=Hero+Image"
                alt=""
              />
            </div>
          </div>
        </section>

        <section data-aos="fade-up" className="md:p-20 vh">
          <div className="md:flex bg-blue-300">
            <div className="flex justify-center p-10 md:w-2/4">
              <img
                className="self-center"
                src="https://via.placeholder.com/500x500?text=Cool+Product+Image1"
              />
            </div>
            <div className="md:w-2/4">
              <div className="md:w-9/12 lg:w-3/5 h-center v-offset">
                <div className=" self-center py-32 px-4 md:px-8 lg:px-12 bg-white shadow rounded">
                  <p className="font-medium text-blue-300">Save Time</p>
                  <p className="text-2xl font-extrabold pb-3">
                    Spend your meetings talking about what you want to talk
                    about
                  </p>
                  <p className="text-gray-600">
                    Upvote on items that you want to discuss. Downvote the items
                    that aren't important. Let your manger know what the
                    employees want.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section data-aos="fade-up" className="md:p-20 vh">
          <div className="md:flex md:flex-row-reverse bg-purple-300">
            <div className="flex justify-center p-10 md:w-2/4">
              <img
                className="self-center"
                src="https://via.placeholder.com/500x500?text=Cool+Product+Image2"
              />
            </div>
            <div className="md:w-2/4">
              <div className="md:w-9/12 lg:w-3/5 h-center v-offset">
                <div className=" self-center py-32 px-4 md:px-8 lg:px-12 bg-white shadow rounded">
                  <p className="font-medium text-purple-300">B.A.E.</p>
                  <p className="text-2xl font-extrabold pb-3">
                    Never sit in a meeting thinking, "this could have been an
                    email," again
                  </p>
                  <p className="text-gray-600">
                    We are putting information into your BAE (Been An Email)
                    items. Hey, maybe everything will be moved in there and we
                    can skip the meeting entirely
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section data-aos="fade-up" className="md:p-20 vh">
          <div className="md:flex bg-teal-300">
            <div className="flex justify-center p-10 md:w-2/4">
              <img
                className="self-center"
                src="https://via.placeholder.com/500x500?text=Cool+Product+Image1"
              />
            </div>
            <div className="md:w-2/4">
              <div className="md:w-9/12 lg:w-3/5 h-center v-offset">
                <div className=" self-center py-32 px-4 md:px-8 lg:px-12 bg-white shadow rounded">
                  <p className="font-medium text-teal-300">
                    Woah Meeting Page Example
                  </p>
                  <p className="text-2xl font-extrabold pb-3">Different</p>
                  <p className="text-gray-600">explanations</p>
                  <p className="text-gray-600">of</p>
                  <p className="text-gray-600">the</p>
                  <p className="text-gray-600">meeting</p>
                  <p className="text-gray-600">page</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col p-8">
          <p className="text-center p-4 text-3xl font-bold">
            Check us out now!
          </p>
          <a
            href="/signup"
            className="button is-medium is-rounded is-danger self-center"
          >
            Get started!
          </a>
        </section>
        <footer></footer>
      </div>
    </div>
  );
}

export default Landing;
