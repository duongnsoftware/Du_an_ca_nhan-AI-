// Dữ liệu 30 món có kèm sẵn thuộc tính tier ('SSS', 'SS', hoặc 'S')
const defaultFoods = [
  // --- BÌNH DÂN (10 món) ---
  { id: 1, name: "Cơm Tấm Sườn Bì Chả", type: "khô", price: "bình dân", region: "nam", tier: "SSS", desc: "Món ăn đặc trưng nổi tiếng của Sài Gòn và miền Nam, gồm cơm nấu từ hạt tấm nhỏ ăn cùng sườn nướng thơm phức." },
  { id: 2, name: "Bún Riêu Cua Đồng", type: "nước", price: "bình dân", region: "bắc", tier: "SS", desc: "Món bún nước thanh ngọt vị cua đồng, xuất xứ từ miền Bắc, ăn kèm chả cua, đậu hũ và rau sống." },
  { id: 3, name: "Bánh Mỳ Thịt Nướng", type: "ăn nhanh", price: "bình dân", region: "nam", tier: "S", desc: "Món ăn đường phố trứ danh toàn quốc, vỏ bánh giòn rụm kết hợp nhân thịt nướng đậm đà." },
  { id: 4, name: "Mì Quảng Tôm Thịt", type: "khô", price: "bình dân", region: "trung", tier: "SS", desc: "Đặc sản lâu đời của vùng đất Quảng Nam - Đà Nẵng, sợi mì vàng đậm ăn kèm ít nước dùng cô đặc." },
  { id: 5, name: "Cơm Gà Xối Mỡ", type: "khô", price: "bình dân", region: "nam", tier: "S", desc: "Món ăn phổ biến tại miền Nam với đùi gà chiên giòn rụm lớp da, ăn kèm cơm chiên đỏ và nước mắm chua ngọt." },
  { id: 6, name: "Hủ Tiếu Nam Vang Khô", type: "khô", price: "bình dân", region: "nam", tier: "SS", desc: "Món hủ tiếu trứ danh gốc Hoa được du nhập và biến tấu đậm đà theo phong cách ẩm thực Sài Gòn." },
  { id: 7, name: "Bún Đậu Mắm Tôm", type: "khô", price: "bình dân", region: "bắc", tier: "SSS", desc: "Món ăn đậm chất dân dã miền Bắc gồm bún lá, đậu hũ rán giòn, thịt chân giò và mắm tôm đánh sủi bọt." },
  { id: 8, name: "Bánh Cuốn Nhân Thịt", type: "khô", price: "bình dân", region: "bắc", tier: "S", desc: "Món ăn sáng truyền thống miền Bắc, lớp vỏ bánh mỏng mịn cuộn nhân thịt mộc nhĩ, ăn kèm chả quế." },
  { id: 9, name: "Xôi Mặn Thập Cẩm", type: "ăn nhanh", price: "bình dân", region: "bắc", tier: "S", desc: "Món ăn nhanh buổi sáng quen thuộc của học sinh, sinh viên miền Bắc với chà bông, lạp xưởng, hành phi." },
  { id: 10, name: "Bánh Xèo Miền Tây", type: "ăn nhanh", price: "bình dân", region: "nam", tier: "SS", desc: "Món bánh truyền thống miền Nam giòn rụm màu vàng nghệ, nhân tôm thịt giá đỗ, cuốn rau sống chấm nước mắm." },

  // --- TẦM TRUNG (10 món) ---
  { id: 11, name: "Phở Bò Tái Nạm", type: "nước", price: "vừa", region: "bắc", tier: "SSS", desc: "Quốc hồn quốc túy ẩm thực Việt Nam, nổi tiếng với nước dùng hầm xương thanh ngọt đậm vị thảo mộc Hà Nội." },
  { id: 12, name: "Bún Chả Hà Nội", type: "khô", price: "vừa", region: "bắc", tier: "SSS", desc: "Món ăn thanh lịch đất thủ đô gồm bún tươi, chả viên/chả miếng nướng than hoa và bát nước chấm đu đủ xanh." },
  { id: 13, name: "Gà Rán & Khoai Tây Chiên", type: "ăn nhanh", price: "vừa", region: "quốc tế", tier: "S", desc: "Món ăn nhanh phong cách phương Tây rất được giới trẻ yêu thích vì độ giòn tan, béo ngậy." },
  { id: 14, name: "Bún Bò Huế Đặc Biệt", type: "nước", price: "vừa", region: "trung", tier: "SSS", desc: "Đặc sản cố đô Huế với sợi bún to, nước dùng cay nồng hương sả và mắm ruốc đặc trưng." },
  { id: 15, name: "Kimbap & Tokbokki Hàn Quốc", type: "ăn nhanh", price: "vừa", region: "quốc tế", tier: "S", desc: "Món ăn vặt mang phong cách Hàn Quốc hiện đại rất thịnh hành trong giới trẻ Việt Nam." },
  { id: 16, name: "Cơm Trộn Hàn Quốc (Bibimbap)", type: "khô", price: "vừa", region: "quốc tế", tier: "SS", desc: "Món ăn truyền thống xứ Hàn gồm cơm trộn đều cùng rau củ, thịt bò, trứng ốp la và sốt ớt cay." },
  { id: 17, name: "Mì Xào Giòn Hải Sản", type: "khô", price: "vừa", region: "nam", tier: "S", desc: "Món ăn gốc Hoa phổ biến tại miền Nam, mì được chiên phồng giòn rụm phủ sốt hải sản đậm đà." },
  { id: 18, name: "Bánh Canh Chả Cá", type: "nước", price: "vừa", region: "trung", tier: "SS", desc: "Món đặc sản miền Trung (Nha Trang/Đà Nẵng) với sợi bánh canh dai giòn và chả cá thơm ngọt vị biển." },
  { id: 19, name: "Cơm Niêu Singapore", type: "khô", price: "vừa", region: "quốc tế", tier: "SS", desc: "Món cơm chế biến trong niêu đất giữ nhiệt cực lâu, lớp cháy giòn tan kết hợp thịt gà hoặc xá xíu." },
  { id: 20, name: "Mì Ramen Nhật Bản", type: "nước", price: "vừa", region: "quốc tế", tier: "SS", desc: "Món mì nước nổi tiếng của Nhật với nước dùng xương hầm đậm đà (Tonkotsu) và trứng lòng đào." },

  // --- SANG CHẢNH (10 món) ---
  { id: 21, name: "Lẩu Thái Tomyum Hải Sản", type: "nước", price: "sang", region: "quốc tế", tier: "SSS", desc: "Món lẩu chua cay trứ danh phong cách Thái Lan, ngập tràn hải sản tươi ngon và vị lá chanh Thái." },
  { id: 22, name: "Mì Ý Sốt Kem Bò Bằm", type: "khô", price: "sang", region: "quốc tế", tier: "SS", desc: "Món Âu sang trọng với sợi mì dai mềm quyện cùng sốt kem tươi béo ngậy và thịt bò bằm thơm lừng." },
  { id: 23, name: "Bánh Canh Ghẹ Nguyên Con", type: "nước", price: "sang", region: "nam", tier: "SSS", desc: "Biến tấu cao cấp của món bánh canh miền Nam, phục vụ nguyên một con ghẹ biển tươi ngọt thịt." },
  { id: 24, name: "Bít-tết Bò Mỹ Sốt Vang", type: "khô", price: "sang", region: "quốc tế", tier: "SSS", desc: "Món thịt bò nhập khẩu áp chảo mềm mọng, kết hợp nước sốt vang đỏ đậm vị phong cách phương Tây." },
  { id: 25, name: "Sushi & Sashimi Cá Hồi", type: "ăn nhanh", price: "sang", region: "quốc tế", tier: "SSS", desc: "Tinh hoa ẩm thực Nhật Bản, nổi tiếng với độ tươi sống nguyên bản và giàu dinh dưỡng từ cá hồi." },
  { id: 26, name: "Lẩu Riêu Cua Bắp Bò", type: "nước", price: "sang", region: "bắc", tier: "SSS", desc: "Món lẩu cao cấp đặc trưng miền Bắc, riêu cua đồng béo ngậy ăn kèm bắp bò hoa nhúng tái và sườn sụn." },
  { id: 27, name: "Pizza Hải Sản Phô Mai", type: "ăn nhanh", price: "sang", region: "quốc tế", tier: "SS", desc: "Món bánh nướng phong cách Ý với lớp phô mai mozzarella kéo sợi phủ đầy hải sản tươi ngon." },
  { id: 28, name: "Cơm Tẩm Ức Gà Sốt Nấm Truffle", type: "khô", price: "sang", region: "quốc tế", tier: "SSS", desc: "Món ăn healthy hiện đại kết hợp ức gà mềm mại cùng hương thơm đặc trưng đắt đỏ của nấm Truffle." },
  { id: 29, name: "Miến Xào Cua Cà Mau", type: "khô", price: "sang", region: "nam", tier: "SS", desc: "Món miến xào đậm đà hương vị thịt cua biển Cà Mau chắc nịch, thơm mùi tiêu và hành ngò." },
  { id: 30, name: "Mì Bò Wagyu Hầm Tiêu Xanh", type: "nước", price: "sang", region: "quốc tế", tier: "SSS", desc: "Món mì cao cấp sử dụng thịt bò Wagyu thượng hạng hầm nhừ cùng tiêu xanh cay ấm nồng." }
];

