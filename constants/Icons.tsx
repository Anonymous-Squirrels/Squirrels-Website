import React from "react";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="50"
      height="37"
      viewBox="0 0 50 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M40.6365 13.8088C40.4683 13.6312 40.623 13.3388 40.8636 13.3808C41.6076 13.5127 42.2989 13.4831 42.9643 13.0637C44.0153 12.4014 44.2105 11.3924 44.0656 10.2674C43.9306 9.22142 43.3191 8.54793 42.3148 8.27287C40.9434 7.89788 39.6985 8.12608 38.747 9.25596C37.7636 10.4241 37.5794 11.7698 38.1147 13.1846C38.6218 14.5279 39.5966 15.5369 40.6402 16.4707C42.3333 17.9866 43.8446 19.6185 44.6893 21.8006C46.8587 27.3969 44.0951 33.3744 38.4302 35.2777C37.1595 35.7045 35.8642 35.9648 34.5248 35.9882C34.4621 35.9882 34.3995 35.9882 34.3381 35.9845C34.1012 35.9709 34.014 35.6749 34.1994 35.5256C34.1994 35.5256 34.2019 35.5232 34.2031 35.5232C37.1325 33.1253 37.4259 28.8043 34.8501 26.0129C33.8286 24.9053 32.5211 24.1331 31.4406 23.1031C27.933 19.7579 26.7789 15.5665 27.3621 10.8644C27.9096 6.44977 30.0005 2.97255 34.1945 1.20126C38.4462 -0.593473 42.6758 -0.499727 46.542 2.3188C49.6568 4.58966 50.844 9.0105 49.3732 12.3496C47.8176 15.881 43.2577 16.5706 40.6377 13.8088H40.6365Z"
        fill="white"
      />
      <path
        d="M27.47 27.355C25.9415 27.1564 24.435 28.1876 23.8433 29.7332C23.6763 30.1711 23.5769 30.6373 23.4762 31.0974C23.4172 31.3675 23.3694 31.6167 23.0698 31.7166C22.7444 31.5464 22.7518 31.2442 22.7309 30.9654C22.6278 29.616 22.6659 28.2295 23.2466 27.0306C23.8371 25.8119 24.4154 24.5944 24.9556 23.3511C25.3129 22.5283 26.1416 22.2446 26.8672 22.6677C28.7592 23.7692 30.9249 24.3083 32.7027 25.633C35.7279 27.8891 36.3688 31.5772 34.1552 34.249C33.0895 35.5355 31.7217 36.2263 30.0373 36.23C27.9305 36.2349 25.8224 36.2337 23.7156 36.2337C23.3644 36.2337 23.0047 36.2522 22.8083 35.7267C23.6051 34.2169 25.0281 35.1568 26.2472 34.9101C24.9458 33.7778 23.8899 32.5246 24.1625 30.6657C24.4265 28.866 25.4602 27.8052 27.47 27.3538V27.355Z"
        fill="white"
      />
      <path
        d="M13.2437 34.8865C12.7342 34.6854 12.345 34.4437 12.0762 34.1587C11.8085 33.875 11.6735 33.5494 11.6735 33.1806C11.6735 32.9475 11.7017 32.7378 11.7545 32.554C11.8085 32.3702 11.8895 32.1617 11.9964 31.9274L14.8681 25.2603C14.8951 25.1974 14.9565 25.1567 15.024 25.1567H16.873C16.927 25.1567 16.9687 25.1111 16.9663 25.0568C16.9626 24.9606 16.9626 24.8607 16.9687 24.7558C16.9724 24.7016 16.9295 24.6547 16.8754 24.6547H15.3874C15.2646 24.6547 15.1824 24.5289 15.2315 24.4154L23.1529 6.0265C23.1726 5.98086 23.2168 5.95249 23.2659 5.95249C23.315 5.95249 23.3592 5.98086 23.3788 6.0265L25.9547 11.8979C25.9718 11.9374 26.0283 11.9275 26.032 11.8844C26.0541 11.5562 26.1265 10.8852 26.1499 10.6694C26.1548 10.625 26.1474 10.5793 26.1302 10.5386L21.7987 0.710151C21.7115 0.512792 21.5176 0.385742 21.3027 0.385742H21.2008C20.9872 0.385742 20.7944 0.511558 20.706 0.70645L6.52059 32.2789C6.19891 32.8808 5.86374 33.3989 5.51383 33.8331C5.16515 34.2685 4.74894 34.6028 4.26643 34.8359C3.78393 35.0703 3.19338 35.2368 2.49479 35.338C1.83303 35.4329 1.04973 35.4835 0.146102 35.4884C0.0650708 35.4884 0 35.5538 0 35.6352V35.8437C0 35.9251 0.0650708 35.9905 0.146102 35.9905H17.2695C17.3358 35.9905 17.3899 35.9362 17.3899 35.8696V35.6081C17.3899 35.5415 17.3358 35.4884 17.2695 35.4884C16.4592 35.4835 15.7201 35.4342 15.0547 35.338C14.3573 35.238 13.7545 35.0876 13.2437 34.8865Z"
        fill="white"
      />
      <path
        d="M40.323 35.9892H42.35C42.3918 35.9892 42.4261 35.9547 42.4261 35.9127V35.5649C42.4261 35.523 42.3918 35.4884 42.35 35.4884C41.9093 35.486 41.4918 35.465 41.0953 35.4267C41.0793 35.4255 41.0646 35.4292 41.0511 35.4366C40.803 35.5809 40.5489 35.7179 40.2898 35.8449C40.2174 35.8807 40.2432 35.9905 40.3242 35.9905L40.323 35.9892Z"
        fill="white"
      />
      <path
        d="M22.0199 19.7233C22.6129 18.2222 23.325 17.2613 24.177 16.7963C24.3452 16.8481 24.3796 16.9936 24.3845 17.1367C24.4287 18.4565 24.8191 19.6666 25.4625 20.815C25.6982 21.2356 25.6405 21.75 25.2292 22.0386C24.3501 22.6578 24.0678 23.5879 23.8075 24.5401C23.5349 25.538 22.9321 26.0475 21.8738 26.0845C21.0782 26.1116 20.2801 26.1104 19.4846 26.0832C18.4839 26.0487 18.0346 25.4776 18.2384 24.492C18.6963 22.2791 19.9032 20.6522 22.0199 19.7246V19.7233Z"
        fill="white"
      />
    </svg>
  );
}

