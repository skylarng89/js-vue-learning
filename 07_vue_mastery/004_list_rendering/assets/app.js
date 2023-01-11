const vueApp = Vue.createApp({
    data() {
        return {
            prodName: 'Nike Jordan Max Aura 4',
            prodShortDesc: 'The lightweight cushioning found in this next generation basketball shoe takes cues from its predecessors. Take flight on the court with timeless style and cloud-like heel support.',
            prodMainImg: './assets/images/nike_jordan_max_aura_4_black_red_strip.webp',
            prodSourceUrl: 'https://www.nike.com/t/jordan-max-aura-4-mens-shoes-sDVD5R/DN3687-006',
            prodInventory: 10,
            onSale: true,
            prodHighlights: ['Lightweight', 'Rubber outsole', 'Classic branding'],
            prodColors: [
                { id: 1, prodColour: 'Black/White/University Red' },
                { id: 2, prodColour: 'Black/Black/Anthracite' },
                { id: 3, prodColour: 'Black/White/Metallic Silver' },
                { id: 4, prodColour: 'White/University Red/Black' },
                { id: 5, prodColour: 'White/Black/University Blue' },
            ],
            prodSizes: [
                { id: 1, prodSize: '40' },
                { id: 1, prodSize: '42' },
                { id: 1, prodSize: '45' },
                { id: 1, prodSize: '48' }
            ]
        }
    }
})