import React from 'react'

class Product extends React.Component{
	constructor(props){
		super(props);		
	}

	render() {
		return (
			<div>
				<section className="item_object col-md-3" data-pro_id={this.props.data.id}>
					<img className="img-responsive" src={require("../../images/dress2.jpg")} alt="green-retro-tv-2" />
					<h4>{this.props.data.title}</h4>
					<span className="shop_price">
						<span className="amount">{this.props.data.price}</span>
						<input type="number" className="text-center shop_quantity_change" />
					</span>
					<button data-quantity="1" onClick={this.props.onAddToCartClicked} className="btn btn-primary">Add to cart</button>
				</section>
			</div>
		);
	}
}

export default Product;