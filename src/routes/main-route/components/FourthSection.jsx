import "../css/fourth-section.css";

function FourthSection() {
  return (
    <div className="container-fluid px-3 px-lg-5">
      <p className="fs-2 mb-3">Mobil uygulamamızı indirin</p>
      <div
        id="fourth-section-container-1"
        className="row bg-primary px-3 pt-4 rounded-4"
      >
        <div className="col-12 col-lg-6">
          <p className="text-white fs-5 text-center text-lg-start">
            Yemek ve market ihtiyaçlarının tamamı için hemen indir!
          </p>
          <div className="d-flex gap-4 mb-3">
            <div
              id="fourth-section-qr"
              className="border border-light rounded-2 p-1 d-none d-lg-block"
            >
              <img
                src={process.env.PUBLIC_URL + "images/fourth-section-qr.png"}
                alt="qr"
              />
            </div>
            <p className="text-white text-center text-lg-start">
              Yemek, hızlı market ya da çevredeki esnaflardan tüm ihtiyaçların
              dakikalar içinde kapında. Yemeksepeti’ni indir, sepetini oluşturup
              siparişini ver, online ya da kapıda dilediğin gibi öde.
            </p>
          </div>
          <div
            id="fourth-section-stores"
            className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start mb-4"
          >
            <img
              src={process.env.PUBLIC_URL + "images/apple-store.svg"}
              alt="store"
            />
            <img
              src={process.env.PUBLIC_URL + "images/android-store.svg"}
              alt="store"
            />
            <img
              src={process.env.PUBLIC_URL + "images/huawei-store.svg"}
              alt="store"
            />
          </div>
        </div>
        <div
          id="fourth-section-phone-image"
          className="col-12 col-lg-6 position-relative"
        >
          <img
            className="position-absolute"
            src={process.env.PUBLIC_URL + "images/fourth-section.webp"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
