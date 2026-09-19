// CampusEats task calculation with explicit names and input validation.
const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
  if (!Number.isFinite(price) || !Number.isFinite(quantity)) {
    throw new TypeError("price and quantity must be finite numbers");
  }
  if (price < 0 || quantity < 0) {
    throw new Error("price and quantity must be >= 0");
  }

  const subtotal = price * quantity;
  return customerType === "vip"
    ? subtotal * (1 - VIP_DISCOUNT)
    : subtotal;
}

module.exports = { calculateTotal };

// API keys belong in environment variables or a secrets store, never in source.
