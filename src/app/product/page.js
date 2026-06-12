"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";

// --- MOCK PRODUCT SEED DATA ---
const MOCK_PRODUCT_DATA = {
  id: "prod_xyz123",
  name: "Oversized streetwear hoodie",
  price: 4999,
  finalPrice: 3499,
  discount: 30,
  description: "Oversized streetwear hoodie. Style aligned perfectly for 2026 aesthetics.",
  avgRating: "4.8",
  reviewCount: 124,
  totalStock: 45,
  categoryId: "outerwear",
  views: 420,
  cartAdds: 38,
  offerEndsAt: new Date(Date.now() + 1000 * 60 * 60 * 23), // 23 hours from now
  colors: ["creme", "green", "pink"],
  imageUrl: "/screens/image7.jpeg",
  colorVariants: {
    "creme": {
      images: ["/screens/image7.jpeg"],
      sizes: { "S": 5, "M": 2, "L": 0, "XL": 8 }
    },
    "green": {
      images: ["/screens/image4.jpeg"],
      sizes: { "M": 12, "L": 15, "XL": 0 }
    },
    "pink": {
      images: ["/screens/image5.jpeg"],
      sizes: { "S": 1, "M": 3, "L": 2 }
    }
  }
};

const MOCK_RELATED_PRODUCTS = [
  { id: "rel_1", name: "cord-set", finalPrice: 2199, imageUrls: ["/screens/image7.jpeg"] },
  { id: "rel_2", name: "caasual wear", finalPrice: 4500, imageUrls: ["/screens/image2.jpeg"] },
  { id: "rel_3", name: "Exo Runner Sneakers", finalPrice: 5299, imageUrls: ["/screens/image6.jpeg"] }
];

const MOCK_LOOKBOOK_POSTS = [
  { imageUrl: "/screens/image7.jpeg" },
  { imageUrl: "/screens/image6.jpeg" },
  { imageUrl: "/screens/image4.jpeg" }
];

