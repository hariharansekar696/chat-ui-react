export default function ViewChat() {
  return (
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
                <h5 class="chat-user-name text-truncate">Patrick Hendricks</h5>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div class="conversations">
              <div class="receive-message">
                Good morning, How are you? What about our next meeting?
              </div>
            </div>
          </li>
          <li>
            <div class="conversations">
              <div class="receive-message">Yeah everything is fine</div>
            </div>
          </li>
          <li>
            <div class="conversations right">
              <div class="sent-message">
                Good morning, How are you? What about our next meeting?
              </div>
            </div>
          </li>
          <li>
            <div class="conversations">
              <div class="receive-message">
                Good morning, How are you? What about our next meeting?
              </div>
            </div>
          </li>
          <li>
            <div class="conversations">
              <div class="receive-message">Yeah everything is fine</div>
            </div>
          </li>
          <li>
            <div class="conversations right">
              <div class="sent-message">
                Good morning, How are you? What about our next meeting?
              </div>
            </div>
          </li>
          <li>
            <div class="conversations">
              <div class="receive-message">
                Good morning, How are you? What about our next meeting?
              </div>
            </div>
          </li>
          <li>
            <div class="conversations">
              <div class="receive-message">Yeah everything is fine</div>
            </div>
          </li>
          <li>
            <div class="conversations right">
              <div class="sent-message">
                Good morning, How are you? What about our next meeting?
              </div>
            </div>
          </li>
          <li>
            <div class="conversations">
              <div class="receive-message">
                Good morning, How are you? What about our next meeting?
              </div>
            </div>
          </li>
          <li>
            <div class="conversations">
              <div class="receive-message">Yeah everything is fine</div>
            </div>
          </li>
          <li>
            <div class="conversations">
              <div class="receive-message">Yeah everything is fine</div>
            </div>
          </li>
          <li>
            <div class="conversations">
              <div class="receive-message">Yeah everything is fine</div>
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
  );
}
