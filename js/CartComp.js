Vue.component('cart-comp', {
    data() {
        return {
            cartItems: [],
            totalPrice: 0,
            showCart: false,
            itemCount: 0,
            locationCart: {
                header: Boolean,
                div: Boolean,
            },            
        }
    },
    methods: {        
        addProduct(product) {
            let find = this.cartItems.find(el => el.product_id === product.product_id);
            if (find) {
                find.quantity++;
                this.totalPrice+=find.product_price;
                this.itemCount++;
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.cartItems.push(prod);
                this.totalPrice+=prod.product_price;
                this.itemCount++;
            }
        },
        remove(product) {
            let find = this.cartItems.find(el => el.product_id === product.product_id);
            this.totalPrice-=find.product_price;
            if (find.quantity > 1) {
                find.quantity--;
                this.itemCount--;                
            } else {
                this.cartItems.splice(this.cartItems.indexOf(find), 1);
                this.itemCount--;
            }
        },
        clear() {
            this.cartItems = [];
            this.itemCount = 0;
            this.totalPrice = 0;
        },
        clearIncart() {
            storage.$emit('clearCart');
        }, 
        goToCart() {
            this.showCart = false;
            this.$root.currentComponent = '';
            this.$root.showCartPage = true;
        },       
    },
    created() {
        storage.$on('addProductInCart', this.addProduct);
        storage.$on('delProductInCart', this.remove);
        storage.$on('clearCart', this.clear);
        switch(this.$parent._vnode.tag) {
            case 'header':
                this.locationCart.header = true;
                this.locationCart.div = false;
                break;
            case 'div':
                this.locationCart.header = false;
                this.locationCart.div = true;
                break; 
        };
    },
    mounted() {
        cartProducts.forEach(el => {
            this.cartItems.push(el);
        });
        if (this.cartItems.length > 0) {
            this.cartItems.forEach(el => {
                this.totalPrice += el.quantity * el.product_price;
                this.itemCount += el.quantity;
            });
        };           
    },
    template: `
        <div>
            <div class="header__cart" v-if="locationCart.header">
                <a class="header__cart_icon" href="#" @click="showCart = !showCart"><span class="cart_item_count" v-show="itemCount > 0">{{itemCount}}</span></a>            
                <div class="drop__cart" v-show="showCart">                
                    <div class="cart_empty" v-if="cartItems.length == 0">Cart is empty</div>
                    <div class="drop__cart__products">   
                        <cart-item-comp 
                            v-for="item of cartItems"
                            :key="item.product_id"
                            :product="item"
                            :location="locationCart">
                        </cart-item-comp>
                    </div>
                    <div class="drop__cart__button button_clear" v-if="cartItems.length !== 0" @click.prevent="clearIncart">Clear Cart</div>
                    <div class="drop__cart__list__price" v-if="cartItems.length !== 0">
                        <p>TOTAL</p>
                        <p>\${{totalPrice}}</p>
                    </div>
                    <div class="drop__cart__button button_go-to-cart" v-if="cartItems.length !== 0" @click.prevent="goToCart">go to cart</div>   
                    <div class="drop__cart__button button_checkout" v-if="cartItems.length !== 0" @click.prevent="">buy</div>
                </div>
            </div>
            <div v-if="locationCart.div">
                <nav class="nav__page center">
                    <p class="nav__page__name">Your cart</p>
                </nav>
                <div class="cart_empty" v-if="cartItems.length == 0">Cart is empty</div>
                <main class="cart center">
                    <form action="#" class="cart__form">
                        <ul class="cart__product__box cart__product__box__header"  v-if="cartItems.length !== 0">
                                <li class="cart__product__box__information">Product Details</li>
                                <li class="cart__product__box__information">unite Price</li>
                                <li class="cart__product__box__information">Quantity</li>
                                <li class="cart__product__box__information">shipping</li>
                                <li class="cart__product__box__information">Subtotal</li>
                                <li class="cart__product__box__information">ACTION</li>
                        </ul>
                        <cart-item-comp 
                            v-for="item of cartItems"
                            :key="item.product_id"
                            :product="item"
                            :location="locationCart">
                        </cart-item-comp>
                        <div class="cart__products__buttons">
                            <a href="#" class="cart__product__button" v-if="cartItems.length !== 0" @click.prevent="clearIncart">clear shopping cart</a>
                        </div>
                        <div class="cart__shipping">
                            <h1 class="cart__form__h1">Shipping Adress</h1>
                            <select class="cart__shipping__select">
                                <option value="Bangladesh">Bangladesh</option>
                            </select>
                            <input type="text" class="cart__form__input-text" placeholder="State">
                            <input type="text" class="cart__form__input-text" placeholder="Postcode / Zip">
                            <a href="#" class="cart__form__button" @click.prevent="">get a quote</a>
                        </div>
                        <div class="cart__cupon">
                            <h1 class="cart__form__h1">coupon discount</h1>
                            <p class="cart__form__text">Enter your coupon code if you have one</p>
                            <input type="text" class="cart__form__input-text" placeholder="State">
                            <a href="#" class="cart__form__button" @click.prevent="">Apply coupon</a>
                        </div>
                        <div class="cart__checkout">
                            <div class="cart__checkout__total">
                                <p class="cart__form__text">Sub total&emsp;&emsp;\${{totalPrice}}</p>
                                <h1 class="cart__form__h1">GRAND TOTAL&emsp;&emsp;<span class="cart__form__grand-total">\${{totalPrice}}</span></h1>
                            </div>
                            <a href="#" class="cart__form__checkout" @click.prevent="">buy</a>
                        </div>
                    </form>
                </main>    
            </div>
        </div>
    `
});

