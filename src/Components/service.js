import { COMMERCE_URL,COMMERCE_API } from "../constants";

class CommerceService {
	async fetchProducts() {
		return new Promise( async (success, failure) => {
			try {
				const response = await fetch(COMMERCE_URL, {
					headers: {
						'X-Authorization': COMMERCE_API	
					}
				});
				if (response.ok) {
					const json = await response.json();
					const data = json.data
					.map(item => ({
						name: item.name,
						description: item.description,
						price: item.price.raw,
						image: item.image.url
					}))
					success({ response, data})
				} else {
					failure({ error: "Invalid http request"})
				}
			} catch(error) {
				failure(error)
			}
		})
	}
}

export default CommerceService;