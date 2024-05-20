import { HiMiniTrash } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import useProducts from "../../features/products/useProducts";
import { useDeleteProduct } from "../../features/products/useDeleteProduct";

const Products = () => {
  const { isLoading, error, products } = useProducts();
  const { deleteProduct, isDeleting } = useDeleteProduct();

  if (isLoading)
    return (
      <div className="h-full w-full flex items-center justify-center">
        Loading...
      </div>
    );

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="max-w-7xl mx-auto p-6 w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold mb-4">Products</h1>
        <NavLink
          className="bg-primary text-white px-4 py-2 rounded-md"
          to="/admin/add-product"
        >
          Add Product
        </NavLink>
      </div>
      <div className="overflow-auto">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light text-surface">
                  <thead className="border-b bg-slate-50 border-neutral-200 font-medium dark:border-white/10">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Available Sizes
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Quantiry
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-4">
                        imageUrl
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="shadow-xl">
                    {products.map((product, index) => (
                      <tr
                        key={product.id}
                        className="border-b border-neutral-200 dark:border-white/10"
                      >
                        <td className="whitespace-nowrap border-y px-6 py-4 font-medium">
                          {index + 1}
                        </td>
                        <td className="whitespace-nowrap border-y px-6 py-4">
                          {product.name}
                        </td>
                        <td className="whitespace-nowrap border-y px-6 py-4">
                          {product.category}
                        </td>
                        <td className="whitespace-nowrap border-y px-6 py-4">
                          {product.availableSizes.join(", ")}
                        </td>
                        <td className="whitespace-nowrap border-y px-6 py-4">
                          {product.quantity}
                        </td>
                        <td className="whitespace-nowrap border-y px-6 py-4">
                          {product.price}
                        </td>
                        <td className="whitespace-nowrap border-y px-6 py-4">
                          <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-10 h-10"
                          />
                        </td>
                        <td className="whitespace-nowrap border-y px-6 py-4">
                          <HiMiniTrash
                            className="w-6 h-6 text-slate-500 cursor-pointer hover:text-slate-700"
                            onClick={() => deleteProduct(product.id)}
                          />
                          {isDeleting && <div>Deleting...</div>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
