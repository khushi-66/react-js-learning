import { StrictMode } from 'react'
import React from 'react';

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const elem1={
    type:'a' ,
    props:{
        href : 'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit Google'
};
const anotherElement=(
  <a href='https://google.com'  target='_blank'>Visit to Google</a>
  );
  const username='khushi sahu';
const elem2=React.createElement(
     'a',
{ href:'https://google.com',target:'_blank' },
'click me to visit google',
  username
  
);
function   Myfunc(){
    return(
     <div>Div Tag....</div>
    );}

// createRoot(document.getElementById('root'))
// .render(
  
//     <App />
  
//   )

    

                   // 1
//  createRoot(document.getElementById('root'))
//  .render(
  
//    anotherElement //  allowed
  
//  )



                  //2
// createRoot(document.getElementById('root'))
// .render(
  
//   elem1 //  Not allowed
  
// )

                  3
// createRoot(document.getElementById('root'))
// .render(
  
//     Myfunc()  //allowed
  
// )



                  4
// createRoot(document.getElementById('root'))
// .render(
//   <StrictMode>
//     <Myfunc />
//   </StrictMode>,
// )




                  5
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
                   6
createRoot(document.getElementById('root'))
.render(
  
  elem2 //  allowed
  
)