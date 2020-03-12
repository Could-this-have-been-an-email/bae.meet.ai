import React, { useEffect } from 'react';
import './style.css';
import Navbar from '../../components/Navbar';
import AOS from 'aos';
import Logo from './Screen Shot 2020-03-10 at 2.33.50 PM.jpg';
import VoteLogo from './Screen Shot 2020-03-10 at 2.36.58 PM.jpg';
import BaeLogo from './Screen Shot 2020-03-10 at 2.44.32 PM.jpg';
import UserLogo from './Screen Shot 2020-03-10 at 2.55.51 PM.jpg';
import Responsive from './responsive.jpg';

function Landing() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div>
        <section className="py-10 px-4 mainheight first-color">
          <div className="md:flex md:px-12 md:mx-16">
            <div className="md:w-2/5 md:py-20">
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
                className="text-6xl pb-6 text-white"
              >
                Build a <strong className="text-white">better</strong> meeting
              </p>
              <p
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="600"
                className="text-xl text-gray-300	pb-6 "
              >
                We are building better, efficient, and on-topic meetings. Do you
                ever leave a meeting and think, "That could have been an email?"
                Same. So we are changing things!
              </p>
              <a
                href="/signup"
                className="button is-warning"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="400"
              >
                Sign Up
              </a>
            </div>
            <div className="flex justify-center md:w-3/5 px-8">
              <img className="self-center " src={Logo} alt="hero example" />
            </div>
          </div>
        </section>

        <section data-aos="fade-up" className="md:p-20 vh">
          <div className="md:flex second-color">
            <div className="flex justify-center p-10 md:w-2/4">
              <img alt="example 1" className="self-center" src={VoteLogo} />
            </div>
            <div className="md:w-2/4">
              <div className="md:w-9/12 lg:w-3/5 h-center v-offset">
                <div className=" self-center py-32 px-4 md:px-8 lg:px-12 bg-white shadow rounded">
                  <p className="font-medium second-text">Save Time</p>
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
          <div className="md:flex md:flex-row-reverse third-color">
            <div className="flex justify-center p-10 md:w-2/4">
              <img alt="example 2" className="self-center" src={BaeLogo} />
            </div>
            <div className="md:w-2/4">
              <div className="md:w-9/12 lg:w-3/5 h-center v-offset">
                <div className=" self-center py-32 px-4 md:px-8 lg:px-12 bg-white shadow rounded">
                  <p className="font-medium third-text">B.A.E.</p>
                  <p className="text-2xl font-extrabold pb-3">
                    Never sit in a meeting thinking, "this could have been an
                    email," again
                  </p>
                  <p className="text-gray-600">
                    We are putting information into your BAE (Been An Email)
                    items. Hey, maybe everything will be moved in there and we
                    can skip the meeting entirely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section data-aos="fade-up" className="md:p-20 vh">
          <div className="md:flex fourth-color">
            <div className="flex justify-center p-10 md:w-2/4">
              <img alt="example 3" className="self-center" src={Responsive} />
            </div>
            <div className="md:w-2/4">
              <div className="md:w-9/12 lg:w-3/5 h-center v-offset">
                <div className=" self-center py-32 px-4 md:px-8 lg:px-12 bg-white shadow rounded">
                  <p className="font-medium fourth-text">Responsive!</p>
                  <p className="text-2xl font-extrabold pb-3">
                    Use on your phone!
                  </p>
                  <p className="text-gray-600">
                    The website is fully mobile responsive so you can check on
                    your meetings and turn them all to emails anywhere you are.
                  </p>
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
            className="button is-medium is-rounded is-warning self-center"
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
