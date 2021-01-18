import ApiService from './apiService'

export default class PortfolioService extends ApiService {
    constructor() {
        super('/portfolio')
    }

    getPortifolio() {
        return this.get()
    }

    getTime(time) {
        return this.get(`/${time}`)
    }

    getTimes() {
        return this.get(`/teams`)
    }

    getTimePortfolio(id) {
        return this.get(`/${id}`)
    }
}

