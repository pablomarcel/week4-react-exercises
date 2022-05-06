import React from 'react';
import CoffeeCard from "./CoffeeCard";

export default function Exercise1() {
    const drinks =[
        {
            drinkName: 'espresso',
            price:1
        },
        {
            drinkName: 'americano',
            price:2
        },
        {
            drinkName: 'latte',
            price:3
        },
        {
            drinkName: 'mocha',
            price:4
        }
    ]


  return (
    <div>
        {/*add a loop*/}

        {/* eslint-disable-next-line array-callback-return */}
        {drinks.map((item, index)=>{
            return <CoffeeCard key={index} price={item.price} drinkName={item.drinkName}/>
    })}

        {/*<CoffeeCard price={'1'} drinkName={'espresso'}/>*/}
        {/*<CoffeeCard price={'2'} drinkName={'mocha'}/>*/}
        {/*<CoffeeCard price={'3'} drinkName={'latte'}/>*/}
        {/*<CoffeeCard price={'4'} drinkName={'americano'}/>*/}
      {/*<h2>Exercise 1</h2>*/}
      {/*<p>*/}
      {/*  In <code>Exercise1.jsx</code>, there is a component called <code>CoffeeCard.jsx</code> that is imported, but not used.*/}
      {/*</p>*/}
      {/*<ol>*/}

      {/*  /!*<li>Render this component four times in <code>Exercise1.jsx</code> (one for each coffee drink).</li>*!/*/}
      {/*  /!*<li>Pass in the correct props.</li>*!/*/}
      {/*    */}
      {/*</ol>*/}
    </div>
  );
}
