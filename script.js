// ===== PRODUCT DATA =====
// Note: prices and ratings are sample values for learning, not live store prices.
const products = [
    {
        id: 1,
        name: "Nova X5 Smartphone",
        category: "Phones",
        emoji: "📱",
        prices: { Amazon: 18999, Flipkart: 18499, Croma: 19490 },
        specs: { Display: "6.5 in AMOLED", RAM: "8 GB", Storage: "128 GB", Battery: "5000 mAh", Camera: "50 MP" },
        guide: {
            what: "A phone for calls, internet, photos, videos and apps.",
            who: "Students and everyday users who want good speed without a flagship price.",
            terms: { RAM: "Short-term memory. More RAM keeps more apps running smoothly.", Storage: "Space for photos, apps and videos.", mAh: "Battery size. Higher usually lasts longer.", AMOLED: "A screen with bright colours and deep blacks." },
            tips: "Check warranty length, whether the charger is in the box, and 5G support."
        }
    },
    {
        id: 2,
        name: "Pixa Lite 4G",
        category: "Phones",
        emoji: "📱",
        prices: { Amazon: 8999, Flipkart: 8799, Croma: 9299 },
        specs: { Display: "6.1 in LCD", RAM: "4 GB", Storage: "64 GB", Battery: "4500 mAh", Camera: "13 MP" },
        guide: {
            what: "A budget phone for basic daily use.",
            who: "First-time smartphone users, parents, or as a backup phone.",
            terms: { LCD: "An older, cheaper screen type. Fine for daily use.", "4G": "Mobile network speed standard available almost everywhere." },
            tips: "64 GB fills up fast. Look for a memory card slot."
        }
    },
    {
        id: 3,
        name: "BrightBook 14 Laptop",
        category: "Laptops",
        emoji: "💻",
        prices: { Amazon: 54990, Flipkart: 53999, Croma: 55490 },
        specs: { Processor: "Core i5 12th Gen", RAM: "16 GB", Storage: "512 GB SSD", Screen: "14 in FHD", Weight: "1.4 kg" },
        guide: {
            what: "A portable computer for study, coding, documents and browsing.",
            who: "College students and beginners in programming.",
            terms: { Processor: "The brain of the laptop. i5 is a good middle level.", SSD: "Fast storage, much quicker than old hard disks.", FHD: "Full HD screen, 1920 x 1080 pixels." },
            tips: "Prefer 16 GB RAM and an SSD. Check if the RAM can be upgraded later."
        }
    },
    {
        id: 4,
        name: "EduPad 15 Laptop",
        category: "Laptops",
        emoji: "💻",
        prices: { Amazon: 31990, Flipkart: 32490, Croma: 31499 },
        specs: { Processor: "Ryzen 3", RAM: "8 GB", Storage: "256 GB SSD", Screen: "15.6 in HD", Weight: "1.8 kg" },
        guide: {
            what: "An affordable laptop for light work.",
            who: "Students who mostly use documents, video classes and the web.",
            terms: { "Ryzen 3": "An entry-level AMD processor.", HD: "Less sharp than FHD, but cheaper." },
            tips: "Good for basics. For heavy coding or video editing, choose a stronger one."
        }
    },
    {
        id: 5,
        name: "BeatPods Wireless Earbuds",
        category: "Audio",
        emoji: "🎧",
        prices: { Amazon: 2499, Flipkart: 2299, Croma: 2799 },
        specs: { Battery: "30 h with case", "Noise cancel": "Yes", "Water rating": "IPX4", Bluetooth: "5.3" },
        guide: {
            what: "Small wireless headphones that connect to your phone by Bluetooth.",
            who: "Anyone who listens to music or lectures, or takes calls on the move.",
            terms: { "Noise cancel": "Reduces background sound like fans and traffic.", IPX4: "Survives sweat and light splashes, not swimming.", "Bluetooth 5.3": "Newer version with a steadier connection." },
            tips: "Check the fit in your ear and the delay while watching videos."
        }
    },
    {
        id: 6,
        name: "FitBeat Smartwatch",
        category: "Wearables",
        emoji: "⌚",
        prices: { Amazon: 2999, Flipkart: 2799, Croma: 3299 },
        specs: { Display: "1.8 in", Battery: "7 days", Calls: "Bluetooth calling", "Water rating": "IP68" },
        guide: {
            what: "A watch that shows time, notifications, steps and heart rate.",
            who: "People who want to track activity or see phone alerts on the wrist.",
            terms: { IP68: "Dust-tight and safe in shallow water.", "Heart-rate sensor": "Estimates pulse. It is not a medical device." },
            tips: "Health numbers on cheap watches are estimates only."
        }
    },
    {
        id: 7,
        name: "ThunderBoom Bluetooth Speaker",
        category: "Audio",
        emoji: "🔊",
        prices: { Amazon: 1799, Flipkart: 1699, Croma: 1999 },
        specs: { Power: "20 W", Battery: "12 h", "Water rating": "IPX5", Bluetooth: "5.0" },
        guide: {
            what: "A portable speaker that plays music from your phone wirelessly.",
            who: "Hostel rooms, picnics and small gatherings.",
            terms: { Watt: "Loudness power. 20 W is loud enough for a room.", IPX5: "Safe against water jets, such as rain." },
            tips: "Check battery hours and whether it can play while charging."
        }
    },
    {
        id: 8,
        name: "PowerMax 20000 Power Bank",
        category: "Accessories",
        emoji: "🔋",
        prices: { Amazon: 1699, Flipkart: 1599, Croma: 1899 },
        specs: { Capacity: "20000 mAh", "Fast charging": "22.5 W", Ports: "2 USB + 1 Type-C", Weight: "430 g" },
        guide: {
            what: "A battery you carry to charge your phone when there is no socket.",
            who: "Students and travellers who use the phone a lot outside.",
            terms: { mAh: "Battery size. 20000 mAh charges a normal phone about 3 to 4 times.", "Fast charging": "Charges your phone quicker if the phone supports it." },
            tips: "Real usable capacity is lower than printed. Buy a trusted brand with safety certification."
        }
    },
    {
        id: 9,
        name: "TabPro 10 Tablet",
        category: "Tablets",
        emoji: "📲",
        prices: { Amazon: 15999, Flipkart: 15499, Croma: 16490 },
        specs: { Display: "10.4 in", RAM: "4 GB", Storage: "64 GB", Battery: "7000 mAh" },
        guide: {
            what: "A large touchscreen device for reading, videos and note-taking.",
            who: "Students who read PDFs, watch lectures or draw notes.",
            terms: { Display: "Screen size in inches, measured corner to corner.", Storage: "Space for files and apps. A memory card can add more." },
            tips: "Check if a pen or keyboard cover is supported and sold separately."
        }
    },
    {
        id: 10,
        name: "ViewMax 43 Smart TV",
        category: "TVs",
        emoji: "📺",
        prices: { Amazon: 23999, Flipkart: 22999, Croma: 24490 },
        specs: { Screen: "43 in 4K", "Smart apps": "Yes", Speakers: "20 W", Ports: "3 HDMI, 2 USB" },
        guide: {
            what: "A TV that connects to Wi-Fi and runs apps like YouTube and OTT services.",
            who: "Families and hostel rooms that watch movies and shows.",
            terms: { "4K": "Very sharp picture, about 4 times the pixels of HD.", HDMI: "Port to connect a laptop, game console or set-top box." },
            tips: "Check the warranty on the panel and whether wall-mount is included."
        }
    },
    {
        id: 11,
        name: "GlideClick Wireless Mouse",
        category: "Accessories",
        emoji: "🖱️",
        prices: { Amazon: 499, Flipkart: 449, Croma: 599 },
        specs: { Connection: "2.4 GHz USB", Battery: "12 months", DPI: "1600", Buttons: "6" },
        guide: {
            what: "A small device that moves the pointer on your laptop screen.",
            who: "Anyone who uses a laptop for long hours.",
            terms: { DPI: "Pointer speed. Higher DPI moves the pointer faster.", "2.4 GHz": "Wireless signal sent through a small USB receiver." },
            tips: "A USB receiver is easy to lose. Keep it plugged into the mouse when stored."
        }
    },
    {
        id: 12,
        name: "TypeFlow Mechanical Keyboard",
        category: "Accessories",
        emoji: "⌨️",
        prices: { Amazon: 2299, Flipkart: 2199, Croma: 2599 },
        specs: { Type: "Mechanical", Layout: "87 keys", Lighting: "RGB", Connection: "USB wired" },
        guide: {
            what: "A keyboard with a separate switch under every key for a crisp feel.",
            who: "Programmers and heavy typists.",
            terms: { Mechanical: "Each key has its own switch, so it lasts longer.", RGB: "Coloured backlight." },
            tips: "Switch type changes the sound and feel. Blue is clicky and loud; red is quiet."
        }
    },
    {
        id: 13,
        name: "BassKing Over-Ear Headphones",
        category: "Audio",
        emoji: "🎧",
        prices: { Amazon: 3499, Flipkart: 3299, Croma: 3799 },
        specs: { Battery: "40 h", "Noise cancel": "Yes", Bluetooth: "5.2", Mic: "Built in" },
        guide: {
            what: "Headphones that cover your ears for better sound and comfort.",
            who: "Students who study or attend online classes for long hours.",
            terms: { "Noise cancel": "Blocks background noise.", Mic: "Lets you speak on calls and meetings." },
            tips: "Check comfort for long use and whether a wired cable is included."
        }
    },
    {
        id: 14,
        name: "CampusPro Laptop Backpack",
        category: "Accessories",
        emoji: "🎒",
        prices: { Amazon: 899, Flipkart: 799, Croma: 1099 },
        specs: { Capacity: "30 L", "Laptop fit": "Up to 15.6 in", Material: "Water-resistant", Pockets: "6" },
        guide: {
            what: "A bag with a padded section to carry a laptop safely.",
            who: "College students who carry a laptop and books daily.",
            terms: { Litre: "Bag volume. 30 L suits a laptop, books and a lunch box.", "Water-resistant": "Handles light rain, not heavy downpours." },
            tips: "Check shoulder padding and zipper quality, since these break first."
        }
    },
    {
        id: 15,
        name: "CrispAir Air Fryer",
        category: "Home",
        emoji: "🍟",
        prices: { Amazon: 4999, Flipkart: 4799, Croma: 5490 },
        specs: { Capacity: "4 L", Power: "1500 W", Timer: "Yes", Temperature: "Up to 200 C" },
        guide: {
            what: "A kitchen device that cooks food with hot air using very little oil.",
            who: "Families who like snacks such as fries and tikka with less oil.",
            terms: { Watt: "Power use. Higher watts heat faster.", Litre: "Cooking basket size. 4 L feeds 2 to 3 people." },
            tips: "Check that the basket is non-stick and easy to wash."
        }
    },
    {
        id: 16,
        name: "ClearCam HD Webcam",
        category: "Accessories",
        emoji: "📷",
        prices: { Amazon: 1299, Flipkart: 1199, Croma: 1499 },
        specs: { Resolution: "1080p", Mic: "Built in", Connection: "USB", Focus: "Auto" },
        guide: {
            what: "A camera that attaches to a computer for video calls and online classes.",
            who: "Students using desktops or laptops with a poor built-in camera.",
            terms: { "1080p": "Full HD video quality.", "Auto focus": "Keeps your face sharp when you move." },
            tips: "Make sure your computer has a free USB port."
        }
    }
];
function toggleCompare(id) {
    if (selected.includes(id)) {
        selected = selected.filter(function (x) { return x !== id; });
    } else {
        if (selected.length >= 3) selected.shift();
        selected.push(id);
    }
    applyFilters();
    showCompare();

    // go to the compare table once 2 products are chosen
    if (selected.length >= 2) {
        document.getElementById("compare").scrollIntoView({ behavior: "smooth" });
    }
}

