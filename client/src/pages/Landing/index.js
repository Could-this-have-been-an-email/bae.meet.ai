import React, { useState, useEffect } from 'react';
import Button from '../../components/button';
import './style.css';
import '../../styles/meeting.css';
import MeetingHeader from '../../components/meetingheader';

function Landing() {
  return (
    <body>
    <div class="backgroung-wrap">
        <img id="video-bg-elem" src="../bg_img.jpg"></img>
    </div>
    <div class="content">
      <MeetingHeader></MeetingHeader>
      <section className="b py-10 px-4 h-screen">
        <div className="md:flex px-12 mx-5">
          <div className="b md:w-2/5 py-20">
            <p className="text-6xl">
              Build a <strong>better</strong> meeting
            </p>
            <p className="text-xl text-gray-600	pb-6 ">
              We are building better, efficient, and on-topic meetings. Do you
              ever leave a meeting and think, "That could have been an email?"
              Same. So we are changing things!
            </p>
            <Button>Sign Up</Button>
          </div>
          <div className="b w-3/5">
            <img
              className="align-middle"
              src="https://via.placeholder.com/550x300?text=Hero+Image"
            />
          </div>
        </div>
      </section>
      <div className="h-screen b"></div>
      {/* <MeetingFooter></MeetingFooter> */}
    </div>
  </body>
  );
}

export default Landing;
