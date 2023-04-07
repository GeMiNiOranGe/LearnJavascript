// const sinhVien = [
//     { ho: "Đặng", ten: "Ngọc Anh" },
//     { ho: "Vi", ten: "Tiểu Bảo" },
//     { ho: "Hàn", ten: "Lập" }
// ];
// function layTenDayDu(sv) {
//     // Ghép họ và tên bằng hàm join()
//     let hoVaTen = [sv.ho, sv.ten].join(" ");
//     return hoVaTen;
// }
// let tenDayDu = sinhVien.map(layTenDayDu);
// console.log(tenDayDu);
// ---------------------------------------------------------------------------------
const SinhVien = [
    { msv: "SV1", ten: "Ngọc Anh" },
    { msv: "SV2", ten: "Tiểu Bảo" },
    { msv: "SV3", ten: "Hàn Lập" }
];
const doDaiTenSinhVien = SinhVien.map(sv => {
    const obj = {};
	
    obj[sv.msv] = sv.ten;
    obj.doDaiTen = sv.ten.length;

    return obj; 
});

// In ra kết quả
console.log(doDaiTenSinhVien);
// ---------------------------------------------------------------------------------
