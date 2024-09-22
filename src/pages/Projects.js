import "./Projects.css";
import Squiggle from "../assets/images/squiggle.png";

export default function Projects() {
  return (
    <>
      <div className="projectContainer">
        <div className="leftSquiggleContainer">
          <img src={Squiggle} className="leftSquiggle" />
        </div>
        <div className="leftContainer">
          <div className="opaque">
            <div className="background">
              <h1 className="projectName">
                <div>Quacking Up A Storm</div>
              </h1>
              <div className="textContainer">
                <p className="text">
                  Quacking Up A Storm is a casual adventure game in which the
                  player must explore a rainy cityscape to find, collect, and
                  keep up with lost ducklings to return them to their mother.
                  This game was created by me and 4 classmates in 2 months using
                  <a
                    href="https://www.unity.com/"
                    className="link"
                    target="_blank"
                  >
                    {" "}
                    Unity{" "}
                  </a>
                  . I headed UI design, UX design, project management, sound
                  design, and music design for this project. I collaborated on
                  movement mechanics, level design, and general game code.
                </p>
                <p className="text">
                  I created{" "}
                  <a
                    href="https://youtu.be/yqQfspEOlhk"
                    className="link"
                    target="_blank"
                  >
                    this game trailer
                  </a>{" "}
                  to demonstrate gameplay and mechanics.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightContainer">
          <div className="background">
            <h1 className="projectName">
              <div>Reimagining MyHealthSpace</div>
            </h1>
            <div className="textContainer">
              <p className="text">
                MyHealthSpace is the official website for the University of
                South Carolina’s Center of Student Health and Wellness Being. As
                part of a comprehensive study in human-computer interaction, two
                classmates and I re-envisioned the website through an
                interactive demo created with{" "}
                <a
                  href="https://www.figma.com/"
                  className="link"
                  target="_blank"
                >
                  Figma
                </a>
                . This demonstration was refined through research, multiple
                rounds of UI testing, and the incorporation of user feedback.
              </p>

              <p className="text">
                You can find the demo here{" "}
                <a
                  href="https://www.figma.com/proto/O2nHApQuMMSSDl50LKA9S1/MyHealthSpace-Prototype?node-id=117-1446&starting-point-node-id=1%3A2&t=X4GmXiJXkbXoFGMs-1"
                  className="link"
                  target="_blank"
                >
                  here
                </a>
                !
              </p>
            </div>
          </div>
        </div>

        <div className="leftContainer">
          <div className="background">
            <h1 className="projectName">Digital Campaigns Project</h1>
            <div className="textContainer">
              <p className="text">
                The primary objective of the Digital Campaigns Project is to
                establish an enduring source of data by archiving campaign
                websites belonging to state-level elected officials. To achieve
                this, I collaborated closely with Dr. Joshua Meyer-Gutbrod at
                the University of South Carolina. I undertook the task of
                conceptualizing, building, and refining a dedicated website for
                this initiative with{" "}
                <a
                  href="https://wordpress.com/"
                  className="link"
                  target="_blank"
                >
                  WordPress
                </a>
                , complemented by the utilization of{" "}
                <a
                  href="https://archive-it.org/"
                  className="link"
                  target="_blank"
                >
                  ArchiveIt
                </a>
                .
              </p>

              <p className="text">
                Find the project{" "}
                <a
                  href="http://digitalcampaignsproject.uofsccreate.org/"
                  className="link"
                  target="_blank"
                >
                  here
                </a>
                !
              </p>
            </div>
          </div>
        </div>

        <div className="rightContainer" paddingBottom="20px">
          <div className="opaque">
            <div className="background">
              <h1 className="projectName">Dreamscape</h1>
              <div className="textContainer">
                <p className="text">
                  Dreamscape is an Android application that brings users
                  together through a shared love of travel. This application was
                  developed in a year to be shared as a functional demo with our
                  clients. During this project, I communicated with a line of
                  business to gather requirements and feedback on development
                  work. I also headed user interface and experience design and
                  assisted in backend development.
                </p>
                <p className="text">
                  Find the GitHub{" "}
                  <a
                    href="https://github.com/sophiariley/dreamscape"
                    className="link"
                    target="_blank"
                  >
                    {" "}
                    here{" "}
                  </a>{" "}
                  and a video of the demo{" "}
                  <a
                    href="https://www.youtube.com/watch?v=fJXbCqg0gWo&feature=youtu.be"
                    className="link"
                    target="_blank"
                  >
                    here
                  </a>{" "}
                  (demo starts at 3:13).
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="squiggleContainer">
          <img src={Squiggle} className="squiggle" />
        </div>
      </div>
    </>
  );
}
