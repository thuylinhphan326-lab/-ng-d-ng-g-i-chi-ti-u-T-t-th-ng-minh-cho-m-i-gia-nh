function generatePlan() {
    const budget = Number(document.getElementById("budget").value);

    if (!budget || budget <= 0) {
        alert("Vui lòng nhập số tiền hợp lệ!");
        return;
    }

    // ==========================
    //  A. TỈ LỆ TỪNG NHÓM (có thể chỉnh dễ dàng)
    // ==========================
    const percentGroup = {
        giaDinh: 0.25,
        quaBieu: 0.15,
        liXi: 0.20,
        trangPhuc: 0.15,
        anUong: 0.12,
        hocTap: 0.08,
        duPhong: 0.05
    };

    // ==========================
    //  B. TỈ LỆ TỪNG ĐỐI TƯỢNG TRONG NHÓM
    //     (KHÔNG BAO GIỜ BỊ LẺ)
    // ==========================

    const percentDetail = {
        giaDinh: [0.20, 0.20, 0.15, 0.20, 0.15, 0.10],
        quaBieu: [0.30, 0.30, 0.20, 0.15, 0.05],
        liXi: [0.20, 0.20, 0.40, 0.10, 0.10],
        trangPhuc: [0.40, 0.25, 0.20, 0.10, 0.05],
        anUong: [0.25, 0.30, 0.15, 0.10, 0.10, 0.10],
        hocTap: [0.40, 0.30, 0.20, 0.10],
        duPhong: [0.50, 0.50]
    };

    // ==========================
    //  C. DANH SÁCH TỪNG MỤC (giữ nguyên bố cục của bạn)
    // ==========================
    const planGroups = [
        {
            key: "giaDinh",
            title: "🏡 1. Chi tiêu gia đình & chuẩn bị Tết",
            items: [
                "Mua bánh kẹo Tết",
                "Mua hoa, cây cảnh",
                "Mua mâm ngũ quả",
                "Trang trí nhà – đèn, dây treo",
                "Dọn dẹp – bao rác, nước lau sàn",
                "Đồ dùng bếp mới"
            ]
        },
        {
            key: "quaBieu",
            title: "🎁 2. Quà biếu & thăm hỏi",
            items: [
                "Quà biếu ông bà",
                "Quà biếu bố mẹ",
                "Quà biếu họ hàng",
                "Quà biếu thầy cô",
                "Quà phát sinh"
            ]
        },
        {
            key: "liXi",
            title: "🧧 3. Lì xì Tết",
            items: [
                "Lì xì trẻ em",
                "Lì xì anh chị em",
                "Lì xì bố mẹ",
                "Lì xì bạn bè",
                "Lì xì phát sinh"
            ]
        },
        {
            key: "trangPhuc",
            title: "👗 4. Trang phục & cá nhân",
            items: [
                "Quần áo",
                "Giày dép",
                "Làm tóc",
                "Mỹ phẩm – skincare",
                "Phụ kiện"
            ]
        },
        {
            key: "anUong",
            title: "🍜 5. Ăn uống – đi chơi",
            items: [
                "Đi cafe – trà sữa",
                "Đi ăn",
                "Xem phim",
                "Đi hội hoa",
                "Tiền xăng xe",
                "Lưu niệm"
            ]
        },
        {
            key: "hocTap",
            title: "📚 6. Học tập đầu năm",
            items: [
                "Dụng cụ học tập",
                "Sách mới",
                "Ốp điện thoại – dán màn hình",
                "In ảnh"
            ]
        },
        {
            key: "duPhong",
            title: "🛡️ 7. Quỹ dự phòng",
            items: [
                "Phát sinh bất ngờ",
                "Quỹ khẩn cấp"
            ]
        }
    ];

    // ==========================
    //  D. TẠO GIAO DIỆN ĐẦY ĐỦ
    // ==========================

    let html = "";

    planGroups.forEach(group => {
        const groupBudget = Math.round(budget * percentGroup[group.key] / 1000) * 1000;

        html += `
        <div class="card">
            <h3>${group.title} — <span class="money">${groupBudget.toLocaleString()}đ</span></h3>
            <ul>
        `;

        group.items.forEach((item, idx) => {
            const itemMoney = Math.round(groupBudget * percentDetail[group.key][idx] / 1000) * 1000;

            html += `<li>${item} — <b>${itemMoney.toLocaleString()}đ</b></li>`;
        });

        html += `
            </ul>
        </div>
        `;
    });

    document.getElementById("planContainer").innerHTML = html;
}
