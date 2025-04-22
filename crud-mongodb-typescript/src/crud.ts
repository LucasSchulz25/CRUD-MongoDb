import { connectDB } from "./db";
import { Product } from "./models/product.model";

async function run() {
  await connectDB();

  // CREATE
  const createProduct = async () => {
    const newProduct = new Product({ name: "Laptop", price: 1500 });
    await newProduct.save();
    console.log(" Producto creado:", newProduct);
  };

  // READ ALL
  const getAllProducts = async () => {
    const products = await Product.find();
    console.log(" Todos los productos:", products);
  };

  // READ ONE
  const getProductById = async (id: string) => {
    const product = await Product.findById(id);
    console.log(" Producto encontrado:", product);
  };

  // UPDATE
  const updateProduct = async (id: string) => {
    const updated = await Product.findByIdAndUpdate(
      id,
      { price: 1700 },
      { new: true }
    );
    console.log(" Producto actualizado:", updated);
  };

  // DELETE
  const deleteProduct = async (id: string) => {
    const deleted = await Product.findByIdAndDelete(id);
    console.log(" Producto eliminado:", deleted);
  };

  // PRUEBAS CRUD
  await createProduct();
  await getAllProducts();

  const sample = await Product.findOne(); // Tomamos uno de ejemplo
  if (sample) {
    await getProductById(sample._id.toString());
    await updateProduct(sample._id.toString());
    await deleteProduct(sample._id.toString());
  }

  console.log(" CRUD ejecutado completo");
  process.exit(); // Fin del script
}

run();