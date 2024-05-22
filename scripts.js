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
const nameLengths = names.map((name) => name.length)
console.log(nameLegnths);