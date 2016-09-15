import Ember from 'ember';

export default Ember.Route.extend({
	queryParams:{
		status: {
			refreshModel: true
		}
	},
	model(params){


		let status = params.status;

		if(status === "In Production"){
				return [{id: 1},{id: 2}];
		}
		else if(status === "On Hold"){
			return [{id: 3},{id: 4}];
		}
		else if(status === "Shipped"){
			return [{id: 5},{id: 6}];
		}
	}
});
