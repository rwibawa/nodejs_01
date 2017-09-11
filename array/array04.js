const cart = [
{ name: "Widget", price: 9.95 },
{ name: "Gadget", price: 2.95 }];
const names = cart.map(x => x.name);
cart;
names;
const prices = cart.map(x => x.price);
prices;
const discountPrices = cart.map(x => x.price * 0.8);
discountPrices;
const cart2 = names.map((x,i) => ({ name: x, price: prices[i]}));
cart2;
const cards = [];
for (let suit of ['C', 'H', 'S', 'D'])
for (let value=1; value <= 13; value++)
cards.push({ suit, value });
cards;
cards.filter(c => c.value === 2);
cards;
cards.filter(c => c.suit === 'D');
cards.filter(c => c.value > 10);
cards.filter(c => c.value > 10 && c.suit === 'H');
function cardToString(c) {
const suits = { 'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660' };
const values = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' };
// constructing values each time we call cardToString is not very
// efficient; a better solution is a reader's exercise
for(let i=2; i<=10; i++) values[i] = i;
return values[c.value] + suits[c.suit];
}
cards.filter(c => c.value === 2);
cards.filter(c => c.value === 2)
cards.filter(c => c.value === 2).map(cardToString);
cards.filter(c => c.value > 10 && c.suit === 'H').map(cardToString);
