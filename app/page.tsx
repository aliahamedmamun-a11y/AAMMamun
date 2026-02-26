"use client";
import { useEffect, useState } from "react";

export default function CategoryPage() {
  const [category, setCategory] = useState<any>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch("/api/categories")
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setCategory(data[0]); // প্রথম ক্যাটেগরি দেখাবে
        }
      })
      .catch(err => console.error("Error fetching categories:", err));
  }, []);

  useEffect(() => {
    if (category?.heroImages?.length > 0) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % category.heroImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [category]);

  const subcategoriesPerPage = 9;
  const paginatedSubcategories = category?.subcategories?.slice(
    page * subcategoriesPerPage,
    (page + 1) * subcategoriesPerPage
  );

  return (
    <div>
      {category && (
        <section className="py-8 px-6">
          <div className="grid grid-cols-9 gap-4 bg-pink-200 bg-opacity-30 backdrop-blur-lg rounded-xl p-6 shadow-lg">
            {paginatedSubcategories.map((sub: any) => (
              <div key={sub._id} className="flex flex-col items-center">
                <img
                  src={sub.icon}
                  alt={sub.name}
                  className="w-16 h-16 rounded-full border shadow"
                />
                <p className="mt-2 text-sm">{sub.name}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 gap-4">
            <button
              disabled={page === 0}
              onClick={() => setPage(page - 1)}
              className="px-4 py-2 bg-pink-500 text-white rounded disabled:opacity-50"
            >
              Prev
            </button>
            <button
              disabled={(page + 1) * subcategoriesPerPage >= category.subcategories.length}
              onClick={() => setPage(page + 1)}
              className="px-4 py-2 bg-pink-500 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>
      )}

      {category && (
        <section className="relative bg-gradient-to-r from-pink-400 to-pink-600 text-white py-16 text-center mt-8">
          <div className="absolute inset-0">
            <img
              src={category.heroImages[currentImage]}
              alt="Hero"
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-4">{category.heroTitle}</h1>
            <p className="text-lg mb-6">{category.heroDescription}</p>
            <button className="bg-white text-pink-600 px-6 py-2 rounded-lg font-semibold shadow">
              Shop Now
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
