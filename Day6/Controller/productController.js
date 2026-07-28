export const getProducts = async (req, res) => {
    try {
        res.send("All Products");
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
};

export const createProduct = async (req, res) => {
    try {
        res.send("Product Added Successfully");
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
};

export const deleteProduct = async (req, res) => {
    try {
        res.send("Product Deleted Successfully");
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
};