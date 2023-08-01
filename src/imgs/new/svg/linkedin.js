import React from "react";
const Linkedin = ({ color }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.37183 2.50476C3.26726 2.50476 2.37183 3.40019 2.37183 4.50476V19.6289C2.37183 20.7334 3.26726 21.6289 4.37183 21.6289H19.4959C20.6005 21.6289 21.4959 20.7334 21.4959 19.6289V4.50476C21.4959 3.40019 20.6005 2.50476 19.4959 2.50476H4.37183ZM7.06181 6.26445C7.81928 6.27298 8.56544 6.79554 8.5979 7.70016C8.6141 8.50457 7.91308 9.11727 7.04197 9.13587H7.02096C6.27102 9.12722 5.53865 8.59154 5.50471 7.70016C5.5154 6.90471 6.18404 6.28332 7.06181 6.26445ZM15.1882 10.065C16.0209 10.0702 16.8069 10.3172 17.4526 10.9755C18.1236 11.7239 18.3391 12.7558 18.3631 13.8048V18.5765H15.613V14.1293C15.6069 13.2958 15.3214 12.2826 14.2182 12.2489C13.5716 12.2558 13.1157 12.6315 12.8035 13.2597C12.7182 13.462 12.706 13.6944 12.7019 13.9262V18.5765H9.95307C9.96359 16.2517 9.97804 13.9271 9.97291 11.6023C9.97291 10.9419 9.96655 10.4972 9.95307 10.2681H12.7019V11.44C12.9353 11.1082 13.194 10.7934 13.5412 10.5401C14.012 10.204 14.5776 10.0752 15.1882 10.065ZM5.66696 10.2681H8.41581V18.5765H5.66696V10.2681Z"
      fill={color || "url(#paint0_linear_321_483)"}
    />
    <defs>
      <linearGradient
        id="paint0_linear_321_483"
        x1="23.8068"
        y1="0.416802"
        x2="11.5334"
        y2="27.4452"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFB7" />
        <stop offset="1" stopColor="#005B42" />
      </linearGradient>
    </defs>
  </svg>
);

export default Linkedin;