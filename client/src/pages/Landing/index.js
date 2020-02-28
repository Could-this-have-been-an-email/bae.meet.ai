import React, { useState, useEffect } from 'react';
import Button from '../../components/button';
import './style.css';
import MeetingHeader from '../../components/meetingheader';

function Landing() {
  return (
    <div>
      <MeetingHeader></MeetingHeader>
      <section className="b py-10 px-4 min-h-screen">
        <div className="md:flex md:px-12 md:mx-16">
          <div className="md:w-2/5 md:py-20 b">
            <p className="text-6xl pb-6">
              Build a <strong>better</strong> meeting
            </p>
            <p className="text-xl text-gray-600	pb-6 ">
              We are building better, efficient, and on-topic meetings. Do you
              ever leave a meeting and think, "That could have been an email?"
              Same. So we are changing things!
            </p>
            <Button>Sign Up</Button>
          </div>
          <div className="flex justify-center md:w-3/5 b">
            <img
              className="self-center"
              src="https://via.placeholder.com/550x300?text=Hero+Image"
            />
          </div>
        </div>
      </section>

      <section className="md:flex  md:mx-24 min-h-screen">
        <div className="flex justify-center md:w-2/4 b">
          <img
            className="self-center"
            src="https://via.placeholder.com/500x500?text=Cool+Product+Image1"
          />
        </div>
        <div className="md:w-2/4 md:py-20 flex justify-center b">
          <div className="b self-center p-6">
            <p className="text-5xl pb-6">
              Spend your meetings talking about what you want to talk about
            </p>
            <p className="text-xl text-gray-600">
              Upvote on items that you want to discuss. Downvote the items that
              aren't important. Let your manger know what the employees want.
            </p>
          </div>
        </div>
      </section>
      <section className="md:flex md:flex-row-reverse md:mx-24 min-h-screen">
        <div className="flex justify-center md:w-2/4 b">
          <img
            className="self-center"
            src="https://via.placeholder.com/500x500?text=Cool+Product+Image2"
          />
        </div>
        <div className="md:w-2/4 md:py-20 flex justify-center b">
          <div className="b self-center p-6">
            <p className="text-5xl pb-6">
              Never sit in a meeting thinking, "this could have been an email,"
              again
            </p>
            <p className="text-xl text-gray-600">
              We are putting information into you BAE (Been An Email) items.
              Hey, maybe everything will be moved in there and we can skip the
              meeting entirely
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
