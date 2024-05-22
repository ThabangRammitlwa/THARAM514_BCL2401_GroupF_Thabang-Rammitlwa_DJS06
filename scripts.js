// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
//forEach basics
names.forEach((name)=> console.log(name))
provinces.forEach((province)=>console.log(province))

for (let i = 0; i<names.length;i++){
  console.log(`${names[i]} (${provinces[i]})`)
}
//Uppercase Transformation
const uppercaseProvinces= provinces.map((province)=>province.toUpperCase())
console.log(uppercaseProvinces)

//Name Lengths
const nameLengths = names.map(name => name.length)
console.log(nameLengths);

//Sorting
provinces.sort()
console.log (provinces)

//Filtering Cape
const filteredProvinces=provinces.filter((province)=>!province.includes('cape'))
console.log(`Remaining provinces:${filteredProvinces.length}`)

//Finding 'S'
const containsS = names.map((name)=>name.includes('S'))
console.log(containsS)

//Creating Object mapping
const nameToProvince= names.reduce((obj,name,index)=>{
  obj[name]= provinces[index]
  return obj
}, {})
console.log(nameToProvince)
/** 
//Log Products
console.log(products.map((product)=> product.product))

//Filter by Name 
console.log(products.filter((product)=>product.product.length<=5))

//Price manupulation
const filteredProducts = products.filter((product) => product.price!== '' && product.price!== ')
const totalPrice = filteredProducts.reduce((sum, product) => sum + (typeof product.price === 'tring'? parseInt(product.price) : product.price), 0);
console.log(`Total price: ${totalPrice}`);

//Find Extremes in prices
const prices = filteredProducts.map((product) => typeof product.price === 'tring'? parseInt(product.price) : product.price);
const minPrice = Math.min(...prices);
const maxPrice = Math.max(...prices);
console.log(`Highest: ${maxPrice}. Lowest: ${minPrice}.`);

//Object Transformation
console.log(product.reduce((obj, product)=>))
**/ 