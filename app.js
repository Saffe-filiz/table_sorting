const app = new Vue({
	el: '.contanier',

	data: {
		member_list: [
		   {
		   	first_name: 'Manuel',
		   	last_name: 'Sutton',
		   	email: 'usike@udka.net',
		   	created_at: '9 / 6 / 2020',
		    },
		    {
		   	first_name: 'Daisy',
		   	last_name: 'Kelly',
		   	email: 'ho@kepuf.edu',
		   	created_at: '9 / 6 / 2020',
		    },
		    {
		   	first_name: 'Shane',
		   	last_name: 'Underwood',
		   	email: 'afawi@ajsenod.edu',
		   	created_at: '9 / 6 / 2020',
		    },
		    {
		   	first_name: 'Ray',
		   	last_name: 'Wise',
		   	email: 'vebgelmo@ven.co.uk',
		   	created_at: '9 / 6 / 2020',
		    },
		    {
		   	first_name: 'Sue',
		   	last_name: 'Hammond',
		   	email: 'zosub@bakus.edu',
		   	created_at: '9 / 6 / 2020',
		    },
		    {
		   	first_name: 'Banks',
		   	last_name: 'Roxie',
		   	email: 'mekruj@orewera.co.uk',
		   	created_at: '9 / 06 /2020',
		    },
		    {
		   	first_name: 'Alfred',
		   	last_name: 'Reese',
		   	email: 'upigohi@sop.edu',
		   	created_at: '5 / 29 / 2020',
		    },
		    {
		   	first_name: 'Maurice',
		   	last_name: 'Lowe',
		   	email: 'hib@oksuod.gov',
		   	created_at: '5 / 29 / 2020',
		    },
		],
		number: 8,
		search: '',
		active_link: null,
		reverse_members: false,
	},

	methods: {

		sorting_members (value) {
			value = value.replace(/[A-Z]/g, (v) => v.toLowerCase()).split(' ').join('_');
			this.get_search.sort( (f, s) => f[value][0].charCodeAt() - s[value][0].charCodeAt());
		},

		get_active(value) {
			this.active_link = value;
		},
	},


	computed: {

		get_search () {
		 	search = this.search.toLowerCase().trim();
		 	members = this.member_list.filter( v => v.first_name.toLowerCase().startsWith(search) || v.created_at.startsWith(search));
		 	this.number = members.length;
		 	return members
		},

		get_members () {
			member_list = this.get_search
			return this.reverse_members ? member_list: member_list.reverse();
		},

	},
})