// ===== FIND LOWEST PRICE =====
function lowestPrice(product) {
    return Math.min(...Object.values(product.prices));
}

// ===== SHOW PRODUCT CARDS =====
function showProducts(list) {
    const grid = document.getElementById("grid");
    grid.innerHTML = "";

    if (list.length === 0) {
        grid.innerHTML = "<p>No products found.</p>";
        return;
    }

    list.forEach(function (p) {
        grid.innerHTML += `
      <div class="card">
        <div class="emoji">${p.emoji}</div>
        <h3>${p.name}</h3>
        <p class="category">${p.category}</p>
        <p class="price">from ₹${lowestPrice(p).toLocaleString("en-IN")}</p>
        <button>+ Compare</button>
        <button>Explain it to me</button>
      </div>
    `;
    });
}

// ===== SEARCH BOX =====
document.getElementById("search").addEventListener("input", function (e) {
    const text = e.target.value.toLowerCase();
    const result = products.filter(function (p) {
        return p.name.toLowerCase().includes(text) || p.category.toLowerCase().includes(text);
    });
    showProducts(result);
});
const platforms = ["Amazon", "Flipkart", "Croma"];
let selected = [];
let activeCategory = "All";
let searchText = "";

function lowestPrice(product) {
    return Math.min(...Object.values(product.prices));
}

