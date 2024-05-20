import { getCurrentUser } from "./apiAuth";
import supabase from "./supabase";

export async function createOrder(order) {
  const { data, error } = await supabase.from("orders").insert([order]);
  if (error) throw new Error(error.message);
  return data;
}

export async function getOrders() {
  const user = await getCurrentUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("user_id", user.id);
  if (error) throw new Error(error.message);
  return data;
}

export async function updateOrder(id, order) {
  const { data, error } = await supabase
    .from("orders")
    .update(order)
    .eq("id", id);
  if (error) throw new Error(error.message);

  return data;
}

export async function deleteOrder(orderId) {
  const { data, error } = await supabase
    .from("orders")
    .delete()
    .eq("id", orderId);
  if (error) throw new Error(error.message);
  return data;
}

export async function getSingleOrder(orderId) {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("id", orderId);
  if (error) throw new Error(error.message);
  return data;
}
