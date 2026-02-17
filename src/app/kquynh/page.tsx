"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { Heart, Sparkles, MoonStar, Stars, Flower2, ChevronLeft, ChevronRight, Gift, ChevronDown } from "lucide-react";
import photo01 from "./z7541317101999_a18ba1f500c7e6e494937175f616ac8a.jpg";
import photo02 from "./z7541317260810_2b3cd5c58153ce7eb3793ecadff78b0d.jpg";
import photo03 from "./z7541316915661_baf462883132f118eeeaeb93e235c0aa.jpg";
import photo04 from "./z7541316751595_d2ed1c1ffde2d8ba3cf1dad559acc5fa.jpg";
import photo05 from "./z7541316593172_e21bdcfd5f20446d4840b15724232a5f.jpg";
import photo06 from "./z7541316425274_88311f106dd3af38093182b9685c9196.jpg";
import photo07 from "./z7541316279470_16ac0e4dee9114d915339acb6122cd4f.jpg";
import photo08 from "./z7541316119602_9c6dc373fb1f22ceee7e2f2541f0ea1b.jpg";
import photo09 from "./z7541316004340_ad163cf52e92333e9673cedefc283a26.jpg";
import photo10 from "./z7541315855227_f2c03f386c58f8615a96e68706da022f.jpg";
import photo11 from "./z7541315700614_b2b40be77d69db2c3f1712e4cfd5bcc1.jpg";
import photo12 from "./z7541315529903_9f07bb492b95c7d94ff4b0b5dc1f6024.jpg";
import photo13 from "./z7541317405971_b6af493444646a62e7bc319a7286c683.jpg";
import photo14 from "./z7541315348124_fae0ff2a85206b75d5810a4c0fb308d4.jpg";
import photo15 from "./z7541317682577_14da181151695441f58917ad172d1320.jpg";
import photo16 from "./z7541317548607_9bd54565dcf010b3fd44afcfeca32cb4.jpg";
import photo17 from "./z7541317841905_7b8839557f21eeab89561b143e025c54.jpg";
import photo18 from "./z7541320811625_29ce7346f7a1f031fc99207921783b3b.jpg";
import photo19 from "./z7541320695914_17670ec45b57ee82fd06c1d4ad0aa2c0.jpg";
import photo20 from "./z7541320563796_0d52830943d6a0c3abfacfd8e3c0cf44.jpg";
import photo21 from "./z7541320416535_808c76fb006fecb76c4fc7057fed9b1f.jpg";
import photo22 from "./z7541320244786_ef16f3920818bf05d42658318d3d4438.jpg";
import photo23 from "./z7541320135059_1aaefa20f0852b58439a3ad17cf8750e.jpg";
import photo24 from "./z7541320012524_12012e50e32f2ca0d2554126c4b46f3c.jpg";
import photo25 from "./z7541319907985_1235e84cbe270da8446e1249911cc583.jpg";
import photo26 from "./z7541318144169_16946e8f81cb6b3fb0756db27011d1fb.jpg";
import photo27 from "./z7541318035530_05c9bb7e7ff1ebcbf1bca3b51b150378.jpg";

const floatingItems = [
  { left: "7%", delay: "0s", duration: "9s", icon: Flower2 },
  { left: "16%", delay: "1.1s", duration: "11s", icon: Heart },
  { left: "27%", delay: "0.6s", duration: "10s", icon: Sparkles },
  { left: "40%", delay: "1.8s", duration: "12s", icon: Flower2 },
  { left: "53%", delay: "0.4s", duration: "9.5s", icon: Heart },
  { left: "66%", delay: "2.2s", duration: "11.5s", icon: Stars },
  { left: "79%", delay: "0.9s", duration: "10.5s", icon: Flower2 },
  { left: "91%", delay: "1.6s", duration: "12s", icon: Sparkles },
];

const galleryImages = [
  photo01,
  photo02,
  photo03,
  photo04,
  photo05,
  photo06,
  photo07,
  photo08,
  photo09,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
  photo18,
  photo19,
  photo20,
  photo21,
  photo22,
  photo23,
  photo24,
  photo25,
  photo26,
  photo27,
];

