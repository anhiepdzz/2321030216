var danhsachbaihat = [
    {
        id: 1,
        ten: "Houselak trái tim vỡ vụn",
        duongdananh: "houselak1.avif",
        duongdanyoutube: "https://www.youtube.com/embed/IBELwEbEUZY"
    },
    {
        id: 2,
        ten: "PHONG CHÂU NGÀY VẮNG EM VER 4 - AN THUYEN MIX",
        duongdananh: "pc2.avif",
        duongdanyoutube: "https://www.youtube.com/embed/8F409e_a7WY"
    },
    {
        id: 3,
        ten: "NST TRÔI 1H - TD MIX",
        duongdananh: "nst3.avif",
        duongdanyoutube: "https://www.youtube.com/embed/c_5HRhofl7o"
    },
    {
        id: 4,
        ten: "NHẠC LỌT ĐAU VÍ",
        duongdananh: "nl4.avif",
        duongdanyoutube: "https://www.youtube.com/embed/jhAK2fSC2Jo"
    }
];

function chonbai(id) {
    for (let i = 0; i < danhsachbaihat.length; i++) {
        if (danhsachbaihat[i].id == id) {
            document.getElementById("video").src = danhsachbaihat[i].duongdanyoutube;
        }
    }
}