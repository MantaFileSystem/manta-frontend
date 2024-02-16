import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { RiUserSettingsLine, RiUserSettingsFill } from "react-icons/ri";
import { RiUploadCloud2Line, RiUploadCloudFill } from "react-icons/ri";
import { HiOutlineShare, HiShare } from "react-icons/hi";
import { RiSettings2Line, RiSettings2Fill } from "react-icons/ri";

export default function SideBar() {
  const [selection, setSelection] = useState("DashboardPage");
  // let navigate = useNavigate();


  return (
    <div className="sideBar">
      <div className="mx-2 mt-3">
        <svg
          className="orcaLogo"
          width="55"
          height="46"
          viewBox="0 0 55 46"
          fill="#FFFFFF"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.3562 44.4156C14.2519 43.3941 11.9937 43.0553 10.1442 41.7667C9.70724 41.4622 9.29037 41.5357 8.87668 41.8012C6.29259 43.4596 3.03596 43.7112 0.577611 46C-0.406104 44.091 0.0842538 42.362 0.461393 40.7343C0.960372 38.5809 2.22559 36.817 4.04871 35.5133C4.83131 34.9536 5.33636 34.3505 5.33488 33.2944C5.32387 25.4319 8.76985 19.0345 13.8829 13.3252C14.8663 12.2272 16.5997 11.5693 16.5695 9.80295C16.5306 7.53049 15.6657 5.48194 14.1921 3.74988C13.3626 2.77491 12.3743 1.93399 11.2819 0.860042C13.4319 -0.251283 15.5147 -0.106315 17.5432 0.300419C20.7358 0.940569 23.5606 2.39274 25.776 4.81443C26.6246 5.742 27.4261 5.92681 28.6229 5.56061C33.3922 4.10125 38.3028 3.615 43.2718 3.82594C47.0266 3.98533 50.3924 5.18737 53.0772 7.93734C53.7166 8.59231 54.2619 9.31954 54.63 10.1572C55.5947 12.3522 54.6307 13.895 52.2307 13.8928C49.9501 13.8907 47.6835 13.9682 45.4447 14.4268C39.5361 15.6371 37.7576 17.484 36.6208 23.381C35.9515 26.8534 34.213 29.7288 31.3077 31.7978C29.3672 33.1798 27.1664 33.7253 24.5997 33.499C24.9151 31.588 25.998 30.0487 25.7113 28.0616C21.3191 29.6874 17.4396 31.9604 13.3994 34.5549C15.2601 36.0166 16.9237 37.3534 17.8768 39.3451C18.8399 41.358 19.1048 43.4135 18.7188 45.6121C17.6526 45.7278 17.2847 44.6672 16.3562 44.4156ZM40.3176 9.08098C38.2598 9.00759 36.2264 9.13004 34.3207 9.99836C33.6564 10.301 32.8885 10.651 32.9498 11.5401C33.0054 12.3456 33.7769 12.4932 34.3899 12.7932C38.0058 14.5626 40.7224 12.1597 43.8233 10.9363C43.0248 9.6251 41.8951 9.23308 40.3176 9.08098ZM19.2936 27.4603C16.9657 26.3183 14.7621 26.6619 12.7964 28.2117C11.2838 29.4043 10.3713 30.9614 10.8138 33.2238C13.5482 31.3653 16.2829 29.8143 19.0409 28.3029C19.2859 28.1686 19.5038 27.9699 19.2936 27.4603Z"
            // fill="#FFFFFF"
          />
          <path
            d="M37.809 25.3928C41.9585 23.2606 46.199 21.5574 49.5695 18.3851C50.6065 17.4092 51.5819 16.397 52.3776 15.2174C52.8825 14.4688 53.4562 14.2565 54.2432 15.0625C53.5786 17.6634 51.6756 19.4568 49.6201 20.8699C46.9679 22.6932 44.6683 24.4897 43.6805 27.8091C42.997 30.1057 40.9147 31.429 38.5116 32.0739C37.2992 32.3992 36.7789 32.1065 36.8719 30.8216C36.9696 29.47 37.0238 28.1151 37.0815 26.761C37.1038 26.2359 37.1443 25.7371 37.809 25.3928Z"
            // fill="#FFFFFF"
          />
        </svg>
        <p className="title mt-3">Orca File System</p>
      </div>

      {/* content button */}
      <div className="contentButton">
        <div
          className="mb-4"
          onClick={() => {
            setSelection("DashboardPage");
            // navigate("/");
          }}
        >
          {selection === "DashboardPage" ? (
            <RiUserSettingsFill size={38} />
          ) : (
            <RiUserSettingsLine size={38} />
          )}
        </div>
        <div
          className="mb-4"
          onClick={() => {
            setSelection("FileUploadPage");
            // navigate("/");
          }}
        >
          {selection === "FileUploadPage" ? (
            <RiUploadCloudFill size={38} />
          ) : (
            <RiUploadCloud2Line size={38} />
          )}
        </div>
        <div
          className="mb-4"
          onClick={() => {
            setSelection("PeerPage");
            // navigate("/PeerPage");
          }}
        >
          {selection === "PeerPage" ? (
            <HiShare size={38} />
          ) : (
            <HiOutlineShare size={38} />
          )}
        </div>
        <div
          className="mb-4"
          onClick={() => {
            setSelection("SettingPage");
            // navigate("/SettingPage");
          }}
        >
          {selection === "SettingPage" ? (
            <RiSettings2Fill size={38} />
          ) : (
            <RiSettings2Line size={38} />
          )}
        </div>
      </div>
    </div>
  );
}
