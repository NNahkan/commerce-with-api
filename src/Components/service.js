import { COMMERCE_URL,COMMERCE_URL2,COMMERCE_API } from "../constants";

class CommerceService {
	async fetchProducts() {
		return new Promise( async (success, failure) => {
			try {
				const response = await fetch(COMMERCE_URL, {
					headers: {
						'X-Authorization': COMMERCE_API	
					}
				});
				const res2 = await fetch(COMMERCE_URL2, {
					headers: {
						'X-Authorization': COMMERCE_API	
					}
				});
				if (response.ok && res2.ok) {
					const json = await response.json();
					const data = json.data
					.map(item => ({
						name: item.name,
						description: item.description,
						price: item.price.raw,
						image: item.image.url,
						category: item.categories[0].name
					}))
					const json2 = await res2.json();
					const data2 = json2.data
					.map(item => ({
						name: item.name,
						description: item.description,
						price: item.price.raw,
						image: item.image.url,
						category: item.categories[0].name
					}))
					data.push(...data2);
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