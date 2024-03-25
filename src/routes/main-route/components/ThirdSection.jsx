import City from "./City";
import { Link } from "react-router-dom";

function ThirdSection() {
  return (
    <div id="third-section-main" className="px-3 px-lg-5">
      <p className="fs-2 mb-3">Türkiye'nin her şehrindeyiz!</p>
      <div className="row gy-3">
        <div className="col-6 col-md-4 col-xl-3">
          <City src={"images/city-ankara.webp"} cityName={"Ankara"} />
        </div>
        <div className="col-6 col-md-4 col-xl-3">
          <City src={"images/city-antalya.webp"} cityName={"Antalya"} />
        </div>
        <div className="col-6 col-md-4 col-xl-3">
          <City src={"images/city-bursa.webp"} cityName={"Bursa"} />
        </div>
        <Link
          to={"/detail-first"}
          className="col-6 col-md-4 col-xl-3 text-decoration-none text-black"
        >
          <City src={"images/city-istanbul.webp"} cityName={"İstanbul"} />
        </Link>
        <div className="col-6 col-md-4 col-xl-3">
          <City src={"images/city-izmir.webp"} cityName={"İzmir"} />
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default ThirdSection;
