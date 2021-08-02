export default function Menu() {
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
            <div onClick={() => handleThemeChange("theme-default")}></div>
            <div onClick={() => handleThemeChange("theme-dark")}></div>
            <div onClick={() => handleThemeChange("theme-purple")}></div>
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
  );
}
