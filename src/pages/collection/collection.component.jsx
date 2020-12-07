import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.styles.scss';

const CollectionPage = (props) => {
	const { title, items } = props.collection && props.collection;
	return (
		<div className='collection-page'>
			<h2 className='title'>{title}</h2>
			<div className='items'>
				{
					items.map(item => <CollectionItem key={item.id} item={item} />)
				}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProp) => ({
	collection: selectCollection(ownProp.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);