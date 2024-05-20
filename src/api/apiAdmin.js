import supabase, { supabaseUrl } from "./supabase";

export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) throw new Error("Error getting products");

  return data;
}

export async function getProduct(id) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error("Error getting product");

  return data;
}

export async function createEditProduct(newProduct, id) {
  const hasImagePath = newProduct.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newProduct.imageUrl.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newProduct.imageUrl
    : `https://svhebelhgtdcbthejhkv.supabase.co/storage/v1/object/public/product-images/${imageName}`;

  // 1. Create product/edit product
  let query = supabase.from("products");

  // A) CREATE
  if (!id) query = query.insert([{ ...newProduct, imageUrl: imagePath }]);

  // B) EDIT
  if (id)
    query = query.update({ ...newProduct, imageUrl: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.log(`Products error: ${error.message}`);
    throw new Error("Error creating product");
  }

  // 2. Upload image
  if (hasImagePath) return;
  const { error: storageError } = await supabase.storage
    .from("product-images")
    .upload(imageName, newProduct.imageUrl);

  // 3. Delete the cabin IF there was an error uploading image
  if (storageError) {
    await supabase.from("products").delete().eq("id", data.id);

    console.log(storageError);
    throw new Error(
      "Products image could not be uploaded and the product was deleted"
    );
  }

  return data;
}

export async function deleteProduct(id) {
  const { error } = await supabase.from("products").delete().match({ id });

  if (error) throw new Error("Error deleting product");
}

export async function getOrders() {
  const { data, error } = await supabase.from("orders").select("*");

  if (error) throw new Error("Error getting orders");

  return data;
}

export async function getClients() {
  const { data: clients, error } = await supabase.auth.admin.listUsers();

  if (error) throw error;

  return clients.users;
}

export async function getTransactions() {
  const { data, error } = await supabase.from("orders").select("*");

  if (error) throw new Error("Error getting transactions");

  return data;
}
