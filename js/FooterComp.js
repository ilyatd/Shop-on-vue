Vue.component('footer-comp', {
    data() {
        return {
            footerLinks: {
                company: {
                    "Home": "main",
                    "Shop": "",
                    "About": "",
                    "How It Works": "",
                    "Contacts": "",
                },
                information: {
                    "Tearms & Condition": "",
                    "Privacy Policy": "",
                    "How to Buy": "",
                    "How to Sell": "",
                    "Promotion": "",
                },
                "SHOP CATEGORY": {
                    "Men": "men",
                    "Women": "women",
                    "Kids": "kids",
                    "Apparel": "",
                    "Brows All": "",
                },
            },
        }
    },
    template: `
        <footer>
            <div class="subscribe__box center">
                <div class="quote"> 
                <img class="quote__autor__photo" src="img/quote-img.png" alt="autor">
                    <div class="quote__content">
                        <p class="quote_text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
                        <h2 class="quote__name">Bin Burhan</h2>
                        <p class="quote-location">Dhaka, Bd</p>
                        <div class="quote__pagination">
                            <a href="#" class="rectangle"></a>
                            <a href="#" class="rectangle rectangle_active"></a>
                            <a href="#" class="rectangle"></a>
                        </div>
                    </div>
                </div>
                <div class="subscribe">
                    <h1 class="subscribe__h1">Subscribe</h1>
                    <p class="subscribe__p">FOR OUR NEWLETTER AND PROMOTION</p>
                    <form class="subscribe__form" action="#">
                        <input class="subscribe__email" type="email" placeholder="Enter Your Email">
                        <button class="subscribe__button" type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div class="footer__information center">
                <div class="brand__information">
                    <a class="logo" href="index.html"><img class="logo__img" src="img/logo.png" alt="logo">BRAN<span class="header__d">D</span></a>
                    <p class="brand__information__text">Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships</p>
                    <p class="brand__information__text">Efficiently plagiarize 24/365 action items and focused infomediaries. Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.</p>
                </div>
                <div class="footer__links" v-for="(links, category) of footerLinks">
                    <ul>
                        <li class="footer__list__headline">{{category}}</li>
                        <li class="footer__list" v-for="(link, name) of links"><a href="#" @click="$root.transitionLink(link, '')">{{name}}</a></li>                        
                    </ul>
                </div>
            </div>
            <div class="footer__bottom center">
                <p class="copyright">&copy; 2020 Brand All Rights Reserved.</p>
                <div class="social"> <a href="#" class="social__icons"><i class="fab fa-facebook-f"></i></a> <a href="#" class="social__icons"><i class="fab fa-twitter"></i></a> <a href="#" class="social__icons"><i class="fab fa-linkedin-in"></i></a> <a href="#" class="social__icons"><i class="fab fa-pinterest-p"></i></a> <a href="#" class="social__icons"><i class="fab fa-google-plus-g"></i></a> </div>
            </div>
        </footer>
    `
});