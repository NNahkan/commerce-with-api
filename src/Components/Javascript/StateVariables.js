const savedUsers = {
	jason: {
		 firstName: 'jason',
		 lastName: 'brewer',
		 password: '!Qwer1234',
		 email: 'jasonB@devslopes.com'
	},
	ali: {
		 firstName: 'ali',
		 lastName: 'oksuz',
		 password: '!1234Qwert',
		 email: 'ali@devslopes.com'
	}
}

const displayScreens = {
	home: true,
	login: false, 
	signUp: false,
	cart: false, 
	shipping: false,
	payment: false,
	confirmed: false,
	footer: false,
}

export const variables = {
	displayScreens,
	savedUsers,
	currentUser: false,
	cart: {},
	shipping: {
	  delivery: 'standard',
	  shippingInfo: {
		firstName: "",
		lastName: "",
		address: "",
		city: "",
		state: "",
		country: "",
		zip: "",
		phoneNumber: "",
	 },
	 error: {},
  },
	payment: {}
}
