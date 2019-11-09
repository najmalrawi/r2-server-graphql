import { Subscriber } from './types'

class Service {

	async getSubscribers():Promise<Subscriber[]> {

		const data: Subscriber[] = [
			{ pk: 1, number: 933105060, joined: true },
			{ pk: 2, number: 935507777, joined: true },
			{ pk: 3, number: 933054433, joined: false },
			{ pk: 4, number: 945550000, joined: false },
		]

		return data
	}
}

export const DataService: Service = new Service()