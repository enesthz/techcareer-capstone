import "../css/city.css";

function City({ src, cityName }) {
  return (
    <div
      className="w-100 position-relative rounded-4 overflow-hidden"
      id="city-main"
    >
      <img
        className="city-image"
        src={process.env.PUBLIC_URL + src}
        alt="city"
      />
      <span className="bg-light p-1 rounded-3 px-2 py-1 fs-5 position-absolute city-span">
        {cityName}
      </span>
    </div>
  );
}

export default City;
