Vue.component('single-product-page-comp', {
    data() {
        return {
            product: this.$root.currentProduct,
            background: "",            
            alsoProducts: [],           
        }
    },
    methods: {
        addInCart() {
            storage.$emit('addProductInCart', this.product);
        },
        getRandomProducts() {
            let max = 4;
            let i = 0;
            let randomNumber = 0;
            let randomProducts = [];
            let productsInCaterogy = [];
            productsCatalog.forEach(el => {
                if(el.product_target === this.product.product_target && el.product_id !== this.product.product_id) {
                    productsInCaterogy.push(el);
                }
            });
            while (i < max) {
                randomNumber = Math.floor(Math.random() * productsInCaterogy.length);
                if(randomProducts.includes(productsInCaterogy[randomNumber])) {                    
                } else {
                    randomProducts.push(productsInCaterogy[randomNumber]);
                    i++;
                };
            };
            this.alsoProducts = randomProducts;
        },
    },
    mounted() {
        this.background = "background-image: " + "url(" + this.product.product_img + ")";
        this.getRandomProducts();
    },
    template: `
        <main>
            <nav class="nav__page center">
                <p class="nav__page__name">{{product.product_name}}</p>
                <p class="nav__page__links">
                    <a href="#" class="nav__page__link" @click.prevent="$root.transitionLink('main', '')">home</a>
                    <a href="#" class="nav__page__link" @click.prevent="$root.transitionLink(product.product_target, '')"> / {{product.product_target}}</a>
                    <a href="#" class="nav__page__link" @click.prevent="$root.transitionLink(product.product_target, product.product_category)"> / {{product.product_category}}</a>
                    <span class="nav__page__link__active"> / {{product.product_name}}</span>
                </p>
            </nav>
            <div class="single__product__img" :style="background"></div>  
            <div class="single__product__description">
                <h3 class="single__product__description__h3">{{product.product_target}} collection</h3>
                <p class="single__product__description__h3__devider"></p>
                <h1 class="single__product__description__h1">{{product.product_name}}</h1>
                <p class="single__product__description__rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p>
                <p class="single__product__description__text">Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.</p>
                <div class="single__product__description__options">
                    <p>material: <span>{{product.product_material}}</span></p>
                    <p>color: <span>{{product.product_color}}</span></p>
                    <p>designer: <span>{{product.product_designer}}</span></p>                    
                    <p>size: <span>{{product.product_size}}</span></p>
                </div>
                <p class="single__product__description__price">\${{product.product_price}}</p>
                <a href="#" class="single__add-to-cart" @click.prevent="addInCart"><img class="single__add-to-cart_img" src="img/single-page-add-to-cart.png" alt="#">Add to Cart</a>                    
            </div>
            <div class="single__like-also center">
                <h1 class="single__like-also__h1">you may like also</h1>
                <products-comp :products="alsoProducts" class="center"></products-comp>
            </div>
        </main>
    `
});