import React from 'react';
import './Loading.css';

// TODO: change color scheme
const Loading = () => (
  <div className="loader">
    <div className="loader-container">
      <div className="group-1">
        <div className="line line1">
          <div className="dash dash-1 exp-40 div" />
          <div className="dash dash-2 exp-70 class-name" />
          <div className="dash dash-3 exp-110 class" />
          <div className="dash dash-4 exp-70 class" />
        </div>
        <div className="line line2">
          <div className="dash dash-1 exp-40 div" />
          <div className="dash dash-2 exp-70 class-name" />
          <div className="dash dash-3 exp-90 class" />
        </div>
        <div className="line line3">
          <div className="dash dash-1 exp-300 par" />
        </div>
        <div className="line line4">
          <div className="dash dash-1 exp-200 par" />
        </div>
        <div className="line line5">
          <div className="dash dash-1 exp-40 div" />
        </div>
        <div className="line line6">
          <div className="dash dash-1 exp-40 div" />
        </div>
      </div>

      <div className="group-2">
        <div className="line line1">
          <div className="dash dash-1 div" />
          <div className="dash dash-2 class-name" />
          <div className="dash dash-3 class" />
          <div className="dash dash-4 class" />
        </div>
        <div className="line line2">
          <div className="dash dash-1 div" />
          <div className="dash dash-2 exp70 class-name" />
          <div className="dash dash-3 exp90 class" />
        </div>
        <div className="line line3">
          <div className="dash dash-1 par" />
        </div>
        <div className="line line4">
          <div className="dash dash-1 par" />
        </div>
        <div className="line line5">
          <div className="dash dash-1 div" />
        </div>
        <div className="line line6">
          <div className="dash dash-1 div" />
        </div>
      </div>
    </div>
  </div>
);

export default Loading;
