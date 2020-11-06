Vue.component('header-comp', {
    data() {
        return {
            navMenu: {
                        men: {
                            menu: {
                                men1: [{link: "\#", text: "Cuit"}, 
                                        {link: "\#", text: "T-shirt"}, 
                                        {link: "\#", text: "Jacket"}, 
                                        {link: "\#", text: "Pants"}, 
                                        {link: "\#", text: "Vest"}, 
                                        {link: "\#", text: "Shorts"}, 
                                        {link: "\#", text: "Men"}, 
                                        {link: "\#", text: "Men"}, 
                                        {link: "\#", text: "Men"}
                                    ],
                                men2: [{link: "\#", text: "Men"}, 
                                        {link: "\#", text: "Men"}, 
                                        {link: "\#", text: "Men"}, 
                                        {link: "\#", text: "Men"}, 
                                        {link: "\#", text: "Men"}, 
                                        {link: "\#", text: "Men"}, 
                                        {link: "\#", text: "Men"}, 
                                        {link: "\#", text: "Men"}, 
                                        {link: "\#", text: "Men"}
                                    ],
                                men3: [{link: "\#", text: "Men"}, 
                                        {link: "\#", text: "Men"}, 
                                        {link: "\#", text: "Men"}, 
                                        {link: "\#", text: "Men"}
                                    ],
                            },                    
                            position: "drop drop__left",
                            link: "\#",
                        },    
                        women: {
                            menu: {
                                women1: [{link: "\#", text: "Dress"}, 
                                        {link: "\#", text: "Cuit"}, 
                                        {link: "\#", text: "Blouse"}, 
                                        {link: "\#", text: "T-shirt"}, 
                                        {link: "\#", text: "Skirt"}, 
                                        {link: "\#", text: "Leggins"}, 
                                        {link: "\#", text: "women"}, 
                                        {link: "\#", text: "women"}, 
                                        {link: "\#", text: "women"}
                                    ],
                                    women2: [{link: "\#", text: "women"}, 
                                        {link: "\#", text: "women"}, 
                                        {link: "\#", text: "women"}, 
                                        {link: "\#", text: "women"}, 
                                        {link: "\#", text: "women"}, 
                                        {link: "\#", text: "women"}, 
                                        {link: "\#", text: "women"}, 
                                        {link: "\#", text: "women"}, 
                                        {link: "\#", text: "women"}
                                    ],
                                    women3: [{link: "\#", text: "women"}, 
                                        {link: "\#", text: "women"}, 
                                        {link: "\#", text: "women"}, 
                                        {link: "\#", text: "women"}
                                    ],
                            },
                            position: "drop drop__left",
                            link: "\#",
                        },
                        kids: {
                            menu: {
                                kids1: [{link: "\#", text: "kids"}, 
                                        {link: "\#", text: "kids"}, 
                                        {link: "\#", text: "kids"}, 
                                        {link: "\#", text: "kids"}, 
                                        {link: "\#", text: "kids"}, 
                                        {link: "\#", text: "kids"}, 
                                        {link: "\#", text: "kids"}, 
                                        {link: "\#", text: "kids"}, 
                                        {link: "\#", text: "kids"}
                                    ],
                                kids2: [{link: "\#", text: "kids"}, 
                                        {link: "\#", text: "kids"}, 
                                        {link: "\#", text: "kids"}, 
                                        {link: "\#", text: "kids"}, 
                                        {link: "\#", text: "kids"}, 
                                        {link: "\#", text: "kids"}, 
                                        {link: "\#", text: "kids"}, 
                                        {link: "\#", text: "kids"}, 
                                        {link: "\#", text: "kids"}
                                    ],
                                kids3: [{link: "\#", text: "kids"}, 
                                        {link: "\#", text: "kids"}, 
                                        {link: "\#", text: "kids"}, 
                                        {link: "\#", text: "kids"}, 
                                        {link: "\#", text: "kids"}
                                    ],
                            },
                            position: "drop drop__center",
                            link: "\#",
                        },
                        accessories: {
                            menu: {
                                accessories1: [
                                    {link: "\#", text: "accessories"}, 
                                    {link: "\#", text: "accessories"}, 
                                    {link: "\#", text: "accessories"}, 
                                    {link: "\#", text: "accessories"}, 
                                    {link: "\#", text: "accessories"}, 
                                    {link: "\#", text: "accessories"}, 
                                    {link: "\#", text: "accessories"}, 
                                    {link: "\#", text: "accessories"}, 
                                    {link: "\#", text: "accessories"}          
                                ],
                                accessories2: [
                                    {link: "\#", text: "accessories"}, 
                                    {link: "\#", text: "accessories"}, 
                                    {link: "\#", text: "accessories"}, 
                                    {link: "\#", text: "accessories"}, 
                                    {link: "\#", text: "accessories"}, 
                                    {link: "\#", text: "accessories"}, 
                                    {link: "\#", text: "accessories"}, 
                                    {link: "\#", text: "accessories"}, 
                                    {link: "\#", text: "accessories"}   
                                ],
                                accessories3: [
                                    {link: "\#", text: "accessories"}, 
                                    {link: "\#", text: "accessories"}, 
                                    {link: "\#", text: "accessories"}, 
                                    {link: "\#", text: "accessories"}, 
                                    {link: "\#", text: "accessories"}    
                                ],
                            },
                            position: "drop drop__center",
                            link: "\#",
                        },
                        featured: {
                            menu: {
                                featured1: [
                                    {link: "\#", text: "featured"}, 
                                    {link: "\#", text: "featured"}, 
                                    {link: "\#", text: "featured"}, 
                                    {link: "\#", text: "featured"}, 
                                    {link: "\#", text: "featured"}, 
                                    {link: "\#", text: "featured"}, 
                                    {link: "\#", text: "featured"}, 
                                    {link: "\#", text: "featured"}, 
                                    {link: "\#", text: "featured"}          
                                ],
                                featured2: [
                                    {link: "\#", text: "featured"}, 
                                    {link: "\#", text: "featured"}, 
                                    {link: "\#", text: "featured"}, 
                                    {link: "\#", text: "featured"}, 
                                    {link: "\#", text: "featured"}, 
                                    {link: "\#", text: "featured"}, 
                                    {link: "\#", text: "featured"}, 
                                    {link: "\#", text: "featured"}, 
                                    {link: "\#", text: "featured"}   
                                ],
                                featured3: [
                                    {link: "\#", text: "featured"}, 
                                    {link: "\#", text: "featured"}, 
                                    {link: "\#", text: "featured"}, 
                                    {link: "\#", text: "featured"}, 
                                    {link: "\#", text: "featured"}    
                                ],
                            },
                            position: "drop drop__center",
                            link: "\#",
                        },
                        "hot deals": {
                            menu: {
                                "Hot Deals 1": [
                                    {link: "\#", text: "Hot Deals"}, 
                                    {link: "\#", text: "Hot Deals"}, 
                                    {link: "\#", text: "Hot Deals"}, 
                                    {link: "\#", text: "Hot Deals"}, 
                                    {link: "\#", text: "Hot Deals"}, 
                                    {link: "\#", text: "Hot Deals"}, 
                                    {link: "\#", text: "Hot Deals"}, 
                                    {link: "\#", text: "Hot Deals"}, 
                                    {link: "\#", text: "Hot Deals"}          
                                ],
                                "Hot Deals 2": [
                                    {link: "\#", text: "Hot Deals"}, 
                                    {link: "\#", text: "Hot Deals"}, 
                                    {link: "\#", text: "Hot Deals"}, 
                                    {link: "\#", text: "Hot Deals"}, 
                                    {link: "\#", text: "Hot Deals"}, 
                                    {link: "\#", text: "Hot Deals"}, 
                                    {link: "\#", text: "Hot Deals"}, 
                                    {link: "\#", text: "Hot Deals"}, 
                                    {link: "\#", text: "Hot Deals"}   
                                ],
                                "Hot Deals 3": [
                                    {link: "\#", text: "Hot Deals"}, 
                                    {link: "\#", text: "Hot Deals"}, 
                                    {link: "\#", text: "Hot Deals"}, 
                                    {link: "\#", text: "Hot Deals"}, 
                                    {link: "\#", text: "Hot Deals"}    
                                ],
                            },
                            position: "drop drop__right",
                            link: "\#",
                        },      
            }, 
            userSearch: '',
            searchFiltered: [],
        }
    },
    methods: {
        searchFilter() {
            let regexp = new RegExp(this.userSearch, 'i');
            this.searchFiltered = productsCatalog.filter(el => {
                if(regexp.test(el.product_name) || regexp.test(el.product_category)) {
                    return true;
                } else return false;                
            });
            storage.searchFiltered = this.searchFiltered;
            this.$root.showCartPage = false;
            this.$root.currentComponent = '';
            setTimeout(() => {this.$root.currentComponent = 'search-page-comp'}, 500); 
        },
    },
    template:`
        <header>
            <div class="header center">
            <div class="header__left">
                <a class="logo" href="index.html"><img class="logo__img" src="img/logo.png" alt="logo"><span class="header__brand">BRAN<span class="header__d">D</span></span>
                </a>
                <form class="search__form" action="#" @submit.prevent="searchFilter">
                    <input class="search__text" type="text" v-model="userSearch" placeholder="Search for Item..." required>
                    <button class="search__button" type="submit"><i class="fas fa-search"></i></button>
                </form>
            </div>
            <div class="header__right">
                <cart-comp></cart-comp>
                <a class="button" href="#">My Account &ensp;<i class="fas fa-caret-down"></i></a> </div>
            </div>
            <nav class="nav__menu center">
                <ul class="menu">
                    <li class="menu__list"><a href="#" class="menu__link" @click.prevent="$root.transitionLink('main', '')">Home </a></li>
                    <li class="menu__list" v-for="(menu, index) of navMenu"><a href="#" class="menu__link"  @click.prevent="$root.transitionLink(index, '')">{{index}} </a>
                        <div :class="menu.position">
                            <div class="drop__list" v-for="itemInMenu of menu.menu">
                                <h3 class="drop__list_h3">{{index}}</h3>
                                <ul>
                                    <li v-for="item of itemInMenu"><a href="#" class="drop__list__link" @click.prevent="$root.transitionLink(index, item.text)">{{item.text}}</a></li>                             
                                </ul>
                            </div>
                            <img class="drop__list_img" src="img/drop_list_img.png" alt="img">
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    `
});