import React, { useState } from "react";

const YourComponent = ({ handleBodyPartClick }) => {
  const [hoveredPath, setHoveredPath] = useState(null);
  const [Bodypart, setBodyPart] = useState();
  const handleMouseOver = (event) => {
    const path = event.target;
    setHoveredPath(path);
    path.style.fillOpacity = "1";
    path.style.fill = "#00ff00";
  };

  const handleMouseOut = () => {
    if (hoveredPath) {
      hoveredPath.style.fillOpacity = "0";
      setHoveredPath(null);
    }
  };

  const handleClick = (part) => {
    handleBodyPartClick(part);
    // if (hoveredPath) {
    //   alert(`You Clicked ${part}`);
    // }
    setBodyPart(part);
    console.log(part);
  };

  return (
    <>
      <div className="flex flex-row vh-100 justify-center items-center ">
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            height="100%"
            strokeMiterlimit="10"
            style={{
              fillRule: "nonzero",
              clipRule: "evenodd",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              verticalAlign: "middle",
            }}
            version="1.1"
            viewBox="0 0 596.333 587.111"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <image height="582" id="Image" width="571" xlinkHref="" />
            </defs>
            <g id="Untitled" vectornatorLayerName="Untitled">
              <g opacity="1" vectornatorLayerName="Group 1">
                <g transform="matrix(1 0 0 1 178.645 0)">
                  <clipPath id="cp">
                    <path d="M0 0L286 0L286 582L0 582Z" />
                  </clipPath>
                  <g clipPath="url(#cp)">
                    <use
                      opacity="1"
                      vectornatorLayerName="image"
                      xlinkHref="#Image"
                    />
                  </g>
                </g>
                <path
                  d="M325.642 24.6288C324.884 9.77823 310.466 1.88889 301.816 1.88889C287.779 1.88889 277.612 15.5792 276.246 21.6122C275.374 25.4618 274.956 32.5181 275.108 34.684C275.259 36.8498 275.563 40.4074 275.411 42.1867C275.715 48.1422 277.282 53.4508 277.991 57.9654C278.295 60.3633 278.978 64.6945 279.964 67.6335C284.517 74.7493 291.042 81.5559 300.906 81.5559C310.77 81.5559 318.547 74.1306 320.88 68.7162C322.076 66.1058 323.287 59.4783 323.498 57.7524C323.479 53.4402 325.649 49.2249 325.642 42.5733C325.946 39.1702 326.4 39.4793 325.642 24.6288C325.642 24.6288 325.642 24.6288 325.642 24.6288Z"
                  fill="transparent"
                  fillOpacity="0"
                  fillRule="nonzero"
                  opacity="1"
                  stroke="#ff0000"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  vectornatorLayerName="path"
                  cursor="pointer"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  onClick={() => {
                    handleClick("Head");
                  }}
                  transform="translate(0, 0)"
                />
                <path
                  d="M271.972 42.8058C270.353 44.6008 271.635 50.8835 272.04 52.529C272.445 54.1746 274.402 59.111 274.942 59.6342C275.482 60.1575 276.629 62.2518 277.978 59.3349C277.348 54.9694 275.954 49.8361 275.684 44.0771C275.279 43.2546 273.592 41.0108 271.972 42.8058Z"
                  fill="transparent"
                  fillOpacity="0"
                  fillRule="nonzero"
                  opacity="1"
                  stroke="#ff0000"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  vectornatorLayerName="path"
                  cursor="pointer"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  onClick={() => {
                    handleClick("left-ear");
                  }}
                />
                <path
                  d="M327.975 57.4203C328.479 55.3825 331.184 53.8084 331.452 47.3838C331.733 40.6589 327.395 43.0362 326.049 44.8027C326.056 50.6444 323.917 54.3468 323.936 58.1336C325.619 60.7319 327.47 59.4582 327.975 57.4203Z"
                  fill="transparent"
                  fillOpacity="0"
                  fillRule="nonzero"
                  opacity="1"
                  stroke="#ff0000"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  vectornatorLayerName="path"
                  cursor="pointer"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  onClick={() => {
                    handleClick("right-ear");
                  }}
                />
                <path
                  d="M 352.449 160.478 C 352.341 156.702 351.427 151.909 351.598 147.653 C 351.9 140.135 353.905 137.66 353.133 132.604 C 352.977 131.581 352.704 130.366 352.291 129.053 C 351.397 126.206 349.847 122.897 347.411 120.084 C 342.568 114.491 335.296 110.229 332.671 109.613 C 330.731 109.783 328.673 109.752 326.588 109.479 C 321.192 108.772 306.784 109.972 305.169 112.192 C 303.554 114.412 298.638 114.35 296.882 112.192 C 295.126 110.034 284.381 109.417 277.78 109.725 C 276.227 109.798 274.002 109.649 272.056 109.365 C 268.718 110.64 252.309 118.442 249.527 131.265 C 249.287 132.373 249.148 133.518 249.128 134.7 C 249.041 139.944 249.802 145.179 249.857 149.902 C 249.941 157.068 248.89 163.052 248.847 166.088 C 249.409 166.088 250.533 169.418 250.814 170.158 C 251.095 170.898 253.271 177.435 255.449 180.888 C 256.385 182.374 256.884 183.322 257.258 184.368 C 260.734 187.235 274.691 193.9 287.402 191.803 C 298.752 189.93 302.65 190.088 314.79 191.85 C 328.063 193.777 343.782 183.059 346.023 181.721 C 348.265 180.382 350.132 172.563 350.448 171.592 C 350.764 170.621 351.238 169.279 351.817 169.279 C 351.898 167.844 352.572 164.762 352.449 160.478 C 352.449 160.478 352.449 160.478 352.449 160.478 Z"
                  fill="transparent"
                  fillOpacity="0"
                  fillRule="nonzero"
                  opacity="1"
                  stroke="#ff0000"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  vectornatorLayerName="path"
                  cursor="pointer"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  onClick={() => {
                    handleClick("Chest");
                  }}
                />
                <path
                  d="M 315.637 191.571 C 301.714 189.663 298.814 188.922 286.908 191.506 C 273.574 194.399 258.934 185.203 255.288 181.246 C 255.808 183.157 256.099 185.303 256.926 189.719 C 259.062 201.121 257.589 210.056 257.074 212.694 C 255.806 219.177 254.348 227.33 255.674 231.84 C 255.959 232.81 256.18 233.723 256.331 234.596 C 257.958 238.478 266.871 255.071 301.236 255.071 C 335.6 255.071 343.998 239.329 345.81 235.05 C 346.273 232.389 347.163 229.195 347.128 225.267 C 347.089 220.67 344.797 211.523 344.236 209.056 C 343.206 204.525 345.029 190.612 345.471 187.102 C 345.913 183.592 346.963 180.784 348.399 177.593 C 339.376 190.059 329.56 193.478 315.637 191.571 Z"
                  fill="transparent"
                  fillOpacity="0"
                  fillRule="nonzero"
                  opacity="1"
                  stroke="#ff0000"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  vectornatorLayerName="path"
                  cursor="pointer"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  onClick={() => {
                    handleClick("Stomach");
                  }}
                />
                <path
                  d="M272.199 108.393C274.143 108.737 276.366 108.918 277.918 108.83C284.514 108.456 295.249 109.205 297.003 111.827C298.757 114.448 303.669 114.523 305.283 111.827C306.897 109.13 321.293 107.672 326.684 108.531C328.768 108.863 330.824 108.9 332.762 108.694C339.244 108.007 344.132 103.953 346.224 101.733C345.065 101.467 343.985 101.244 343.01 101.046C339.657 100.368 335.687 98.6208 329.947 95.7787C323.214 92.4453 319.58 89.0935 319.316 87.8576C319.053 86.6217 319.369 74.5996 319.685 70.1054C317.527 75.3488 310.335 82.5396 301.213 82.5396C292.091 82.5396 286.057 75.9479 281.847 69.0569C282.76 71.9031 282.479 81.1163 282.163 88.0823C278.585 94.936 265.397 99.0644 261.955 100.441C261.047 100.805 259.634 101.145 257.879 101.557C258.739 102.301 265.616 106.553 269.894 107.86C270.557 108.062 271.351 108.243 272.199 108.393C272.199 108.393 272.199 108.393 272.199 108.393Z"
                  fill="transparent"
                  fillOpacity="0"
                  fillRule="nonzero"
                  opacity="1"
                  stroke="#ff0000"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  vectornatorLayerName="path"
                  cursor="pointer"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  onClick={() => {
                    handleClick("Neck");
                  }}
                />
                <path
                  d="M252.016 383.768C253.268 387.4 254.383 389.893 255.101 391.623C256.963 396.112 259.289 410.913 260.336 423.652C260.421 424.683 260.485 425.687 260.541 426.681C267.095 445.278 284.318 443.033 292.736 434.119C292.857 433.278 293.04 432.515 293.223 431.942C293.688 430.486 294.89 425.957 295.007 420.255C295.123 414.553 295.588 410.549 296.287 405.817C296.684 403.124 297.043 401.685 297.28 397.547C283.752 418.396 278.501 391.917 252.016 383.768Z"
                  fill="transparent"
                  fillOpacity="0"
                  fillRule="nonzero"
                  opacity="1"
                  stroke="#ff0000"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  vectornatorLayerName="path"
                  cursor="pointer"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  onClick={() => {
                    handleClick("left knee");
                  }}
                />
                <path
                  d="M304.504 398.664C304.646 401.317 304.804 403.29 304.998 404.001C305.721 406.659 306.851 412.701 306.977 418.457C307.103 424.212 309.088 428.796 309.556 429.917C317.686 438.167 337.69 439.93 340.339 421.989C340.42 420.535 340.519 419.1 340.633 417.698C341 413.208 341.505 409.021 341.941 405.352C342.971 396.692 345.418 392.011 346.888 388.277C320.891 395.735 318.5 418.182 304.504 398.664L304.504 398.664Z"
                  fill="transparent"
                  fillOpacity="0"
                  fillRule="nonzero"
                  opacity="1"
                  stroke="#ff0000"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  vectornatorLayerName="path"
                  cursor="pointer"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  onClick={() => {
                    handleClick("right knee");
                  }}
                />

                <path
                  d="M 247.576 138.524 C 250.412 120.755 267.137 109.943 270.54 108.177 C 269.676 108.006 268.866 107.8 268.189 107.569 C 263.825 106.077 256.809 101.227 255.932 100.378 C 246.782 102.781 228.54 107.317 223.69 128.33 C 221.7 136.954 221.677 142.72 221.811 146.782 C 221.966 151.534 222.493 153.954 222.724 155.889 C 222.908 157.424 222.816 158.373 222.508 159.407 C 228.454 152.003 241.482 151.058 247.576 138.524 L 247.576 138.524 Z"
                  fill="transparent"
                  fillOpacity="0"
                  fillRule="nonzero"
                  opacity="1"
                  stroke="#ff0000"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  vectornatorLayerName="path"
                  cursor="pointer"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  onClick={() => {
                    handleClick("Hands");
                  }}
                />
                <path
                  d="M 348.585 122.131 C 351.095 125.841 352.693 130.204 353.614 133.958 C 359.475 149.982 372.502 149.129 377.822 158.886 C 377.387 157.788 377.767 156.568 377.876 155.959 C 377.984 155.349 378.726 148.885 378.907 146.933 C 379.767 137.663 381.481 119.945 374.129 111.702 C 366.658 103.326 354.126 102.425 347.279 100.769 C 345.122 103.179 340.08 107.58 333.394 108.326 C 336.1 109.137 343.594 114.757 348.585 122.131 C 348.585 122.131 348.585 122.131 348.585 122.131 Z"
                  fill="transparent"
                  fillOpacity="0"
                  fillRule="nonzero"
                  opacity="1"
                  stroke="#ff0000"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  vectornatorLayerName="path"
                  cursor="pointer"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  onClick={() => {
                    handleClick("Hands");
                  }}
                />
                <path
                  d="M 246.517 165.306 C 246.461 159.023 245.687 152.059 245.776 145.082 C 245.795 143.509 245.937 141.985 246.182 140.512 C 240.104 152.544 227.109 153.452 221.18 160.56 C 220.77 161.889 219.974 163.365 218.932 166.535 C 217.112 172.073 215.612 179.58 214.97 186.84 C 214.751 189.312 214.408 192.57 213.958 196.131 C 215.296 210.309 226.283 213.341 233.791 211.063 C 236.247 210.319 238.488 207.886 240.165 205.581 C 241.125 200.537 242.584 195.486 242.992 193.732 C 243.563 191.27 244.919 186.84 245.49 186.84 C 245.534 182.802 246.602 174.84 246.517 165.306 L 246.517 165.306 Z"
                  fill="transparent"
                  fillOpacity="0"
                  fillRule="nonzero"
                  opacity="1"
                  stroke="#ff0000"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  vectornatorLayerName="path"
                  cursor="pointer"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  onClick={() => {
                    handleClick("Hands");
                  }}
                />
                <path
                  d="M 367.041 204.698 C 375.063 206.959 385.312 203.626 385.407 188.158 C 384.222 172.98 379.482 160.561 379.052 159.526 C 373.773 150.327 360.847 151.132 355.031 136.024 C 355.453 137.657 355.732 139.167 355.892 140.438 C 356.682 146.724 354.632 149.8 354.323 159.146 C 354.148 164.437 355.082 170.395 355.193 175.089 C 355.318 180.414 354.629 184.246 354.545 186.031 C 355.138 186.031 357.175 186.012 360.154 197.317 C 361.45 199.425 362.957 203.547 367.041 204.698 Z"
                  fill="transparent"
                  fillOpacity="0"
                  fillRule="nonzero"
                  opacity="1"
                  stroke="#ff0000"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  vectornatorLayerName="path"
                  cursor="pointer"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  onClick={() => {
                    handleClick("Hands");
                  }}
                />
                <path
                  d="M 210.171 223.644 C 208.717 229.872 207.566 236.993 207.403 240.212 C 207.164 244.91 206.745 259.446 205.435 269.243 C 205.353 269.857 205.257 270.441 205.153 271.002 C 206.609 274.835 216.896 278.09 220.352 276.935 C 221.573 273.185 223.304 268.386 224.286 266.233 C 225.828 262.854 229.364 256.577 232.833 247.047 C 234.962 241.199 235.871 235.355 236.285 230.953 C 233.427 225.113 215.737 215.249 210.171 223.644 Z"
                  fill="transparent"
                  fillOpacity="0"
                  fillRule="nonzero"
                  opacity="1"
                  stroke="#ff0000"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  vectornatorLayerName="path"
                  cursor="pointer"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  onClick={() => {
                    handleClick("Hands");
                  }}
                />
                <path
                  d="M 402.951 268.836 C 402.498 267.196 402.068 265.648 401.815 264.624 C 401.123 261.823 399.165 249.275 398.408 237.502 C 397.987 230.962 397.159 225.79 395.908 220.927 C 391.484 207.688 365.715 221.661 366.472 227.377 C 368.144 236.106 372.084 245.816 377.657 255.461 C 381.826 262.675 384.65 269.198 386.383 273.865 C 389.545 275.477 400.694 272.697 402.951 268.836 C 402.951 268.836 402.951 268.836 402.951 268.836 Z"
                  fill="transparent"
                  fillOpacity="0"
                  fillRule="nonzero"
                  opacity="1"
                  stroke="#ff0000"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  vectornatorLayerName="path"
                  cursor="pointer"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  onClick={() => {
                    handleClick("Hands");
                  }}
                />
                <path
                  d="M 255.214 253.573 C 254.871 256.004 254.602 258.74 254.47 261.726 C 254.052 271.221 251.959 272.853 249.972 296.444 C 247.41 326.847 247.565 339.064 249.972 358.76 C 251.451 370.866 253.561 378.847 255.357 384.16 C 279.174 391.635 283.896 415.921 296.06 396.799 C 296.221 393.927 296.318 389.638 296.318 382.351 C 296.318 361.765 299.561 355.422 299.561 337.506 C 299.561 319.59 297.992 310.577 297.835 309.464 C 297.678 308.351 297.312 307.405 298.149 306.126 C 296.544 302.489 292.99 295.394 289.795 291.164 C 278.13 275.72 259.541 257.591 255.214 253.573 C 255.214 253.573 255.214 253.573 255.214 253.573 Z"
                  fill="transparent"
                  fillOpacity="0"
                  fillRule="nonzero"
                  opacity="1"
                  stroke="#ff0000"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  vectornatorLayerName="path"
                  cursor="pointer"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  onClick={() => {
                    handleClick("Legs");
                  }}
                />
                <path
                  d="M 310.525 292.992 C 307.102 297.061 304.56 304.802 302.907 308.197 C 303.451 309.135 303.668 308.804 302.907 313.55 C 302.146 318.296 301.385 332.643 301.385 340.369 C 301.385 348.095 303.451 361.559 304.103 369.726 C 304.581 375.707 304.592 388.967 304.82 396.765 C 318.128 418.043 320.954 394.007 346.611 386.613 C 348.133 382.639 349.958 375.42 352.156 363.987 C 355.634 345.887 354.439 317.633 353.46 302.293 C 352.482 286.952 349.764 281.323 348.785 266.865 C 348.53 263.096 348.175 259.889 347.772 257.156 C 343.125 260.895 322.794 278.41 310.525 292.992 C 310.525 292.992 310.525 292.992 310.525 292.992 Z"
                  fill="transparent"
                  fillOpacity="0"
                  fillRule="nonzero"
                  opacity="1"
                  stroke="#ff0000"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  vectornatorLayerName="path"
                  cursor="pointer"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  onClick={() => {
                    handleClick("Legs");
                  }}
                />
                <path
                  d="M 310.525 292.992 C 307.102 297.061 304.56 304.802 302.907 308.197 C 303.451 309.135 303.668 308.804 302.907 313.55 C 302.146 318.296 301.385 332.643 301.385 340.369 C 301.385 348.095 303.451 361.559 304.103 369.726 C 304.581 375.707 304.592 388.967 304.82 396.765 C 318.128 418.043 320.954 394.007 346.611 386.613 C 348.133 382.639 349.958 375.42 352.156 363.987 C 355.634 345.887 354.439 317.633 353.46 302.293 C 352.482 286.952 349.764 281.323 348.785 266.865 C 348.53 263.096 348.175 259.889 347.772 257.156 C 343.125 260.895 322.794 278.41 310.525 292.992 C 310.525 292.992 310.525 292.992 310.525 292.992 Z"
                  fill="transparent"
                  fillOpacity="0"
                  fillRule="nonzero"
                  opacity="1"
                  stroke="#ff0000"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  vectornatorLayerName="path"
                  cursor="pointer"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  onClick={() => {
                    handleClick("Legs");
                  }}
                />
                <path
                  d="M 261.439 428.909 C 262.034 438.709 260.966 446.592 260.262 455.982 C 259.497 466.199 262.231 480.208 264.199 489.899 C 266.168 499.589 269.485 521.533 270.725 528.766 C 271.551 533.586 271.892 538.779 272.027 542.124 C 273.554 536.406 287.497 536.71 292.014 538.831 C 291.126 536.283 290.351 533.418 290.449 529.608 C 290.546 525.811 292.089 514.756 293.309 498.746 C 294.528 482.736 296.683 484.457 296.683 474.345 C 296.683 464.233 292.308 440.709 291.797 438.883 C 291.488 437.777 291.528 436.49 291.704 435.367 C 283.791 443.105 267.6 445.055 261.439 428.909 C 261.439 428.909 261.439 428.909 261.439 428.909 Z"
                  fill="transparent"
                  fillOpacity="0"
                  fillRule="nonzero"
                  opacity="1"
                  stroke="#ff0000"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  vectornatorLayerName="path"
                  cursor="pointer"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  onClick={() => {
                    handleClick("Legs");
                  }}
                />
                <path
                  d="M 288.898 555.297 C 284.343 553.86 277.111 554.791 274.269 556.848 C 273.69 558.035 272.876 559.271 272.278 560.638 C 270.972 563.629 267.639 565.046 265.94 566.855 C 264.24 568.665 264.241 571.341 265.025 572.994 C 265.809 574.646 266.136 574.882 268.031 575.748 C 269.926 576.613 273.455 575.906 274.827 575.197 C 276.199 574.489 278.421 574.804 279.14 575.197 C 279.858 575.591 281.884 577.007 285.479 576.966 C 289.073 576.925 289.987 576.535 291.752 574.253 C 293.516 571.971 293.255 564.022 293.124 560.166 C 293.111 559.775 293.11 559.383 293.114 558.988 C 292.365 557.446 290.95 555.944 288.898 555.297 C 288.898 555.297 288.898 555.297 288.898 555.297 Z"
                  fill="transparent"
                  fillOpacity="0"
                  fillRule="nonzero"
                  opacity="1"
                  stroke="#ff0000"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  vectornatorLayerName="path"
                  cursor="pointer"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  onClick={() => {
                    handleClick("Legs");
                  }}
                />
                <path
                  d="M 308.142 558.251 C 307.227 563.076 309.473 563.246 308.308 565.446 C 307.143 567.647 307.642 570.779 308.225 571.287 C 308.807 571.795 307.559 572.556 309.723 574.927 C 311.886 577.297 316.63 576.281 317.379 576.027 C 318.128 575.773 318.877 575.519 319.376 576.129 C 319.875 576.74 322.621 576.45 323.203 576.129 C 323.786 575.808 324.868 575.519 325.201 575.967 C 325.533 576.416 327.78 575.773 328.945 575.942 C 330.11 576.112 331.858 575.35 333.023 575.519 C 334.188 575.688 336.601 574.503 336.518 572.218 C 336.435 569.932 335.103 569.086 334.105 567.563 C 333.106 566.039 329.944 558.675 329.112 556.474 C 327.214 553.551 310.472 552.326 308.142 558.251 C 308.142 558.251 308.142 558.251 308.142 558.251 Z"
                  fill="transparent"
                  fillOpacity="0"
                  fillRule="nonzero"
                  opacity="1"
                  stroke="#ff0000"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  vectornatorLayerName="path"
                  cursor="pointer"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  onClick={() => {
                    handleClick("Legs");
                  }}
                />
                <path
                  d="M 202.409 281.984 C 201.967 282.458 201.268 282.943 200.136 283.54 C 196.548 285.429 193.259 290.118 191.241 291.938 C 189.223 293.757 187.653 297.537 185.784 298.657 C 183.916 299.776 182.421 302.856 182.346 303.486 C 182.271 304.115 181.449 305.935 180.178 306.915 C 178.908 307.894 179.655 309.784 181.075 310.344 C 182.496 310.904 184.738 309.714 185.934 308.944 C 187.129 308.174 188.326 305.725 188.55 304.955 C 188.774 304.186 192.138 301.316 193.558 301.176 C 193.184 302.436 192.96 308.944 193.184 310.764 C 193.409 312.584 193.782 324.691 194.156 327.77 C 194.53 330.85 194.754 335.049 196.548 336.239 C 198.342 337.428 199.837 335.959 200.809 334.279 C 200.809 332.966 200.813 328.22 200.906 323.426 C 200.892 317.381 200.886 311.605 201.332 311.814 C 201.632 311.954 201.159 315.139 201.021 319.087 C 200.973 320.472 200.936 321.952 200.906 323.426 C 200.916 327.508 200.929 331.712 200.809 334.279 C 200.958 338.058 201.033 341.488 203.799 341.558 C 206.565 341.628 206.565 336.728 206.639 333.999 C 206.713 331.27 207.088 324.061 207.237 320.002 C 207.386 315.943 207.61 313.703 208.732 313.703 C 209.853 313.703 208.956 318.812 208.657 320.912 C 208.358 323.012 208.208 329.38 208.133 330.71 C 208.058 332.04 206.937 337.358 208.507 338.338 C 210.077 339.319 211.871 338.828 212.468 337.009 C 213.066 335.189 213.59 331.34 213.739 329.17 C 213.888 327 214.935 319.162 215.384 316.573 C 215.832 313.983 215.907 312.583 216.804 312.513 C 217.701 312.443 217.626 313.563 217.645 314.893 C 217.665 316.223 217.775 321.331 217.775 322.906 C 217.775 324.481 216.878 331.619 219.794 331.934 C 222.709 332.249 222.597 323.116 222.709 320.807 C 222.821 318.497 223.045 312.198 223.494 310.099 C 223.942 307.999 223.718 301.071 223.83 297.921 C 223.942 294.772 223.494 290.573 222.484 288.683 C 222.231 288.209 222.084 287.575 222.01 286.854 C 219.319 284.111 214.264 283.781 212.674 283.543 C 210.923 283.281 205.11 281.291 202.409 281.984 C 202.409 281.984 202.409 281.984 202.409 281.984 Z"
                  fill="transparent"
                  fillOpacity="0"
                  fillRule="nonzero"
                  opacity="1"
                  stroke="#ff0000"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  vectornatorLayerName="path"
                  cursor="pointer"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  onClick={() => {
                    handleClick("Hands");
                  }}
                />
                <path
                  d="M 425.798 299.132 C 425.002 298.662 424.474 297.618 424.474 297.618 C 424.474 297.618 423.92 295.728 422.961 294.556 C 422.22 293.65 417.433 290.343 415.952 288.339 C 414.984 287.029 406.356 281.21 405.345 280.675 C 403.106 279.47 396.89 283.255 395.096 283.594 C 393.303 283.933 388.111 284.503 386.468 289.07 C 385.413 291.855 386.059 299.248 386.393 300.933 C 386.726 302.618 387.046 308.609 388.567 311.953 C 390.088 315.296 391.112 321.055 391.458 323.163 C 391.805 325.271 393.081 332.364 395.014 332.801 C 396.946 333.238 397.429 330.329 397.116 326.95 C 396.803 323.57 394.927 315.436 394.53 314.036 C 394.133 312.635 395.619 312.38 396.979 315.093 C 398.339 317.806 399.746 326.943 400.826 332.206 C 401.906 337.469 404.752 339.926 406.386 337.477 C 408.02 335.028 406.221 331.905 405.768 326.199 C 405.314 320.494 402.743 312.875 403.163 312.651 C 403.583 312.427 405.417 314.349 406.302 325.054 C 407.188 335.759 408.297 339.609 411 339.671 C 413.704 339.732 413.232 333.392 412.942 330.788 C 415.286 335.52 417.62 332.697 418.019 331.768 C 418.418 330.839 418.445 326.954 418.391 325.12 C 418.337 323.286 417.102 310.403 416.969 305.889 C 416.835 301.374 414.683 298.331 414.867 297.338 C 415.051 296.344 416.29 297.366 417.523 298.177 C 418.756 298.987 418.567 299.84 420.533 301.406 C 422.499 302.972 424.931 303.464 426.398 302.574 C 427.865 301.683 426.594 299.603 425.798 299.132 C 425.798 299.132 425.798 299.132 425.798 299.132 Z M 413.074 332.192 C 412.705 329.801 411.911 323.308 410.996 317.916 C 410.278 313.677 409.323 310.123 409.547 309.743 C 410.054 308.882 412.404 327.552 413.074 332.192 C 413.074 332.192 413.074 332.192 413.074 332.192 Z"
                  fill="transparent"
                  fillOpacity="0"
                  fillRule="nonzero"
                  opacity="1"
                  stroke="#ff0000"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  vectornatorLayerName="path"
                  cursor="pointer"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  onClick={() => {
                    handleClick("Hands");
                  }}
                />
                <path
                  d="M 310.517 429.832 C 310.93 431.06 310.311 433.069 307.315 452.043 C 304.32 471.017 306.145 479.835 306.833 483.257 C 307.521 486.68 308.624 493.6 308.761 496.651 C 308.899 499.702 309.312 508.854 310.414 517.262 C 311.515 525.669 311.309 537.426 310.139 540.403 C 311.86 537.203 328.534 536.31 328.69 544.346 C 328.695 542.34 328.74 540.257 328.903 538.207 C 330.039 523.921 331.053 521.725 336.65 487.201 C 342.056 453.855 339.749 451.038 339.129 438.426 C 338.854 432.826 339.008 427.25 339.363 421.958 C 336.528 441.369 317.925 438.979 310.517 429.832 C 310.517 429.832 310.517 429.832 310.517 429.832 Z"
                  fill="transparent"
                  fillOpacity="0"
                  fillRule="nonzero"
                  opacity="1"
                  stroke="#ff0000"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  vectornatorLayerName="path"
                  cursor="pointer"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  onClick={() => {
                    handleClick("Legs");
                  }}
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default YourComponent;
