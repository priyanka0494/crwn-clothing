import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';
// import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
	console.log("Collection", collection);
	return (
		<div className='collection-page'>
			<h2>COLLECTION PAGE</h2>
		</div>
	);
};

const mapStateToProps = (state, ownProp) => ({
	collection: selectCollection(ownProp.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);