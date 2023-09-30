import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import React from 'react';
// import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css'
import { PiAmazonLogoBold, PiBrainBold, PiRainbowBold, PiGlobeBold, PiDevicesBold } from "react-icons/pi";

export default function CustomizedTimeline() {
  return (
    <VerticalTimeline className='container'> 

        <VerticalTimelineElement
        className="vertical-timeline-element"
        date="August 2022-Present"
        iconStyle={{ background: '#F391A1'}}
        icon={<PiBrainBold style={{color: "white"}}/>}
        >
            <h3 className="vertical-timeline-element-title">Digital Humanities Curator</h3>
            <h4 className="vertical-timeline-element-subtitle">University of South Carolina</h4>
            <p className="vertical-timeline-element-paragraph">
                Worked with faculty and staff to digitize research into interactive websites using WordPress, R, HTML, and JavaScript. 
            </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element"
        date="June 2023-September 2023"
        iconStyle={{background:'#FBDAE0'}}
        icon={<PiAmazonLogoBold style={{color: "white"}}/>}
        >
            <h3 className="vertical-timeline-element-title">Solutions Architect Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Amazon Web Services</h4>
            <p className="vertical-timeline-element-paragraph">
                Curated an external workshop on AWS Workshop Studio detailing how to create and deploy a live streaming application with
                targeted ads using Amazon Web Services. Updated the UI of said application using ReactJS.
            </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element"
        date="August 2022-May 2023"
        iconStyle={{background:'#FBDAE0'}}
        icon={<PiRainbowBold style={{color: "white"}}/>}
        >
            <h3 className="vertical-timeline-element-title">Capstone Project</h3>
            <h4 className="vertical-timeline-element-subtitle">University of South Carolina</h4>
            <p className="vertical-timeline-element-paragraph">
                Worked with classmates to complete an interactive proof of concept for an original Android application using Figma and React Native.
            </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element"
        date="May 2022-August 2022"
        iconStyle={{background:'#FBDAE0'}}
        icon={<PiGlobeBold style={{color: "white"}}/>}
        >
            <h3 className="vertical-timeline-element-title">Global Data and Corporate Technology Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Teachers Insurance and Annuity Association of America</h4>
            <p className="vertical-timeline-element-paragraph">
                Ingested databases with Collibra in conjunction with MS SQL Server Manager and Oracle SQL Developer and created an interactive website to 
                address financial illiteracy in adolescents using WordPress.
            </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
            className="vertical-timeline-element"
            date="May 2021-July 2021"
            iconStyle={{background:'#FBDAE0'}}
            icon={<PiDevicesBold style={{color: "white"}}/>}
        >
            <h3 className="vertical-timeline-element-title">Applications Development Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">AgFirst Farm Credit Bank</h4>
            <p className="vertical-timeline-element-paragraph">
                Developed and evolved a complex process flow, business process models, and a multi-layered user interface for a desktop application
                using HTML, JavaScript, and the OutSystems application environment.
            </p>
        </VerticalTimelineElement>

        {/* To add extra line length to bottom: */}
        <div/>

    </VerticalTimeline>
  );
}