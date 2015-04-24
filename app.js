(function(){
	var app = angular.module('store', []);

	var gems = [
		{
			name: 'Dodecahedreon',
			price: 2.00,
			description: 'Some gems have hidden qualities beyond their luster, beyond their shine.. Dodeca is one of those gems.',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'images/gem.png',
					thumb: 'images/gem.png'
				},
				{
					full: 'images/gem.png',
					thumb: 'images/gem.png'
				}
			]
		},
		{
			name: 'Dodecahedreon',
			price: 2.95,
			description: 'Some gems have hidden qualities beyond their luster, beyond their shine.. Dodeca is one of those gems.',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'images/gem.png',
					thumb: 'images/gem.png'
				},
				{
					full: 'images/gem.png',
					thumb: 'images/gem.png'
				}
			]
		}
	];

	app.controller('StoreController', function(){
		this.products = gems;
	});
})();
