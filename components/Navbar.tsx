"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">Uchoice</div>
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/products">Shop</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/about">About Us</Link>
      </div>
      <div className="flex gap-4">
        <Link href="/auth/login">Login</Link>
        <Link href="/auth/register">Register</Link>
      </div>
    </nav>
  );
}
