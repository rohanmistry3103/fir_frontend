// ContactUs.jsx
import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
	const developers = [
		{
			id: 1,
			name: 'Rohan Mistry',
			photo: 'john.jpg',
			contactInfo: 'rohan@example.com'
		},
		{
			id: 2,
			name: 'Varun Seth',
			photo: 'jane.jpg',
			contactInfo: 'abc@example.com'
		},
		{
			id: 3,
			name: 'Parth Singh',
			photo: 'alex.jpg',
			contactInfo: 'abc@example.com'
		},
		{
			id: 4,
			name: 'Aditya Vaishya',
			photo: 'emily.jpg',
			contactInfo: 'xyz@example.com'
		}
	]

	return (
		<div className="contactUs">
			<h1>Contact Us</h1>
			<div className="developers">
				{developers.map((developer) => (
					<div key={developer.id} className="developer">
						<img src={developer.photo} alt={developer.name} />
						<h2>{developer.name}</h2>
						<p>{developer.contactInfo}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default ContactUs
