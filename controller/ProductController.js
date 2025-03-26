import Product from "../model/ProductModel.js";

export const create = async (req, res) => {
  try {
    // console.log("Received request body:", req.body);
    const newProduct = new Product(req.body);

    const saved = await newProduct.save();
    return res
      .status(200)
      .json({ msg: "Product created successfuly.", product: saved });
  } catch (error) {
    return res.status(500).json({ error: `error ${error}` });
  }
};
export const getAll = async (req, res) => {
  try {
    const products = await Product.find();

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ error: `error ${error}` });
  }
};
export const get = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: `error ${error}` });
  }
};
export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    await Product.findByIdAndUpdate(id, req.body);

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: `error ${error}` });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    await Product.findByIdAndDelete(id);

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: `error ${error}` });
  }
};
