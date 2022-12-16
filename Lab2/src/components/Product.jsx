import { Counter } from "./CardCounter";

function Product({product, increase, decrease}) {

    return (<tbody>
        <tr>
            <th>{product.name}</th>
            <th>{product.price}</th>
            <th>
                <Counter count={product.count} increase={increase} decrease={decrease} id={product.id} min={product.min} max={product.max} />
            </th>
            <th>{product.priceTotal}</th>
        </tr>
    </tbody>);

}

export default Product;