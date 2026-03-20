import express from 'express';
const app=express();
app.use(express.static('dist'));//middle ware stop in middle to ask 
app.get('/api/jokes',(req,res)=>{
   const jokes=[

         {id:1,title:'A joke',content:'this is a joke'},
         {id:2,title:'B joke',content:'this is a joke'},
         {id:3,title:'C joke',content:'this is a joke'},
         {id:4,title:'D joke',content:'this is a joke'},
         {id:5,title:'E joke',content:'this is a joke'},
         {id:6,title:'F joke',content:'this is a joke'},
         {id:7,title:'G joke',content:'this is a joke'}
   ];
   
   res.send(jokes);

}



//    app.get('/',(req,res)=>{
//     res.send('Server is ready......');
//    })

  

//get  list of 5 jokes
);
const port=process.env.PORT ||3000;
 app.listen(port,()=>{
    console.log(`serv at https://localhost:${port}`);
 }
)