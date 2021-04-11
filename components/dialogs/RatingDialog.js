import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { StarOutlined } from '@ant-design/icons';
import Router, { useRouter } from 'next/router';

function RatingDialog({ children, handleSubmitRating, slug }) {
	const { user } = useSelector((state) => ({ ...state }));
	const [ modalVisible, setModalVisible ] = useState(false);
	const router = useRouter();

	const handleModal = (e) => {
		if (user && user.token) {
			setModalVisible(true);
		} else {
			// IMPROVEMENT TO BE DONE: save the current pathname to redux and in login page check after login if the previous pathname is there and redirect there instead
			router.push({
				pathname: '/auth/login',
				query: { from: `item/${slug}` }
			});
		}
	};

	return (
		<React.Fragment>
			<a onClick={handleModal} className="btn btn-sm btn-dark text-white">
				{user ? 'Évaluer' : 'Connecter vous pour évaluer'}
			</a>
			<Modal
				title="Évaluer cet article"
				centered
				visible={modalVisible}
				onOk={() => {
					setModalVisible(false);
					handleSubmitRating();
					toast.success('Nous vous remercions pour votre évalution.');
				}}
				onCancel={() => {
					setModalVisible(false);
				}}
			>
				{children}
			</Modal>
		</React.Fragment>
	);
}

export default RatingDialog;