function ParallaxItem({ 
  children, 
  amount = 30, 
  reveal = true,
  start = "top 90%", 
  end = "bottom 10%" 
}: { 
  children: React.ReactNode; 
  amount?: number; 
  reveal?: boolean;
  start?: string; 
  end?: string 
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    
    const isMobile = window.innerWidth < 640;
    const movement = amount * (isMobile ? 0.35 : 1);

    // Initial state for reveal
    if (reveal) {
      gsap.set(el, { opacity: 0, y: movement + 60, scale: 0.9, filter: "blur(10px)" });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 95%",
        end: "top 40%",
        scrub: 1.5,
        toggleActions: "play none none reverse",
      },
    });

    tl.to(el, {
      y: -movement,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      ease: "power3.out",
    });
  }, { scope: ref });

  return (
    <div ref={ref} className="w-full flex justify-center">
      {children}
    </div>
  );
}

export default function Feb14LunarWishPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const totalImages = galleryImages.length;

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + totalImages) % totalImages);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % totalImages);
  };

  return (
    <main className="love-bg relative min-h-screen overflow-hidden text-[color:#5c2f2f]">
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <div className="warm-orb absolute -left-20 top-0 h-72 w-72 rounded-full" />
        <div className="warm-orb absolute right-[-3rem] top-1/4 h-80 w-80 rounded-full" style={{ animationDelay: "2s" }} />
        <div className="warm-orb absolute bottom-[-6rem] left-1/3 h-72 w-72 rounded-full" style={{ animationDelay: "4.2s" }} />
      </div>

      <div className="pointer-events-none absolute inset-0">
        {floatingItems.map(({ left, delay, duration, icon: Icon }, index) => (
          <div
            key={`${left}-${index}`}
            className="floating-item absolute bottom-[-3rem] text-[#c05f6e]"
            style={{ left, animationDelay: delay, animationDuration: duration }}
          >
            <Icon className="h-6 w-6" />
          </div>
        ))}
      </div>

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center px-4 py-10 sm:px-8">
        {/* Hero Title Section */}
        <ParallaxItem amount={0} reveal={false}>
          <div className="flex flex-col items-center justify-center min-h-[90vh] text-center w-full">
            <div className="mb-6 flex items-center justify-center gap-3 text-[#ca5a73]">
              <Heart className="heart-beat h-8 w-8 fill-current opacity-80" />
            </div>

            <div className="space-y-4">
              <p className="text-xs sm:text-sm uppercase tracking-[0.45em] text-[#9f6363] font-medium opacity-70 mb-2">Gửi em KQuynh Ruby</p>
              <h1 className="title-glow text-5xl sm:text-7xl font-bold tracking-tighter text-[#8c4a56] leading-[1.05]">
                Valentine &amp; <br className="sm:hidden" />
                Tết ấm áp nhó
              </h1>
            </div>

            <div className="mt-40 flex flex-col items-center gap-4 text-[#b07a7a] opacity-50">
              <p className="text-[10px] uppercase tracking-[0.5em] font-bold animate-pulse">vuốt xuống i</p>
              <div className="h-12 w-px bg-gradient-to-b from-[#b07a7a] to-transparent" />
              <ChevronDown className="h-6 w-6 animate-bounce mt-[-4px]" />
            </div>
          </div>
        </ParallaxItem>

        {/* Content Card Section */}
        <article className="message-pop w-full mt-[50vh] space-y-[60vh] rounded-[2rem] border border-[#f6d8d8]/90 bg-[#fff7f4]/85 p-6 shadow-[0_12px_50px_rgba(172,89,89,0.2)] backdrop-blur md:p-12 mb-40">
          <div className="flex flex-col items-center gap-[60vh]">
            <ParallaxItem amount={60}>
              <div className="relative w-full max-w-2xl space-y-5 rounded-2xl border border-[#efd2d2] bg-[#fffdfa]/80 p-6 leading-relaxed text-[#673e3e] sm:p-10 shadow-sm">
                <p className="italic text-[#8f5a5a] text-lg font-serif">Ruby,</p>
                <div className="space-y-4 text-base sm:text-lg">
                  <p>Từ lúc chúng mình gặp nhau năm 2023, em đã đem đến cho anh những mảng màu ấm áp mà anh sẽ mang theo suốt cuộc đời. Những ngày hai đứa cười đùa, những lần im lặng nhưng vẫn biết nhau nghĩ gì, từng chuyến đi nhỏ. Tất cả với anh đều là kỷ niệm quý giá.</p>

                  <p>Quãng thời gian 2023 - 2025 với anh là một chương vừa đẹp vừa dạy anh nhiều điều. Có những lúc anh làm em buồn, có lúc anh chưa đủ kiên nhẫn, và có những điều anh nói chưa khéo khiến em tổn thương. Anh xin lỗi vì những lúc ấy, và xin cảm ơn em vì đã kiên nhẫn, đã cho anh cơ hội để hiểu hơn về chính mình.</p>

                  <p>Anh không thể quay lại để thay đổi tất cả, nhưng anh có thể nhìn thẳng vào lỗi lầm và học cách tốt hơn. Nhờ em, anh biết yêu thương không chỉ là cảm xúc mà còn là trách nhiệm, là lắng nghe và là sự ở lại khi cần. Anh biết ơn từng khoảnh khắc em đã chia sẻ, từng giây em đã tin tưởng anh.</p>

                  <p>Anh luôn mong em được bình yên, được cười nhiều hơn và gặp những người thương em theo cách em xứng đáng. Nếu duyên còn, nếu đời cho chúng ta một lần gặp lại, anh hy vọng sẽ là người đã trưởng thành hơn, biết trân trọng và đỡ che chở cho em nhiều hơn trước.</p>

                  <p>Tết và Valentine này, anh chỉ mong em có những ngày ấm áp, được ôm bởi những điều tốt lành và được yêu thương thật sự. Cám ơn em vì tất cả KQuynh vì những kỷ niệm, vì những bài học, và vì đã là một phần quan trọng của anh </p>

                  <p className="mt-4 font-semibold">Anh luôn nhớ và trân trọng,</p>
                  <p className="text-sm opacity-70"> Kéo xún ik </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsMessageOpen(true)}
                  className={`gift-cover absolute inset-0 z-20 flex flex-col items-center justify-center rounded-2xl bg-[#ffe4de]/98 text-[#9b5959] transition-all duration-700 ${isMessageOpen ? "pointer-events-none opacity-0 scale-105" : "opacity-100 scale-100"}`}
                  aria-label="Mở quà để đọc lời nhắn"
                >
                  <div className="gift-box mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#e8b2b2] bg-[#fff5f1] shadow-md">
                    <Gift className="h-10 w-10 text-[#ca7a7a]" />
                  </div>
                  <p className="text-lg font-semibold tracking-tight">Thư "tay" cho KQuynh</p>
                  <p className="mt-2 text-xs uppercase tracking-widest opacity-60">Bấm để mở lời nhắn</p>
                </button>
              </div>
            </ParallaxItem>

            <ParallaxItem amount={60}>
              <div className="flex w-full flex-col items-center rounded-2xl border border-[#efd0d0] bg-[#fff5f2]/85 p-6">
                <div className="gallery-stack relative mx-auto h-[18rem] w-full max-w-[18rem] overflow-hidden rounded-2xl">
                  {galleryImages.map((source, index) => {
                    const relative = (index - activeIndex + totalImages) % totalImages;
                    const hidden = relative > 4;
                    const rotation = [0, -3, 2, -2, 1][relative] ?? 0;
                    const translateY = hidden ? 120 : relative * 5;
                    const scale = hidden ? 0.9 : 1 - relative * 0.03;

                    return (
                      <button
                        key={`photo-${index}`}
                        type="button"
                        aria-label={`Xem ảnh ${index + 1}`}
                        onClick={() => setActiveIndex(index)}
                        className="gallery-card absolute inset-0 overflow-hidden rounded-2xl border border-[#f2cdcd] bg-white/60 p-1 shadow-[0_8px_24px_rgba(155,87,87,0.2)]"
                        style={{
                          transform: `translateY(${translateY}px) scale(${scale}) rotate(${rotation}deg)`,
                          zIndex: totalImages - relative,
                          opacity: hidden ? 0 : 1,
                        }}
                      >
                        <div className="relative h-full w-full rounded-xl bg-[#fffaf8]">
                          <Image
                            src={source}
                            alt={`KQuynh Ruby memory ${index + 1}`}
                            fill
                            sizes="(max-width: 768px) 80vw, 18rem"
                            className="rounded-xl object-contain"
                            priority={index === 0}
                          />
                        </div>
                      </button>
                    );
                  })}
                  <div className="stack-hint absolute -bottom-4 left-0 right-0 text-center text-xs text-[#b07a7a]">Người ấy nè</div>
                </div>

                <div className="mt-12 flex items-center justify-center gap-3">
                  <button type="button" onClick={showPrevious} className="gallery-nav-btn" aria-label="Ảnh trước">
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <div className="flex items-center gap-1.5 px-2 max-w-[12rem] overflow-x-auto scrollbar-hide py-2">
                    {galleryImages.map((_, index) => (
                      <button
                        key={`dot-${index}`}
                        type="button"
                        aria-label={`Chọn ảnh ${index + 1}`}
                        onClick={() => setActiveIndex(index)}
                        className={`gallery-dot flex-shrink-0 ${index === activeIndex ? "is-active" : ""}`}
                      />
                    ))}
                  </div>
                  <button type="button" onClick={showNext} className="gallery-nav-btn" aria-label="Ảnh sau">
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </ParallaxItem>
          </div>

          <ParallaxItem amount={20}>
            <div className="flex flex-col items-center gap-6 py-20">
              <div className="max-w-xs text-center text-xs tracking-wide text-[#aa7575]">
                Thương KQuynh khùn. Từ một trái tim vẫn đang học cách yêu em tốt hơn.
              </div>
            </div>
          </ParallaxItem>
        </article>
      </section>

      <style jsx>{`
        .love-bg {
          background:
            radial-gradient(circle at 8% 12%, rgba(255, 204, 196, 0.45), transparent 34%),
            radial-gradient(circle at 90% 18%, rgba(255, 223, 191, 0.45), transparent 38%),
            linear-gradient(145deg, #fff1ec 0%, #ffe8e2 40%, #ffe2d7 100%);
        }

        .warm-orb {
          background: radial-gradient(circle, rgba(255, 191, 173, 0.48), rgba(255, 191, 173, 0));
          filter: blur(8px);
          animation: breathe 8s ease-in-out infinite;
        }

        .title-glow {
          color: #8c4a56;
          animation: title-glow 2.8s ease-in-out infinite;
        }

        .floating-item {
          animation-name: float-up, drift;
          animation-timing-function: linear, ease-in-out;
          animation-iteration-count: infinite, infinite;
        }

        .gallery-stack {
          perspective: 900px;
        }

        .gallery-card {
          transition: transform 260ms ease, box-shadow 260ms ease;
        }

        .gift-box {
          box-shadow: 0 10px 20px rgba(181, 118, 118, 0.2);
        }

        .gallery-nav-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 2rem;
          width: 2rem;
          border-radius: 9999px;
          border: 1px solid #e8bcbc;
          color: #a35f5f;
          background: rgba(255, 255, 255, 0.7);
          transition: transform 180ms ease, background-color 180ms ease;
        }

        .gallery-nav-btn:hover {
          transform: translateY(-1px);
          background: rgba(255, 255, 255, 0.95);
        }

        .gallery-dot {
          height: 0.45rem;
          width: 0.45rem;
          border-radius: 9999px;
          background: #d9aaaa;
          transition: transform 180ms ease, background-color 180ms ease;
        }

        .gallery-dot.is-active {
          background: #c46666;
          transform: scale(1.25);
        }

        .gallery-card:hover {
          box-shadow: 0 14px 30px rgba(155, 87, 87, 0.28);
        }

        .message-pop {
          animation: pop-in 700ms ease-out both;
        }

        .heart-beat {
          animation: heart-beat 1.8s ease-in-out infinite;
        }

        .twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }

        .sway {
          animation: sway 2.8s ease-in-out infinite;
        }

        @keyframes breathe {
          0%,
          100% {
            transform: scale(1) translateY(0);
          }
          50% {
            transform: scale(1.08) translateY(-8px);
          }
        }

        @keyframes float-up {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-125vh) rotate(20deg);
            opacity: 0;
          }
        }

        @keyframes drift {
          0%,
          100% {
            margin-left: 0;
          }
          50% {
            margin-left: 9px;
          }
        }

        @keyframes title-glow {
          0%,
          100% {
            text-shadow: 0 0 0 rgba(255, 140, 140, 0.2);
          }
          50% {
            text-shadow: 0 0 16px rgba(255, 142, 132, 0.38);
          }
        }

        @keyframes sway {
          0%,
          100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(8px);
          }
        }

        @keyframes heart-beat {
          0%,
          100% {
            transform: scale(1);
          }
          30% {
            transform: scale(1.15);
          }
          60% {
            transform: scale(1.04);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.76;
          }
          50% {
            transform: scale(1.2) rotate(10deg);
            opacity: 1;
          }
        }

        @keyframes pop-in {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 640px) {
          .gallery-stack {
            height: 16rem !important;
            max-width: 14rem !important;
          }

          .title-glow {
            font-size: 1.5rem !important;
          }

          .message-pop {
            padding: 1.5rem 1rem !important;
          }

          .stack-hint {
            font-size: 0.65rem !important;
            bottom: -2rem !important;
          }

          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        }
      `}</style>
    </main>
  );
}
