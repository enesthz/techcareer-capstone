import { useRef } from "react";
import "./css/header.css";

function Header() {
  const languageSelectorRef = useRef(null);

  function handleLanguageSelectorClick(event) {
    languageSelectorRef.current.classList.toggle("hide");
  }

  function handleLanguageMouseEnter(event) {
    const language = event.target;

    if (languageSelectorRef.current.querySelector(".selected-language")) {
      languageSelectorRef.current
        .querySelector(".selected-language")
        .classList.remove("selected-language");
    }

    language.classList.add("selected-language");
  }

  return (
    <div className="container-fluid px-3 px-lg-5 bg-white shadow header z-2 position-sticky top-0">
      <div className="row g-0 h-100">
        <div className="col-4 d-flex align-items-center d-lg-none">
          <div className="rounded-circle p-2 header-icon">
            <svg
              style={{ fill: "#ea004b" }}
              aria-hidden="true"
              focusable="false"
              class="fl-interaction-primary"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              data-testid="personal-icon"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 11.5C13.933 11.5 15.5 9.933 15.5 8C15.5 6.067 13.933 4.5 12 4.5C10.067 4.5 8.50001 6.067 8.50001 8C8.50001 9.933 10.067 11.5 12 11.5ZM10.0566 14.2045C10.679 14.071 11.33 14.0001 12 14C12.0003 14 12.0007 14 12.001 14C12.6709 14 13.3218 14.0708 13.9442 14.2042C17.1008 14.881 19.5251 17.1688 19.9907 20.0041C20.0802 20.5491 19.6241 21 19.0718 21H4.93021C4.37792 21 3.92177 20.5491 4.01127 20.0041C4.47684 17.1692 6.90063 14.8815 10.0566 14.2045ZM10.1743 12.6562C8.31584 11.9269 7.00001 10.1171 7.00001 8C7.00001 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.1169 15.6845 11.9265 13.8263 12.656C13.2609 12.8779 12.6452 12.9999 12.001 13C12.0007 13 12.0003 13 12 13C11.3557 13 10.7399 12.8781 10.1743 12.6562ZM18.3216 19.5C17.5644 17.2951 15.1351 15.5 12.001 15.5C8.86687 15.5 6.43759 17.2951 5.6804 19.5H18.3216Z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="col-4 col-lg-8 d-flex align-items-center justify-content-center justify-content-lg-start">
          <img
            className="logo"
            src={process.env.PUBLIC_URL + "images/logo.png"}
            alt="yemeksepeti logo"
          />
        </div>
        <div className="col-4 col-lg-4 d-flex justify-content-end gap-3 align-items-center">
          <button
            type="button"
            className="btn btn-outline-primary d-none d-lg-block py-1 px-2"
          >
            Giriş Yap
          </button>
          <button
            type="button"
            className="btn btn-primary d-none d-lg-block py-1 px-2"
          >
            Kayıt Ol
          </button>
          <div
            onClick={handleLanguageSelectorClick}
            className="d-none d-lg-flex gap-1 p-1 rounded-3 position-relative"
          >
            <svg
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
                d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM10.6635 19.3813C9.79267 18.1369 9.11658 16.9361 8.65036 15.75H5.50337C6.58707 17.6234 8.45784 18.9845 10.6635 19.3813ZM4.84335 14.25H8.17237C7.98964 13.4966 7.89523 12.7442 7.8931 11.9853C7.891 11.2379 7.97842 10.4952 8.15242 9.75H4.84335C4.62027 10.4603 4.5 11.2161 4.5 12C4.5 12.7839 4.62027 13.5397 4.84335 14.25ZM5.50337 8.25H8.61663C9.06884 7.07159 9.72906 5.8752 10.586 4.63309C8.41405 5.04747 6.57436 6.39858 5.50337 8.25ZM18.4966 15.75C17.4415 17.574 15.6402 18.9124 13.5102 19.3479C14.3698 18.1154 15.038 16.9255 15.5 15.75H18.4966ZM19.1566 14.25H15.978C16.1608 13.4966 16.2552 12.7442 16.2573 11.9853C16.2594 11.2379 16.172 10.4952 15.998 9.75H19.1566C19.3797 10.4603 19.5 11.2161 19.5 12C19.5 12.7839 19.3797 13.5397 19.1566 14.25ZM18.4966 8.25H15.5338C15.0859 7.08283 14.4339 5.89803 13.5888 4.66862C15.6845 5.12065 17.4545 6.44847 18.4966 8.25ZM12.0752 5.12312C12.8682 6.22942 13.4764 7.26325 13.9116 8.25H10.2388C10.674 7.26325 11.2822 6.22942 12.0752 5.12312ZM9.69994 9.75H14.4504C14.6591 10.5113 14.7593 11.2505 14.7573 11.981C14.7552 12.7258 14.6467 13.4775 14.4269 14.25H9.72354C9.50364 13.4775 9.39519 12.7258 9.3931 11.981C9.39105 11.2505 9.49129 10.5113 9.69994 9.75ZM10.2783 15.75H13.8721C13.4389 16.7093 12.8428 17.7109 12.0752 18.7788C11.3076 17.7109 10.7115 16.7093 10.2783 15.75Z"
              ></path>
            </svg>
            <span className="fw-semibold d-inline-block user-select-none">
              TR
            </span>
            <svg
              style={{ fill: "#ea004b" }}
              aria-hidden="true"
              focusable="false"
              class="fl-interaction-primary"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.5303 8.44352C18.7966 8.70977 18.8208 9.12643 18.603 9.42006L18.5304 9.50418L12.3286 15.7069C12.1728 15.8628 11.9204 15.8632 11.764 15.708L5.47165 9.46235C5.17767 9.17055 5.1759 8.69568 5.4677 8.4017C5.73298 8.13445 6.14955 8.10869 6.44397 8.32545L6.52835 8.39775L11.7602 13.5894C11.9165 13.7446 12.169 13.7441 12.3248 13.5883L17.4696 8.44361C17.7359 8.17732 18.1525 8.15308 18.4462 8.37091L18.5303 8.44352Z"
              ></path>
            </svg>
            <div
              ref={languageSelectorRef}
              className="d-flex flex-column language-selector-menu p-2 rounded-4 hide"
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <div
                onMouseEnter={handleLanguageMouseEnter}
                className="px-2 h-50 d-flex rounded-3 user-select-none fw-semibold default-language justify-content-between"
              >
                Türkçe
                <svg
                  fill="#ea004b"
                  aria-hidden="true"
                  focusable="false"
                  class="fl-interaction-primary"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5ZM16.781 8.71967C17.0465 8.98594 17.0706 9.4026 16.8534 9.69621L16.781 9.78033L10.9281 15.6515C10.7917 15.7884 10.5807 15.8058 10.4253 15.7035L10.3616 15.6515L7.21899 12.4991C6.927 12.2062 6.927 11.7313 7.21899 11.4384C7.48442 11.1722 7.89979 11.1479 8.19248 11.3658L8.27634 11.4384L10.6447 13.8136L15.7237 8.71967C16.0156 8.42678 16.489 8.42678 16.781 8.71967Z"
                  ></path>
                </svg>
              </div>
              <div
                onMouseEnter={handleLanguageMouseEnter}
                className="px-2 h-50 rounded-3 user-select-none fw-semibold"
              >
                English
              </div>
            </div>
          </div>
          <div className="rounded-circle p-2 header-icon">
            <svg
              style={{ fill: "#ea004b" }}
              aria-hidden="true"
              focusable="false"
              class="fl-brand-primary"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.0021 2C14.5418 2 16.4241 3.6512 16.5538 6.15854H19.8491C20.4014 6.15854 20.8491 6.60625 20.8491 7.15854C20.8491 7.20585 20.8457 7.25311 20.8391 7.29996L19.1248 19.1414C19.0544 19.6341 18.6325 20 18.1348 20H5.86942C5.37176 20 4.94984 19.6341 4.87947 19.1414L3.16518 7.29996C3.08707 6.75322 3.46697 6.24669 4.0137 6.16859C4.06055 6.16189 4.10781 6.15854 4.15513 6.15854L7.36129 6.16397C7.49108 3.65663 9.46248 2 12.0021 2ZM17.5607 16.25H6.44235C6.22143 16.25 6.04235 16.4291 6.04235 16.65C6.04235 16.669 6.04369 16.6879 6.04638 16.7067L6.25397 18.1567C6.28217 18.3537 6.45092 18.5 6.64993 18.5H17.3533C17.5523 18.5 17.7211 18.3537 17.7492 18.1566L17.9567 16.7066C17.988 16.488 17.836 16.2853 17.6174 16.254C17.5986 16.2513 17.5797 16.25 17.5607 16.25ZM18.8109 7.65854H5.19233C4.97142 7.65854 4.79233 7.83762 4.79233 8.05854C4.79233 8.32251 4.79367 8.09637 4.79635 8.11511L5.71793 14.4066C5.74609 14.6036 5.91486 14.75 6.11391 14.75H17.8891C18.0882 14.75 18.2569 14.6036 18.2851 14.4066L19.2069 8.11513C19.2381 7.89643 19.0862 7.69381 18.8675 7.66256C18.8487 7.65988 18.8298 7.65854 18.8109 7.65854ZM12.0021 3.40323C10.4163 3.40323 9.15495 4.32251 8.91234 5.80175C8.88507 5.96802 8.98943 6.12701 9.15495 6.15854C9.17377 6.16212 9.19289 6.16392 9.21204 6.1639L14.7134 6.15847C14.8772 6.15843 15.0099 6.02566 15.0099 5.86189C15.0099 5.84361 14.9631 5.82209 15.0049 5.80742C14.655 4.32251 13.5918 3.40323 12.0021 3.40323Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
