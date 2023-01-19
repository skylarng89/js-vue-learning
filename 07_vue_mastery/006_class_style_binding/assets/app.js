const vueApp = Vue.createApp({
  data () {
    return {
      prodName: 'Nike Jordan Max Aura 4',
      prodShortDesc: 'The lightweight cushioning found in this next generation basketball shoe takes cues from its predecessors. Take flight on the court with timeless style and cloud-like heel support.',
      prodMainImg: './assets/images/nike_jordan_max_aura_4_black_red_strip.jpg',
      prodSourceUrl: 'https://www.nike.com/t/jordan-max-aura-4-mens-shoes-sDVD5R/DN3687-006',
      prodInventory: 1,
      onSale: true,
      prodHighlights: ['Lightweight', 'Rubber outsole', 'Classic branding'],
      prodVariants: [
        { id: 1, prodColour: 'Black/White/University Red', prodImg: './assets/images/nike_jordan_max_aura_4_black_red_strip.jpg', colorBox: '#cc0000' },
        { id: 2, prodColour: 'Black/Black/Anthracite', prodImg: './assets/images/nike_jordan_max_aura_4_black.jpg', colorBox: '#292C33' },
        { id: 3, prodColour: 'Black/White/Metallic Silver', prodImg: './assets/images/nike_jordan_max_aura_4_black_white_strip.jpg', colorBox: '#aaa9ad' },
        { id: 4, prodColour: 'White/University Red/Black', prodImg: './assets/images/nike_jordan_max_aura_4_white_red_strip.jpg', colorBox: '#000000' },
        { id: 5, prodColour: 'White/Black/University Blue', prodImg: './assets/images/nike_jordan_max_aura_4_white_blue_strip.jpg', colorBox: '#7BAFD4' }
      ],
      prodSizes: [
        { id: 1, prodSize: '40' },
        { id: 1, prodSize: '42' },
        { id: 1, prodSize: '45' },
        { id: 1, prodSize: '48' }
      ],
      cartTotal: 0
    }
  },
  methods: {
    addToCart () {
      this.cartTotal++
    },
    subFromCart () {
      if (this.cartTotal >= 1) {
        this.cartTotal--
      } else {
        alert('Cart empty!')
      }
    },
    switchImg (prodImg) {
      this.prodMainImg = prodImg
    },
    outOfStock () {
      if (this.prodInventory === 0) {
        document.querySelector('#addToCart').style.display = 'none'
        document.querySelector('#subFromCart').style.display = 'none'
        document.querySelector('#sale-status').style.display = 'none'
      }
    }
  },
  mounted () {
    this.outOfStock()
  }
})
