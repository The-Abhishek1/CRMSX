import React from "react";
import ab from "./About.module.css";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function About(props) {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/settings");
  };
  const handleFront = () => {
    navigate("/contact");
  };

  return (
    <>
      <div className={ab.whole} style={props.theme1}>
        <ArrowBack
          className={ab.back}
          onClick={handleBack}
          style={props.theme1}
        />
        <ArrowForward
          className={ab.front}
          onClick={handleFront}
          style={props.theme1}
        />
        <div className={ab.container} style={props.theme2}>
          <h2 className={ab.h2}>About the Crime Reporting Management System</h2>
          <p className={ab.p}>
            Welcome to the Crime Reporting Management System, an innovative and
            comprehensive platform designed to revolutionize the way
            communities, law enforcement agencies, and individuals collaborate
            to ensure public safety and combat crime. Our mission is to create a
            safer, more secure environment for everyone by providing an
            efficient, user-friendly, and transparent system for reporting and
            managing criminal incidents.
          </p>
          <h2 className={ab.h2}>Our Vision</h2>
          <p className={ab.p}>
            We envision a world where crime is minimized through prompt
            reporting, efficient data analysis, and proactive law enforcement,
            all facilitated by our state-of-the-art technology. Our vision is to
            empower communities and law enforcement agencies to work together
            seamlessly, sharing information and resources to prevent and solve
            crimes effectively.
          </p>
          <h2 className={ab.h2}>Key Features and Functions</h2>
          <ul>
            <li>
              <h4 className={ab.h4}>User-Friendly Reporting: </h4>
              <span>
                Our system is designed for ease of use. Anyone can report a
                crime or suspicious activity through our platform, whether
                you're a concerned citizen or a law enforcement officer.
              </span>
            </li>
            <li>
              <h4 className={ab.h4}>Incident Tracking:</h4>
              <span>
                Track the progress of reported incidents in real-time. Stay
                updated on the status of investigations and responses.
              </span>
            </li>
            <li>
              <h4 className={ab.h4}>Data Analysis: </h4>
              <span>
                Our system collects and analyzes data, helping law enforcement
                agencies identify crime patterns, allocate resources more
                effectively, and prevent future incidents
              </span>
            </li>
            <li>
              <h4 className={ab.h4}>Community Engagement:</h4>
              <span>
                We encourage community involvement in crime prevention. Connect
                with your neighbors, participate in neighborhood watch programs,
                and receive safety alerts.
              </span>
            </li>
            <li>
              <h4 className={ab.h4}>Anonymous Reporting:</h4>
              <span>
                We respect your privacy and offer anonymous reporting options to
                encourage individuals who may be hesitant to come forward.
              </span>
            </li>
            <li>
              <h4 className={ab.h4}>Emergency Services Integration:</h4>
              <span>
                Seamlessly connect with emergency services, ensuring rapid
                response when needed most
              </span>
            </li>
            <li>
              <h4 className={ab.h4}>Comprehensive Reporting:</h4>
              <span>
                Report a wide range of incidents, from theft and vandalism to
                suspicious activity and emergencies.
              </span>
            </li>
          </ul>
          <h2 className={ab.h2}>
            Why Choose the Crime Reporting Management System?
          </h2>
          <ul>
            <li>
              <h4 className={ab.h4}>Efficiency:</h4>
              <span>
                Our system streamlines the reporting process and ensures law
                enforcement agencies receive accurate and timely information.
              </span>
            </li>
            <li>
              <h4 className={ab.h4}>Community Safety:</h4>
              <span>
                By enabling active community involvement, we contribute to safer
                neighborhoods and a better quality of life.
              </span>
            </li>
            <li>
              <h4 className={ab.h4}>Transparency:</h4>
              <span>
                We believe in transparency and accountability. Our system
                promotes trust between communities and law enforcement.
              </span>
            </li>
            <li>
              <h4 className={ab.h4}>Data-Driven Decisions:</h4>
              <span>
                Our data analysis tools help agencies make informed decisions,
                allocate resources effectively, and target crime hotspots.
              </span>
            </li>
            <li>
              <h4 className={ab.h4}>24/7 Accessibility:</h4>
              <span>
                You can report incidents and access the system at any time, day
                or night, making it convenient and reliable.
              </span>
            </li>
          </ul>
          <h2 className={ab.h2}>Get Involved</h2>
          <p className={ab.p}>
            Join us in creating a safer world. Together, we can combat crime,
            ensure justice, and build stronger, more secure communities. Whether
            you're a concerned citizen, a law enforcement agency, or a local
            government, the Crime Reporting Management System is your partner in
            public safety.
          </p>
          <br />
          <p className={ab.p}>
            Contact us today to learn more and become part of the solution. Your
            safety is our priority, and together, we can make a difference.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
