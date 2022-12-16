import React, { useEffect, useState } from 'react';
import { Counter } from './CardCounter';
import Header from './CardHeader';
import Footer from './CardFoot';
import Product from './Product';
import data from './../data';

export function Card() {

    const [card, setCard] = useState(data);
    const [total, setTotal] = useState({
        price: card.reduce((prev, curr) => { return prev + curr.priceTotal}, 0),
        total: card.reduce((prev, curr) => { return prev + curr.count}, 0)
    })


    useEffect(()=>{
        setTotal({
            price: card.reduce((prev, curr) => { return prev + curr.priceTotal}, 0),
            total: card.reduce((prev, curr) => { return prev + curr.count}, 0)
        });
    }, [card]);

    const increase = (id, max) => {
		setCard((card) => {
			return card.map((product) => {
				if (product.id === id) {
					return {
						...product,
						count: product.count + 1 <= max ? product.count + 1 : product.count,
						priceTotal: (product.count + 1 <= max ? product.count + 1 : product.count) * product.price,
					};
				}
				return product;
			});
		});
	};

    const decrease = (id, min) => {
		setCard((card) => {
			return card.map((product) => {
				if (product.id === id) {
					return {
						...product,
						count: product.count - 1 >= min ? product.count - 1 : product.count,
						priceTotal: (product.count - 1 >= min ? product.count - 1 : product.count) * product.price,
					};
				}
				return product;
			});
		});
	};

    let products = card.map((product) => 
    {
        return <Product product={product} key={product.id} increase={increase} decrease={decrease} />
    });

    return (<div>
        <h1>
            Card
        </h1>
        <table className='MyTable'>
            <Header />
            {products}
            <Footer  total={total}/>
        </table>
    </div>);
}

