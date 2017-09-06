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

const wildCaughtShellfish = require(`${cwd}/data/wild-caught-shellfish`);
const wildCaughtFish = require(`${cwd}/data/wild-caught-fish`);
const spanishWildCaughtFish = require(`${cwd}/data/spanish-wild-caught-fish`);
const farmedFish = require(`${cwd}/data/farmed-fish`);

const productCategories = [
	wildCaughtShellfish,
	wildCaughtFish,
	spanishWildCaughtFish,
	farmedFish
];

write(`${cwd}/dist/index.html`, indexTemplate());
write(`${cwd}/dist/about.html`, aboutTemplate());
write(`${cwd}/dist/sustainability.html`, sustainabilityTemplate());
write(`${cwd}/dist/products.html`, productsTemplate({ productCategories }));

write(`${cwd}/dist/orders.html`, ordersTemplate());
