import React from "react";
import {Link} from 'react-router-dom';
import About from '../about/About'
import Blog from '../blog/Blog'
import Donate from '../donate/Donate'
import Home from '../home/Home'
import Contact from '../contact/Contact'
import Activities from '../activities/Activities'

const Navbar = () => {

          return (


                 <div className='main-navbar navbar'>
                   <Link className="active" to='/'>Home</Link>
                  <Link exact className="active" to="/about">About</Link>
                  <Link exact className="active" to="/programs">Programs</Link>
                  <Link exact className="active" to="/blog">Blog</Link>
                  <Link exact className="active" to="/donate">Donate</Link>
                </div>

          );
        };

export default Navbar;
