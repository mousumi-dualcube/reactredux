import React from 'react'
import { connect } from 'react-redux'
import { getAllProducts } from '../actions'

class Home extends React.Component{
	constructor(props){
		super(props);		
	}

	render() {
		console.log(this.props.products);
		return (
			<div>
				Home
			</div>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  }
};

export default connect(
  mapStateToProps
)(Home);