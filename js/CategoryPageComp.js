Vue.component('category-page-comp', {
    data() {
        return {
            category: '',
            subCategory: '',
            products: [],
            activeLink: '',
            showLink: Boolean,
        }
    },
    mounted() {
        this.category = this.$root.currentCategory.category;
        this.subCategory = this.$root.currentCategory.subCategory;
        this.products = this.$root.currentCategory.products;
        if(this.subCategory === '') {
            this.showLink = false;
            this.activeLink = 'nav__page__link__active';
        } else this.showLink = true;
    },
    template: `
        <div class="category-page">
            <nav class="nav__page center">
                <p class="nav__page__name">{{category}}</p>
                <p class="nav__page__links">
                    <a href="#" class="nav__page__link" @click.prevent="$root.transitionLink('main', '')">home</a>
                    <a href="#" class="nav__page__link" :class="activeLink" @click.prevent="$root.transitionLink(category, '')"> / {{category}}</a>
                    <a href="#" class="nav__page__link__active" v-if="showLink" @click.prevent="$root.transitionLink(category, subCategory)"> / {{subCategory}}</a>
                </p>
            </nav> 
            <products-comp :products="products" class="center"></products-comp>
        </div>
    `
});