let foods = JSON.parse(localStorage.getItem('myFoods')) || defaultFoods;
let history = JSON.parse(localStorage.getItem('myEatHistory')) || [];
let isSpinning = false;

function saveData() {
  localStorage.setItem('myFoods', JSON.stringify(foods));
  localStorage.setItem('myEatHistory', JSON.stringify(history));
  renderList();
  renderTierList();
}

function formatRegionName(region) {
  const map = { 'bắc': 'Miền Bắc', 'trung': 'Miền Trung', 'nam': 'Miền Nam', 'quốc tế': 'Âu / Á' };
  return map[region] || 'Toàn quốc';
}

// Lấy style màu sắc theo từng Hạng (Tier)
function getTierBadgeStyle(tier) {
  switch (tier) {
    case 'SSS': return 'bg-red-500/20 text-red-400 border border-red-500/40 shadow-[0_0_10px_rgba(239,68,68,0.3)]';
    case 'SS': return 'bg-amber-500/20 text-amber-400 border border-amber-500/40';
    case 'S': default: return 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40';
  }
}

// Render danh sách món ăn & Tier List
function renderList() {
  const foodListEl = document.getElementById('foodList');
  const historyListEl = document.getElementById('historyList');
  document.getElementById('foodCount').innerText = foods.length;

  foodListEl.innerHTML = foods.length === 0 
    ? `<li class="text-center text-slate-500 py-4 text-sm">Chưa có món nào trong kho. Hãy thêm món bên trên!</li>`
    : foods.map(item => `
      <li class="flex justify-between items-center p-3 bg-slate-800/60 hover:bg-slate-800 rounded-xl text-sm border border-slate-700/60 transition-all">
        <div class="flex flex-wrap items-center gap-1.5">
          <span class="font-bold text-slate-200 mr-1">${item.name}</span>
          <span class="text-[10px] px-2 py-0.5 rounded-md font-black ${getTierBadgeStyle(item.tier || 'S')}">${item.tier || 'S'}</span>
          <span class="text-[10px] px-2 py-0.5 rounded-md bg-slate-700 text-slate-300 font-semibold">${item.type}</span>
          <span class="text-[10px] px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 font-semibold">${formatRegionName(item.region)}</span>
        </div>
        <button onclick="deleteFood(${item.id})" class="text-slate-500 hover:text-red-400 p-1.5 cursor-pointer transition-colors" title="Xóa món">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </li>
    `).join('');

  historyListEl.innerHTML = history.length === 0
    ? `<li class="text-center text-slate-500 py-4 text-sm">Chưa có lịch sử quay món nào gần đây.</li>`
    : history.map(item => `
      <li class="flex justify-between items-center p-3 bg-slate-800/60 rounded-xl text-sm border border-slate-700/60">
        <span class="font-semibold text-slate-200"><i class="fa-solid fa-check text-pink-400 mr-2"></i>${item.name}</span>
        <span class="text-xs text-slate-400">${item.time}</span>
      </li>
    `).join('');
}

