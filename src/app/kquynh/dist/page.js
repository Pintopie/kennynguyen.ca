"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var gsap_1 = require("gsap");
var react_2 = require("@gsap/react");
var ScrollTrigger_1 = require("gsap/ScrollTrigger");
gsap_1["default"].registerPlugin(ScrollTrigger_1.ScrollTrigger);
var lucide_react_1 = require("lucide-react");
var z7541317101999_a18ba1f500c7e6e494937175f616ac8a_jpg_1 = require("./z7541317101999_a18ba1f500c7e6e494937175f616ac8a.jpg");
var z7541317260810_2b3cd5c58153ce7eb3793ecadff78b0d_jpg_1 = require("./z7541317260810_2b3cd5c58153ce7eb3793ecadff78b0d.jpg");
var z7541316915661_baf462883132f118eeeaeb93e235c0aa_jpg_1 = require("./z7541316915661_baf462883132f118eeeaeb93e235c0aa.jpg");
var z7541316751595_d2ed1c1ffde2d8ba3cf1dad559acc5fa_jpg_1 = require("./z7541316751595_d2ed1c1ffde2d8ba3cf1dad559acc5fa.jpg");
var z7541316593172_e21bdcfd5f20446d4840b15724232a5f_jpg_1 = require("./z7541316593172_e21bdcfd5f20446d4840b15724232a5f.jpg");
var z7541316425274_88311f106dd3af38093182b9685c9196_jpg_1 = require("./z7541316425274_88311f106dd3af38093182b9685c9196.jpg");
var z7541316279470_16ac0e4dee9114d915339acb6122cd4f_jpg_1 = require("./z7541316279470_16ac0e4dee9114d915339acb6122cd4f.jpg");
var z7541316119602_9c6dc373fb1f22ceee7e2f2541f0ea1b_jpg_1 = require("./z7541316119602_9c6dc373fb1f22ceee7e2f2541f0ea1b.jpg");
var z7541316004340_ad163cf52e92333e9673cedefc283a26_jpg_1 = require("./z7541316004340_ad163cf52e92333e9673cedefc283a26.jpg");
var z7541315855227_f2c03f386c58f8615a96e68706da022f_jpg_1 = require("./z7541315855227_f2c03f386c58f8615a96e68706da022f.jpg");
var z7541315700614_b2b40be77d69db2c3f1712e4cfd5bcc1_jpg_1 = require("./z7541315700614_b2b40be77d69db2c3f1712e4cfd5bcc1.jpg");
var z7541315529903_9f07bb492b95c7d94ff4b0b5dc1f6024_jpg_1 = require("./z7541315529903_9f07bb492b95c7d94ff4b0b5dc1f6024.jpg");
var z7541317405971_b6af493444646a62e7bc319a7286c683_jpg_1 = require("./z7541317405971_b6af493444646a62e7bc319a7286c683.jpg");
var z7541315348124_fae0ff2a85206b75d5810a4c0fb308d4_jpg_1 = require("./z7541315348124_fae0ff2a85206b75d5810a4c0fb308d4.jpg");
var z7541317682577_14da181151695441f58917ad172d1320_jpg_1 = require("./z7541317682577_14da181151695441f58917ad172d1320.jpg");
var z7541317548607_9bd54565dcf010b3fd44afcfeca32cb4_jpg_1 = require("./z7541317548607_9bd54565dcf010b3fd44afcfeca32cb4.jpg");
var z7541317841905_7b8839557f21eeab89561b143e025c54_jpg_1 = require("./z7541317841905_7b8839557f21eeab89561b143e025c54.jpg");
var z7541320811625_29ce7346f7a1f031fc99207921783b3b_jpg_1 = require("./z7541320811625_29ce7346f7a1f031fc99207921783b3b.jpg");
var z7541320695914_17670ec45b57ee82fd06c1d4ad0aa2c0_jpg_1 = require("./z7541320695914_17670ec45b57ee82fd06c1d4ad0aa2c0.jpg");
var z7541320563796_0d52830943d6a0c3abfacfd8e3c0cf44_jpg_1 = require("./z7541320563796_0d52830943d6a0c3abfacfd8e3c0cf44.jpg");
var z7541320416535_808c76fb006fecb76c4fc7057fed9b1f_jpg_1 = require("./z7541320416535_808c76fb006fecb76c4fc7057fed9b1f.jpg");
var z7541320244786_ef16f3920818bf05d42658318d3d4438_jpg_1 = require("./z7541320244786_ef16f3920818bf05d42658318d3d4438.jpg");
var z7541320135059_1aaefa20f0852b58439a3ad17cf8750e_jpg_1 = require("./z7541320135059_1aaefa20f0852b58439a3ad17cf8750e.jpg");
var z7541320012524_12012e50e32f2ca0d2554126c4b46f3c_jpg_1 = require("./z7541320012524_12012e50e32f2ca0d2554126c4b46f3c.jpg");
var z7541319907985_1235e84cbe270da8446e1249911cc583_jpg_1 = require("./z7541319907985_1235e84cbe270da8446e1249911cc583.jpg");
var z7541318144169_16946e8f81cb6b3fb0756db27011d1fb_jpg_1 = require("./z7541318144169_16946e8f81cb6b3fb0756db27011d1fb.jpg");
var z7541318035530_05c9bb7e7ff1ebcbf1bca3b51b150378_jpg_1 = require("./z7541318035530_05c9bb7e7ff1ebcbf1bca3b51b150378.jpg");
var floatingItems = [
    { left: "7%", delay: "0s", duration: "9s", icon: lucide_react_1.Flower2 },
    { left: "16%", delay: "1.1s", duration: "11s", icon: lucide_react_1.Heart },
    { left: "27%", delay: "0.6s", duration: "10s", icon: lucide_react_1.Sparkles },
    { left: "40%", delay: "1.8s", duration: "12s", icon: lucide_react_1.Flower2 },
    { left: "53%", delay: "0.4s", duration: "9.5s", icon: lucide_react_1.Heart },
    { left: "66%", delay: "2.2s", duration: "11.5s", icon: lucide_react_1.Stars },
    { left: "79%", delay: "0.9s", duration: "10.5s", icon: lucide_react_1.Flower2 },
    { left: "91%", delay: "1.6s", duration: "12s", icon: lucide_react_1.Sparkles },
];
var galleryImages = [
    z7541317101999_a18ba1f500c7e6e494937175f616ac8a_jpg_1["default"],
    z7541317260810_2b3cd5c58153ce7eb3793ecadff78b0d_jpg_1["default"],
    z7541316915661_baf462883132f118eeeaeb93e235c0aa_jpg_1["default"],
    z7541316751595_d2ed1c1ffde2d8ba3cf1dad559acc5fa_jpg_1["default"],
    z7541316593172_e21bdcfd5f20446d4840b15724232a5f_jpg_1["default"],
    z7541316425274_88311f106dd3af38093182b9685c9196_jpg_1["default"],
    z7541316279470_16ac0e4dee9114d915339acb6122cd4f_jpg_1["default"],
    z7541316119602_9c6dc373fb1f22ceee7e2f2541f0ea1b_jpg_1["default"],
    z7541316004340_ad163cf52e92333e9673cedefc283a26_jpg_1["default"],
    z7541315855227_f2c03f386c58f8615a96e68706da022f_jpg_1["default"],
    z7541315700614_b2b40be77d69db2c3f1712e4cfd5bcc1_jpg_1["default"],
    z7541315529903_9f07bb492b95c7d94ff4b0b5dc1f6024_jpg_1["default"],
    z7541317405971_b6af493444646a62e7bc319a7286c683_jpg_1["default"],
    z7541315348124_fae0ff2a85206b75d5810a4c0fb308d4_jpg_1["default"],
    z7541317682577_14da181151695441f58917ad172d1320_jpg_1["default"],
    z7541317548607_9bd54565dcf010b3fd44afcfeca32cb4_jpg_1["default"],
    z7541317841905_7b8839557f21eeab89561b143e025c54_jpg_1["default"],
    z7541320811625_29ce7346f7a1f031fc99207921783b3b_jpg_1["default"],
    z7541320695914_17670ec45b57ee82fd06c1d4ad0aa2c0_jpg_1["default"],
    z7541320563796_0d52830943d6a0c3abfacfd8e3c0cf44_jpg_1["default"],
    z7541320416535_808c76fb006fecb76c4fc7057fed9b1f_jpg_1["default"],
    z7541320244786_ef16f3920818bf05d42658318d3d4438_jpg_1["default"],
    z7541320135059_1aaefa20f0852b58439a3ad17cf8750e_jpg_1["default"],
    z7541320012524_12012e50e32f2ca0d2554126c4b46f3c_jpg_1["default"],
    z7541319907985_1235e84cbe270da8446e1249911cc583_jpg_1["default"],
    z7541318144169_16946e8f81cb6b3fb0756db27011d1fb_jpg_1["default"],
    z7541318035530_05c9bb7e7ff1ebcbf1bca3b51b150378_jpg_1["default"],
];
function ParallaxItem(_a) {
    var children = _a.children, _b = _a.amount, amount = _b === void 0 ? 30 : _b, _c = _a.reveal, reveal = _c === void 0 ? true : _c, _d = _a.start, start = _d === void 0 ? "top 90%" : _d, _e = _a.end, end = _e === void 0 ? "bottom 10%" : _e;
    var ref = react_1.useRef(null);
    react_2.useGSAP(function () {
        var el = ref.current;
        if (!el)
            return;
        var isMobile = window.innerWidth < 640;
        var movement = amount * (isMobile ? 0.35 : 1);
        // Initial state for reveal
        if (reveal) {
            gsap_1["default"].set(el, { opacity: 0, y: movement + 60, scale: 0.9, filter: "blur(10px)" });
        }
        var tl = gsap_1["default"].timeline({
            scrollTrigger: {
                trigger: el,
                start: "top 95%",
                end: "top 40%",
                scrub: 1.5,
                toggleActions: "play none none reverse"
            }
        });
        tl.to(el, {
            y: -movement,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            ease: "power3.out"
        });
    }, { scope: ref });
    return (React.createElement("div", { ref: ref, className: "w-full flex justify-center" }, children));
}
function Feb14LunarWishPage() {
    var _a = react_1.useState(0), activeIndex = _a[0], setActiveIndex = _a[1];
    var _b = react_1.useState(false), isMessageOpen = _b[0], setIsMessageOpen = _b[1];
    var totalImages = galleryImages.length;
    var showPrevious = function () {
        setActiveIndex(function (current) { return (current - 1 + totalImages) % totalImages; });
    };
    var showNext = function () {
        setActiveIndex(function (current) { return (current + 1) % totalImages; });
    };
    return (React.createElement("main", { className: "love-bg relative min-h-screen overflow-hidden text-[color:#5c2f2f]" },
        React.createElement("div", { className: "pointer-events-none absolute inset-0 opacity-90" },
            React.createElement("div", { className: "warm-orb absolute -left-20 top-0 h-72 w-72 rounded-full" }),
            React.createElement("div", { className: "warm-orb absolute right-[-3rem] top-1/4 h-80 w-80 rounded-full", style: { animationDelay: "2s" } }),
            React.createElement("div", { className: "warm-orb absolute bottom-[-6rem] left-1/3 h-72 w-72 rounded-full", style: { animationDelay: "4.2s" } })),
        React.createElement("div", { className: "pointer-events-none absolute inset-0" }, floatingItems.map(function (_a, index) {
            var left = _a.left, delay = _a.delay, duration = _a.duration, Icon = _a.icon;
            return (React.createElement("div", { key: left + "-" + index, className: "floating-item absolute bottom-[-3rem] text-[#c05f6e]", style: { left: left, animationDelay: delay, animationDuration: duration } },
                React.createElement(Icon, { className: "h-6 w-6" })));
        })),
        React.createElement("section", { className: "relative z-10 mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center px-4 py-10 sm:px-8" },
            React.createElement(ParallaxItem, { amount: 0, reveal: false },
                React.createElement("div", { className: "flex flex-col items-center justify-center min-h-[90vh] text-center w-full" },
                    React.createElement("div", { className: "mb-6 flex items-center justify-center gap-3 text-[#ca5a73]" },
                        React.createElement(lucide_react_1.Heart, { className: "heart-beat h-8 w-8 fill-current opacity-80" })),
                    React.createElement("div", { className: "space-y-4" },
                        React.createElement("p", { className: "text-xs sm:text-sm uppercase tracking-[0.45em] text-[#9f6363] font-medium opacity-70 mb-2" }, "G\u1EEDi em KQuynh Ruby"),
                        React.createElement("h1", { className: "title-glow text-5xl sm:text-7xl font-bold tracking-tighter text-[#8c4a56] leading-[1.05]" },
                            "Valentine & ",
                            React.createElement("br", { className: "sm:hidden" }),
                            "T\u1EBFt \u1EA5m \u00E1p nh\u00F3")),
                    React.createElement("div", { className: "mt-40 flex flex-col items-center gap-4 text-[#b07a7a] opacity-50" },
                        React.createElement("p", { className: "text-[10px] uppercase tracking-[0.5em] font-bold animate-pulse" }, "vu\u1ED1t xu\u1ED1ng i"),
                        React.createElement("div", { className: "h-12 w-px bg-gradient-to-b from-[#b07a7a] to-transparent" }),
                        React.createElement(lucide_react_1.ChevronDown, { className: "h-6 w-6 animate-bounce mt-[-4px]" })))),
            React.createElement("article", { className: "message-pop w-full mt-[50vh] space-y-[60vh] rounded-[2rem] border border-[#f6d8d8]/90 bg-[#fff7f4]/85 p-6 shadow-[0_12px_50px_rgba(172,89,89,0.2)] backdrop-blur md:p-12 mb-40" },
                React.createElement("div", { className: "flex flex-col items-center gap-[60vh]" },
                    React.createElement(ParallaxItem, { amount: 60 },
                        React.createElement("div", { className: "relative w-full max-w-2xl space-y-5 rounded-2xl border border-[#efd2d2] bg-[#fffdfa]/80 p-6 leading-relaxed text-[#673e3e] sm:p-10 shadow-sm" },
                            React.createElement("p", { className: "italic text-[#8f5a5a] text-lg font-serif" }, "Ruby,"),
                            React.createElement("div", { className: "space-y-4 text-base sm:text-lg" },
                                React.createElement("p", null, "T\u1EEB l\u00FAc ch\u00FAng m\u00ECnh g\u1EB7p nhau n\u0103m 2023, em \u0111\u00E3 \u0111em \u0111\u1EBFn cho anh nh\u1EEFng m\u1EA3ng m\u00E0u \u1EA5m \u00E1p m\u00E0 anh s\u1EBD mang theo su\u1ED1t cu\u1ED9c \u0111\u1EDDi. Nh\u1EEFng ng\u00E0y hai \u0111\u1EE9a c\u01B0\u1EDDi \u0111\u00F9a, nh\u1EEFng l\u1EA7n im l\u1EB7ng nh\u01B0ng v\u1EABn bi\u1EBFt nhau ngh\u0129 g\u00EC, t\u1EEBng chuy\u1EBFn \u0111i nh\u1ECF. T\u1EA5t c\u1EA3 v\u1EDBi anh \u0111\u1EC1u l\u00E0 k\u1EF7 ni\u1EC7m qu\u00FD gi\u00E1."),
                                React.createElement("p", null, "Qu\u00E3ng th\u1EDDi gian 2023 - 2025 v\u1EDBi anh l\u00E0 m\u1ED9t ch\u01B0\u01A1ng v\u1EEBa \u0111\u1EB9p v\u1EEBa d\u1EA1y anh nhi\u1EC1u \u0111i\u1EC1u. C\u00F3 nh\u1EEFng l\u00FAc anh l\u00E0m em bu\u1ED3n, c\u00F3 l\u00FAc anh ch\u01B0a \u0111\u1EE7 ki\u00EAn nh\u1EABn, v\u00E0 c\u00F3 nh\u1EEFng \u0111i\u1EC1u anh n\u00F3i ch\u01B0a kh\u00E9o khi\u1EBFn em t\u1ED5n th\u01B0\u01A1ng. Anh xin l\u1ED7i v\u00EC nh\u1EEFng l\u00FAc \u1EA5y, v\u00E0 xin c\u1EA3m \u01A1n em v\u00EC \u0111\u00E3 ki\u00EAn nh\u1EABn, \u0111\u00E3 cho anh c\u01A1 h\u1ED9i \u0111\u1EC3 hi\u1EC3u h\u01A1n v\u1EC1 ch\u00EDnh m\u00ECnh."),
                                React.createElement("p", null, "Anh kh\u00F4ng th\u1EC3 quay l\u1EA1i \u0111\u1EC3 thay \u0111\u1ED5i t\u1EA5t c\u1EA3, nh\u01B0ng anh c\u00F3 th\u1EC3 nh\u00ECn th\u1EB3ng v\u00E0o l\u1ED7i l\u1EA7m v\u00E0 h\u1ECDc c\u00E1ch t\u1ED1t h\u01A1n. Nh\u1EDD em, anh bi\u1EBFt y\u00EAu th\u01B0\u01A1ng kh\u00F4ng ch\u1EC9 l\u00E0 c\u1EA3m x\u00FAc m\u00E0 c\u00F2n l\u00E0 tr\u00E1ch nhi\u1EC7m, l\u00E0 l\u1EAFng nghe v\u00E0 l\u00E0 s\u1EF1 \u1EDF l\u1EA1i khi c\u1EA7n. Anh bi\u1EBFt \u01A1n t\u1EEBng kho\u1EA3nh kh\u1EAFc em \u0111\u00E3 chia s\u1EBB, t\u1EEBng gi\u00E2y em \u0111\u00E3 tin t\u01B0\u1EDFng anh."),
                                React.createElement("p", null, "Anh lu\u00F4n mong em \u0111\u01B0\u1EE3c b\u00ECnh y\u00EAn, \u0111\u01B0\u1EE3c c\u01B0\u1EDDi nhi\u1EC1u h\u01A1n v\u00E0 g\u1EB7p nh\u1EEFng ng\u01B0\u1EDDi th\u01B0\u01A1ng em theo c\u00E1ch em x\u1EE9ng \u0111\u00E1ng. N\u1EBFu duy\u00EAn c\u00F2n, n\u1EBFu \u0111\u1EDDi cho ch\u00FAng ta m\u1ED9t l\u1EA7n g\u1EB7p l\u1EA1i, anh hy v\u1ECDng s\u1EBD l\u00E0 ng\u01B0\u1EDDi \u0111\u00E3 tr\u01B0\u1EDFng th\u00E0nh h\u01A1n, bi\u1EBFt tr\u00E2n tr\u1ECDng v\u00E0 \u0111\u1EE1 che ch\u1EDF cho em nhi\u1EC1u h\u01A1n tr\u01B0\u1EDBc."),
                                React.createElement("p", null, "T\u1EBFt v\u00E0 Valentine n\u00E0y, anh ch\u1EC9 mong em c\u00F3 nh\u1EEFng ng\u00E0y \u1EA5m \u00E1p, \u0111\u01B0\u1EE3c \u00F4m b\u1EDFi nh\u1EEFng \u0111i\u1EC1u t\u1ED1t l\u00E0nh v\u00E0 \u0111\u01B0\u1EE3c y\u00EAu th\u01B0\u01A1ng th\u1EADt s\u1EF1. C\u00E1m \u01A1n em v\u00EC t\u1EA5t c\u1EA3 KQuynh v\u00EC nh\u1EEFng k\u1EF7 ni\u1EC7m, v\u00EC nh\u1EEFng b\u00E0i h\u1ECDc, v\u00E0 v\u00EC \u0111\u00E3 l\u00E0 m\u1ED9t ph\u1EA7n quan tr\u1ECDng c\u1EE7a anh "),
                                React.createElement("p", { className: "mt-4 font-semibold" }, "Anh lu\u00F4n nh\u1EDB v\u00E0 tr\u00E2n tr\u1ECDng,"),
                                React.createElement("p", { className: "text-sm opacity-70" }, " K\u00E9o x\u00FAn ik ")),
                            React.createElement("button", { type: "button", onClick: function () { return setIsMessageOpen(true); }, className: "gift-cover absolute inset-0 z-20 flex flex-col items-center justify-center rounded-2xl bg-[#ffe4de]/98 text-[#9b5959] transition-all duration-700 " + (isMessageOpen ? "pointer-events-none opacity-0 scale-105" : "opacity-100 scale-100"), "aria-label": "M\u1EDF qu\u00E0 \u0111\u1EC3 \u0111\u1ECDc l\u1EDDi nh\u1EAFn" },
                                React.createElement("div", { className: "gift-box mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#e8b2b2] bg-[#fff5f1] shadow-md" },
                                    React.createElement(lucide_react_1.Gift, { className: "h-10 w-10 text-[#ca7a7a]" })),
                                React.createElement("p", { className: "text-lg font-semibold tracking-tight" }, "Th\u01B0 \"tay\" cho KQuynh"),
                                React.createElement("p", { className: "mt-2 text-xs uppercase tracking-widest opacity-60" }, "B\u1EA5m \u0111\u1EC3 m\u1EDF l\u1EDDi nh\u1EAFn")))),
                    React.createElement(ParallaxItem, { amount: 60 },
                        React.createElement("div", { className: "flex w-full flex-col items-center rounded-2xl border border-[#efd0d0] bg-[#fff5f2]/85 p-6" },
                            React.createElement("div", { className: "gallery-stack relative mx-auto h-[18rem] w-full max-w-[18rem] overflow-hidden rounded-2xl" },
                                galleryImages.map(function (source, index) {
                                    var _a;
                                    var relative = (index - activeIndex + totalImages) % totalImages;
                                    var hidden = relative > 4;
                                    var rotation = (_a = [0, -3, 2, -2, 1][relative]) !== null && _a !== void 0 ? _a : 0;
                                    var translateY = hidden ? 120 : relative * 5;
                                    var scale = hidden ? 0.9 : 1 - relative * 0.03;
                                    return (React.createElement("button", { key: "photo-" + index, type: "button", "aria-label": "Xem \u1EA3nh " + (index + 1), onClick: function () { return setActiveIndex(index); }, className: "gallery-card absolute inset-0 overflow-hidden rounded-2xl border border-[#f2cdcd] bg-white/60 p-1 shadow-[0_8px_24px_rgba(155,87,87,0.2)]", style: {
                                            transform: "translateY(" + translateY + "px) scale(" + scale + ") rotate(" + rotation + "deg)",
                                            zIndex: totalImages - relative,
                                            opacity: hidden ? 0 : 1
                                        } },
                                        React.createElement("div", { className: "relative h-full w-full rounded-xl bg-[#fffaf8]" },
                                            React.createElement(image_1["default"], { src: source, alt: "KQuynh Ruby memory " + (index + 1), fill: true, sizes: "(max-width: 768px) 80vw, 18rem", className: "rounded-xl object-contain", priority: index === 0 }))));
                                }),
                                React.createElement("div", { className: "stack-hint absolute -bottom-4 left-0 right-0 text-center text-xs text-[#b07a7a]" }, "Ng\u01B0\u1EDDi \u1EA5y n\u00E8")),
                            React.createElement("div", { className: "mt-12 flex items-center justify-center gap-3" },
                                React.createElement("button", { type: "button", onClick: showPrevious, className: "gallery-nav-btn", "aria-label": "\u1EA2nh tr\u01B0\u1EDBc" },
                                    React.createElement(lucide_react_1.ChevronLeft, { className: "h-4 w-4" })),
                                React.createElement("div", { className: "flex items-center gap-1.5 px-2 max-w-[12rem] overflow-x-auto scrollbar-hide py-2" }, galleryImages.map(function (_, index) { return (React.createElement("button", { key: "dot-" + index, type: "button", "aria-label": "Ch\u1ECDn \u1EA3nh " + (index + 1), onClick: function () { return setActiveIndex(index); }, className: "gallery-dot flex-shrink-0 " + (index === activeIndex ? "is-active" : "") })); })),
                                React.createElement("button", { type: "button", onClick: showNext, className: "gallery-nav-btn", "aria-label": "\u1EA2nh sau" },
                                    React.createElement(lucide_react_1.ChevronRight, { className: "h-4 w-4" })))))),
                React.createElement(ParallaxItem, { amount: 20 },
                    React.createElement("div", { className: "flex flex-col items-center gap-6 py-20" },
                        React.createElement("div", { className: "max-w-xs text-center text-xs tracking-wide text-[#aa7575]" }, "Th\u01B0\u01A1ng KQuynh kh\u00F9n. T\u1EEB m\u1ED9t tr\u00E1i tim v\u1EABn \u0111ang h\u1ECDc c\u00E1ch y\u00EAu em t\u1ED1t h\u01A1n."))))),
        React.createElement("style", { jsx: true }, "\n        .love-bg {\n          background:\n            radial-gradient(circle at 8% 12%, rgba(255, 204, 196, 0.45), transparent 34%),\n            radial-gradient(circle at 90% 18%, rgba(255, 223, 191, 0.45), transparent 38%),\n            linear-gradient(145deg, #fff1ec 0%, #ffe8e2 40%, #ffe2d7 100%);\n        }\n\n        .warm-orb {\n          background: radial-gradient(circle, rgba(255, 191, 173, 0.48), rgba(255, 191, 173, 0));\n          filter: blur(8px);\n          animation: breathe 8s ease-in-out infinite;\n        }\n\n        .title-glow {\n          color: #8c4a56;\n          animation: title-glow 2.8s ease-in-out infinite;\n        }\n\n        .floating-item {\n          animation-name: float-up, drift;\n          animation-timing-function: linear, ease-in-out;\n          animation-iteration-count: infinite, infinite;\n        }\n\n        .gallery-stack {\n          perspective: 900px;\n        }\n\n        .gallery-card {\n          transition: transform 260ms ease, box-shadow 260ms ease;\n        }\n\n        .gift-box {\n          box-shadow: 0 10px 20px rgba(181, 118, 118, 0.2);\n        }\n\n        .gallery-nav-btn {\n          display: inline-flex;\n          align-items: center;\n          justify-content: center;\n          height: 2rem;\n          width: 2rem;\n          border-radius: 9999px;\n          border: 1px solid #e8bcbc;\n          color: #a35f5f;\n          background: rgba(255, 255, 255, 0.7);\n          transition: transform 180ms ease, background-color 180ms ease;\n        }\n\n        .gallery-nav-btn:hover {\n          transform: translateY(-1px);\n          background: rgba(255, 255, 255, 0.95);\n        }\n\n        .gallery-dot {\n          height: 0.45rem;\n          width: 0.45rem;\n          border-radius: 9999px;\n          background: #d9aaaa;\n          transition: transform 180ms ease, background-color 180ms ease;\n        }\n\n        .gallery-dot.is-active {\n          background: #c46666;\n          transform: scale(1.25);\n        }\n\n        .gallery-card:hover {\n          box-shadow: 0 14px 30px rgba(155, 87, 87, 0.28);\n        }\n\n        .message-pop {\n          animation: pop-in 700ms ease-out both;\n        }\n\n        .heart-beat {\n          animation: heart-beat 1.8s ease-in-out infinite;\n        }\n\n        .twinkle {\n          animation: twinkle 2s ease-in-out infinite;\n        }\n\n        .sway {\n          animation: sway 2.8s ease-in-out infinite;\n        }\n\n        @keyframes breathe {\n          0%,\n          100% {\n            transform: scale(1) translateY(0);\n          }\n          50% {\n            transform: scale(1.08) translateY(-8px);\n          }\n        }\n\n        @keyframes float-up {\n          0% {\n            transform: translateY(0) rotate(0deg);\n            opacity: 0;\n          }\n          10% {\n            opacity: 0.8;\n          }\n          100% {\n            transform: translateY(-125vh) rotate(20deg);\n            opacity: 0;\n          }\n        }\n\n        @keyframes drift {\n          0%,\n          100% {\n            margin-left: 0;\n          }\n          50% {\n            margin-left: 9px;\n          }\n        }\n\n        @keyframes title-glow {\n          0%,\n          100% {\n            text-shadow: 0 0 0 rgba(255, 140, 140, 0.2);\n          }\n          50% {\n            text-shadow: 0 0 16px rgba(255, 142, 132, 0.38);\n          }\n        }\n\n        @keyframes sway {\n          0%,\n          100% {\n            transform: translateX(0px);\n          }\n          50% {\n            transform: translateX(8px);\n          }\n        }\n\n        @keyframes heart-beat {\n          0%,\n          100% {\n            transform: scale(1);\n          }\n          30% {\n            transform: scale(1.15);\n          }\n          60% {\n            transform: scale(1.04);\n          }\n        }\n\n        @keyframes twinkle {\n          0%,\n          100% {\n            transform: scale(1) rotate(0deg);\n            opacity: 0.76;\n          }\n          50% {\n            transform: scale(1.2) rotate(10deg);\n            opacity: 1;\n          }\n        }\n\n        @keyframes pop-in {\n          from {\n            opacity: 0;\n            transform: translateY(16px) scale(0.98);\n          }\n          to {\n            opacity: 1;\n            transform: translateY(0) scale(1);\n          }\n        }\n\n        @media (max-width: 640px) {\n          .gallery-stack {\n            height: 16rem !important;\n            max-width: 14rem !important;\n          }\n\n          .title-glow {\n            font-size: 1.5rem !important;\n          }\n\n          .message-pop {\n            padding: 1.5rem 1rem !important;\n          }\n\n          .stack-hint {\n            font-size: 0.65rem !important;\n            bottom: -2rem !important;\n          }\n\n          .scrollbar-hide::-webkit-scrollbar {\n            display: none;\n          }\n          .scrollbar-hide {\n            -ms-overflow-style: none;\n            scrollbar-width: none;\n          }\n        }\n      ")));
}
exports["default"] = Feb14LunarWishPage;
