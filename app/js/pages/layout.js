import React from 'react'
import {Link} from 'react-router'
import '../../css/style.css'


class Layout extends React.Component {
	render() {
		return (
			<div>
				<div className="header_div">        
	        		<header className="desktop_style_index">
						<div className="header_menu">
							<div className="container">
								<div className="row">
									<div className="col-md-8 col-sm-6 col-xs-6 pull-left">
										<label className="logo_label">Roxx &amp; Co.</label>
									</div>
									<div className="col-md-4 col-sm-6 col-xs-6 pull-right">
										<div className="row">
											<div className="col-md-6 col-sm-6 col-xs-6 pull-left border-right">
												<form className="navbar-form menu_navbar_form" role="search">
													<div className="input-group">
														<input type="text" style={{"visibility" : "hidden"}} className="form-control" placeholder="Search" name="srch-term" id="srch-term" />
														<div className="input-group-btn">
															<button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
														</div>
													</div>
												</form>
											</div>
											<div className="col-md-6 col-sm-6 col-xs-6 pull-left  border-right login_register">
												<label>Login or Register</label>
											</div>      
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="header_menu_container header_menu_second">
							<nav className="navbar yamm navbar-default green_index_nav ">
								<div className="container">
									<div className="row">
										<div className="navbar-header">
											<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#rox_nav_menu_id" aria-expanded="false">
													<span className="icon-bar"></span>
													<span className="icon-bar"></span>
													<span className="icon-bar"></span>
											</button>  
										</div>          
										<div className="collapse navbar-collapse" id="rox_nav_menu_id" aria-expanded="true">
											<ul className="nav navbar-nav">
												<li className="active" ><Link to="#">Home</Link></li>
												<li><Link to="shop">Shop</Link></li>
												<li><Link to="cart">Cart</Link></li> 
												<li><Link to="checkout">Checkout</Link></li> 
											</ul>
										</div>
									</div>
								</div>
							</nav>
						</div>
	        		</header>        					
				</div>
				<div className="body_div">
	    			<div className="container">
	        			<div className="row">
	        				{this.props.children}
	        			</div>
	        		</div>
	        	</div>	
				<div class="footer_div">
					<footer>
						<div class="footer_bg">
							<div class="container">
								<div class = "row" >
									<div class="col-md-4 col-sm-12 col-xs-12">
										<div class="text_widget">
											<label>Text Widget</label>
											<p>Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
										</div>
									</div>
									<div class="col-md-4 col-sm-12 col-xs-12">
										<div class="twitter_widget">
											<label>Twitter Widget</label>
											<p>ericafustero Why thank you. Your work looks awesome by the way! @treemelody</p>
											<p>19 days ago</p>
											<p>ericafustero Why thank you. Your work looks awesome by the way! @treemelody</p>
											<p>20 days ago</p>
										</div>
									</div>
									<div class="col-md-4 col-sm-12 col-xs-12">
										<div class="flicker_image" ><label>Flicker widget</label></div>
										<div class="flicker_image" >
											<span><img class="img-responsive" src={ require("../../images/flicker.png")} alt="Chania"  /></span>
											<span><img class="img-responsive" src={ require("../../images/flicker.png")} alt="Chania"  /></span>        
											<span><img class="img-responsive" src={ require("../../images/flicker.png")} alt="Chania"  /></span>
										</div>
										<div class="flicker_image">
											<span><img class="img-responsive" src={ require("../../images/flicker.png")} alt="Chania"  /></span>
											<span><img class="img-responsive" src={ require("../../images/flicker.png")} alt="Chania"  /></span>        
											<span><img class="img-responsive" src={ require("../../images/flicker.png")} alt="Chania"  /></span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</footer>
					<footer>
						<div class="footer_bg3">
							<div class="container">
								<div class="row footer_second" >
									<div class="col-md-12 col-sm-12 col-xs-12">
										<div class="row footer_second" >
											<div class="col-md-9 col-sm-12 col-xs-12">
												<input type="email" class="newsletter_email" placeholder="Enter email for newsletter"/>
												<button class="newsletter_btn">></button>
											</div>
											<div class="col-md-3 col-sm-12 col-xs-12 social_icons">
												<i class="fa fa-facebook"></i>
												<i class="fa fa-google-plus"></i>
												<i class="fa fa-tumblr"></i>
												<i class="fa fa-linkedin"></i>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</footer>
					<footer>
						<div class="footer_bg2">
							<div class="container">
								<div class="row footer_third" >
									<div class="col-md-7 col-sm-12 col-xs-12">
										<p>Copyright &copy; Roxx &amp; Co. 2013.<br/>Designed by Mousumi. </p>
									</div>
									<div class="col-md-5 col-sm-12 col-xs-12">
										<nav class="navbar" role="navigation">
											<ul class = "nav navbar-nav" id="footer_menu">
												<li><a href = "#">Home</a></li>
												<li><a href = "#">Support</a></li>
												<li><a href = "#">Term &amp; Conditions</a></li>
												<li><a href = "#">Faqs</a></li>
												<li><a href = "#">Contact us</a></li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
						</div>						    
					</footer>
	    		</div>  
	    	</div> 
		);
	}
}

export default Layout;