import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
import { Editor } from "@tinymce/tinymce-react";
import Style from "../styles/transcript.css";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};
const Dictaphone = ({
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  return (
    <>
      <div className="font-extrabold mind_crawl text-white pl-3">Meeting Transcript:</div>
      <div className="deep_blue p-1">
        <div className="scrolling-touch overflow-auto h-screen w-full transcript bg-white">
          {transcript}
        </div>
      </div>
    </>
  );
};
Dictaphone.propTypes = propTypes;
export default SpeechRecognition(Dictaphone);
