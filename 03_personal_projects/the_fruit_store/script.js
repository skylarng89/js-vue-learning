// Get shopper's name
const shopperName = prompt('Hello! What is your name?')

const basket = []

for (let i = 0; shopperName === '' || shopperName === null; i++) {
  shopperName = prompt('Please enter your name!')
}

alert(`Welcome to Gary's Fruit Store, ${shopperName}!`)

setTimeout(() => {
  basket.push(prompt('What fruit do you want to buy?'))
  alert('Nicely done!')
  let buyMore = prompt('Would you like something else? Type "Yes" or "No"')
  if (buyMore === 'Yes' || buyMore === 'yes') {
    basket.push(prompt('What fruit do you want to buy?'))
  } else if (buyMore === 'No' || buyMore === '' || buyMore === null) {
    buyMore = prompt('Would you like to checkout or cancel? Type: \n "1" to Checkout \n or "2" to Cancel')
    if (buyMore === '1' && basket === []) {
      alert('Your basket is empty. Cannot checkout!')
      buyMore = prompt('Would you like to checkout or cancel? Type: \n "1" to Checkout \n or "2" to Cancel')
    } else if (buyMore === '1' && basket !== []) {
      alert(`Enjoy the fruits, ${shopperName}!`)
    } else if (buyMore === '2' || basket === '' || basket === null) {
      alert('Thanks for stopping by!')
    }
  }
}, 1500)
