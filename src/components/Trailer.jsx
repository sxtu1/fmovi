import React from 'react';
import { IoChevronForward } from "react-icons/io5";

import trailer7 from '../assets/images/uploads/trailer7.jpg';
import trailer2 from '../assets/images/uploads/trailer2.jpg';
import trailer3 from '../assets/images/uploads/trailer3.png';
import trailer4 from '../assets/images/uploads/trailer4.png';
import trailer5 from '../assets/images/uploads/trailer5.jpg';
import trailer6 from '../assets/images/uploads/trailer6.jpg';

const Trailer = () => {
  return (
    <div className="trailers">
	<div className="container">
		<div className="row ipad-width">
			<div className="col-md-12">
				<div className="title-hd">
					<h2>in theater</h2>
					<a href="/" className="viewall">View all <IoChevronForward /></a>
				</div>
				<div className="videos">
				 	<div className="slider-for-2 video-ft">
				 		<div>
					    	<iframe className="item-video" src="" data-src="https://www.youtube.com/embed/1Q8fG0TtVAY"></iframe>
					    </div>
					    <div>
					    	<iframe className="item-video" src="" data-src="https://www.youtube.com/embed/w0qQkSuWOS8"></iframe>
					    </div>
					    <div>
					    	<iframe className="item-video" src="" data-src="https://www.youtube.com/embed/44LdLqgOpjo"></iframe>
					    </div>
					    <div>
					    	<iframe className="item-video" src="" data-src="https://www.youtube.com/embed/gbug3zTm3Ws"></iframe>
					    </div>
					    <div>
					    	<iframe className="item-video" src="" data-src="https://www.youtube.com/embed/e3Nl_TCQXuw"></iframe>
					    </div>
					    <div>
					    	<iframe className="item-video" src="" data-src="https://www.youtube.com/embed/NxhEZG0k9_w"></iframe>
					    </div>
						
						
					</div>
					<div className="slider-nav-2 thumb-ft">
						<div className="item">
							<div className="trailer-img">
								<img src={ trailer7 }  alt="photo by Barn Images" width="4096" height="2737" />
							</div>
							<div className="trailer-infor">
	                        	<h4 className="desc">Wonder Woman</h4>
	                        	<p>2:30</p>
	                        </div>
						</div>
						<div className="item">
							<div className="trailer-img">
								<img src={ trailer2 }  alt="photo by Barn Images" width="350" height="200" />
							</div>
							<div className="trailer-infor">
	                        	<h4 className="desc">Oblivion: Official Teaser Trailer</h4>
	                        	<p>2:37</p>
	                        </div>
						</div>
						<div className="item">
							<div className="trailer-img">
								<img src={ trailer6 } alt="photo by Joshua Earle" />
							</div>
							<div className="trailer-infor">
	                        	<h4 className="desc">Exclusive Interview:  Skull Island</h4>
	                        	<p>2:44</p>
	                        </div>
						</div>
						<div className="item">
							<div className="trailer-img">
								<img src={ trailer3 } alt="photo by Alexander Dimitrov" width="100" height="56" />
							</div>
							<div className="trailer-infor">
	                        	<h4 className="desc">Logan: Director James Mangold Interview</h4>	
	                        	<p>2:43</p>
	                        </div>
						</div>
						<div className="item">
							<div className="trailer-img">
								<img src={ trailer4 }  alt="photo by Wojciech Szaturski" width="100" height="56" />
							</div>
							<div className="trailer-infor">
	                        	<h4 className="desc">Beauty and the Beast: Official Teaser Trailer 2</h4>	
	                        	<p>2: 32</p>
	                        </div>	
						</div>
						<div className="item">
							<div className="trailer-img">
								<img src={ trailer5 }  alt="photo by Wojciech Szaturski" width="360" height="189" />
							</div>
							<div className="trailer-infor">
	                        	<h4 className="desc">Fast&Furious 8</h4>	
	                        	<p>3:11</p>
	                        </div>	
						</div>
					
					</div>
				</div>   
			</div>
		</div>
	</div>
</div>
  );
};

export default Trailer;
