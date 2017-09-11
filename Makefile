.DEFAULT_GOAL := make

make: html css js copy-images copy-fonts todo copy-icons copy-pdf

html:
	@mkdir -p dist
	@node scripts/template.js

css:
	@mkdir -p dist
	@cp main.css dist/main.css

js:
	@mkdir -p dist
	@cp main.js dist/main.js

copy-images:
	@mkdir -p dist
	@cp -a images/g-optimized/ dist

copy-fonts:
	@mkdir -p dist
	@cp -a fonts dist

copy-icons:
	@mkdir -p dist
	@cp -a icons dist

copy-pdf:
	@mkdir -p dist
	@cp -a pdf dist
webp:
	@mkdir -p dist/images
	~/Downloads/cwebp -preset photo -q 75 images/g-optimized/home-l.jpg -o dist/images/home-l.webp
	~/Downloads/cwebp -preset photo -q 75 images/g-optimized/products-1-l.jpg -o dist/images/products-1-l.webp
	~/Downloads/cwebp -preset photo -q 75 images/g-optimized/products-2-l.jpg -o dist/images/products-2-l.webp
	~/Downloads/cwebp -preset photo -q 75 images/g-optimized/products-3-l.jpg -o dist/images/products-3-l.webp
	~/Downloads/cwebp -preset photo -q 75 images/g-optimized/about-l.jpg -o dist/images/about-l.webp
	~/Downloads/cwebp -preset photo -q 75 images/g-optimized/sustainability-l.jpg -o dist/images/sustainability-l.webp
	~/Downloads/cwebp -preset photo -q 75 images/g-optimized/logo.png -o dist/images/logo.webp
	~/Downloads/cwebp -preset photo -q 75 images/g-optimized/map-s.jpg -o dist/images/map-s.webp
	~/Downloads/cwebp -preset photo -q 75 images/g-optimized/map-l.jpg -o dist/images/map-l.webp
	~/Downloads/cwebp -preset photo -q 75 images/g-optimized/home-s.jpg -o dist/images/home-s.webp
	~/Downloads/cwebp -preset photo -q 75 images/g-optimized/products-1-s.jpg -o dist/images/products-1-s.webp
	~/Downloads/cwebp -preset photo -q 75 images/g-optimized/products-2-s.jpg -o dist/images/products-2-s.webp
	~/Downloads/cwebp -preset photo -q 75 images/g-optimized/products-3-s.jpg -o dist/images/products-3-s.webp
	~/Downloads/cwebp -preset photo -q 75 images/g-optimized/about-s.jpg -o dist/images/about-s.webp
	~/Downloads/cwebp -preset photo -q 75 images/g-optimized/sustainability-s.jpg -o dist/images/sustainability-s.webp

guetzli:
	@mkdir -p images/g-optimized
	guetzli --quality 84 images/home-l.jpg images/g-optimized/home-l.jpg
	guetzli --quality 84 images/products-1-l.jpg images/g-optimized/products-1-l.jpg
	guetzli --quality 84 images/products-2-l.jpg images/g-optimized/products-2-l.jpg
	guetzli --quality 84 images/products-3-l.jpg images/g-optimized/products-3-l.jpg
	guetzli --quality 84 images/about-l.jpg images/g-optimized/about-l.jpg
	guetzli --quality 84 images/sustainability-l.jpg images/g-optimized/sustainability-l.jpg
	guetzli --quality 84 images/map-l.jpg images/g-optimized/map-l.jpg
	guetzli --quality 84 images/logo.jpg images/g-optimized/logo.jpg
	guetzli --quality 84 images/home-s.jpg images/g-optimized/home-s.jpg
	guetzli --quality 84 images/products-1-s.jpg images/g-optimized/products-1-s.jpg
	guetzli --quality 84 images/products-2-s.jpg images/g-optimized/products-2-s.jpg
	guetzli --quality 84 images/products-3-s.jpg images/g-optimized/products-3-s.jpg
	guetzli --quality 84 images/about-s.jpg images/g-optimized/about-s.jpg
	guetzli --quality 84 images/sustainability-s.jpg images/g-optimized/sustainability-s.jpg
	guetzli --quality 84 images/map-s.jpg images/g-optimized/map-s.jpg

todo:
	@echo TODO: PROPERLY SIZE IMAGES WITH responsivebreakpoints.com
	@echo TODO: UGLIFY JS
	@echo TODO: INLINE CSS
	@echo TODO: CAN I GZIP?
	@echo TODO: BROWSER SUPPORT
	@echo TODO: PROGRESSIVE ENHANCEMENT
	@echo TODO: FONT FALLBACKS FOR OLDER BROWSERS