// Render giao diện Tier List Xếp Hạng (Người dùng có thể tự đổi hạng tại đây)
function renderTierList() {
  const container = document.getElementById('tierListContainer');
  const tiers = ['SSS', 'SS', 'S'];

  container.innerHTML = tiers.map(tierName => {
    const itemsInTier = foods.filter(f => (f.tier || 'S') === tierName);
    const borderColor = tierName === 'SSS' ? 'border-red-500/40 bg-red-950/20' : tierName === 'SS' ? 'border-amber-500/40 bg-amber-950/20' : 'border-cyan-500/40 bg-cyan-950/20';
    const badgeColor = tierName === 'SSS' ? 'bg-red-600 text-white' : tierName === 'SS' ? 'bg-amber-600 text-white' : 'bg-cyan-600 text-white';

    return `
      <div class="flex items-stretch border ${borderColor} rounded-2xl overflow-hidden shadow-md">
        <div class="w-16 flex items-center justify-center font-black text-lg ${badgeColor} shrink-0">
          ${tierName}
        </div>
        <div class="flex-1 p-2 flex flex-wrap gap-1.5 items-center bg-slate-900/60">
          ${itemsInTier.length === 0 ? `<span class="text-xs text-slate-500 italic px-2">Chưa có món nào ở hạng này</span>` : ''}
          ${itemsInTier.map(item => `
            <div class="flex items-center gap-1.5 bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-xl text-xs font-semibold text-slate-200 shadow-sm">
              <span>${item.name}</span>
              <select onchange="changeFoodTier(${item.id}, this.value)" class="bg-slate-900 text-[10px] font-bold text-pink-400 rounded px-1 py-0.5 border border-slate-700 outline-none cursor-pointer">
                <option value="SSS" ${tierName === 'SSS' ? 'selected' : ''}>SSS</option>
                <option value="SS" ${tierName === 'SS' ? 'selected' : ''}>SS</option>
                <option value="S" ${tierName === 'S' ? 'selected' : ''}>S</option>
              </select>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// Thay đổi hạng món ăn do người dùng tùy chỉnh
function changeFoodTier(id, newTier) {
  const food = foods.find(f => f.id === id);
  if (food) {
    food.tier = newTier;
    saveData();
  }
}

function addFood(e) {
  e.preventDefault();
  const name = document.getElementById('inputName').value.trim();
  const type = document.getElementById('inputType').value;
  const price = document.getElementById('inputPrice').value;
  const region = document.getElementById('inputRegion').value;

  if (!name) return;

  const newFood = { 
    id: Date.now(), 
    name, 
    type, 
    price, 
    region,
    tier: 'S', // Mặc định món mới thêm là hạng S
    desc: `Món ăn đặc trưng vùng ${formatRegionName(region)} do bạn bổ sung vào kho cá nhân.` 
  };
  foods.push(newFood);
  saveData();

  document.getElementById('inputName').value = '';
}

function deleteFood(id) {
  foods = foods.filter(item => item.id !== id);
  saveData();
}

// Logic quay túi mù có hiển thị huy hiệu Tier
function spinFood() {
  if (isSpinning) return;

  const filterType = document.getElementById('filterType').value;
  const filterPrice = document.getElementById('filterPrice').value;
  const filterRegion = document.getElementById('filterRegion').value;

  const filtered = foods.filter(item => {
    const matchType = filterType === 'all' || item.type === filterType;
    const matchPrice = filterPrice === 'all' || item.price === filterPrice;
    const matchRegion = filterRegion === 'all' || item.region === filterRegion;
    return matchType && matchPrice && matchRegion;
  });

  if (filtered.length === 0) {
    alert("Không tìm thấy món ăn nào khớp với bộ lọc của bạn! Hãy thử nới lỏng bộ lọc hoặc thêm món mới nhé.");
    return;
  }

  isSpinning = true;

  const modal = document.getElementById('blindBoxModal');
  const boxContainer = document.getElementById('boxContainer');
  const resultBox = document.getElementById('resultBox');

  modal.classList.remove('hidden');
  boxContainer.classList.remove('hidden');
  resultBox.classList.add('hidden');

  setTimeout(() => {
    const finalChoice = filtered[Math.floor(Math.random() * filtered.length)];
    const foodTier = finalChoice.tier || 'S';

    document.getElementById('modalFoodName').innerText = finalChoice.name;
    document.getElementById('modalFoodType').innerText = `Loại: ${finalChoice.type.toUpperCase()}`;
    document.getElementById('modalFoodPrice').innerText = `Giá: ${finalChoice.price.toUpperCase()}`;
    document.getElementById('modalFoodRegion').innerText = formatRegionName(finalChoice.region).toUpperCase();
    document.getElementById('modalFoodDesc').innerText = finalChoice.desc || "Món ngon hấp dẫn đang chờ bạn thưởng thức!";
    
    // Gắn nhãn và màu Tier vào Modal kết quả
    const tierBadge = document.getElementById('modalTierBadge');
    tierBadge.innerText = `ĐỘ HIẾM: HẠNG ${foodTier}`;
    tierBadge.className = `inline-block px-3 py-1 rounded-full text-xs font-black mb-2 uppercase tracking-wider shadow-md ${getTierBadgeStyle(foodTier)}`;

    const mapUrl = `https://www.google.com/maps/search/${encodeURIComponent(finalChoice.name + ' gần đây')}`;
    document.getElementById('mapLink').href = mapUrl;

    const resultEl = document.getElementById('foodResult');
    const catEl = document.getElementById('displayCategory');
    const priceEl = document.getElementById('displayPrice');
    resultEl.innerText = finalChoice.name;
    catEl.innerText = `${formatRegionName(finalChoice.region).toUpperCase()} • ${finalChoice.type.toUpperCase()}`;
    priceEl.innerText = `Phân khúc: ${finalChoice.price.toUpperCase()}`;
    catEl.classList.remove('hidden');
    priceEl.classList.remove('hidden');

    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')} - ${now.getDate()}/${now.getMonth()+1}`;
    history.unshift({ name: finalChoice.name, time: timeStr });
    if (history.length > 20) history.pop();
    saveData();

    boxContainer.classList.add('hidden');
    resultBox.classList.remove('hidden');

  }, 1500);
}

function closeModal() {
  const modal = document.getElementById('blindBoxModal');
  modal.classList.add('hidden');
  isSpinning = false;
}

// Minigame Ai Trả Tiền
function openWhoPaysModal() { document.getElementById('whoPaysModal').classList.remove('hidden'); }
function closeWhoPaysModal() { 
  document.getElementById('whoPaysModal').classList.add('hidden');
  document.getElementById('whoPaysResult').innerText = 'Bấm nút bên dưới để chọn ngẫu nhiên "nạn nhân"! 🎯';
}
function spinWhoPays() {
  const rawText = document.getElementById('playerNames').value.trim();
  if (!rawText) { alert('Vui lòng nhập tên ít nhất 2 người!'); return; }
  const players = rawText.split(',').map(s => s.trim()).filter(s => s.length > 0);
  if (players.length < 2) { alert('Cần ít nhất 2 người tham gia minigame này nhé!'); return; }

  const resultEl = document.getElementById('whoPaysResult');
  const btnEl = document.getElementById('whoPaysBtn');
  btnEl.disabled = true;
  btnEl.classList.add('opacity-50', 'cursor-not-allowed');

  let counter = 0;
  const totalSteps = 20;
  const speed = 50;

  const timer = setInterval(() => {
    const randomPlayer = players[Math.floor(Math.random() * players.length)];
    resultEl.innerText = `🔄 Đang quay số gọi tên: ${randomPlayer}...`;
    counter++;

    if (counter >= totalSteps) {
      clearInterval(timer);
      const unluckyOne = players[Math.floor(Math.random() * players.length)];
      resultEl.innerHTML = `🎉 Xin chia buồn!<br><span class="text-xl font-black text-amber-400 mt-1 inline-block">${unluckyOne}</span><br>sẽ là đại gia thanh toán bữa này! 💸`;
      btnEl.disabled = false;
      btnEl.classList.remove('opacity-50', 'cursor-not-allowed');
    }
  }, speed);
}

// Chuyển Tab (Thêm tab Tier)
function switchTab(tab) {
  const foodTab = document.getElementById('tabFood');
  const tierTab = document.getElementById('tabTier');
  const historyTab = document.getElementById('tabHistory');
  
  const foodBtn = document.getElementById('tabFoodBtn');
  const tierBtn = document.getElementById('tabTierBtn');
  const historyBtn = document.getElementById('tabHistoryBtn');

  foodTab.classList.add('hidden');
  tierTab.classList.add('hidden');
  historyTab.classList.add('hidden');
  
  foodBtn.className = "py-2.5 px-4 font-bold text-slate-500 hover:text-slate-300 focus:outline-none transition-colors text-sm whitespace-nowrap";
  tierBtn.className = "py-2.5 px-4 font-bold text-slate-500 hover:text-slate-300 focus:outline-none transition-colors text-sm whitespace-nowrap";
  historyBtn.className = "py-2.5 px-4 font-bold text-slate-500 hover:text-slate-300 focus:outline-none transition-colors text-sm whitespace-nowrap";

  if (tab === 'food') {
    foodTab.classList.remove('hidden');
    foodBtn.className = "py-2.5 px-4 font-bold text-pink-400 border-b-2 border-pink-500 focus:outline-none transition-colors text-sm whitespace-nowrap";
  } else if (tab === 'tier') {
    tierTab.classList.remove('hidden');
    tierBtn.className = "py-2.5 px-4 font-bold text-pink-400 border-b-2 border-pink-500 focus:outline-none transition-colors text-sm whitespace-nowrap";
    renderTierList();
  } else {
    historyTab.classList.remove('hidden');
    historyBtn.className = "py-2.5 px-4 font-bold text-pink-400 border-b-2 border-pink-500 focus:outline-none transition-colors text-sm whitespace-nowrap";
  }
}

function clearHistory() {
  if (confirm("Bạn có chắc chắn muốn xóa toàn bộ lịch sử quay món không?")) {
    history = [];
    saveData();
  }
}

// Khởi chạy lần đầu
renderList();
renderTierList();