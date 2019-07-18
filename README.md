# Bitcoin Order Book

An order book tracks all buy and sell requests from traders for Bitcoin assets at various price levels. When a trader submits a trade it is either fulfilled immediately, if there is a matching order in the book, or it is added to the book to be fulfilled later.

Assume starting with an empty order book, let's walkthrough several scenarios.

**Buy 15 BTC at 5800:** The order book is empty so this order cannot be fulfilled immediately. This order is added to the book.

**Buy 10 BTC at 6000:** The order book only has buy orders and no sell ordrs so this order cannot be fulfilled immediately. This order is added to the book.

**Sell 5 BTC at 6100:** The order book has two buy orders but neither match this as the prices mismatch. This order is added to the book.

**Sell 10 BTC at 6000:** The order book has a buy order for 10 BTC at 6000 meaning this order can be fulfilled immediately. This order is executed and the corresponding buy is removed from the order book.

**Buy 2 BTC at 6100:** The order book has a sell order at this price point for more than this order's quantity. This means this order can be fulfilled immediately and the corresponding sell order can be reduced by 2 as it has been partially fulfilled but the remainder stays in the book.

**Sell 25 BTC at 5800:** The order book has a buy order at this price point but for a smaller quantity. This order can be partially fulfilled, the corresponding buy order is used up and is removed from the order book and the remainder of this order (Sell 10 BTC at 5800) is added to the book.