export function GridFill({ className }: { className?: string }) {
  return (
    <svg
      width="338"
      height="461"
      viewBox="0 0 338 461"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_f_25_2383)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M175.518 418.617H175.466C173.275 418.617 171.353 419.486 169.753 420.735C169.444 420.979 169.059 421.121 168.782 421.398C167.246 422.943 166.359 425.055 166.167 427.359C166.147 427.617 166.019 427.842 166.019 428.106C166.019 429.278 166.295 430.372 166.687 431.402C166.816 431.737 166.976 432.027 167.137 432.342C167.484 433.018 167.902 433.642 168.403 434.215C168.647 434.499 168.866 434.788 169.142 435.039C169.901 435.728 170.736 436.333 171.687 436.752H171.694C172.87 437.273 174.155 437.589 175.518 437.589C179.74 437.589 183.191 434.782 184.419 430.952C184.747 430.076 184.971 429.162 184.978 428.158C184.978 428.138 184.991 428.125 184.991 428.106C184.991 422.859 180.749 418.617 175.518 418.617ZM308.042 305.499C307.123 305.113 306.101 304.965 305.054 304.894C304.867 304.888 304.72 304.785 304.527 304.785H304.475C299.244 304.785 295.028 309.033 295.028 314.277C295.028 315.552 295.298 316.755 295.754 317.849C296.076 318.634 296.603 319.265 297.097 319.928C297.303 320.179 297.419 320.488 297.637 320.719C299.212 322.393 301.384 323.422 303.813 323.615C303.826 323.615 303.839 323.622 303.852 323.628V323.622C304.083 323.641 304.289 323.757 304.527 323.757C309.758 323.757 314 319.51 314 314.277C314 310.287 311.526 306.902 308.042 305.499ZM-17.9966 137.832H-18.048C-23.2794 137.832 -27.4954 142.079 -27.4954 147.318C-27.4954 152.55 -23.228 156.804 -17.9966 156.804C-12.7715 156.804 -8.52342 152.55 -8.52342 147.318C-8.52342 142.079 -12.7715 137.832 -17.9966 137.832ZM-17.9966 361.701H-18.048C-23.2794 361.701 -27.4954 365.943 -27.4954 371.19C-27.4954 376.424 -23.228 380.673 -17.9966 380.673C-12.7715 380.673 -8.52342 376.424 -8.52342 371.19C-8.52342 365.943 -12.7715 361.701 -17.9966 361.701ZM46.5082 213.72C51.7397 213.72 55.9814 209.466 55.9814 204.234C55.9814 198.989 51.7397 194.748 46.5082 194.748H46.4632C41.2254 194.748 37.0094 198.989 37.0094 204.234C37.0094 209.466 41.2768 213.72 46.5082 213.72ZM-17.9966 80.9159H-18.048C-23.2794 80.9159 -27.4954 85.1634 -27.4954 90.4019C-27.4954 95.6404 -23.228 99.8879 -17.9966 99.8879C-12.7715 99.8879 -8.52342 95.6404 -8.52342 90.4019C-8.52342 85.1634 -12.7715 80.9159 -17.9966 80.9159ZM-17.9966 247.869H-18.048C-23.2794 247.869 -27.4954 252.117 -27.4954 257.355C-27.4954 262.594 -23.228 266.841 -17.9966 266.841C-12.7715 266.841 -8.52342 262.594 -8.52342 257.355C-8.52342 252.117 -12.7715 247.869 -17.9966 247.869ZM-17.9966 304.785H-18.048C-23.2794 304.785 -27.4954 309.033 -27.4954 314.277C-27.4954 319.51 -23.228 323.757 -17.9966 323.757C-12.7715 323.757 -8.52342 319.51 -8.52342 314.277C-8.52342 309.033 -12.7715 304.785 -17.9966 304.785ZM46.5082 99.8879C51.7397 99.8879 55.9814 95.6404 55.9814 90.4019C55.9814 85.1634 51.7397 80.9159 46.5082 80.9159H46.4632C41.2254 80.9159 37.0094 85.1634 37.0094 90.4019C37.0094 95.6404 41.2768 99.8879 46.5082 99.8879ZM46.5082 156.804C51.7397 156.804 55.9814 152.55 55.9814 147.318C55.9814 142.079 51.7397 137.832 46.5082 137.832H46.4632C41.2254 137.832 37.0094 142.079 37.0094 147.318C37.0094 152.55 41.2768 156.804 46.5082 156.804ZM46.5082 42.972C51.7397 42.972 55.9814 38.7245 55.9814 33.486C55.9814 28.2475 51.7397 24 46.5082 24H46.4632C41.2254 24 37.0094 28.2475 37.0094 33.486C37.0094 38.7245 41.2768 42.972 46.5082 42.972ZM-17.9966 194.748H-18.048C-23.2794 194.748 -27.4954 198.989 -27.4954 204.234C-27.4954 209.466 -23.228 213.72 -17.9966 213.72C-12.7715 213.72 -8.52342 209.466 -8.52342 204.234C-8.52342 198.989 -12.7715 194.748 -17.9966 194.748ZM-82.4947 247.869H-82.5526C-87.784 247.869 -92 252.117 -92 257.355C-92 262.594 -87.7262 266.841 -82.4947 266.841C-77.2633 266.841 -73.028 262.594 -73.028 257.355C-73.028 252.117 -77.2633 247.869 -82.4947 247.869ZM-82.4947 194.748H-82.5526C-87.784 194.748 -92 198.989 -92 204.234C-92 209.466 -87.7262 213.72 -82.4947 213.72C-77.2633 213.72 -73.028 209.466 -73.028 204.234C-73.028 198.989 -77.2633 194.748 -82.4947 194.748ZM-82.4979 304.785H-82.5558C-83.7452 304.785 -84.8574 305.055 -85.8925 305.467C-86.4196 305.667 -86.8568 305.989 -87.3326 306.278C-87.7311 306.529 -88.1362 306.754 -88.4962 307.07C-89.1198 307.578 -89.6084 308.17 -90.0842 308.827C-90.1742 308.962 -90.2642 309.084 -90.3542 309.232C-90.8685 310.03 -91.2478 310.867 -91.505 311.806L-91.5114 311.813V311.819C-91.73 312.617 -92 313.402 -92 314.277C-92 318.01 -89.782 321.17 -86.6382 322.714V322.721H-86.6318C-85.3781 323.332 -84.028 323.738 -82.5494 323.744C-82.5301 323.744 -82.5172 323.757 -82.4979 323.757C-77.2647 323.757 -73.028 319.51 -73.028 314.277C-73.028 312.965 -73.2916 311.716 -73.7738 310.583C-75.2075 307.179 -78.5763 304.785 -82.4979 304.785ZM240.022 194.748H239.971C234.739 194.748 230.523 198.989 230.523 204.234C230.523 209.466 234.791 213.72 240.022 213.72C245.254 213.72 249.495 209.466 249.495 204.234C249.495 198.989 245.254 194.748 240.022 194.748ZM-82.4979 137.832H-82.5558C-83.6359 137.832 -84.6324 138.07 -85.571 138.443C-86.4261 138.739 -87.1718 139.183 -87.8919 139.698C-87.8983 139.698 -87.8983 139.698 -87.9047 139.705C-90.3285 141.423 -92 144.113 -92 147.318C-92 147.723 -91.82 148.064 -91.7686 148.463H-91.775C-91.775 148.476 -91.7686 148.483 -91.7621 148.489C-91.4664 150.799 -90.4313 152.839 -88.7791 154.32C-88.5541 154.526 -88.2712 154.641 -88.0333 154.822C-87.384 155.298 -86.7604 155.793 -85.9953 156.096C-84.9217 156.54 -83.7516 156.804 -82.4979 156.804C-78.5763 156.804 -75.2075 154.416 -73.7738 151.005C-73.2916 149.873 -73.028 148.624 -73.028 147.318C-73.028 146.011 -73.2916 144.763 -73.7738 143.63C-75.2075 140.219 -78.5763 137.832 -82.4979 137.832ZM240.022 247.869H239.971C234.739 247.869 230.523 252.117 230.523 257.355C230.523 262.594 234.791 266.841 240.022 266.841C245.254 266.841 249.495 262.594 249.495 257.355C249.495 252.117 245.254 247.869 240.022 247.869ZM240.022 137.832H239.971C234.739 137.832 230.523 142.079 230.523 147.318C230.523 152.55 234.791 156.804 240.022 156.804C245.254 156.804 249.495 152.55 249.495 147.318C249.495 142.079 245.254 137.832 240.022 137.832ZM240.022 361.701H239.971C234.739 361.701 230.523 365.943 230.523 371.19C230.523 376.424 234.791 380.673 240.022 380.673C245.254 380.673 249.495 376.424 249.495 371.19C249.495 365.943 245.254 361.701 240.022 361.701ZM240.022 304.785H239.971C234.739 304.785 230.523 309.033 230.523 314.277C230.523 319.51 234.791 323.757 240.022 323.757C245.254 323.757 249.495 319.51 249.495 314.277C249.495 309.033 245.254 304.785 240.022 304.785ZM175.521 42.972C180.75 42.972 184.991 38.7245 184.991 33.486C184.991 33.486 184.984 33.4795 184.984 33.4731C184.984 31.935 184.535 30.5385 183.879 29.2514C183.815 29.1291 183.732 29.039 183.661 28.9232C182.973 27.7069 182.035 26.6965 180.898 25.8856H180.892C179.343 24.7851 177.557 24 175.521 24H175.469C170.24 24 166.019 28.2475 166.019 33.486C166.019 38.7245 170.291 42.972 175.521 42.972ZM240.022 80.9159H239.971C234.739 80.9159 230.523 85.1634 230.523 90.4019C230.523 95.6404 234.791 99.8879 240.022 99.8879C245.254 99.8879 249.495 95.6404 249.495 90.4019C249.495 85.1634 245.254 80.9159 240.022 80.9159ZM175.518 137.832H175.466C170.235 137.832 166.019 142.079 166.019 147.318C166.019 152.55 170.286 156.804 175.518 156.804C180.749 156.804 184.991 152.55 184.991 147.318C184.991 142.079 180.749 137.832 175.518 137.832ZM175.518 304.785H175.466C170.235 304.785 166.019 309.033 166.019 314.277C166.019 319.51 170.286 323.757 175.518 323.757C180.749 323.757 184.991 319.51 184.991 314.277C184.991 309.033 180.749 304.785 175.518 304.785ZM175.518 247.869H175.466C170.235 247.869 166.019 252.117 166.019 257.355C166.019 262.594 170.286 266.841 175.518 266.841C180.749 266.841 184.991 262.594 184.991 257.355C184.991 252.117 180.749 247.869 175.518 247.869ZM175.518 194.748H175.466C170.235 194.748 166.019 198.989 166.019 204.234C166.019 209.466 170.286 213.72 175.518 213.72C180.749 213.72 184.991 209.466 184.991 204.234C184.991 198.989 180.749 194.748 175.518 194.748ZM175.518 361.701H175.466C170.235 361.701 166.019 365.943 166.019 371.19C166.019 376.424 170.286 380.673 175.518 380.673C180.749 380.673 184.991 376.424 184.991 371.19C184.991 365.943 180.749 361.701 175.518 361.701ZM46.5082 266.841C51.7397 266.841 55.9814 262.594 55.9814 257.355C55.9814 252.117 51.7397 247.869 46.5082 247.869H46.4632C41.2254 247.869 37.0094 252.117 37.0094 257.355C37.0094 262.594 41.2768 266.841 46.5082 266.841ZM53.205 421.398C52.9222 421.115 52.5366 420.973 52.2217 420.735C50.6214 419.486 48.6998 418.617 46.5082 418.617H46.4568C41.2254 418.617 37.0094 422.859 37.0094 428.106C37.0094 430.681 38.057 432.999 39.7279 434.711C39.7344 434.718 39.7344 434.724 39.7408 434.724C41.4632 436.488 43.8539 437.589 46.5082 437.589C47.0095 437.589 47.4401 437.383 47.9221 437.306C47.9285 437.306 47.935 437.299 47.9414 437.299C50.1779 436.951 52.1317 435.921 53.552 434.293C53.7834 434.042 53.9183 433.733 54.1176 433.456C54.5482 432.844 55.0045 432.265 55.2872 431.563C55.7114 430.514 55.9621 429.368 55.9685 428.145C55.9685 428.132 55.9814 428.125 55.9814 428.106C55.9814 425.698 55.0109 423.561 53.5392 421.887C53.4042 421.733 53.3464 421.533 53.205 421.398ZM300.833 156.057C301.971 156.54 303.219 156.804 304.53 156.804C305.912 156.804 307.204 156.476 308.387 155.942C308.426 155.922 308.452 155.89 308.49 155.871C309.648 155.331 310.644 154.571 311.486 153.632C313.016 151.953 314 149.766 314 147.321C314 142.084 309.757 137.832 304.53 137.832H304.479C299.245 137.832 295.028 142.084 295.028 147.321C295.028 151.245 297.426 154.616 300.833 156.057ZM304.53 213.72C309.757 213.72 314 209.466 314 204.234C314 198.989 309.757 194.748 304.53 194.748H304.479C299.245 194.748 295.028 198.989 295.028 204.234C295.028 209.466 299.29 213.72 304.53 213.72ZM304.53 266.841C309.757 266.841 314 262.594 314 257.355C314 252.117 309.757 247.869 304.53 247.869H304.479C299.245 247.869 295.028 252.117 295.028 257.355C295.028 262.594 299.29 266.841 304.53 266.841ZM111.013 137.832H110.968C105.736 137.832 101.514 142.079 101.514 147.318C101.514 152.55 105.781 156.804 111.013 156.804C116.244 156.804 120.486 152.55 120.486 147.318C120.486 142.079 116.244 137.832 111.013 137.832ZM111.013 80.9159H110.968C105.736 80.9159 101.514 85.1634 101.514 90.4019C101.514 95.6404 105.781 99.8879 111.013 99.8879C116.244 99.8879 120.486 95.6404 120.486 90.4019C120.486 85.1634 116.244 80.9159 111.013 80.9159ZM111.013 24H110.968C105.736 24 101.514 28.2475 101.514 33.486C101.514 38.7245 105.781 42.972 111.013 42.972C116.244 42.972 120.486 38.7245 120.486 33.486C120.486 28.2475 116.244 24 111.013 24ZM46.5082 380.673C51.7397 380.673 55.9814 376.424 55.9814 371.19C55.9814 365.943 51.7397 361.701 46.5082 361.701H46.4632C41.2254 361.701 37.0094 365.943 37.0094 371.19C37.0094 376.424 41.2768 380.673 46.5082 380.673ZM46.5082 323.757C51.7397 323.757 55.9814 319.51 55.9814 314.277C55.9814 309.033 51.7397 304.785 46.5082 304.785H46.4632C41.2254 304.785 37.0094 309.033 37.0094 314.277C37.0094 319.51 41.2768 323.757 46.5082 323.757ZM111.013 194.748H110.968C105.736 194.748 101.514 198.989 101.514 204.234C101.514 209.466 105.781 213.72 111.013 213.72C116.244 213.72 120.486 209.466 120.486 204.234C120.486 198.989 116.244 194.748 111.013 194.748ZM175.518 80.9159H175.466C170.235 80.9159 166.019 85.1634 166.019 90.4019C166.019 95.6404 170.286 99.8879 175.518 99.8879C180.749 99.8879 184.991 95.6404 184.991 90.4019C184.991 85.1634 180.749 80.9159 175.518 80.9159ZM111.013 361.701H110.968C105.736 361.701 101.514 365.943 101.514 371.19C101.514 376.424 105.781 380.673 111.013 380.673C116.244 380.673 120.486 376.424 120.486 371.19C120.486 365.943 116.244 361.701 111.013 361.701ZM111.013 418.617H110.968C105.736 418.617 101.514 422.866 101.514 428.106C101.514 433.346 105.781 437.589 111.013 437.589C116.244 437.589 120.486 433.346 120.486 428.106C120.486 422.866 116.244 418.617 111.013 418.617ZM111.013 304.785H110.968C105.736 304.785 101.514 309.033 101.514 314.277C101.514 319.51 105.781 323.757 111.013 323.757C116.244 323.757 120.486 319.51 120.486 314.277C120.486 309.033 116.244 304.785 111.013 304.785ZM111.013 247.869H110.968C105.736 247.869 101.514 252.117 101.514 257.355C101.514 262.594 105.781 266.841 111.013 266.841C116.244 266.841 120.486 262.594 120.486 257.355C120.486 252.117 116.244 247.869 111.013 247.869Z"
          fill="#9747FF"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_25_2383"
          x="-115.4"
          y="0.6"
          width="452.8"
          height="460.389"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="11.7"
            result="effect1_foregroundBlur_25_2383"
          />
        </filter>
      </defs>
    </svg>
  );
}

