export const createOrderService = async (product, quantity) => {

    // 1. Check stock
    if (product.stock < quantity) {
        throw new Error("Insufficient stock");
    }

    // 2. Calculate price
    const subtotal = product.price * quantity;

    // 3. Calculate GST (18%)
    const gst = subtotal * 0.18;

    // 4. Calculate total
    const total = subtotal + gst;

    // 5. Reduce stock
    product.stock -= quantity;

    return {
        productName: product.name,
        quantity,
        subtotal,
        gst,
        total,
        remainingStock: product.stock
    };
};