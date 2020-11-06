Vue.component('products-comp', {
    props: ['products'],
    template: `
        <div class="products">
            <product-comp v-for="item of products" :key="item.product_id" :product="item"></product-comp>
        </div>
    `
});

Vue.component('product-comp', {
    props: ['product'],
    methods: {
        addInCart() {
            storage.$emit('addProductInCart', this.product);
        },
        openPageProduct() {
            this.$root.showCartPage = false;
            this.$root.currentComponent = '';            
            this.$root.currentProduct = this.product;
            setTimeout(() => {
                this.$root.currentComponent = 'single-product-page-comp';
                
            }, 500);            
        },
    },    
    template: `
        <div class="product">
            <a href="#" @click="openPageProduct"><img class="product-img" height="280" width="261" :src="product.product_img" alt="photo product"></a>
            <div class="product__content"> 
            <a class="product__name" href="#"  @click="openPageProduct">{{product.product_name}}</a>
                <p class="product__price">&#36;{{product.product_price}}</p>                        
            </div>
            <a class="product__add" href="#" @click.prevent="addInCart"><img class="product-add-cart" src="img/add-cart.png" alt="">Add to Cart</a>
        </div>
    `
});