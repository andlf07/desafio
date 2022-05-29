const { prisma } = require("./prisma.service");

class ProductService {
  constructor() {
    this.prisma = prisma;
  }

  //Get list products
  async getProducts() {
    try {
      const getProducts = await this.prisma.product.findMany({
        include: {
          books: true,
          sales: true,
        },
      });
      return getProducts;
    } catch (error) {
      console.log(error);
      throw new Error("Error creating users");
    }
  }
  //create product
  async create(data) {
    try {
      const createProduct = await this.prisma.product.create({ data: data });
      return createProduct;
    } catch (error) {
      console.log(error);
      throw new Error("Error creating users");
    }
  }
  async createBook(data) {
    let { ISBN, title, price, author, publisher, productId } = data;
    try {
      const createBook = await this.prisma.book.create({
        data: {
          ISBN,
          title,
          price,
          author,
          publisher,
          product: { connect: { id: productId } },
        },
      });
      return createBook;
    } catch (error) {
      console.log(error);
      throw new Error("Error creating users");
    }
  }
  async update(data) {
    let { id, ...rest } = data;
    try {
      const updateProduct = await this.prisma.product.update({
        where: { id: Number(id) },
        data: rest,
      });
    } catch (error) {
      console.log(error);
      throw new Error("Error creating users");
    }
  }
}

const productService = new ProductService();

module.exports = {
  productService,
};
