import PersonChat from "../components/PersonChat";
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
          <PersonChat chat={chat} />
        ))}
      </ul>
    </div>
  );
}
