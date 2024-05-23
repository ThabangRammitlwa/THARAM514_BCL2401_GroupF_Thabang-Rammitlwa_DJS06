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
//forEach method to iterate over the names and provinces arrays
names.forEach((name)=> console.log(name))
provinces.forEach((province)=>console.log(province))

for (let i = 0; i<names.length;i++){
  console.log(`${names[i]} (${provinces[i]})`)
}
/**Uppercase Transformation Using the map method to transform the provinces array
by converting each element to uppercase*/
const uppercaseProvinces= provinces.map((province)=>province.toUpperCase())
console.log(uppercaseProvinces)

/**Name Lengths Using the map method to transform the names array
 by calculating the length of each name*/
const nameLengths = names.map(name => name.length)
console.log(nameLengths);

/**Sorting Using the sort method to sort the provinces array
 in alphabetical order*/
provinces.sort()
console.log (provinces)

/**Filtering Cape Using the filter method to filter the provinces array
 to exclude any provinces containing the word 'cape'*/
const filteredProvinces=provinces.filter((province)=>!province.includes('cape'))
console.log(`Remaining provinces:${filteredProvinces.length}`)

/**Finding 'S' Using the map method to transform the names array
 by checking if each name contains the letter 'S'*/
const containsS = names.map((name)=>name.includes('S'))
console.log(containsS)

/**Creating Object mapping Using the reduce method to create an object that maps each name
 to its corresponding province*/
const nameToProvince= names.reduce((obj,name,index)=>{
  if(index< provinces.length){
  obj[name]= provinces[index]
  }
  return obj
}, {})
console.log(nameToProvince)

//Advanced Exercises

//Log Products
console.log(products.map((product)=> product.product))

/**Filter by Name  Using the filter method to filter the products array
 to include only products with a name length of 5 or less*/
console.log(products.filter((product)=>product.product.length<=5))

//Price manupulation  Using the reduce method to calculate the total price of the filtered products
const filteredProducts = products.filter((product) => product.price!== '' && product.price!== '');
console.log(filteredProducts)
const totalPrice = filteredProducts.reduce((sum, product) => sum + (typeof product.price === 'string'? parseInt(product.price, 10) : product.price), 0);
console.log(totalPrice)
//Find Extremes in prices using the Math.min Math.max methods to find the minimum and maximum prices.
const prices = filteredProducts.map((product) => typeof product.price === 'string'? parseInt(product.price) : product.price);
const minPrice = Math.min(...prices);
const maxPrice = Math.max(...prices);
console.log(`Highest: ${maxPrice}. Lowest: ${minPrice}.`);

/**Object Transformation using the reduce method to transform the filtered products array
into an object with product names as keys and corresponding price objects as values.**/
console.log(products.reduce((obj, product) => {
  obj[product.product] = { name: product.product, price: typeof product.price === 'string'? parseInt(product.price) : product.price };
  return obj;
}, {}));
