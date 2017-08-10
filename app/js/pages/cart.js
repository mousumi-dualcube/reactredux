import React from 'react'
import { connect } from 'react-redux'
import { getTotal, getCartProducts } from '../reducers'

class Cart extends React.Component{
	constructor(props){
		super(props);		
	}

	render() {
		return(
			<div>Cart {console.log(this.props.products, this.props.total)} </div>
		);
	}
}


const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps
)(Cart)