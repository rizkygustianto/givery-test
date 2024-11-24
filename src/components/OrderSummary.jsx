const OrderSummary = ({ totalOrder, totalPrice }) => {
    return (
        <div className="orderSummary">
            <h4>Your bill</h4>
            <hr />
            <div className="row">
                <span>Items ordered :&nbsp;</span>
                <span id='count'>{totalOrder}</span>
            </div>
            <div className="row">
                <span>Total price :&nbsp;</span>
                <span id='price'>{totalPrice}</span>
                <span>&nbsp;yen</span>
            </div>
        </div>
    )
}

export default OrderSummary