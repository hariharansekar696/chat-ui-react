export default function PersonChat({ chat }) {
  return (
    <li className={chat.isActive ? "list-item active" : "list-item"}>
      <div class="list-item-inner">
        <div
          className={chat.isOnline ? "chat-user-img online" : "chat-user-img"}
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
  );
}
