// bài 1: Tính tiền lương
document.getElementById('btnTinhTienLuong').onclick = function () {
    var luong1Ngay = Number(document.getElementById('luong1Ngay').value);
    var soNgayLam = Number(document.getElementById('soNgaylam').value);
    var tienLuong = '';
    tienLuong = luong1Ngay * soNgayLam;
    document.getElementById('tienLuong').innerHTML = 'Tổng lương = ' + tienLuong.toLocaleString();
}
// bài 2: tính giá trị trung bình
document.getElementById('btnTinhTrungBinh').onclick = function () {
    var soThu1 = Number(document.getElementById('soThu1').value);
    var soThu2 = Number(document.getElementById('soThu2').value);
    var soThu3 = Number(document.getElementById('soThu3').value);
    var soThu4 = Number(document.getElementById('soThu4').value);
    var giaTriTB = 0;
    tinhTrungBinh = (soThu1 + soThu2 + soThu3 + soThu4) / 5;
    document.getElementById('tinhTrungBinh').innerHTML = 'Tính Trung Bình = ' + tinhTrungBinh.toLocaleString();
}

//Bài 3: Quy đổi tiền
document.getElementById('btnDoiTien').onclick = function () {
    var USD = Number(document.getElementById('USD').value);
    var VND = 0;
    VND = USD * 23500;
    document.getElementById('doiTien').innerHTML = 'VND = ' + VND.toLocaleString();
}

//Bài 4 : Tính  Diện tích và chu vi hình chữ nhật
document.getElementById('btnTinh').onclick = function () {
    var Dai = document.getElementById('Dai').value;
    var rong = document.getElementById('rong').value;
    var DienTichChuvi = 0;
    DienTich = Dai * rong;
    ChuVi = (Dai + rong) * 2;
    document.getElementById('Tinh').innerHTML = 'Diện tích = ' + DienTich.toLocaleString() + 'Chu vi = ' + ChuVi.toLocaleString();
}

//bài 5 : tính tổng 2 ký số 
document.getElementById('btnTinh2KySo').onclick = function () {
    var kySo = document.getElementById('kySo').value;
    var tong2KySo = 0;
    var hangdonvi = kySo % 10;
    var hangchuc = Math.floor(kySo % 100 / 10);
    tong2KySo = hangchuc + hangdonvi;
    document.getElementById('TinhTong').innerHTML = 'Tổng 2 ký số = ' + tong2KySo.toLocaleString();
}