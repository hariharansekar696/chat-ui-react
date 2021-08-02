import { FILES } from "../utils/constants";

export default function ContactInfo() {
  return (
    <div class="sidebar-right-inner">
      <ul class="list-group-header">
        <li class="list-group-header-title">
          <i class="fas fa-chevron-left list-group-header-icon"></i>
          Contact info
        </li>
      </ul>
      <ul class="user-image">
        <li>
          <img
            src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            class="rounded-circle avatar"
            alt="chat-ui"
          />
          <h3>Patrick Hendricks</h3>
          <div class="user-status">
            <span class="user-status-inner"></span>
            <span class="user-status-inner-text">Active</span>
          </div>
        </li>
      </ul>
      <div class="sidebar-right-inner-details">
        <ul class="contact-details">
          <h3>Details</h3>
          <li>
            <label>Email</label>
            <p>Patrick@mail.com</p>
          </li>
          <li>
            <label>Phone number </label>
            <p>9876543210</p>
          </li>
          <li>
            <label>Company</label>
            <p>TCES</p>
          </li>
          <li>
            <label>Birthday</label>
            <p>1990-11-20</p>
          </li>
          <li>
            <label>Address</label>
            <p>10401 Bennett Road, Fredonia NY 14063.</p>
          </li>
        </ul>
        <ul class="list-group-files-count">
          <li class="list-item">
            <div class="list-item-inner">
              <div class="file-icon">
                <i class="fas fa-copy"></i>
              </div>
              <div class="file">
                <h5 class="file-name text-truncate">All Files</h5>
                <p class="file-details">255</p>
              </div>
            </div>
          </li>
          <li class="list-item links">
            <div class="list-item-inner">
              <div class="file-icon">
                <i class="fas fa-link"></i>
              </div>
              <div class="file">
                <h5 class="file-name text-truncate">All Links</h5>
                <p class="file-details">100</p>
              </div>
            </div>
          </li>
        </ul>
        <ul class="list-group-files">
          <h3>Media</h3>
          {FILES.map((file) => (
            <li class="list-item">
              <div class="list-item-inner">
                <div class="file-icon">
                  <i
                    className={
                      ("fas",
                      file.fileType === "documents"
                        ? "fa-file-alt"
                        : file.fileType === "photos"
                        ? "fa-camera"
                        : file.fileType === "movies"
                        ? "fa-video"
                        : file.fileType === "others"
                        ? "fa-copy"
                        : "")
                    }
                  ></i>
                </div>
                <div class="file">
                  <h5 class="file-name text-truncate">{file.name}</h5>
                  <p class="file-details">
                    {file?.noOfFiles} files, {file?.size}
                  </p>
                </div>
                <div class="file-action">
                  <i class="fas fa-chevron-right"></i>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
