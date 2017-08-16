//Preloaded mock content
const links = [
	{
		id: 1,
		url: 'https://alxpez.github.io/',
		description: 'my site'
	},
	{
		id: 2,
		url: 'https://github.com/alxpez',
		description: 'my github profile'
	},
];


module.exports = {
	Query: {
		allLinks: () => links,
	},
	Mutation: {
		createLink: (_, data) => {
			const newLink = Object.assign({id: links.length + 1}, data);
			links.push(newLink);
			return newLink;
		}
	}
};