export function Shade1({ className }: { className?: string }) {
  return (
    <svg
      width="717"
      height="883"
      viewBox="0 0 717 883"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_f_18_65)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M274.951 478.098C320.594 525.866 391.506 548.972 410.4 612.281C432.444 686.143 425.859 770.208 380.796 832.746C333.703 898.1 254.981 939.41 174.427 939.758C99.4038 940.083 32.6647 892.602 -14.7467 834.457C-53.8514 786.5 -39.3862 720.387 -53.563 660.154C-71.9911 581.858 -141.434 508.241 -108.833 434.708C-72.668 353.134 19.3138 285.756 107.98 295.78C193.106 305.404 215.768 416.159 274.951 478.098Z"
          fill="#7B61FF"
          fillOpacity="0.2"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_18_65"
          x="-411.418"
          y="0.788773"
          width="1128.04"
          height="1232.97"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="147"
            result="effect1_foregroundBlur_18_65"
          />
        </filter>
      </defs>
    </svg>
  );
}

export function Shade2({ className }: { className?: string }) {
  return (
    <svg
      width="642"
      height="952"
      viewBox="0 0 642 952"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_f_18_66)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M821.003 254.711C837.699 311.978 793.183 363.744 775.985 420.862C752.625 498.441 775.211 604.679 703.995 643.312C632.092 682.318 538.02 636.649 475.544 583.845C423.731 540.054 441.698 459.904 413.818 398.059C380.261 323.623 270.401 268.752 299.026 192.284C327.239 116.919 439.311 129.566 518.865 117.441C578.359 108.374 637.099 107.515 691.89 132.408C747.998 157.899 803.755 195.548 821.003 254.711Z"
          fill="#FFDD9A"
          fillOpacity="0.2"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_18_66"
          x="0.317139"
          y="-182.381"
          width="1118.37"
          height="1134.31"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="147"
            result="effect1_foregroundBlur_18_66"
          />
        </filter>
      </defs>
    </svg>
  );
}

