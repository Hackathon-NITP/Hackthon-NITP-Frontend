import axios from 'axios';
import React, { useState } from 'react';

const Notify = () => {
	const [notifyData, setNotifyData] = useState({
		name: '',
		email: '',
		pincode: ''
	});

	const handleChange = (e, property) => {
		setNotifyData({
			...notifyData,
			[property]: e.target.value
		});
	};

	const handleSubmit = async e => {
		e.preventDefault();

		const res = await axios.post('/api/subscribe/subscribe', notifyData);
		if (res.status === 200) {
			alert('success');
		} else {
			alert('fail');
		}

		setNotifyData({
			name: '',
			email: '',
			pincode: ''
		});
	};

	return (
		<>
			<div id='loader'>
				<img src='./public/plaster-new.gif' alt='' />
			</div>

			<div id='content'>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center'
					}}>
					<div
						className='container-fluid card'
						style={{
							alignItems: 'center',
							flexDirection: 'column',
							paddingTop: '5vh',
							paddingBottom: '4vh',
							margin: '10vh 3vh 4vh'
						}}>
						<h4
							style={{
								textAlign: 'center',
								marginBottom: '6vh',
								fontFamily: 'Poppins, sans-serif',
								fontWeight: 'bolder',
								fontSize: '250%'
							}}>
							Get Notified for Free!
						</h4>
						<form>
							<div className='row container-fluid' style={{ margin: '0' }}>
								<div className='form-group col-lg-4 col-md-4 col-sm-12'>
									<label>Name</label>
									<input
										required
										type='text'
										className='form-control'
										id='name'
										pattern='[a-zA-Z][a-zA-Z ]+'
										placeholder='Jimmy Walter'
										onChange={e => handleChange(e, 'name')}
										value={notifyData.name}
									/>
								</div>
								<div className='form-group col-lg-4 col-md-4 col-sm-12'>
									<label>Email address</label>
									<input
										required
										type='email'
										className='form-control'
										id='email'
										aria-describedby='emailHelp'
										placeholder='abc@example.com'
										onChange={e => handleChange(e, 'email')}
										value={notifyData.email}
									/>
								</div>
								<div className='form-group col-lg-4 col-md-4 col-sm-12'>
									<label>Pincode</label>
									<input
										required
										type='text'
										className='form-control'
										id='pincode'
										pattern='[0-9]{6}'
										aria-describedby='emailHelp'
										placeholder='Pincode'
										onChange={e => handleChange(e, 'pincode')}
										value={notifyData.pincode}
									/>
								</div>
							</div>
							<div
								className='col-lg-12'
								style={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'center',
									paddingTop: '2vh'
								}}>
								<button
									className='btn btn-primary btn-md'
									style={{ marginRight: '1vh' }}
									onClick={e => handleSubmit(e)}>
									Notify Me!
								</button>
							</div>
						</form>
					</div>
				</div>

				<div>
					<h3
						style={{
							textAlign: 'center',
							fontFamily: 'Poppins, sans-serif'
						}}></h3>
				</div>
			</div>
		</>
	);
};

export default Notify;
