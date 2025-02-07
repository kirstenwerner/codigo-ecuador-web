import React, { Component } from "react"
import "./NavBar.css"
// Capitalized B in above link to make it work
import { Container } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { connect } from 'react-redux'

class Navbar extends Component {


		render(){

			let buttonStyle

			this.props.size === "mobile" ? buttonStyle = "nav-button-active nav-button-mobile" : buttonStyle = "nav-button-active nav-button-desktop"

		return (


				<Container className="nav-buttons">
					<Link className={buttonStyle} to="/">
						Home
					</Link>
					<Link exact className={buttonStyle} to="/about">
						About
					</Link>
					<Link exact className={buttonStyle} to="/services">
						Services
					</Link>
					<Link exact className={buttonStyle} to="/resources">
						Resources
					</Link>
					<Link exact className={buttonStyle} to="/blog">
						Blog
					</Link>
					<Link exact className={buttonStyle} to="/donate">
						Donate
					</Link>
				</Container>

		)
	}
}

const mapStateToProps = state => {  return {  size: state.size  } }

export default connect(mapStateToProps)(Navbar)
