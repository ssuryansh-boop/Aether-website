"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

// --- STREAMLINED TO ONLY TWO DEMO ENTRIES ---
const MOCK_POSTS = [
  {
    id: "1",
    userId: "user_a",
    username: "UrbanStudio",
    category: "Fashion",
    description: "Check out this amazing street style outfit! Perfect for urban exploration. 🌟 #style #ootd",
    likesCount: 142,
    productIds: ["p1"],
    imageUrl: "/screens/image.png"
  },
  {
    id: "2",
    userId: "user_b",
    username: "Studio Blend",
    category: "Fashion",
    description: "Check out this amazing casual wear #Style #Fashion",
    likesCount: 89,
    productIds: ["p2"],
    imageUrl: "/screens/image2.jpeg"
  }
];

const MOCK_PRODUCTS = {
  p1: { name: "Oversized streetwear hoodie", price: "₹1,999" },
  p2: { name: "casual T-Shirt", price: "₹1,499" }
};

export default function PreviewPage() {
  const [posts, setPosts] = useState(MOCK_POSTS);
  const [followingList, setFollowingList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedPostsSet, setLikedPostsSet] = useState(new Set());
  const [showAuthModal, setShowAuthModal] = useState(false);

  const containerRef = useRef(null);
  const lastTap = useRef({ timestamp: 0, postId: null });

  const handleScroll = (e) => {
    const scrollTop = e.currentTarget.scrollTop;
    const clientHeight = e.currentTarget.clientHeight;
    const index = Math.round(scrollTop / clientHeight);
    if (index !== currentIndex && index >= 0 && index < posts.length) {
      setCurrentIndex(index);
    }
  };

  const toggleLike = useCallback((postId, alreadyLiked) => {
    setLikedPostsSet((prev) => {
      const next = new Set(prev);
      if (next.has(postId)) next.delete(postId);
      else next.add(postId);
      return next;
    });

    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            likesCount: alreadyLiked ? Math.max(0, post.likesCount - 1) : post.likesCount + 1,
          };
        }
        return post;
      })
    );
  }, []);

  const handleFeedTap = useCallback((postItem) => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;

    if (lastTap.current.postId === postItem.id && now - lastTap.current.timestamp < DOUBLE_TAP_DELAY) {
      const isAlreadyLiked = likedPostsSet.has(postItem.id);
      if (!isAlreadyLiked) {
        toggleLike(postItem.id, false);
      }
    }
    lastTap.current = { timestamp: now, postId: postItem.id };
  }, [toggleLike, likedPostsSet]);

  const toggleFollow = useCallback((targetUserId) => {
    setFollowingList((prev) =>
      prev.includes(targetUserId) ? prev.filter((id) => id !== targetUserId) : [...prev, targetUserId]
    );
  }, []);

  return (
    <div style={styles.outerWrapper}>
      <div style={styles.phoneContainer}>
        
        {/* Floating Gradient Logo Header - NOW ANCHORED TOP LEFT */}
        <div style={styles.globoHeaderLeft}>
          <div style={styles.logoPill}>
            <span style={styles.logoText}>GLOBOSHOP</span>
          </div>
        </div>

        <div 
          ref={containerRef}
          style={styles.feedScrollable}
          onScroll={handleScroll}
        >
          {posts.map((item, index) => {
            const isFollowing = followingList.includes(item.userId);
            const isLiked = likedPostsSet.has(item.id);

            return (
              <div 
                key={item.id} 
                style={styles.fullScreenPost}
                onClick={() => handleFeedTap(item)}
              >
                <div style={styles.mediaContainer}>
                  <Image 
                    src={item.imageUrl} 
                    alt={`Feed context preview by ${item.username}`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 420px) 100vw, 420px"
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                </div>

                <div style={styles.bottomGradientShadow} />

                {/* Right Actions */}
                <div style={styles.rightActionPanel} onClick={(e) => e.stopPropagation()}>
                  <div style={styles.avatarWrapper}>
                    <div style={styles.userAvatar}>
                      {item.username.charAt(0).toUpperCase()}
                    </div>
                    <button 
                      style={{
                        ...styles.followMiniBtn,
                        backgroundColor: isFollowing ? "#34D399" : "#8B5CF6"
                      }}
                      onClick={() => toggleFollow(item.userId)}
                    >
                      {isFollowing ? "✓" : "+"}
                    </button>
                  </div>

                  <div style={styles.actionItem} onClick={() => toggleLike(item.id, isLiked)}>
                    <div style={{ ...styles.actionIcon, color: isLiked ? "#EF4444" : "#FFFFFF" }}>
                      ❤️
                    </div>
                    <span style={styles.actionCountLabel}>{item.likesCount}</span>
                  </div>

                  <div style={styles.actionItem} onClick={() => setShowAuthModal(true)}>
                    <div style={styles.actionIcon}>💬</div>
                    <span style={styles.actionCountLabel}>Comment</span>
                  </div>

                  <div style={styles.actionItem} onClick={() => setShowAuthModal(true)}>
                    <div style={styles.actionIcon}>🏷️</div>
                    <span style={styles.actionCountLabel}>Save</span>
                  </div>
                </div>

                {/* Left Metadata & Integrated "Shop the Look" Button */}
                <div style={styles.leftInfoOverlay} onClick={(e) => e.stopPropagation()}>
                  <div style={styles.userInfoRow}>
                    <span style={styles.userHandleText}>@{item.username}</span>
                    <span style={styles.categoryBadge}>{item.category}</span>
                  </div>
                  
                  <p style={styles.descriptionText}>{item.description}</p>

                  {item.productIds && item.productIds.map((pId) => {
                    const product = MOCK_PRODUCTS[pId];
                    if (!product) return null;
                    return (
                      <div key={pId} style={styles.productCardRow} onClick={() => setShowAuthModal(true)}>
                        <div style={styles.productBagIcon}>🏷️</div>
                        <div style={styles.productDetailsBlock}>
                          <div style={styles.productTitle}>{product.name}</div>
                          <div style={styles.productPrice}>{product.price}</div>
                        </div>
                        <button style={styles.shopLookBtn}>
                          Shop the Look ➔
                        </button>
                      </div>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>

        {showAuthModal && (
          <div style={styles.modalBackdrop} onClick={() => setShowAuthModal(false)}>
            <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <h3 style={styles.modalHeading}>Sign in to explore more</h3>
              <p style={styles.modalSubheading}>Interact with creations, purchase matched items and build personalized feeds.</p>
              <button style={styles.modalPrimaryAction} onClick={() => setShowAuthModal(false)}>
                Continue with Access
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

// --- ALL CURRENT CONFIGURATIONS RETAINED ---
const styles = {
  outerWrapper: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#111111",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    overflow: "hidden"
  },
  phoneContainer: {
    width: "100%",
    maxWidth: "420px",
    height: "100%",
    maxHeight: "860px",
    backgroundColor: "#000000",
    position: "relative",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    borderRadius: "16px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column"
  },
  globoHeaderLeft: {
    position: "absolute",
    top: "16px",
    left: "16px",
    zIndex: 10,
    display: "flex",
    pointerEvents: "none"
  },
  logoPill: {
    background: "linear-gradient(90deg, #7B5CFF 0%, #A970FF 100%)",
    padding: "8px 16px",
    borderRadius: "20px",
    boxShadow: "0 4px 15px rgba(123, 92, 255, 0.4)",
    pointerEvents: "auto"
  },
  logoText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: "13px",
    letterSpacing: "1.5px"
  },
  feedScrollable: {
    flex: 1,
    overflowY: "scroll",
    scrollSnapType: "y mandatory",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    WebkitOverflowScrolling: "touch"
  },
  fullScreenPost: {
    width: "100%",
    height: "100%",
    scrollSnapAlign: "start",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "end"
  },
  mediaContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    backgroundColor: "#000"
  },
  bottomGradientShadow: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "45%",
    background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)",
    zIndex: 2,
    pointerEvents: "none"
  },
  rightActionPanel: {
    position: "absolute",
    right: "12px",
    bottom: "120px",
    zIndex: 3,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "18px"
  },
  avatarWrapper: {
    position: "relative",
    marginBottom: "8px"
  },
  userAvatar: {
    width: "46px",
    height: "46px",
    borderRadius: "50%",
    backgroundColor: "#374151",
    border: "2px solid #FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
    fontWeight: "bold"
  },
  followMiniBtn: {
    position: "absolute",
    bottom: "-4px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    border: "none",
    color: "#FFF",
    fontSize: "12px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0 2px 5px rgba(0,0,0,0.3)"
  },
  actionItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer"
  },
  actionIcon: {
    fontSize: "26px",
    filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.5))"
  },
  actionCountLabel: {
    color: "#FFFFFF",
    fontSize: "12px",
    marginTop: "4px",
    fontWeight: "600",
    textShadow: "0px 1px 3px rgba(0,0,0,0.8)"
  },
  leftInfoOverlay: {
    position: "absolute",
    left: "16px",
    bottom: "24px",
    right: "16px",
    zIndex: 3,
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  userInfoRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },
  userHandleText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: "16px",
    textShadow: "0 1px 2px rgba(0,0,0,0.6)"
  },
  categoryBadge: {
    backgroundColor: "rgba(139, 92, 246, 0.35)",
    border: "1px solid rgba(139, 92, 246, 0.5)",
    color: "#C084FC",
    fontSize: "11px",
    padding: "2px 8px",
    borderRadius: "12px",
    fontWeight: "600"
  },
  descriptionText: {
    color: "#E5E7EB",
    fontSize: "14px",
    margin: "0 56px 0 0",
    lineHeight: "1.4",
    textShadow: "0 1px 2px rgba(0,0,0,0.6)",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical"
  },
  productCardRow: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    backdropFilter: "blur(15px)",
    borderRadius: "14px",
    padding: "12px",
    marginTop: "6px",
    border: "1px solid rgba(255,255,255,0.1)",
    cursor: "pointer"
  },
  productBagIcon: {
    fontSize: "20px",
    marginRight: "10px"
  },
  productDetailsBlock: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "2px"
  },
  productTitle: {
    color: "#FFFFFF",
    fontSize: "13px",
    fontWeight: "600",
    paddingRight: "8px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },
  productPrice: {
    color: "#34D399",
    fontSize: "14px",
    fontWeight: "700"
  },
  shopLookBtn: {
    backgroundColor: "#8B5CF6",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "8px",
    padding: "8px 14px",
    fontSize: "12px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(139, 92, 246, 0.3)",
    whiteSpace: "nowrap"
  },
  modalBackdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    backdropFilter: "blur(4px)",
    zIndex: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "end"
  },
  modalContent: {
    backgroundColor: "#1F2937",
    width: "100%",
    borderTopLeftRadius: "24px",
    borderTopRightRadius: "24px",
    padding: "32px 24px 24px 24px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "14px"
  },
  modalHeading: {
    color: "#FFFFFF",
    fontSize: "20px",
    fontWeight: "700",
    margin: 0,
    textAlign: "center"
  },
  modalSubheading: {
    color: "#9CA3AF",
    fontSize: "14px",
    margin: "0 0 10px 0",
    textAlign: "center",
    lineHeight: "1.5"
  },
  modalPrimaryAction: {
    backgroundColor: "#8B5CF6",
    color: "#FFFFFF",
    border: "none",
    padding: "14px",
    borderRadius: "12px",
    fontWeight: "600",
    fontSize: "15px",
    cursor: "pointer"
  },
  modalDismissAction: {
    backgroundColor: "transparent",
    color: "#9CA3AF",
    border: "none",
    padding: "10px",
    borderRadius: "12px",
    fontWeight: "500",
    fontSize: "14px",
    cursor: "pointer"
  }
};