import { useEffect, useMemo, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import EmptyState from "../components/EmptyState";
import { motion } from "framer-motion";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    api
      .get("/products", { params: { limit: 12 } })
      .then((res) => {
        setProducts(res.data.products || []);
      })
      .catch((err) => {
        console.error("Fetch products error:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const categories = useMemo(() => {
    const cats = products.map((p) => p.category);
    return ["all", ...new Set(cats)];
  }, [products]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return products.filter((p) => {
      const matchQuery = q === "" || p.title.toLowerCase().includes(q);
      const matchCategory = category === "all" || p.category === category;

      return matchQuery && matchCategory;
    });
  }, [products, query, category]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* NAVBAR */}
      <Navbar
        categories={categories}
        activeCategory={category}
        onSelect={(cat) => {
          setCategory(cat);
          setQuery("");
        }}
      />

      {/* CONTENT */}
      <main className="container mx-auto px-4 py-8 flex-1">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
          <h2 className="text-xl font-semibold text-sky-600">Catalog</h2>
          <span className="text-sm text-gray-500">
            Showing {filtered.length} Results
          </span>
        </div>

        {/* SEARCH */}
        <SearchBar value={query} onChange={setQuery} />

        {/* CONTENT STATE */}
        {loading ? (
          <div className="py-24 text-center text-gray-400">
            Loading products...
          </div>
        ) : filtered.length === 0 ? (
          <EmptyState />
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {filtered.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </motion.div>
        )}
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;
