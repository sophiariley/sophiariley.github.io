import "./Projects.css";
import Squiggle from "../assets/images/squiggle.png"

export default function Projects() {
    return (
        <>
            <div className="projectContainer">
                
                <div className="leftSquiggleContainer">
                    <img src={Squiggle} className="leftSquiggle"/>
                </div>
                <div className="leftContainer">
                    <div className="opaque">
                        <div className="background">
                            <h1 className="projectName">
                                <div>James T. McCain Day</div> 
                                <div>Planner</div>
                            </h1>
                            <div className = "textContainer">
                                <p className="text">
                                    James T. McCain was an educator, civil rights leader, Field Director in CORE, and member of the NAACP. The South Caroliniana Library transcribed McCain's day planner from 1961, which detailed the work
                                    he accomplished for the betterment of Civil Rights in the nation and state during the year. I delivered a new
                                    visual identity for this collection by building a website for it using <a href="https://scalar.me/anvc/scalar/" 
                                    className="link" target="_blank">Scalar</a>.
                                </p>

                                <p className="text">
                                    This project is still a work in progress. You can find it in it's current state <a href="http://grahamduncan.usccreate.org/james-t-mccain/home/index" className="link" 
                                    target="_blank">here</a>!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightContainer">
                    <div className="background">
                        <h1 className="projectName">Digital Campaigns Project</h1>
                        <div className = "textContainer">
                            <p className="text">
                                The primary objective of the Digital Campaigns Project is to establish an enduring source of data by archiving 
                                campaign websites belonging to state-level elected officials. To acheive this, I collaborated closely with Dr.
                                Joshua Meyer-Gutbrod at the University of South Carolina. I undertook the task of conceptualizing, building, and
                                refining a dedicated website for this initiative with <a href="https://wordpress.com/" className="link" 
                                target="_blank">WordPress</a>, complemented by the utilization of <a href="https://archive-it.org/" className="link"
                                 target="_blank">ArchiveIt</a>.
                            </p>

                            <p className="text">
                                Find the project <a href="http://digitalcampaignsproject.uofsccreate.org/" className="link" target="_blank"
                                >here</a>!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="leftContainer">
                    <div className="background">
                        <h1 className="projectName">Dreamscape</h1>
                        <div className="textContainer">
                            <p className="text">
                                Dreamscape is an Android application focused on bringing users together thorugh a shared love of travel. During 
                                this project, I communicated with line of business to gather requirements and feedback on development work. I also
                                headed user interface and experience design and assisted in backend development.
                            </p>
                            <p className="text">
                                Find the project <a href="https://github.com/sophiariley/dreamscape" className="link" target="_blank">here</a>!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="rightContainer" paddingBottom="20px">
                    <div className="opaque">
                        <div className="background">

                            <h1 className="projectName">Smart Up, Save Up</h1>
                            <div className="textContainer">
                                <p className="text">
                                    Smart up, Save Up is a web application created with the aim of tackling financial ignorance among teenagers. 
                                    It achieves this by involving them in a week-long educational program. This initiative was brought to
                                    life during a collaborative effort at a hackathon, where I worked alongside fellow peers.
                                </p>
                                <p className="text">
                                    Find the project <a href="http://smartupsaveup.weebly.com/" className="link" target="_blank">here</a>!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="squiggleContainer">
                    <img src={Squiggle} className="squiggle"/>
                </div>
            </div>
        </>
    )
}