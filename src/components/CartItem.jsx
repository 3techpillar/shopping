"use client";
export default function CartItem({ item, removeFromCart }) {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <p className="font-bold">{item.name}</p>
        <p>
          ${item.price} x {item.quantity}
        </p>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Remove
      </button>
    </div>
  );
}
