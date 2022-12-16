function Footer({ total }){

    return (<tfoot>
        <tr>
            <th className='tableFoot' colSpan={2} >Totlas</th>
            <th className='tableFoot'>{total.total}</th>
            <th className='tableFoot'>{total.price}</th>
        </tr>
    </tfoot>);
}

export default Footer;