Vue.component('cart-item-comp', {
    props: ['product', 'location'],
    methods: {
        removeIncart() {
            storage.$emit('delProductInCart', this.product);
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
        <div>
            <div class="product_in_cart" v-if="location.header">
                <a href="#" class="product_in_cart_img" @click="openPageProduct"><img :src="product.product_img" width="72" alt="product"></a>
                <div class="product_in_cart__content"> 
                    <a href="#" class="product_in_cart__name" @click="openPageProduct">{{product.product_name}}</a>
                    <div class="product_in_cart__rank">
                        <i class="fas fa-star star-in-cart"></i><i class="fas fa-star star-in-cart"></i><i class="fas fa-star star-in-cart"></i><i class="fas fa-star star-in-cart"></i><i class="fas fa-star star-in-cart"></i>
                    </div> 
                    <p class="product_in_cart__price">{{product.quantity}} x \${{product.product_price}}</p>
                </div>
                <a href="#" class="product_in_cart__del" @click="removeIncart"><i class="fas fa-times-circle"></i></a>
            </div>
            <ul class="cart__product__box" v-if="location.div">
                <li class="cart__product__box__information">
                    <a href="#" class="cart__product__img" @click="openPageProduct"><img :src="product.product_img" height="115px" alt="product"></a>
                    <div class="cart__product__details">
                        <h1 class="cart__product__details__h1"><a href="#" class="cart__product__details__h1__link" @click="openPageProduct">{{product.product_name}}</a></h1>
                        <p class="cart__product__details__text">Color:&emsp;<span>{{product.product_color}}</span><br>Size:&emsp;<span>{{product.product_size}}</span></p>
                    </div>
                </li>
                <li class="cart__product__box__information">\${{product.product_price}}</li>
                <li class="cart__product__box__information">{{product.quantity}}</li>
                <li class="cart__product__box__information">FREE</li>
                <li class="cart__product__box__information">\${{product.product_price * product.quantity}}</li>
                <li class="cart__product__box__information"><a href="#" class="cart__product__dell" @click="removeIncart"><i class="fas fa-times-circle"></i></a></li>
            </ul>
        </div>   
    `
});