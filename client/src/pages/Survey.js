import React, { useReducer, useRef, useState, useEffect } from "react";
import style from "../styles/survey.css";



function Survey() {

    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd61fF5zcjltQNqt7WlsDC0BZKIMhnYFxilLk1AfCOQOg.js";
        script.async = true;
      
        document.body.appendChild(script);
      
      
      }, []);

      return (
        <div className="survey" id="smcx-sdk"></div> 
       //   document.body.removeChild(script);
      )

    // return (
    //     <div>
            
    //      <script>

    //          (function(t,e,s,n){var o,a,c;t.SMCX=t.SMCX||[],e.getElementById(n)||(o=e.getElementsByTagName(s),a=o[o.length-1],c=e.createElement(s),c.type="text/javascript",c.async=!0,c.id=n,c.src=["https:"===location.protocol?"https://":"http://","widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd61fF5zcjltQNqt7WlsDC0BZKIMhnYFxilLk1AfCOQOg.js"].join(""),a.parentNode.insertBefore(c,a))})(window,document,"script","smcx-sdk");
    //          </script>
    //          <a style="font: 12px Helvetica, sans-serif; color: #999; text-decoration: none;" href=https://www.surveymonkey.com> Create your own user feedback survey </a>
    //     </div>
    //   );
}

export default Survey;


