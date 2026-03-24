import express from 'express';
const app=express();

app.get('/api/products',(req,res)=>{
    const products = [
  { id: 1, name: "iPhone 15", category: "Mobile", price: 79999, inStock: true },
  { id: 2, name: "Samsung Galaxy S23", category: "Mobile", price: 74999, inStock: true },
  { id: 3, name: "OnePlus 11", category: "Mobile", price: 61999, inStock: true },
  { id: 4, name: "Realme Narzo 60", category: "Mobile", price: 17999, inStock: false },
  { id: 5, name: "Redmi Note 12", category: "Mobile", price: 14999, inStock: true },

  { id: 6, name: "Dell Inspiron 15", category: "Laptop", price: 55000, inStock: true },
  { id: 7, name: "HP Pavilion", category: "Laptop", price: 62000, inStock: true },
  { id: 8, name: "Lenovo IdeaPad", category: "Laptop", price: 48000, inStock: false },
  { id: 9, name: "MacBook Air M1", category: "Laptop", price: 89999, inStock: true },
  { id: 10, name: "Asus VivoBook", category: "Laptop", price: 51000, inStock: true },

  { id: 11, name: "Sony Headphones", category: "Accessories", price: 2999, inStock: true },
  { id: 12, name: "Boat Earbuds", category: "Accessories", price: 1499, inStock: true },
  { id: 13, name: "JBL Speaker", category: "Accessories", price: 3999, inStock: false },
  { id: 14, name: "Logitech Mouse", category: "Accessories", price: 799, inStock: true },
  { id: 15, name: "HP Keyboard", category: "Accessories", price: 999, inStock: true },

  { id: 16, name: "Samsung TV 43 inch", category: "Electronics", price: 32999, inStock: true },
  { id: 17, name: "LG Washing Machine", category: "Electronics", price: 25999, inStock: false },
  { id: 18, name: "Whirlpool Refrigerator", category: "Electronics", price: 18999, inStock: true },
  { id: 19, name: "Philips Iron", category: "Electronics", price: 1299, inStock: true },
  { id: 20, name: "Mi Air Purifier", category: "Electronics", price: 9999, inStock: true }
];

    if(req.query.search)
    {
        const filterproducts=products.filter(product=>product.name.includes(req.query.search))
         res.send(filterproducts);
         return;
    }

    setTimeout(()=>{
        res.send(products)
    },3000)
})
const port=process.env.port || 3000;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})