function rupee(n) {
    return "₹" + n.toLocaleString("en-IN");
}

function showChips() {
    const cats = ["All"];
    products.forEach(function (p) {
        if (!cats.includes(p.category)) cats.push(p.category);
    });
    document.getElementById("chips").innerHTML = cats.map(function (c) {
        return `<button class="chip ${c === activeCategory ? "active" : ""}" onclick="setCategory('${c}')">${c}</button>`;
    }).join("");
}

function setCategory(c) {
    activeCategory = c;
    showChips();
    applyFilters();
}

function showProducts(list) {
    const grid = document.getElementById("grid");
    if (list.length === 0) {
        grid.innerHTML = "<p>No products found.</p>";
        return;
    }
    grid.innerHTML = list.map(function (p) {
        const added = selected.includes(p.id);
        return `
      <div class="card">
        <div class="emoji">${p.emoji}</div>
        <h3>${p.name}</h3>
        <p class="category">${p.category}</p>
        <p class="price">from ${rupee(lowestPrice(p))}</p>
        <button class="${added ? "added" : ""}" onclick="toggleCompare(${p.id})">${added ? "✓ Added" : "+ Compare"}</button>
        <button onclick="showGuide(${p.id})">Explain it to me</button>
      </div>`;
    }).join("");
}

