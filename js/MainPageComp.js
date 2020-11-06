Vue.component('main-page-comp', {
    data() {
        return {
            filtered1: [],
            filtered2: [],
            category: {
                "category__men": {
                    h3: "hot deal",
                    h1: "for men",
                },
                "category__accesories": {
                    h3: "luxirous &amp trendy",
                    h1: "accesories",
                },
                "category__women": {
                    h3: "30% offer",
                    h1: "women",
                },
                "category__kids": {
                    h3: "new arrivals",
                    h1: "for kids",
                },                
            },
            showAllProducts: false,
        }
    },
    mounted() {
        this.filtered1 = productsCatalog.slice(0, 8);
        this.filtered2 = productsCatalog.slice(8, productsCatalog.lenght);        
    },
    template:`
        <main>            
            <div class="promo center">
                <div class="promo__content">
                    <h2 class="promo__h2">THE BRAND</h2>
                    <h3 class="promo__h3">OF LUXERIOUS <span class="promo__fation_text_color">FASHION</span></h3>
                </div>
            </div>
            <section class="category center">                
                <div v-for="(categoryItem, index) of category" :class="index">
                    <div class="category__bage">
                        <h3 class="category__bage__h3">{{categoryItem.h3}}</h3>
                        <h1 class="category__bage__h1">{{categoryItem.h1}}</h1>                        
                    </div>
                </div>
            </section>
            <section class="featured center">
                <h1 class="featured__h1">Fetured Items</h1>
                <p class="featured__text">Shop for items based on what we featured in this week</p>
                <products-comp :products="filtered1"></products-comp>
                <div class="featured__button" v-show="!showAllProducts">
                    <a href="#" class="button" @click.prevent="showAllProducts = !showAllProducts">Browse All Product &ensp; <i class="fas fa-long-arrow-alt-right"></i></a>
                </div>
                <products-comp :products="filtered2" v-show="showAllProducts"></products-comp>
            </section>
            <div class="feature__banner center">
                <p class="feature__banner__text"><span class="feature__banner_text-1">30%</span> <span class="feature__banner_text-2">OFFER</span>
                    <br><span class="feature__banner_text-3">FOR WOMEN</span></p>
                <div class="feature__content">
                    <article class="feature__content__box">
                    <div class="feature__content__box_logo"><img src="img/free-delivery.png" alt="delivery"></div>                    
                        <div class="feature__content__text">
                            <h2 class="feature__content__box__h2">Free Delivery</h2>
                            <p class="feature__content__box__p">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                        </div>
                    </article>
                    <article class="feature__content__box">
                        <div class="feature__content__box_logo"><img src="img/discount.png" alt="discount"></div>                    
                        <div class="feature__content__text">
                            <h2 class="feature__content__box__h2">Sales & discounts</h2>
                            <p class="feature__content__box__p">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                        </div>
                    </article>
                    <article class="feature__content__box">
                    <div class="feature__content__box_logo"><img src="img/quality.png" alt="quality"></div>                    
                        <div class="feature__content__text">
                                <h2 class="feature__content__box__h2">Quality assurance</h2>
                            <p class="feature__content__box__p">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                        </div>
                    </article>
                </div>
            </div>
        </main>
    `
});