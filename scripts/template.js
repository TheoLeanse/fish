const { readFileSync: read, writeFileSync: write } = require('fs');
const hbs = require('handlebars');
const cwd = process.cwd();

const layout = read(`${cwd}/src/layout.html`, 'utf8');
const index = read(`${cwd}/src/index.html`, 'utf8');
const about = read(`${cwd}/src/about.html`, 'utf8');
const sustainability = read(`${cwd}/src/sustainability.html`, 'utf8');
const products = read(`${cwd}/src/products.html`, 'utf8');
const orders = read(`${cwd}/src/orders.html`, 'utf8');
const picture = read(`${cwd}/src/partials/picture.html`, 'utf8');
const productOverlays = read(`${cwd}/src/partials/product-overlays.html`, 'utf8');

hbs.registerPartial('layout', layout);
hbs.registerPartial('picture', picture);
hbs.registerPartial('productOverlays', productOverlays);

const indexTemplate = hbs.compile(index);
const aboutTemplate = hbs.compile(about);
const sustainabilityTemplate = hbs.compile(sustainability);
const productsTemplate = hbs.compile(products);
const ordersTemplate = hbs.compile(orders);

write(`${cwd}/dist/index.html`, indexTemplate());
write(`${cwd}/dist/about.html`, aboutTemplate());
write(`${cwd}/dist/sustainability.html`, sustainabilityTemplate());
write(`${cwd}/dist/products.html`, productsTemplate({
	productCategories: [
		{
			id: 'wild-caught-shellfish',
			name: 'WILD CAUGHT SHELLFISH',
			items: [
				{
					name: 'NATIVE LOBSTER',
					weights: [
						'400–480g',
						'480–540g',
						'540–620g',
						'620–740g',
						'740g–1kg',
						'1–1.4kg',
						'1.4–1.8kg',
						'1.8kg+',
						'Cripples',
					],
					provenance: [
						'ENGLISH, WELSH AND SCOTTISH POTTED'
					]
				},
				{
					name: 'CANADIAN LOBSTER',
					weights: [
						'400–480g',
						'480–540g',
						'540–620g',
						'620–740g',
						'740G–1kg',
						'1–1.4kg',
						'1.4–1.8kg',
						'1.8kg+',
						'Cripples'
					],
					provenance: [
						'NOVA SCOTIA POTTED'
					]
				},
				{
					name: 'NATIVE BROWN CRAB',
					weights: [
						'450–900g',
						'900g–1.35kg',
						'1.35–1.8kg',
						'1.8kg+',
						'600–900g',
						'900g–1.2kg'
					],
					provenance: [
						'ENGLISH, WELSH AND SCOTTISH POTTED'
					]
				},

				{
					name: 'HAND PICKED SELSEY CRAB',
					weights: [
						'(White)',
						'(Brown)',
						'(Mixed)'
					],
					provenance: [
						'ENGLISH POTTED'
					]
				},


				{
					name: 'NATIVE SCALLOPS',
					weights: [
						'In shell',
						'Meat (roe on)'
					],
					provenance: [
						'ENGLISH AND SCOTTISH HAND-DIVED',
						'ENGLISH AND SCOTTISH TRAWLED'
					]
				},

				{
					name: 'QUEEN SCALLOPS',
					weights: [
						'Meat (roe on/off)'
					],
					provenance: [
						'SCOTTISH TRAWLED'
					]
				},

				{
					name: 'SCALLOPS',
					weights: [
						'Meat (roe off)'
					],
					provenance: [
						'GEORGE BANKS, USA TRAWLED'
					]
				},

				{
					name: 'RAZOR CLAMS',
					weights: [
						'XL',
						'L'
					],
					provenance: [
						'SCOTTISH DIVED'
					]
				},


				{
					name: 'PALOURDE CLAMS',
					weights: [
						'JUMBO 60 Pcs/kg'
					],
					provenance: [
						'ENGLISH HAND PICKED'
					]
				},

				{
					name: 'COCKLES',
					weights: [
						'Large'
					],
					provenance: [
						'ENGLISH HAND PICKED'
					]
				},

				{
					name: 'WHELKS',
					weights: [

					],
					provenance: [
						'ENGLISH POTTED'
					]
				},

				{
					name: 'JERSEY ROYAL OYSTERS',
					weights: [
						'No.2',
						'No.3',
						'No.4'
					],
					provenance: [
						'CHANNEL ISLANDS'
					]
				},

				{
					name: 'WILD RED PRAWNS',
					weights: [
						'10-20 PIECES/kg',
						'20-30 PIECES/kg'
					],
					provenance: [
						'ARGENTINIAN TRAWLED'
					]
				},


				{
					name: 'CUTTLEFISH',
					weights: [
						'500g–1kg',
						'1–2kg'
					],
					provenance: [
						'ENGLISH POTTED OR TRAWLED'
					]
				},


				{
					name: 'FRESH ROCK OCTOPUS',
					weights: [
						'Large',
						'Medium',
						'Large (Cooked)',
						'Medium (Cooked)'
					],
					provenance: [
						'SPANISH POTTED'
					]
				},

				{
					name: 'SQUID',
					weights: [
						'16-25cm',
						'16-25cm',
						'25cm+'
					],
					provenance: [
						'SOUTH AFRICAN TRAWLED',
						'SCOTTISH TRAWLED'
					]
				}

			]
		},
		{
			id: 'wild-caught-fish',
			name: 'WILD CAUGHT FISH',
			items: [
				{
					name: '',
					weights: [

					],
					provenance: [

					]
				}
			]
		},
		{
			id: 'spanish-wild-caught-fish',
			name: 'SPANISH WILD CAUGHT FISH',
			items: [
				{
					name: '',
					weights: [

					],
					provenance: [

					]
				}
			]

		},
		{
			id: 'farmed-fish',
			name: 'FARMED FISH',
			items: [
				{
					name: '',
					weights: [

					],
					provenance: [

					]
				}
			]

		}
	]
}));
write(`${cwd}/dist/orders.html`, ordersTemplate());
