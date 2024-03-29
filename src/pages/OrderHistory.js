import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import './OrderHistory.css';
import { useStateValue } from '../hooks/StateProvider';
import { db } from '../hooks/firebase';
import Order from '../components/Order';

function OrderHistory() {
	const [{ user }] = useStateValue();

	const [orders, setOrders] = useState([]);

	useEffect(() => {
		if (user) {
			const colRef = collection(db, 'users', user.id, 'orders');
			const orderedRef = query(colRef, orderBy('created', 'desc'));
			onSnapshot(orderedRef, (querySnapshot) => {
				setOrders(
					querySnapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				);
			});
			console.log(colRef);
		} else {
			setOrders([]);
		}
	}, [user]);

	return (
		<div className='orderHistory'>
			<h1>Your Orders</h1>
			<div className='orderHistory--order'>
				{orders.map((order) => (
					<Order key={order.id} order={order} />
				))}
			</div>
		</div>
	);
}

export default OrderHistory;
