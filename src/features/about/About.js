import React from "react"
import "./About.css"
import LeafPic from "./LeafPic"
import OurStory from "./OurStory"
import CeoLetter from "./ceoLetter"

const About = () => {
	return (
		<>
			<LeafPic />
			<div className="ourStory">
				<OurStory />
			</div>
			<div className="big ceoLetter">
				<CeoLetter />
			</div>
		</>
	)
}

export default About
