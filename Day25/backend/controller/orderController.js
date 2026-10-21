export const createOrder = async (req, res) => {

    try {
        const product = {
            name: "Laptop",
            price: 1000,
            stock: 10
        };

        const quantity = Number(req.body.quantity);

        if (!Number.isInteger(quantity) || quantity <= 0) {
            return res.status(400).json({
                msg: "Invalid quantity"
            });
        }

        const order = await createOrderService(product, quantity);

        return res.status(201).json({
            msg: "Order Created Successfully",
            order
        });

    } catch (error) {
        return res.status(400).json({
            msg: error.message
        });
    }
};