function applyFilters() {
    const result = products.filter(function (p) {
        const okCategory = activeCategory === "All" || p.category === activeCategory;
        const okSearch = p.name.toLowerCase().includes(searchText);
        return okCategory && okSearch;
    });
    showProducts(result);
}

function toggleCompare(id) {
    if (selected.includes(id)) {
        selected = selected.filter(function (x) { return x !== id; });
    } else {
        if (selected.length >= 3) selected.shift();
        selected.push(id);
    }
    applyFilters();
    showCompare();
    if (selected.length >= 2) {
        document.getElementById("compare").scrollIntoView({ behavior: "smooth" });
    }
}

function showCompare() {
    const box = document.getElementById("compare");
    const items = products.filter(function (p) { return selected.includes(p.id); });

    if (items.length < 2) {
        box.innerHTML = `<div class="guide-box">Press "+ Compare" on 2 or 3 products to compare them.</div>`;
        return;
    }

    const cols = items.length + 1;
    let html = `<div class="scroll"><table><tr><th></th>`;
    items.forEach(function (p) { html += `<th>${p.emoji} ${p.name}</th>`; });
    html += `</tr><tr class="section"><td colspan="${cols}">Price on each platform</td></tr>`;

    platforms.forEach(function (s) {
        html += `<tr><td>${s}</td>`;
        items.forEach(function (p) { html += `<td>${rupee(p.prices[s])}</td>`; });
        html += `</tr>`;
    });

    html += `<tr><td><b>Cheapest deal</b></td>`;
    items.forEach(function (p) {
        const best = platforms.reduce(function (a, b) { return p.prices[a] <= p.prices[b] ? a : b; });
        html += `<td class="best">${rupee(p.prices[best])} on ${best}</td>`;
    });
    html += `</tr><tr class="section"><td colspan="${cols}">Specifications</td></tr>`;

    const keys = [];
    items.forEach(function (p) {
        Object.keys(p.specs).forEach(function (k) {
            if (!keys.includes(k)) keys.push(k);
        });
    });
    keys.forEach(function (k) {
        html += `<tr><td>${k}</td>`;
        items.forEach(function (p) { html += `<td>${p.specs[k] || "—"}</td>`; });
        html += `</tr>`;
    });

    html += `</table></div>`;
    box.innerHTML = html;
}

function showGuide(id) {
    const p = products.find(function (x) { return x.id === id; });
    let terms = "";
    for (const word in p.guide.terms) {
        terms += `<p><span class="tag">${word}</span> ${p.guide.terms[word]}</p>`;
    }
    const box = document.getElementById("guide");
    box.innerHTML = `
    <h3>${p.emoji} ${p.name}</h3>
    <h4>What is it?</h4><p>${p.guide.what}</p>
    <h4>Who is it for?</h4><p>${p.guide.who}</p>
    <h4>Words you will see</h4>${terms}
    <h4>Before you buy</h4><p>${p.guide.tips}</p>`;
    box.scrollIntoView({ behavior: "smooth" });
}

document.getElementById("search").addEventListener("input", function (e) {
    searchText = e.target.value.toLowerCase();
    applyFilters();
});

applyFilters();
showCompare();
showChips();

