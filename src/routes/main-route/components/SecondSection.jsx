import React from "react";
import "../css/second-section.css";

function SecondSection() {
  return (
    <div className="mt-lg-5 position-relative" id="second-section-main">
      <p className="fs-2 mb-3 px-4">
        Restoran veya Mahalle esnafı iş ortağımız olun
      </p>
      <div id="second-section-container-1">
        <img
          className="w-100"
          src={process.env.PUBLIC_URL + "images/second-section.webp"}
          alt=""
        />
      </div>
      <div
        id="second-section-container-2"
        className="rounded-4 shadow py-3 px-3 bg-white "
      >
        <p className="fs-4">
          Hemen katılın, Yemeksepeti ile satışlarınızı katlamaya başlayın
        </p>
        <p className="">
          Binlerce yeni kullanıcıya ulaşabilmek ister misiniz? Sadece kendi
          semtinizdekiler değil, artık çevre semtlerdeki binlerce kullanıcı da
          işletmenizden sipariş verebilecek. Bir ev, bir plaza, bir işyeri ya da
          üniversite kampüsü, hizmet vermek istediğiniz kim varsa artık
          müşteriniz.
        </p>
        <p>
          Gayet basit! Menünüzü listeliyoruz ve sipariş bilgilerini size
          ulaştırıyoruz. Sipariş teslimatını dilerseniz kendiniz
          yapabiliyorsunuz, dilerseniz Yemeksepeti sizin adınıza kullanıcıya
          ulaştırıyor.
        </p>
        <p>
          Hemen ailemize katılabilir ve muhteşem avantajlara sahip iş
          ortaklarımızdan biri olabilirsiniz.
        </p>
        <button type="button" className="btn btn-primary p-2">
          Başlayalım
        </button>
      </div>
    </div>
  );
}

export default SecondSection;
