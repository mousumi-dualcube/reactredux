import React from 'react'
import { connect } from 'react-redux'
import {addToCart} from '../actions'
import Product from './product'

class Home extends React.Component{
	constructor(props){
		super(props);		
	}

	render() {
		var d = new Date();
		d.setMonth(d.getMonth() - 1);
		d.setHours(0, 0, 0);
		d.setMilliseconds(0);

		return (
			<div className="row">
				<div class="col-md-12">
					<h1>Home</h1>				
	            	<div class="col-md-12 most_popular">
                        <div><h3>Recent Products</h3></div>
                        <div>
	                        {
	                        	(this.props.products.length > 0) ?
	                        		this.props.products.map((element, index) => {
	                        			if(element.createdAt > (d/1000|0)) {
	                        				return <Product key={index} data={element} onAddToCartClicked={() => this.props.addToCart(element.id)}/>
	                        			}
	                        		})
	                        	: ''
	                        }
                        </div>
                    </div>
	            </div>
	        </div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  }
}

export default connect(
  mapStateToProps,
  { addToCart }
)(Home);