// Formatting Helper
const formatINR = (amount) => {
  return Number(amount).toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

export default function ViewProductPreview() {
  const [product] = useState(MOCK_PRODUCT_DATA);
  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(14);
  const [timerText, setTimerText] = useState("");
  const [selectedColor, setSelectedColor] = useState("Neon Gray");
  const [selectedSize, setSelectedSize] = useState(null);

  const carouselRef = useRef(null);

  // Variant Computations
  const variantData = useMemo(() => {
    return selectedColor ? product?.colorVariants?.[selectedColor] : null;
  }, [selectedColor, product]);

  const displayImages = useMemo(() => {
    if (!product) return [];
    return variantData?.images || [product.imageUrl];
  }, [variantData, product]);

  const availableSizes = useMemo(() => {
    return variantData?.sizes || {};
  }, [variantData]);

  const currentStock = useMemo(() => {
    if (!product) return 0;
    return selectedSize ? (availableSizes[selectedSize] || 0) : product.totalStock;
  }, [selectedSize, availableSizes, product]);

  const totalPrice = useMemo(() => {
    return (product?.finalPrice || 0) * quantity;
  }, [product?.finalPrice, quantity]);

  const displaySales = useMemo(() => {
    if (!product) return 0;
    const interestScore = (product.views || 50) * 0.1 + (likesCount || 0) * 2 + (product.cartAdds || 0) * 3;
    return Math.floor(interestScore);
  }, [product, likesCount]);

  // Urgency Timer Setup
  useEffect(() => {
    if (!product || !product.offerEndsAt) return;
    const targetTime = new Date(product.offerEndsAt).getTime();

    const calculateTimeLeft = () => {
      const difference = targetTime - Date.now();
      if (difference <= 0) {
        setTimerText("Offer Expired");
        return;
      }
      const totalSeconds = Math.floor(difference / 1000);
      const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
      const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
      const seconds = String(totalSeconds % 60).padStart(2, "0");
      setTimerText(`Deal ends in ${hours}:${minutes}:${seconds}`);
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [product]);

  const handleCarouselScroll = (e) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const clientWidth = e.currentTarget.clientWidth;
    const index = Math.round(scrollLeft / clientWidth);
    if (index !== activeImageIndex && index >= 0 && index < displayImages.length) {
      setActiveImageIndex(index);
    }
  };

  const handleLikeToggle = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikesCount(p => p - 1);
    } else {
      setIsLiked(true);
      setLikesCount(p => p + 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize && product.colorVariants?.[selectedColor]?.sizes) {
      alert("Please select a size first!");
      return;
    }
    alert(`🛒 Added ${quantity} item(s) to your cart!`);
  };

  return (
    <div style={styles.outerWrapper}>
      <div style={styles.phoneContainer}>
        
        {/* Top Navbar Header */}
        <div style={styles.topNav}>
          <button style={styles.navIconBtn} onClick={() => alert("Back Triggered")}>
            ‹
          </button>
          <div style={{ display: "flex", gap: "8px" }}>
            <button style={styles.navIconBtn} onClick={() => alert("Shared Link generated")}>
              🔗
            </button>
            <button style={styles.navIconBtn} onClick={() => alert("Added to wishlist blueprint")}>
              🔖
            </button>
            <button style={styles.navIconBtn} onClick={handleLikeToggle}>
              <span style={{ color: isLiked ? "#EF4444" : "#FFFFFF" }}>{isLiked ? "❤️" : "♡"}</span>
            </button>
          </div>
        </div>

        {/* Scrollable Detail Body Container */}
        <div style={styles.scrollableContent}>
          
          {/* Media Carousel Area */}
          <div style={styles.mediaContainer}>
            <div 
              ref={carouselRef}
              style={styles.carouselTrack}
              onScroll={handleCarouselScroll}
            >
              {displayImages.map((mediaUrl, idx) => (
                <div key={idx} style={styles.carouselSlide} onClick={() => setModalVisible(true)}>
                  <div style={{ width: "100%", height: "100%", position: "relative" }}>
                    <Image 
                      src={mediaUrl} 
                      alt="Product view" 
                      fill 
                      priority={idx === 0}
                      sizes="(max-width: 420px) 100vw, 420px"
                      style={{ objectFit: "cover" }} 
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Pagination Indicator Dots */}
            <div style={styles.paginationContainer}>
              {displayImages.map((_, i) => (
                <div 
                  key={i} 
                  style={{
                    ...styles.dot,
                    backgroundColor: activeImageIndex === i ? "#8B5CF6" : "rgba(255,255,255,0.4)",
                    width: activeImageIndex === i ? "16px" : "6px"
                  }}
                />
              ))}
            </div>
          </div>

          {/* Core Trust Verification Badges */}
          <div style={styles.trustBadgeRow}>
            <div style={styles.trustItem}>🛡️ <span style={styles.trustText}>Secure Pay</span></div>
            <div style={styles.trustItem}>💵 <span style={styles.trustText}>COD Available</span></div>
            <div style={styles.trustItem}>🔄 <span style={styles.trustText}>7 Days Return</span></div>
          </div>

          {/* Urgent Offer Banner Row */}
          {timerText && (
            <div style={styles.urgencyBar}>
              ⚡ <span style={styles.urgencyText}>{timerText}</span>
            </div>
          )}

          {/* Product Headline Information Card Box */}
          <div style={styles.contentBox}>
            <h1 style={styles.valueTitle}>{product.name}</h1>
            <p style={styles.fomoText}>🔥 {displaySales}+ people interested this week</p>

            {/* Simulated Live Stock Warning Layer */}
            {currentStock < 10 && currentStock > 0 && (
              <div style={styles.lowStockWarningCard}>
                ⚡ HURRY! Only {currentStock} left in stock for this selection.
              </div>
            )}

            {/* Ratings & Metrics Summary View Row */}
            <div style={styles.ratingRow}>
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <span style={{ color: "#FBBF24" }}>★</span>
                <span style={styles.avgRating}>{product.avgRating}</span>
                <span style={styles.reviewCount}>({product.reviewCount} reviews)</span>
              </div>
              <button style={styles.viewReviewBtn} onClick={() => setShowAuthModal(true)}>
                View All ➔
              </button>
            </div>

            {/* Dynamic Interactive Pricing Grid */}
            <div style={styles.priceContainer}>
              <div>
                <div style={styles.price}>{formatINR(product.finalPrice)}</div>
                {product.price > product.finalPrice && (
                  <div style={styles.savingsLabel}>You save {formatINR(product.price - product.finalPrice)}</div>
                )}
              </div>
              {product.price > product.finalPrice && (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={styles.originalPrice}>{formatINR(product.price)}</span>
                  <div style={styles.discountBadge}>
                    <span style={styles.discountText}>{product.discount}% OFF</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Color Variants Interactive Horizontal Scrolling Panel */}
          {product.colors && (
            <div style={styles.glassCard}>
              <span style={styles.label}>🎨 SELECT COLOR</span>
              <div style={styles.variantHorizontalScroll}>
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => { setSelectedColor(color); setSelectedSize(null); }}
                    style={{
                      ...styles.variantBtn,
                      backgroundColor: selectedColor === color ? "#8B5CF6" : "rgba(255,255,255,0.06)",
                      borderColor: selectedColor === color ? "#A78BFA" : "rgba(255,255,255,0.12)"
                    }}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size Choice Structural Layout */}
          {selectedColor && (
            <div style={styles.glassCard}>
              <span style={styles.label}>📏 SELECT SIZE</span>
              <div style={styles.sizeSelectionGrid}>
                {Object.keys(availableSizes).map((size) => {
                  const isOutOfStock = availableSizes[size] === 0;
                  return (
                    <button
                      key={size}
                      disabled={isOutOfStock}
                      onClick={() => setSelectedSize(size)}
                      style={{
                        ...styles.sizeBtn,
                        backgroundColor: selectedSize === size ? "#8B5CF6" : "rgba(255,255,255,0.06)",
                        borderColor: selectedSize === size ? "#A78BFA" : "rgba(255,255,255,0.12)",
                        opacity: isOutOfStock ? 0.25 : 1,
                        cursor: isOutOfStock ? "not-allowed" : "pointer",
                        textDecoration: isOutOfStock ? "line-through" : "none"
                      }}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quantity Tracker Segment Controls */}
          <div style={styles.glassCard}>
            <span style={styles.label}>QUANTITY</span>
            <div style={styles.qtyRow}>
              <button style={styles.qtyBtn} onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
              <span style={styles.qtyValue}>{quantity}</span>
              <button 
                style={styles.qtyBtn} 
                disabled={quantity >= currentStock}
                onClick={() => setQuantity(q => Math.min(q + 1, currentStock))}
              >+</button>
            </div>
          </div>

          {/* Product Description Meta Segment */}
          <div style={styles.glassCard}>
            <span style={styles.label}>📝 DESCRIPTION</span>
            <p style={styles.descriptionText}>{product.description}</p>
          </div>

          {/* Styled Lookbook Context Section */}
          <div style={styles.glassCard}>
            <span style={styles.label}>📸 STYLED BY PEOPLE</span>
            <div style={styles.lookbookRow}>
              {MOCK_LOOKBOOK_POSTS.map((post, idx) => (
                <div key={idx} style={styles.postThumb} onClick={() => setShowAuthModal(true)}>
  <div style={{ width: "100%", height: "100%", position: "relative" }}>
    <Image 
      src={post.imageUrl} 
      alt="Lookbook context style" 
      fill 
      sizes="80px"
      style={{ objectFit: "cover" }} 
    />
  </div>
</div>
              ))}
            </div>
          </div>

          {/* Cross-Sell Recommendations Row */}
          <div style={{ marginTop: "20px", padding: "0 4px" }}>
            <span style={styles.label}>YOU MAY ALSO LIKE</span>
            <div style={styles.lookbookRow}>
              {MOCK_RELATED_PRODUCTS.map((item) => (
                <div key={item.id} style={styles.relatedCard} onClick={() => alert(`Navigating to product ${item.id}`)}>
  <div style={{ width: "100%", height: "130px", position: "relative", borderRadius: "6px", overflow: "hidden" }}>
    <Image 
      src={item.imageUrls[0]} 
      alt={item.name} 
      fill 
      sizes="(max-width: 420px) 33vw, 120px"
      style={{ objectFit: "cover" }} 
    />
  </div>
  
                  <span style={styles.relatedName}>{item.name}</span>
                  <span style={styles.relatedPrice}>{formatINR(item.finalPrice)}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Global Floating Action Bottom Bar Summary Pricing and Triggers */}
        <div style={styles.bottomBar}>
          <div style={styles.priceSection}>
            <span style={styles.totalPriceLabel}>Total Payable</span>
            <span style={styles.totalPriceValue}>{formatINR(totalPrice)}</span>
          </div>
          <div style={styles.btnSection}>
            <button 
              style={{ ...styles.cartBtn, opacity: currentStock <= 0 ? 0.5 : 1 }} 
              disabled={currentStock <= 0}
              onClick={handleAddToCart}
            >
              🛒 Add
            </button>
            <button 
              style={{ ...styles.buyBtn, opacity: currentStock <= 0 ? 0.5 : 1 }}
              disabled={currentStock <= 0}
              onClick={() => alert("Checkout pipeline initialized")}
            >
              ⚡ Buy Instantly
            </button>
          </div>
        </div>

        {/* Image Zoom Modal Lightbox Simulator */}
        {modalVisible && (
  <div style={styles.lightboxBackdrop} onClick={() => setModalVisible(false)}>
    <button style={styles.closeLightboxBtn} onClick={() => setModalVisible(false)}>✕</button>
    <div style={{ width: "95%", height: "80%", position: "relative" }}>
      <Image 
        src={displayImages[activeImageIndex]} 
        alt="Zoom view" 
        fill 
        sizes="(max-width: 420px) 100vw, 420px"
        style={{ objectFit: "contain" }} 
      />
    </div>
  </div>
)}

        {/* Replicated Gatekeeper Interaction Modal */}
        {showAuthModal && (
          <div style={styles.modalBackdrop} onClick={() => setShowAuthModal(false)}>
            <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <h3 style={styles.modalHeading}>Join Globoshop Profile</h3>
              <p style={styles.modalSubheading}>Unlock styling feedback metrics, write detailed reviews, and build tracking carts.</p>
              <button style={styles.modalPrimaryAction} onClick={() => setShowAuthModal(false)}>
                Continue
              </button>
              <button style={styles.modalDismissAction} onClick={() => setShowAuthModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

// --- DESIGN SYSTEM CONFIGURATION STYLES STABLE BLOCK ---
const styles = {
  outerWrapper: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#0F172A",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
    overflow: "hidden"
  },
  phoneContainer: {
    width: "100%",
    maxWidth: "420px",
    height: "100%",
    maxHeight: "860px",
    backgroundColor: "#000000",
    position: "relative",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
    borderRadius: "16px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column"
  },
  topNav: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "64px",
    background: "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
    zIndex: 15,
    display: "flex",
    alignItems: "center",
    padding: "0 16px",
    justifyContent: "space-between"
  },
  navIconBtn: {
    background: "rgba(0, 0, 0, 0.5)",
    border: "none",
    color: "#FFFFFF",
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    cursor: "pointer",
    backdropFilter: "blur(4px)"
  },
  scrollableContent: {
    flex: 1,
    overflowY: "auto",
    paddingBottom: "120px",
    scrollbarWidth: "none"
  },
  mediaContainer: {
    width: "100%",
    height: "440px",
    position: "relative",
    backgroundColor: "#111827"
  },
  carouselTrack: {
    display: "flex",
    width: "100%",
    height: "100%",
    overflowX: "scroll",
    scrollSnapType: "x mandatory",
    scrollbarWidth: "none",
    msOverflowStyle: "none"
  },
  carouselSlide: {
    minWidth: "100%",
    height: "100%",
    scrollSnapAlign: "start",
    position: "relative"
  },
  paginationContainer: {
    position: "absolute",
    bottom: "16px",
    left: "0",
    right: "0",
    display: "flex",
    justifyContent: "center",
    gap: "6px",
    zIndex: 5
  },
  dot: {
    height: "6px",
    borderRadius: "3px",
    transition: "all 0.2s ease"
  },
  trustBadgeRow: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#111827",
    padding: "12px 6px",
    borderBottom: "1px solid rgba(255,255,255,0.06)"
  },
  trustItem: {
    fontSize: "12px",
    color: "#E2E8F0",
    display: "flex",
    alignItems: "center",
    gap: "4px"
  },
  trustText: {
    color: "#10B981",
    fontWeight: "600"
  },
  urgencyBar: {
    backgroundColor: "rgba(245, 158, 11, 0.15)",
    borderBottom: "1px solid rgba(245, 158, 11, 0.3)",
    padding: "8px 16px",
    color: "#FBBF24",
    fontSize: "13px",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    gap: "6px"
  },
  urgencyText: {
    letterSpacing: "0.5px"
  },
  contentBox: {
    padding: "20px 16px 12px 16px"
  },
  valueTitle: {
    color: "#FFFFFF",
    fontSize: "20px",
    fontWeight: "700",
    margin: 0,
    lineHeight: "1.3"
  },
  fomoText: {
    color: "#94A3B8",
    fontSize: "12px",
    margin: "6px 0 0 0"
  },
  lowStockWarningCard: {
    border: "1px solid #EF4444",
    backgroundColor: "rgba(239, 68, 68, 0.12)",
    color: "#F87171",
    borderRadius: "8px",
    padding: "10px 12px",
    fontSize: "12px",
    fontWeight: "700",
    marginTop: "12px"
  },
  ratingRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "14px",
    backgroundColor: "rgba(255,255,255,0.04)",
    padding: "8px 12px",
    borderRadius: "8px"
  },
  avgRating: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: "14px"
  },
  reviewCount: {
    color: "#64748B",
    fontSize: "13px"
  },
  viewReviewBtn: {
    background: "none",
    border: "none",
    color: "#8B5CF6",
    fontSize: "13px",
    fontWeight: "600",
    cursor: "pointer"
  },
  priceContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "16px",
    paddingTop: "12px",
    borderTop: "1px solid rgba(255,255,255,0.06)"
  },
  price: {
    color: "#FFFFFF",
    fontSize: "24px",
    fontWeight: "800"
  },
  savingsLabel: {
    color: "#10B981",
    fontWeight: "700",
    fontSize: "12px",
    marginTop: "2px"
  },
  originalPrice: {
    color: "#64748B",
    textDecoration: "line-through",
    fontSize: "16px"
  },
  discountBadge: {
    backgroundColor: "#10B981",
    padding: "4px 8px",
    borderRadius: "6px"
  },
  discountText: {
    color: "#FFFFFF",
    fontSize: "11px",
    fontWeight: "700"
  },
  glassCard: {
    backgroundColor: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.05)",
    borderRadius: "12px",
    padding: "16px",
    margin: "12px 16px 0 16px"
  },
  label: {
    color: "#94A3B8",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "1px",
    display: "block"
  },
  variantHorizontalScroll: {
    display: "flex",
    gap: "10px",
    marginTop: "12px",
    overflowX: "auto",
    scrollbarWidth: "none"
  },
  variantBtn: {
    border: "1px solid",
    color: "#FFFFFF",
    padding: "8px 16px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "600",
    whiteSpace: "nowrap",
    cursor: "pointer",
    transition: "all 0.2s"
  },
  sizeSelectionGrid: {
    display: "flex",
    gap: "10px",
    marginTop: "12px",
    flexWrap: "wrap"
  },
  sizeBtn: {
    border: "1px solid",
    color: "#FFFFFF",
    minWidth: "48px",
    height: "38px",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: "700",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.15s"
  },
  qtyRow: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginTop: "12px"
  },
  qtyBtn: {
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.15)",
    backgroundColor: "rgba(255,255,255,0.05)",
    color: "#FFFFFF",
    fontSize: "18px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  qtyValue: {
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: "700",
    minWidth: "20px",
    textAlign: "center"
  },
  descriptionText: {
    color: "#CBD5E1",
    fontSize: "14px",
    lineHeight: "1.5",
    margin: "8px 0 0 0"
  },
  lookbookRow: {
    display: "flex",
    gap: "12px",
    marginTop: "12px",
    overflowX: "auto",
    scrollbarWidth: "none"
  },
  postThumb: {
    minWidth: "80px",
    height: "110px",
    borderRadius: "8px",
    overflow: "hidden",
    cursor: "pointer",
    backgroundColor: "#1E293B"
  },
  relatedCard: {
    minWidth: "120px",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    backgroundColor: "rgba(255,255,255,0.02)",
    padding: "8px",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.04)"
  },
  relatedName: {
    color: "#E2E8F0",
    fontSize: "12px",
    fontWeight: "600",
    marginTop: "6px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  relatedPrice: {
    color: "#10B981",
    fontSize: "12px",
    fontWeight: "700",
    marginTop: "2px"
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "84px",
    backgroundColor: "#1E293B",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    padding: "0 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 20
  },
  priceSection: {
    display: "flex",
    flexDirection: "column"
  },
  totalPriceLabel: {
    color: "#94A3B8",
    fontSize: "11px",
    fontWeight: "500"
  },
  totalPriceValue: {
    color: "#FFFFFF",
    fontSize: "18px",
    fontWeight: "800"
  },
  btnSection: {
    display: "flex",
    gap: "10px"
  },
  cartBtn: {
    backgroundColor: "transparent",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "#FFFFFF",
    padding: "10px 16px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer"
  },
  buyBtn: {
    background: "linear-gradient(90deg, #8B5CF6 0%, #5A3BFF 100%)",
    border: "none",
    color: "#FFFFFF",
    padding: "10px 20px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(139, 92, 246, 0.3)"
  },
  lightboxBackdrop: {
    position: "absolute",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.95)",
    zIndex: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  closeLightboxBtn: {
    position: "absolute",
    top: "20px",
    right: "20px",
    background: "none",
    border: "none",
    color: "white",
    fontSize: "24px",
    cursor: "pointer",
    zIndex: 60
  },
  modalBackdrop: {
    position: "absolute",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    backdropFilter: "blur(4px)",
    zIndex: 100,
    display: "flex",
    alignItems: "end"
  },
  modalContent: {
    backgroundColor: "#1E293B",
    width: "100%",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    padding: "24px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  modalHeading: {
    color: "#FFFFFF",
    fontSize: "18px",
    fontWeight: "700",
    margin: 0,
    textAlign: "center"
  },
  modalSubheading: {
    color: "#94A3B8",
    fontSize: "13px",
    margin: "0 0 8px 0",
    textAlign: "center",
    lineHeight: "1.4"
  },
  modalPrimaryAction: {
    backgroundColor: "#8B5CF6",
    color: "#FFFFFF",
    border: "none",
    padding: "12px",
    borderRadius: "10px",
    fontWeight: "600",
    cursor: "pointer"
  },
  modalDismissAction: {
    backgroundColor: "transparent",
    color: "#94A3B8",
    border: "none",
    padding: "8px",
    cursor: "pointer"
  }
};