export function reconcileOrder(existingBook, incomingOrder) {
  // get type, quantity and price from incomingOrder
  const { type, quantity, price } = incomingOrder

  // adds the existingBook to the end of an empty array
  let reconciledBook = []
  reconciledBook = reconciledBook.concat(existingBook)

  // filter the book for a match
  const match = reconciledBook
    .filter(book => !(book.type === type))
    .filter(book => {
      if (type === 'buy') {
        return book.price <= price
      } else {
        return book.price >= price
      }
    })
    .map(book => {
      let mutatedOrder = {}
      if (book.quantity - quantity > 0) {
        mutatedOrder.type = book.type
        mutatedOrder.price = book.price
        mutatedOrder.quantity = book.quantity - quantity
      } else {
        mutatedOrder.type = type
        mutatedOrder.price = price
        mutatedOrder.quantity = Math.abs(book.quantity - quantity)
      }

      console.log(mutatedOrder)
      return mutatedOrder
    })

  // if no match is found return the reconciled with incomingOrder added
  if (!match.length) {
    reconciledBook.push(incomingOrder)
  } else {
    if (!match[0].quantity) {
      reconciledBook.splice(reconciledBook.indexOf(match))
    } else {
      return match
    }
  }

  return reconciledBook
}
