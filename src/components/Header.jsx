import React from 'react';
import Logo from '../assets/images/logo1.png';
import { IoChevronDown } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";

const Header = () => {
  return (
    <header className="ht-header">
	<div className="container">
		<nav className="navbar navbar-default navbar-custom">
				<div className="navbar-header logo">
				    <div className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					    <span className="sr-only">Toggle navigation</span>
					    <div id="nav-icon1">
							<span></span>
							<span></span>
							<span></span>
						</div>
				    </div>
				    <a href="/"><img className="logo" src={Logo} alt="" width="119" height="58" /></a>
			    </div>
				<div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav flex-child-menu menu-left">
						<li className="hidden">
							<a href="/page-top">.</a>
						</li>
						<li className="dropdown first">
							<a href="/" className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown">
							Home <IoChevronDown aria-hidden="true" />
							</a>
							<ul className="dropdown-menu level1">
								<li><a href="/">Home 01</a></li>
								<li><a href="/">Home 02</a></li>
								<li><a href="/">Home 03</a></li>
							</ul>
						</li>
						<li className="dropdown first">
							<a href="/" className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
							movies<IoChevronDown aria-hidden="true" />
							</a>
							<ul className="dropdown-menu level1">
								<li className="dropdown">
									<a href="/" className="dropdown-toggle" data-toggle="dropdown" >Movie grid<IoArrowForward /></a>
									<ul className="dropdown-menu level2">
										<li><a href="/">Movie grid</a></li>
										<li><a href="/">movie grid full width</a></li>
									</ul>
								</li>			
								<li><a href="/">Movie list</a></li>
								<li><a href="/">Movie single</a></li>
								<li className="it-last"><a href="/">Series single</a></li>
							</ul>
						</li>
						<li className="dropdown first">
							<a href="/" className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
							celebrities <IoChevronDown aria-hidden="true" />
							</a>
							<ul className="dropdown-menu level1">
								<li><a href="/">celebrity grid 01</a></li>
								<li><a href="/">celebrity grid 02 </a></li>
								<li><a href="/">celebrity list</a></li>
								<li className="it-last"><a href="/">celebrity single</a></li>
							</ul>
						</li>
						<li className="dropdown first">
							<a  href="/" className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
							news <IoChevronDown aria-hidden="true" />
							</a>
							<ul className="dropdown-menu level1">
								<li><a href="/">blog List</a></li>
								<li><a href="/">blog Grid</a></li>
								<li className="it-last"><a href="/">blog Detail</a></li>
							</ul>
						</li>
						<li className="dropdown first">
							<a href="/" className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
							community <IoChevronDown aria-hidden="true" />
							</a>
							<ul className="dropdown-menu level1">
								<li><a href="/">user favorite grid</a></li>
								<li><a href="/">user favorite list</a></li>
								<li><a href="/">user profile</a></li>
								<li className="it-last"><a href="/">user rate</a></li>
							</ul>
						</li>
					</ul>
					<ul className="nav navbar-nav flex-child-menu menu-right">
						<li className="dropdown first">
							<a href="/" className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
							pages <IoChevronDown aria-hidden="true" />
							</a>
							<ul className="dropdown-menu level1">
								<li><a href="/">Landing</a></li>
								<li><a href="/">404 Page</a></li>
								<li className="it-last"><a href="/">Coming soon</a></li>
							</ul>
						</li>                
						<li><a href="/">Help</a></li>
						<li className="loginLink"><a href="/">LOG In</a></li>
						<li className="btn signupLink"><a href="/">sign up</a></li>
					</ul>
				</div>
	    </nav>
	    <div className="top-search">
	    	<select>
				<option value="united">TV show</option>
				<option value="saab">Others</option>
			</select>
			<input type="text" placeholder="Search for a movie, TV Show or celebrity that you are looking for" />
	    </div>
	</div>
</header>
  );
};

export default Header;
