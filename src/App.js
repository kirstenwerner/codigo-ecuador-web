import React, { Component } from "react"
import { connect } from 'react-redux'
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import { Sticky} from "semantic-ui-react"
import About from "./features/about/About"
import Blog from "./features/blog/Blog"
import Classes from "./features/services/classes/Classes"
import CodingContainer from "./features/resources/coding/CodingContainer"
import Donate from "./features/donate/Donate"
import Header from './features/header/Header'
import Home from "./features/home/Home"
import Mentorship from './features/services/mentorship/Mentorship'
import Partners from "./features/about/partners/Partners"
import ResearchContainer from './features/resources/research/ResearchContainer'
import Services from './features/services/Services'
import Team from "./features/about/team/Team"


class App extends Component {
	constructor(props) {
    super(props)

		this.state = {
				width: window.innerWidth,
				size: "",
			}
		}

		componentDidMount() {
			window.addEventListener('resize', this.handleWindowSizeChange);
		}

		componentWillUnmount() {
			window.removeEventListener('resize', this.handleWindowSizeChange);
		}

		handleWindowSizeChange = () => {
			this.setState({ width: window.innerWidth });

			let isMobile
			const width = this.state.width
			width <= 700 ? isMobile = true : isMobile = false

			let size
			isMobile ? size = "mobile" :  size = "desktop"
			this.setState({ size: size })

			this.props.setSize(this.state.size)

		}

		render(){




//render if this.state.language === EN ---> language = "EN"
	return (
		<Router>
			<div>
				<Header/>

				<Switch>
					<Route exact path="/about" render={() => <About />}></Route>
					<Route exact path="/blog" render={() => <Blog />}></Route>
					<Route exact path="/services/classes" render={() => <Classes />}></Route>
					<Route exact path="/resources" render={() => <CodingContainer />}></Route>
					<Route exact path="/donate" render={() => <Donate />}></Route>
					<Route exact path="/" render={() => <Home />}></Route>
					<Route exact path="/services/mentorship" render={() => <Mentorship />}></Route>
					<Route exact path="/about/partners" render={() => <Partners />} ></Route>
					<Route exact path="/resources/research" render={() => <ResearchContainer />}></Route>
					<Route exact path="/services" render={() => <Services />}></Route>
					<Route exact path="/about/team" render={() => <Team />} ></Route>
				</Switch>

			</div>
    </Router>
	)

		}

}

const mapStateToProps = state => {  return {  size: state.size  } }

const mapDispatchToProps = dispatch => ({ 
	setSize: setSize => dispatch({type: "SET_SIZE", setSize})   }) 


export default connect(mapStateToProps, mapDispatchToProps)(App)