export function Squirrel({ className }: { className?: string }) {
  return (
    <svg
      width="424"
      height="483"
      viewBox="0 0 424 483"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M298.511 184.54C296.274 182.178 298.332 178.29 301.532 178.848C311.426 180.603 320.619 180.21 329.469 174.632C343.445 165.823 346.041 152.405 344.115 137.444C342.319 123.533 334.187 114.577 320.831 110.918C302.593 105.932 286.037 108.966 273.383 123.993C260.304 139.527 257.855 157.424 264.974 176.24C271.717 194.104 284.681 207.523 298.56 219.941C321.076 240.101 341.176 261.804 352.409 290.823C381.261 365.249 344.507 444.743 269.17 470.055C252.271 475.731 235.045 479.192 217.231 479.504C216.399 479.504 215.566 479.504 214.749 479.455C211.598 479.274 210.439 475.337 212.904 473.352L212.953 473.319C251.912 441.43 255.814 383.966 221.558 346.843C207.973 332.112 190.584 321.843 176.216 308.146C129.567 263.658 114.219 207.916 121.975 145.384C129.257 86.6731 157.063 40.4298 212.839 16.8734C269.382 -6.99465 325.632 -5.74794 377.048 31.7356C418.472 61.9357 434.261 120.728 414.7 165.134C394.013 212.099 333.371 221.269 298.527 184.54H298.511Z"
        fill="#7B61FF"
      />
      <path
        d="M123.411 364.691C103.083 362.05 83.0486 375.764 75.1786 396.318C72.958 402.142 71.6355 408.343 70.2966 414.461C69.5128 418.054 68.876 421.367 64.8921 422.696C60.5652 420.432 60.6632 416.413 60.3856 412.706C59.014 394.76 59.5202 376.322 67.2433 360.377C75.0969 344.169 82.7873 327.979 89.9716 311.443C94.723 300.502 105.744 296.729 115.394 302.355C140.555 317.004 169.357 324.173 193 341.791C233.232 371.794 241.755 420.843 212.316 456.374C198.143 473.483 179.954 482.67 157.552 482.719C129.534 482.785 101.499 482.768 73.4805 482.768C68.8108 482.768 64.0267 483.014 61.4142 476.026C72.011 455.947 90.9349 468.447 107.148 465.167C89.841 450.108 75.7991 433.441 79.4238 408.72C82.9343 384.786 96.6823 370.679 123.411 364.675V364.691Z"
        fill="#7B61FF"
      />
      <path
        d="M50.9292 263.198C58.8156 243.234 68.2857 230.455 79.6172 224.271C81.8541 224.96 82.3113 226.896 82.3766 228.798C82.9644 246.351 88.1566 262.443 96.7124 277.716C99.8474 283.31 99.0799 290.15 93.6101 293.989C81.9194 302.223 78.164 314.592 74.7025 327.256C71.0777 340.527 63.0608 347.302 48.9862 347.794C38.4058 348.155 27.7927 348.139 17.2123 347.778C3.90509 347.319 -2.07088 339.723 0.639542 326.616C6.72982 297.187 22.7801 275.55 50.9292 263.214V263.198Z"
        fill="#7B61FF"
      />
    </svg>
  );
}

