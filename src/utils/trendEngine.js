const baseProducts = [
  {
    name: "Streetwear Hoodie",
    baseViews: 1200,
    baseBuyers: 120,
  },
  {
    name: "Minimal Sneakers",
    baseViews: 980,
    baseBuyers: 90,
  },
  {
    name: "Smart Watch",
    baseViews: 1500,
    baseBuyers: 200,
  },
];

// small deterministic “time pulse”
function getPulse() {
  const now = new Date();
  return now.getMinutes() % 7; // slow controlled change
}

export function getTrendingProducts() {
  const pulse = getPulse();

  return baseProducts.map((p) => {
    return {
      ...p,

      // controlled growth (NOT random)
      views: p.baseViews + pulse * 12,
      buyers: p.baseBuyers + Math.floor(pulse * 2.3),

      label:
        p.baseViews > 1400
          ? "🔥 Hot"
          : p.baseViews > 1000
          ? "⚡ Trending"
          : "🆕 New",
    };
  });
}