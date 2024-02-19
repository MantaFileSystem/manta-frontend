import { motion } from "framer-motion";
import { routeVariants } from "../helper/RouterAnimation";

import Header from "./Header/Header";

function UploadStatus() {
  return (
    <div className="upload-status">
      <Header />
      <h3>File Upload Status</h3>
    </div>
  );
}

function FileList() {
  return (
    <table className="table peer-list" style={{ borderRadius: "8px" }}>
      <thead>
        <tr style={{ borderRadius: "8px" }}>
          <th>
            <input type="checkbox" />
          </th>
          <th>Name</th>
          <th>Pin Status</th>
          <th>Size</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td>Movie.mp4</td>
          <td>Pin Status</td>
          <td>Size</td>
        </tr>
      </tbody>
    </table>
  );
}

export default function FileUploadPage() {
  return (
    <motion.div
      className="content file-upload-page"
      initial="initial"
      animate="final"
      variants={routeVariants}
    >
      <UploadStatus />
      <FileList />
    </motion.div>
  );
}