export function Laptop({ className }: { className?: string }) {
  return (
    <svg
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M33.3699 26.6667V11.6667C33.3699 10.7827 33.0187 9.93481 32.3936 9.30968C31.7685 8.68456 30.9206 8.33337 30.0366 8.33337H10.0366C9.15252 8.33337 8.30467 8.68456 7.67955 9.30968C7.05443 9.93481 6.70324 10.7827 6.70324 11.6667V26.6667M33.3699 26.6667H6.70324M33.3699 26.6667L35.5032 30.9167C35.6317 31.1717 35.6926 31.4554 35.6799 31.7406C35.6672 32.0259 35.5815 32.3031 35.4309 32.5457C35.2804 32.7883 35.07 32.9881 34.82 33.126C34.57 33.264 34.2888 33.3354 34.0032 33.3334H6.06991C5.78439 33.3354 5.50315 33.264 5.25315 33.126C5.00315 32.9881 4.79278 32.7883 4.6422 32.5457C4.49163 32.3031 4.4059 32.0259 4.39324 31.7406C4.38058 31.4554 4.44142 31.1717 4.56991 30.9167L6.70324 26.6667"
        stroke="#FFFDD0"
        strokeWidth="2.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Brush({ className }: { className?: string }) {
  return (
    <svg
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_113_896)">
        <path
          d="M16.8193 19.8333L30.2693 6.39998C30.7078 5.94739 31.2319 5.58656 31.8111 5.3385C32.3904 5.09044 33.0132 4.96011 33.6433 4.95511C34.2734 4.9501 34.8982 5.07052 35.4813 5.30934C36.0644 5.54817 36.5942 5.90063 37.0398 6.3462C37.4854 6.79177 37.8378 7.32154 38.0766 7.90465C38.3155 8.48777 38.4359 9.11258 38.4309 9.74269C38.4259 10.3728 38.2955 10.9956 38.0475 11.5749C37.7994 12.1541 37.4386 12.6782 36.986 13.1167L23.5527 26.5833"
          stroke="#FFFDD0"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.8195 24.9C9.05284 24.9 6.8195 27.15 6.8195 29.9334C6.8195 32.15 2.65284 32.4667 3.48617 33.3C5.28617 35.1334 7.63617 36.6667 10.1528 36.6667C13.8195 36.6667 16.8195 33.6667 16.8195 29.9334C16.8217 29.2746 16.6941 28.6218 16.444 28.0123C16.1939 27.4028 15.8262 26.8485 15.3619 26.3812C14.8977 25.9138 14.3458 25.5424 13.738 25.2883C13.1302 25.0341 12.4783 24.9022 11.8195 24.9Z"
          stroke="#FFFDD0"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_113_896">
          <rect
            width="40"
            height="40"
            fill="white"
            transform="translate(0.0361328)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export function PenRuler({ className }: { className?: string }) {
  return (
    <svg
      width="35"
      height="34"
      viewBox="0 0 35 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M21.2861 7.08337L26.9528 12.75"
        stroke="#FFFDD0"
        strokeWidth="2.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.453 9.91663L12.3613 3.82496C11.7215 3.18825 10.8556 2.83081 9.95301 2.83081C9.05038 2.83081 8.18447 3.18825 7.54467 3.82496L3.86134 7.5083C3.22463 8.1481 2.86719 9.014 2.86719 9.91663C2.86719 10.8193 3.22463 11.6852 3.86134 12.325L9.95301 18.4166"
        stroke="#FFFDD0"
        strokeWidth="2.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3691 8.49996L14.2025 5.66663"
        stroke="#FFFDD0"
        strokeWidth="2.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.86914 31.1667L10.6608 29.0417L30.0266 9.67584C30.7781 8.9244 31.2002 7.90522 31.2002 6.84251C31.2002 5.7798 30.7781 4.76062 30.0266 4.00918C29.2752 3.25773 28.256 2.83557 27.1933 2.83557C26.1306 2.83557 25.1114 3.25773 24.36 4.00918L4.99414 23.375L2.86914 31.1667Z"
        stroke="#FFFDD0"
        strokeWidth="2.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.5361 22.6667L28.3695 19.8334"
        stroke="#FFFDD0"
        strokeWidth="2.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.1191 15.5834L30.2108 21.675C31.5425 23.0067 31.5425 25.16 30.2108 26.4917L26.5275 30.175C25.1958 31.5067 23.0425 31.5067 21.7108 30.175L15.6191 24.0834"
        stroke="#FFFDD0"
        strokeWidth="2.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}