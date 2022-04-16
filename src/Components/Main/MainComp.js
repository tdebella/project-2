import React from "react";
import "./MainComp.css";
// import { FaSupervisor, FaTeam, FaKarma, FaCalculator } from "react-icons/fa";

function MainComp() {
  return (
    <div className="box-wrapper">
      <div className="box box-1">
        <h3>Supervisor</h3>
        <p>Monitors activity to identify project roadblocks</p>
        <img src="/images/icon-supervisor.svg" alt="icon-supervisor" />
      </div>
      <div className="box box-2">
        <h3>Team builder</h3>
        <p>
          Scans our talent network to create the optimal team for your project
        </p>
        <img src="/images/icon-team-builder.svg" alt="icon-team" />
      </div>
      <div className="box box-3">
        <h3>Karma</h3>
        <p>Regularly evaluates our talent to ensure quality</p>
        <img src="/images/icon-karma.svg" alt="icon-Karma" />
      </div>
      <div className="box box-4">
        <h3>Calculator</h3>
        <p>Uses data from past projects to provide better delivery estimates</p>
        <img src="/images/icon-calculator.svg" alt="icon-calculator" />
      </div>
    </div>
  );
}

export default MainComp;
