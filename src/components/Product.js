import React from 'react';
import './Product.css';
import { useStateValue } from '../hooks/StateProvider';

function Product({ id, image, title, author, rating, price, coverType }) {
	const [{ basket }, dispatch] = useStateValue();
	const addToBasket = () => {
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id: id,
				image: image,
				title: title,
				author: author ? author : '',
				rating: rating,
				price: price,
				coverType: coverType ? coverType : '',
			},
		});
	};

	return (
		<div className='product' id={id}>
			<img src={image} />
			<div className='product--info'>
				<p>{title}</p>
				<small>{author}</small>
				<div className='product--rating'>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>⭐</p>
						))}
				</div>
				<p className='product--price'>
					<small>€</small>
					<strong>{price}</strong>
				</p>
				<small>{coverType}</small>
			</div>
			<button className='product--btn' onClick={addToBasket}>
				Add to Basket
			</button>
		</div>
	);
}

export default Product;
