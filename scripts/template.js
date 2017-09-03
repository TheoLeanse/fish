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

hbs.registerPartial('layout', layout);
hbs.registerPartial('picture', picture);

const indexTemplate = hbs.compile(index);
const aboutTemplate = hbs.compile(about);
const sustainabilityTemplate = hbs.compile(sustainability);
const productsTemplate = hbs.compile(products);
const ordersTemplate = hbs.compile(orders);

write(`${cwd}/dist/index.html`, indexTemplate());
write(`${cwd}/dist/about.html`, aboutTemplate());
write(`${cwd}/dist/sustainability.html`, sustainabilityTemplate());
write(`${cwd}/dist/products.html`, productsTemplate());
write(`${cwd}/dist/orders.html`, ordersTemplate());
