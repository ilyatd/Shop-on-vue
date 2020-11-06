Vue.component('search-page-comp', {
    data() {
        return {
            searchFiltered: storage.searchFiltered,
            amountResults: 0,
        }    
    },
    mounted() {
        this.amountResults = this.searchFiltered.length;
    },
    template: `
        <div class="search-page center">
            <p class="search-page__text"> At your request: {{amountResults}} results ...</p>
            <products-comp :products="searchFiltered"></products-comp>
        </div>
    `
});