import React from "react";

interface Props {}

export const HeaderTop: React.FC<Props> = () => {
  return (
    <div className="header-top">
      <div className="header-top__row-social">
        <div className="header-top__row-social-item">
          <svg
            className="header-top__row-social-item-icon"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path d="M12.9647 9.79685H11.2065V16H8.80786V9.79685H7.20001V7.66175L8.80786 7.65543L8.80132 6.40469C8.80132 4.66124 9.29152 3.60001 11.4222 3.60001H13.1935V5.73511H12.0824C11.2588 5.73511 11.2131 6.03831 11.2131 6.5942V7.66175H13.2L12.9647 9.79685Z" />
          </svg>
        </div>
        <div className="header-top__row-social-item">
          <svg
            className="header-top__row-social-item-icon"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path d="M16.043 6.6942L16.0507 7.09645C16.0507 11.2272 12.9136 16 7.1789 16C5.4215 16 3.77971 15.4817 2.39999 14.5844C2.63894 14.6154 2.88559 14.6308 3.13995 14.6308C4.60446 14.6308 5.94563 14.128 7.00933 13.2848C5.64502 13.2616 4.49654 12.3566 4.09573 11.1112C4.28843 11.1498 4.48113 11.1653 4.68154 11.1653C4.96673 11.1653 5.24421 11.1266 5.49857 11.057C4.07261 10.7708 3.00121 9.50992 3.00121 7.99377V7.96283C3.41744 8.19489 3.89533 8.33413 4.41176 8.3496C3.5793 7.79264 3.03204 6.82571 3.03204 5.75047C3.03204 5.17805 3.1862 4.63656 3.45598 4.17243C4.98214 6.06763 7.28681 7.30531 9.87667 7.43681C9.82271 7.21248 9.79959 6.97268 9.79959 6.72515C9.79959 5.00013 11.187 3.60001 12.9136 3.60001C13.8077 3.60001 14.6247 3.97905 15.1951 4.58241C15.8965 4.44318 16.5671 4.1879 17.1761 3.83207C16.9448 4.55921 16.4515 5.17805 15.8041 5.56482C16.4361 5.48747 17.0373 5.31729 17.6 5.06975C17.1761 5.69633 16.6442 6.25328 16.043 6.6942Z" />
          </svg>
        </div>
        <div className="header-top__row-social-item">
          <svg
            className="header-top__row-social-item-icon"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path d="M14.7568 3.60001H5.24321C4.33684 3.60001 3.60001 4.27163 3.60001 5.24321V14.7568C3.60001 15.7284 4.33684 16.4 5.24321 16.4H14.7568C15.6632 16.4 16.4 15.7284 16.4 14.7568V5.24321C16.4 4.27163 15.6632 3.60001 14.7568 3.60001ZM12.3507 5.60184C12.3507 5.28233 12.6115 5.02802 12.9245 5.02802H14.3721C14.6916 5.02802 14.9459 5.28885 14.9459 5.60184V6.98421C14.9459 7.30372 14.6851 7.55803 14.3721 7.55803H12.9245C12.605 7.55803 12.3507 7.2972 12.3507 6.98421V5.60184ZM10.0163 7.4863C11.4378 7.4863 12.5854 8.60133 12.5854 9.97718C12.5854 11.353 11.4313 12.4681 10.0163 12.4681C8.59481 12.4681 7.44717 11.353 7.44717 9.97718C7.44717 8.60133 8.59481 7.4863 10.0163 7.4863ZM14.9524 14.4243C14.9524 14.7046 14.7242 14.9329 14.4438 14.9329H5.53011C5.24972 14.9329 5.0215 14.7046 5.0215 14.4243V9.01213H6.19521C6.09088 9.35772 6.0322 9.7294 6.0322 10.1076C6.0322 12.2398 7.81233 13.9613 10.0098 13.9613C12.2072 13.9613 13.9874 12.2333 13.9874 10.1076C13.9874 9.7294 13.9287 9.35772 13.8244 9.01213H14.9524V14.4243Z" />
          </svg>
        </div>
        <div className="header-top__row-social-item">
          <svg
            className="header-top__row-social-item-icon"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path d="M16.2816 16.288L16.288 11.6362C16.288 9.3585 15.799 7.60843 13.1353 7.60843C11.8549 7.60843 10.9992 8.30974 10.6453 8.97889H10.6067V7.81432H8.08455V16.2816H10.7097V12.093C10.7097 10.9863 10.922 9.91826 12.286 9.91826C13.6307 9.91826 13.6565 11.1793 13.6565 12.1638V16.288H16.2816Z" />
            <path d="M6.44387 7.81433H3.81233V16.2816H6.44387V7.81433Z" />
            <path d="M5.12488 3.60001C4.28202 3.60001 3.60001 4.28202 3.60001 5.12488C3.60001 5.96775 4.28202 6.66263 5.12488 6.66263C5.96774 6.66263 6.64975 5.96775 6.64975 5.12488C6.64975 4.28202 5.96774 3.60001 5.12488 3.60001Z" />
          </svg>
        </div>
      </div>
      <div className="header-top__row-links">
        <span className="header-top__row-links-item">
          Call : (555) 555-5555
        </span>
        <span className="header-top__row-links-item">
          Text : (555) 555-5555
        </span>
        <span className="header-top__row-links-item">Payment Calculator</span>
        <span className="header-top__row-links-item">Patient Forms</span>
      </div>
    </div>
  );
};
