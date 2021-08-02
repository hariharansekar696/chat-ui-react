import { CHATS } from "../utils/constants";

export default function ContactList() {
  return (
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
          <li className={chat.isActive ? "list-item active" : "list-item"}>
            <div class="list-item-inner">
              <div
                className={
                  chat.isOnline ? "chat-user-img online" : "chat-user-img"
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
                <h5 class="chat-user-name text-truncate">{chat.name}</h5>
                <p class="chat-user-message">{chat?.lastMessage?.message}</p>
              </div>
              <div class="chat-user-time">{chat?.lastMessage?.timeStamp}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
