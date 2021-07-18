import "./App.scss";
import { CHATS } from "./utils/constants";

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
          <div className="col-lg-8 chat-right-layout">right layout</div>
        </div>
      </section>
    </div>
  );
}

export default App;
