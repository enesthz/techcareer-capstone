import "../css/first-section.css";

function FirstSection() {
  return (
    <div className="container-fluid h-auto p-0 overflow-hidden">
      <div className="row g-0 first-section">
        <div className="col-6 col-lg-7 d-flex flex-column align-items-center justify-content-center h-100">
          <div id="first-section-container-1" className="w-75">
            <p id="first-section-text-1">
              Yemek ya da market, tüm ihtiyaçların kapında!
            </p>
            <div
              className="p-2 bg-white border rounded-4 d-flex align-items-center gap-3 shadow-sm"
              id="first-section-input-container"
            >
              <div className="d-flex bg-white flex-grow-1 align-items-center border rounded-3 px-2 w-100 ">
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Adresini Belirle veya Seç"
                />
                <div className="d-flex gap-1">
                  <svg
                    fill="#ea004b"
                    aria-hidden="true"
                    focusable="false"
                    class="fl-none"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 2C12.4142 2 12.75 2.33579 12.75 2.75L12.7506 3.67925C12.7507 3.88008 12.8998 4.04968 13.0989 4.07562C13.1524 4.08259 13.1986 4.08909 13.2375 4.09514C16.6725 4.62856 19.3848 7.34731 19.9084 10.7855C19.9135 10.8188 19.9189 10.8575 19.9247 10.9019C19.9506 11.1011 20.1204 11.2502 20.3214 11.2502L21.25 11.25C21.6642 11.25 22 11.5858 22 12C22 12.4142 21.6642 12.75 21.25 12.75L20.3212 12.7506C20.1205 12.7507 19.951 12.8995 19.9249 13.0985C19.9211 13.1273 19.9175 13.1532 19.9141 13.1762C19.4013 16.6567 16.647 19.4078 13.1649 19.9158C13.145 19.9187 13.1228 19.9218 13.0984 19.925C12.8995 19.9511 12.7507 20.1206 12.7506 20.3213L12.75 21.25C12.75 21.6642 12.4142 22 12 22C11.5858 22 11.25 21.6642 11.25 21.25L11.2502 20.3213C11.2502 20.1203 11.1011 19.9505 10.9018 19.9246C10.8535 19.9183 10.8115 19.9124 10.7758 19.9069C7.33814 19.379 4.62167 16.6629 4.09327 13.2254C4.08776 13.1896 4.08184 13.1474 4.07552 13.0989C4.04958 12.8997 3.87997 12.7507 3.67912 12.7506L2.75 12.75C2.33579 12.75 2 12.4142 2 12C2 11.5858 2.33579 11.25 2.75 11.25L3.67818 11.2502C3.87895 11.2502 4.04865 11.1015 4.07487 10.9024C4.07777 10.8805 4.08053 10.8604 4.08317 10.8422C4.58738 7.36412 7.32923 4.61075 10.8016 4.08916C10.8307 4.08479 10.8642 4.08013 10.902 4.07519C11.1012 4.04909 11.2502 3.87936 11.2502 3.67848L11.25 2.75C11.25 2.33579 11.5858 2 12 2ZM12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5ZM12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8ZM12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5Z"
                    ></path>
                  </svg>
                  <p className="text-nowrap text-primary fw-semibold m-0">
                    Konumumu Bul
                  </p>
                </div>
              </div>
              <button type="button" className="btn btn-primary p-2">
                Keşfet
              </button>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-5 h-100">
          <img
            id="section-1-image"
            className="h-100"
            src={process.env.PUBLIC_URL + "images/first-section.webp"}
            alt="yemeksepeti logo"
          />
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
