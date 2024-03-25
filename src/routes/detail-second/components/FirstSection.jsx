import styles from "../css/first-section.module.css";

function FirstSection() {
  return (
    <div
      className={
        styles["first-section-main"] + " container-fluid px-5 border-bottom"
      }
    >
      <div className="row g-0 py-4 gap-3">
        <div
          className={
            styles["first-section-logo"] + " col-4 overflow-hidden rounded-4"
          }
        >
          <img src={process.env.PUBLIC_URL + "images/mc-logo-d2.webp"} alt="" />
        </div>
        <div
          className={
            styles["first-section-info"] +
            " col-8 d-flex flex-column pt-1 justify-content-center gap-2"
          }
        >
          <p className="m-0 text-secondary">Express Teslimat</p>
          <h2 className="m-0">McDonald's</h2>
          <div className="d-flex gap-2">
            <div
              className={
                styles["sub-info"] +
                " d-none d-lg-flex rounded-4 border p-1 fw-semibold"
              }
            >
              <svg
                style={{ width: "16px", flexShrink: "0" }}
                fill="#ea004b"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="IcTimelineOnthewayYemekSm"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2m2.208 3.29a.366.366 0 0 1-.005.42 59.264 59.264 0 0 0-.985 1.495 11.595 11.595 0 0 0-1.521 3.685c-.058.252-.246.35-.466.392a.843.843 0 0 1-.687-.155.528.528 0 0 1-.224-.404c-.022-.421.074-.822.232-1.205.153-.366.323-.725.494-1.083l.075-.157c.04-.086.035-.133-.024-.218a4.24 4.24 0 0 1-.395-.677 8.977 8.977 0 0 1-.59-1.826 3.921 3.921 0 0 1-.048-.32c-.033-.295.061-.404.408-.404.298.002.567.126.778.333a.726.726 0 0 1 .174.327c.046.184.108.446.169.703.096.407.189.803.213.866l.31-.53.285-.485.201-.34c.146-.246.292-.492.43-.743.17-.305.384-.32.669-.174.216.11.383.288.507.5"
                  clip-rule="evenodd"
                />
              </svg>
              <p className={styles["sub-info"] + " m-0 flex-shrink-1"}>
                TESLİMAT
              </p>
            </div>
            <span
              className={
                styles["sub-info"] +
                " d-none d-lg-inline-block rounded-4 border p-1 fw-semibold bg-primary text-white"
              }
            >
              %45 İndirim
            </span>
            <div className={"" + " d-flex gap-1 align-items-center"}>
              <svg
                className="flex-shrink-0"
                width={"16px"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="IcMinimumDeliveryFee"
              >
                <path
                  d="M5.736 15.129a2.286 2.286 0 1 0 0 4.571 2.286 2.286 0 0 0 0-4.571M1.95 17.415a3.786 3.786 0 1 1 7.571 0 3.786 3.786 0 0 1-7.571 0m16.276-2.286a2.286 2.286 0 1 0 0 4.571 2.286 2.286 0 0 0 0-4.571m-3.786 2.286a3.786 3.786 0 1 1 7.571 0 3.786 3.786 0 0 1-7.571 0"
                  clip-rule="evenodd"
                />
                <path d="M15.31 2.9a2.051 2.051 0 1 0 0 4.102 2.051 2.051 0 0 0 0-4.102M4 5.4a1.75 1.75 0 0 0-1.75 1.75v3.1c0 .966.784 1.75 1.75 1.75h3.1a1.75 1.75 0 0 0 1.75-1.75v-3.1A1.75 1.75 0 0 0 7.1 5.4z" />
                <path
                  d="M12.063 7.982a1.4 1.4 0 0 1 2.426 1.4l-2.494 4.32a1.4 1.4 0 1 1-2.426-1.4z"
                  clip-rule="evenodd"
                />
                <path d="M19.254 10.446a.75.75 0 0 1 .18 1.49h-.007l-.014.002-.052.006a12.293 12.293 0 0 1-.79.06c-.462.022-1.1.027-1.607-.08-1.178-.247-2.157-1.143-2.789-1.857a10.778 10.778 0 0 1-1.048-1.405l-.017-.027-.004-.008-.002-.002v-.002a.75.75 0 0 1 1.29-.763l.002.003.01.016.045.071a9.29 9.29 0 0 0 .847 1.122c.588.664 1.294 1.242 1.975 1.385.305.064.78.07 1.227.049a12.228 12.228 0 0 0 .7-.054l.042-.004.01-.002z" />
                <path
                  d="M9.749 12.991a.75.75 0 0 1 1.06-.042l2.651 2.45a.75.75 0 0 1 .17.872l-2.013 4.24a.75.75 0 0 1-1.355-.643l1.775-3.742-2.246-2.075a.75.75 0 0 1-.042-1.06"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="fw-semibold">Ücretsiz Gönderim</span>
              <svg
                className="flex-shrink-0"
                width={"16px"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="IcMinimumCartSm"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.397 4.55a.432.432 0 0 1-.403-.303 3.41 3.41 0 0 0-.736-1.25A3.037 3.037 0 0 0 8.031 2c-.835 0-1.637.358-2.227.996a3.407 3.407 0 0 0-.736 1.25.432.432 0 0 1-.402.304H3.15a1.15 1.15 0 0 0-1.135 1.336l1.171 7.15A1.15 1.15 0 0 0 4.321 14h7.512a1.15 1.15 0 0 0 1.139-.993l.988-7.15a1.15 1.15 0 0 0-1.14-1.307zm-2.22 0c.15 0 .247-.158.166-.283C9.08 3.858 8.687 3.5 8.03 3.5c-.658 0-1.04.36-1.291.77-.077.126.02.28.167.28zM4.959 12.5a.4.4 0 0 1-.395-.335L3.6 6.282a.2.2 0 0 1 .198-.232h8.391a.2.2 0 0 1 .198.227l-.812 5.878a.4.4 0 0 1-.396.345z"
                  clip-rule="evenodd"
                />
                <path d="M7.083 10.272A.752.752 0 1 1 6.02 9.209L7.51 7.72a.75.75 0 0 1 .54-.22.75.75 0 0 1 .538.22l1.489 1.489a.752.752 0 0 1-1.064 1.063l-.215-.216-.752-.736-.752.742z" />
              </svg>
              <span className="fw-semibold">Minimum Teslimat Tutarı 90TL</span>
            </div>
          </div>
          <div className="d-lg-flex gap-3 align-items-center d-none">
            <div
              className={
                styles["first-section-comments"] +
                " d-flex gap-1 align-items-center"
              }
            >
              <svg
                fill="#ea004b"
                aria-hidden="true"
                focusable="false"
                class="fl-none"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.88486 12.1954L4.88943 13.7787C4.64763 13.9065 4.34857 13.813 4.22145 13.5699C4.17083 13.4731 4.15336 13.3622 4.17175 13.2544L4.74383 9.90101C4.75759 9.82035 4.73099 9.73805 4.6727 9.68092L2.24935 7.30602C2.05373 7.11431 2.04973 6.79947 2.24041 6.6028C2.31634 6.52448 2.41583 6.47352 2.52348 6.45779L5.87247 5.96853C5.95302 5.95676 6.02265 5.9059 6.05868 5.83251L7.55639 2.78147C7.67729 2.53518 7.97388 2.43406 8.21885 2.55561C8.3164 2.60402 8.39535 2.6834 8.4435 2.78147L9.94121 5.83251C9.97723 5.9059 10.0469 5.95676 10.1274 5.96853L13.4764 6.45779C13.7467 6.49728 13.9341 6.74963 13.8948 7.02142C13.8791 7.12965 13.8284 7.22968 13.7505 7.30602L11.3272 9.68092C11.2689 9.73805 11.2423 9.82035 11.2561 9.90101L11.8281 13.2544C11.8743 13.5251 11.6935 13.7822 11.4242 13.8286C11.317 13.8471 11.2067 13.8296 11.1105 13.7787L8.11503 12.1954C8.04298 12.1573 7.95691 12.1573 7.88486 12.1954Z"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.3294 12.4109L7.41756 11.3071C7.78198 11.1145 8.21791 11.1145 8.58233 11.3071L10.6705 12.4109L10.2703 10.065C10.2016 9.66218 10.3341 9.24989 10.6273 8.96256L12.3274 7.2964L9.98286 6.95388C9.57451 6.89422 9.22406 6.63679 9.04353 6.26902L7.99994 4.14309L6.95635 6.26902C6.77582 6.63679 6.42538 6.89422 6.01702 6.95388L3.67247 7.2964L5.37263 8.96256C5.66581 9.24989 5.79831 9.66218 5.72958 10.065L5.3294 12.4109ZM4.88943 13.7745L7.88486 12.1912C7.95691 12.1532 8.04298 12.1532 8.11503 12.1912L11.1105 13.7745C11.2067 13.8254 11.317 13.843 11.4242 13.8245C11.6935 13.7781 11.8743 13.521 11.8281 13.2503L11.2561 9.89686C11.2423 9.8162 11.2689 9.7339 11.3272 9.67677L13.7505 7.30187C13.8284 7.22553 13.8791 7.1255 13.8948 7.01727C13.9341 6.74548 13.7467 6.49313 13.4764 6.45364L10.1274 5.96438C10.0469 5.95261 9.97723 5.90175 9.94121 5.82836L8.4435 2.77732C8.39535 2.67925 8.3164 2.59986 8.21885 2.55146C7.97388 2.42991 7.67729 2.53103 7.55639 2.77732L6.05868 5.82836C6.02265 5.90175 5.95302 5.95261 5.87247 5.96438L2.52348 6.45364C2.41583 6.46937 2.31634 6.52033 2.24041 6.59865C2.04973 6.79532 2.05373 7.11016 2.24935 7.30187L4.6727 9.67677C4.73099 9.7339 4.75759 9.8162 4.74383 9.89686L4.17175 13.2503C4.15336 13.3581 4.17083 13.469 4.22145 13.5658C4.34857 13.8089 4.64763 13.9023 4.88943 13.7745Z"
                ></path>
                <linearGradient id="rating-gradient-one-third">
                  <stop offset="40%" stop-color="var(--colorRating)"></stop>
                  <stop
                    offset="40%"
                    stop-color="var(--colorRating)"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>
                <linearGradient id="rating-gradient-half">
                  <stop offset="50%" stop-color="var(--colorRating)"></stop>
                  <stop
                    offset="50%"
                    stop-color="var(--colorRating)"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>
                <linearGradient id="rating-gradient-two-thirds">
                  <stop offset="60%" stop-color="var(--colorRating)"></stop>
                  <stop
                    offset="60%"
                    stop-color="var(--colorRating)"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>
              </svg>
              <span className="fw-semibold">
                3.4/5<span className="text-secondary">(500)</span>
              </span>
              <span
                className={
                  styles["clickable"] +
                  " text-primary fw-semibold rounded-3 py-1"
                }
              >
                Yorumları Gör
              </span>
            </div>
            <div
              className={styles["clickable"] + " rounded-3 py-1 d-flex gap-1"}
            >
              <svg
                style={{ flexShrink: "0" }}
                width={"24px"}
                fill="#ea004b"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="IcInfo"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18m0 1.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15m0 6a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75M12 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="text-primary fw-semibold">Hakkında</span>
            </div>
          </div>
        </div>
        <div className="col-lg-12 d-flex flex-column d-lg-none row g-0">
          <div className="col-12 d-flex gap-2">
            <div
              className={
                styles["sub-info"] +
                " d-flex rounded-4 border p-1 fw-semibold align-items-center"
              }
            >
              <svg
                style={{ width: "16px", flexShrink: "0" }}
                fill="#ea004b"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="IcTimelineOnthewayYemekSm"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2m2.208 3.29a.366.366 0 0 1-.005.42 59.264 59.264 0 0 0-.985 1.495 11.595 11.595 0 0 0-1.521 3.685c-.058.252-.246.35-.466.392a.843.843 0 0 1-.687-.155.528.528 0 0 1-.224-.404c-.022-.421.074-.822.232-1.205.153-.366.323-.725.494-1.083l.075-.157c.04-.086.035-.133-.024-.218a4.24 4.24 0 0 1-.395-.677 8.977 8.977 0 0 1-.59-1.826 3.921 3.921 0 0 1-.048-.32c-.033-.295.061-.404.408-.404.298.002.567.126.778.333a.726.726 0 0 1 .174.327c.046.184.108.446.169.703.096.407.189.803.213.866l.31-.53.285-.485.201-.34c.146-.246.292-.492.43-.743.17-.305.384-.32.669-.174.216.11.383.288.507.5"
                  clip-rule="evenodd"
                />
              </svg>
              <p className={styles["sub-info"] + " m-0 flex-shrink-1"}>
                TESLİMAT
              </p>
            </div>
            <span
              className={
                styles["sub-info"] +
                " d-inline-block rounded-4 border p-1 fw-semibold bg-primary text-white"
              }
            >
              %45 İndirim
            </span>
          </div>
          <div className="col-12 d-flex gap-3 align-items-center">
            {" "}
            <div
              className={
                styles["first-section-comments"] +
                " d-flex gap-1 align-items-center"
              }
            >
              <svg
                fill="#ea004b"
                aria-hidden="true"
                focusable="false"
                class="fl-none"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.88486 12.1954L4.88943 13.7787C4.64763 13.9065 4.34857 13.813 4.22145 13.5699C4.17083 13.4731 4.15336 13.3622 4.17175 13.2544L4.74383 9.90101C4.75759 9.82035 4.73099 9.73805 4.6727 9.68092L2.24935 7.30602C2.05373 7.11431 2.04973 6.79947 2.24041 6.6028C2.31634 6.52448 2.41583 6.47352 2.52348 6.45779L5.87247 5.96853C5.95302 5.95676 6.02265 5.9059 6.05868 5.83251L7.55639 2.78147C7.67729 2.53518 7.97388 2.43406 8.21885 2.55561C8.3164 2.60402 8.39535 2.6834 8.4435 2.78147L9.94121 5.83251C9.97723 5.9059 10.0469 5.95676 10.1274 5.96853L13.4764 6.45779C13.7467 6.49728 13.9341 6.74963 13.8948 7.02142C13.8791 7.12965 13.8284 7.22968 13.7505 7.30602L11.3272 9.68092C11.2689 9.73805 11.2423 9.82035 11.2561 9.90101L11.8281 13.2544C11.8743 13.5251 11.6935 13.7822 11.4242 13.8286C11.317 13.8471 11.2067 13.8296 11.1105 13.7787L8.11503 12.1954C8.04298 12.1573 7.95691 12.1573 7.88486 12.1954Z"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.3294 12.4109L7.41756 11.3071C7.78198 11.1145 8.21791 11.1145 8.58233 11.3071L10.6705 12.4109L10.2703 10.065C10.2016 9.66218 10.3341 9.24989 10.6273 8.96256L12.3274 7.2964L9.98286 6.95388C9.57451 6.89422 9.22406 6.63679 9.04353 6.26902L7.99994 4.14309L6.95635 6.26902C6.77582 6.63679 6.42538 6.89422 6.01702 6.95388L3.67247 7.2964L5.37263 8.96256C5.66581 9.24989 5.79831 9.66218 5.72958 10.065L5.3294 12.4109ZM4.88943 13.7745L7.88486 12.1912C7.95691 12.1532 8.04298 12.1532 8.11503 12.1912L11.1105 13.7745C11.2067 13.8254 11.317 13.843 11.4242 13.8245C11.6935 13.7781 11.8743 13.521 11.8281 13.2503L11.2561 9.89686C11.2423 9.8162 11.2689 9.7339 11.3272 9.67677L13.7505 7.30187C13.8284 7.22553 13.8791 7.1255 13.8948 7.01727C13.9341 6.74548 13.7467 6.49313 13.4764 6.45364L10.1274 5.96438C10.0469 5.95261 9.97723 5.90175 9.94121 5.82836L8.4435 2.77732C8.39535 2.67925 8.3164 2.59986 8.21885 2.55146C7.97388 2.42991 7.67729 2.53103 7.55639 2.77732L6.05868 5.82836C6.02265 5.90175 5.95302 5.95261 5.87247 5.96438L2.52348 6.45364C2.41583 6.46937 2.31634 6.52033 2.24041 6.59865C2.04973 6.79532 2.05373 7.11016 2.24935 7.30187L4.6727 9.67677C4.73099 9.7339 4.75759 9.8162 4.74383 9.89686L4.17175 13.2503C4.15336 13.3581 4.17083 13.469 4.22145 13.5658C4.34857 13.8089 4.64763 13.9023 4.88943 13.7745Z"
                ></path>
                <linearGradient id="rating-gradient-one-third">
                  <stop offset="40%" stop-color="var(--colorRating)"></stop>
                  <stop
                    offset="40%"
                    stop-color="var(--colorRating)"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>
                <linearGradient id="rating-gradient-half">
                  <stop offset="50%" stop-color="var(--colorRating)"></stop>
                  <stop
                    offset="50%"
                    stop-color="var(--colorRating)"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>
                <linearGradient id="rating-gradient-two-thirds">
                  <stop offset="60%" stop-color="var(--colorRating)"></stop>
                  <stop
                    offset="60%"
                    stop-color="var(--colorRating)"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>
              </svg>
              <span className="fw-semibold">
                3.4/5<span className="text-secondary">(500)</span>
              </span>
              <span
                className={
                  styles["clickable"] +
                  " text-primary fw-semibold rounded-3 py-1"
                }
              >
                Yorumları Gör
              </span>
            </div>
            <div
              className={styles["clickable"] + " rounded-3 py-1 d-flex gap-1"}
            >
              <svg
                style={{ flexShrink: "0" }}
                width={"24px"}
                fill="#ea004b"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="IcInfo"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18m0 1.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15m0 6a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75M12 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="text-primary fw-semibold">Hakkında</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
