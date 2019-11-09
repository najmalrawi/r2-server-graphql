import { Subscriber } from '../data/types'
import { DataService } from '../data/service'

export default {
	Query: {
		subscribers: async () => await DataService.getSubscribers()
	}
}