const product = require("../models/ProductModel")
const getProduct = async (req, res) => {
  try {
    const search = req.query.search;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const category = req.query.category;

    const skip = (page - 1) * limit;

    let filter = {};

    if (search) {
      filter.name = {
        $regex: search,
        $options: "i",
      };
    }

    if (category) {
      filter.category = category;
    }

    const totalProduct = await product.countDocuments(filter);

    const products = await product.find(filter).skip(skip).limit(limit);

    return res.status(200).json({
      success: true,
      message: "Product get successfully",
      data: products,
      pagination: {
        currentPage: page,
        limit: limit,
        skip: skip,
        totalPages: Math.ceil(totalProduct / limit)
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "something wentwrong during get product",
    });
  }
};

module.exports = getProduct;
