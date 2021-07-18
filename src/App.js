import "./App.scss";
import { CHATS, FILES } from "./utils/constants";

function App() {
  function handleThemeChange(themeColor) {
    for (let i = 0; i < document.body.classList.length; i++) {
      const className = document.body.classList[i];

      if (className.startsWith("theme-")) {
        document.body.classList.remove(className);
      }
    }
    document.body.classList.add(themeColor || "theme-purple");
  }
  return (
    <div className="App">
      <section>
        <div className="row chat-container">
          <div className="col-lg-4 chat-left-layout">
            <div class="row h-100">
              {/* Side bar starts here */}
              <div class="sidebar-left col-lg-2">
                <div class="sidebar-left-inner">
                  <ul>
                    <li>
                      <span class="input-group-text">
                        <i class="far fa-comment-alt"></i>
                      </span>
                    </li>
                    <li>
                      <span class="input-group-text active">
                        <i class="fas fa-user-friends"></i>
                      </span>
                    </li>
                    <li>
                      <span class="input-group-text">
                        <i class="fas fa-cog"></i>
                      </span>
                    </li>
                    <li class="theme">
                      <div
                        onClick={() => handleThemeChange("theme-default")}
                      ></div>
                      <div
                        onClick={() => handleThemeChange("theme-dark")}
                      ></div>
                      <div
                        onClick={() => handleThemeChange("theme-purple")}
                      ></div>
                    </li>
                    <li>
                      <img
                        src="http://chatvia-light.react.themesbrand.com/static/media/avatar-3.2cfd5ba6.jpg"
                        class="rounded-circle avatar"
                        alt="chat-ui"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              {/* side bar ends here */}

              {/* chat starts here */}
              <div class="chat-users col-lg-10">
                <ul class="list-group-header">
                  <li class="list-group-header-title">
                    <i class="fas fa-chevron-left list-group-header-icon"></i>
                    Chats
                  </li>
                  <li>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search Messages or users"
                      />
                      <span class="input-group-text">
                        <i class="fas fa-search"></i>
                      </span>
                    </div>
                  </li>
                </ul>
                <ul class="list-group-chat">
                  {CHATS.map((chat) => (
                    <li
                      className={
                        chat.isActive ? "list-item active" : "list-item"
                      }
                    >
                      <div class="list-item-inner">
                        <div
                          className={
                            chat.isOnline
                              ? "chat-user-img online"
                              : "chat-user-img"
                          }
                        >
                          <img
                            src={chat.profilePic}
                            class="rounded-circle avatar"
                            alt="chat-ui"
                          />
                          <span class="user-status"></span>
                        </div>
                        <div class="chat-user">
                          <h5 class="chat-user-name text-truncate">
                            {chat.name}
                          </h5>
                          <p class="chat-user-message">
                            {chat?.lastMessage?.message}
                          </p>
                        </div>
                        <div class="chat-user-time">
                          {chat?.lastMessage?.timeStamp}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Chat Messages and Shared files starts here */}
          <div className="col-lg-8 chat-right-layout">
            <div class="row h-100">
              {/* Chat Messages section starts here */}
              <div class="chat-messages col-lg-8">
                <div class="chat-messages-inner">
                  <ul class="list-group-chat-name">
                    <li class="list-item">
                      <div class="list-item-inner">
                        <div class="chat-user-img">
                          <img
                            src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            class="rounded-circle avatar"
                            alt="chat-ui"
                          />
                        </div>
                        <div class="chat-user">
                          <h5 class="chat-user-name text-truncate">
                            Patrick Hendricks
                          </h5>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <div class="conversations">
                        <div class="receive-message">
                          Good morning, How are you? What about our next
                          meeting?
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="conversations">
                        <div class="receive-message">
                          Yeah everything is fine
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="conversations right">
                        <div class="sent-message">
                          Good morning, How are you? What about our next
                          meeting?
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="conversations">
                        <div class="receive-message">
                          Good morning, How are you? What about our next
                          meeting?
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="conversations">
                        <div class="receive-message">
                          Yeah everything is fine
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="conversations right">
                        <div class="sent-message">
                          Good morning, How are you? What about our next
                          meeting?
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="conversations">
                        <div class="receive-message">
                          Good morning, How are you? What about our next
                          meeting?
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="conversations">
                        <div class="receive-message">
                          Yeah everything is fine
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="conversations right">
                        <div class="sent-message">
                          Good morning, How are you? What about our next
                          meeting?
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="conversations">
                        <div class="receive-message">
                          Good morning, How are you? What about our next
                          meeting?
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="conversations">
                        <div class="receive-message">
                          Yeah everything is fine
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="conversations">
                        <div class="receive-message">
                          Yeah everything is fine
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="conversations">
                        <div class="receive-message">
                          Yeah everything is fine
                        </div>
                      </div>
                    </li>
                  </ul>

                  {/* Chat Input starts here */}
                  <div class="chat-input">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Write your message..."
                      />
                      <span class="input-group-text">
                        <i class="far fa-smile"></i>
                      </span>
                      <span class="input-group-text">
                        <i class="fas fa-paperclip"></i>
                      </span>
                      <span class="input-group-text">
                        <div class="input-group-text-send">
                          <i class="fas fa-paper-plane"></i>
                        </div>
                      </span>
                    </div>
                  </div>
                  {/* Chat Input ends here */}
                </div>
              </div>
              {/* Chat Messages section ends here */}

              {/* User chat files section starts here */}
              <div class="sidebar-right col-lg-4">
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
                              <h5 class="file-name text-truncate">
                                {file.name}
                              </h5>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
