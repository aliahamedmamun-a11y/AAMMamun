export default function HomePage() {
  const subcategories = [
    { name: "Shoes", icon: "/image/C shoes.png" },
    { name: "T-Shirt", icon: "/image/C t-shirt.png" },
    { name: "Shart", icon: "/image/c shart.png" },
    { name: "Panjabi", icon: "/image/C panjabi.png" },
    { name: "Jeans", icon: "/image/jeans.png" },
    { name: "Watch", icon: "/image/watch.png" },
    { name: "Bag", icon: "/image/bag.png" },
    { name: "Mobile", icon: "/image/mobile.png" },
    { name: "Laptop", icon: "/image/laptop.png" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-400 to-pink-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Uchoice</h1>
        <p className="text-lg mb-6">Your modern e-commerce destination</p>
        <button className="bg-white text-pink-600 px-6 py-2 rounded-lg font-semibold shadow">
          Shop Now
        </button>
      </section>

      {/* Subcategory Section */}
      <section className="py-12 px-6 mt-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Explore Subcategories</h2>
        <div className="grid grid-cols-9 gap-4 bg-pink-200 bg-opacity-40 backdrop-blur-lg rounded-xl p-6 shadow-lg">
          {subcategories.map((sub) => (
            <div
              key={sub.name}
              className="flex flex-col items-center"
            >
              <img
                src={sub.icon}
                alt={sub.name}
                className="w-16 h-16 rounded-full border shadow"
              />
              <p className="mt-2 text-xs font-medium">{sub.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
