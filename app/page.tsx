export default function HomePage() {
  const categories = [
    { name: "Bags", icon: "/images/bags.png" },
    { name: "Electronics", icon: "/images/electronics.png" },
    { name: "Fashion", icon: "/images/fashion.png" },
    { name: "Toys", icon: "/images/toys.png" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Uchoice</h1>
        <p className="text-lg mb-6">Your modern e-commerce destination</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold shadow">
          Shop Now
        </button>
      </section>

      {/* Category Grid */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="flex flex-col items-center">
              <img
                src={cat.icon}
                alt={cat.name}
                className="w-20 h-20 rounded-full border shadow"
              />
              <p className="mt-2 text-sm font-medium">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
