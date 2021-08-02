import "./App.scss";
import ContactInfo from "./layout/ContactInfo";
import ContactList from "./layout/ContactList";
import Menu from "./layout/Menu";
import ViewChat from "./layout/ViewChat";

function App() {
  return (
    <div className="App">
      <section>
        <div className="row chat-container">
          <div className="col-lg-4 chat-left-layout">
            <div class="row h-100">
              {/* Side bar starts here */}
              <Menu />
              {/* side bar ends here */}

              {/* chat starts here */}
              <ContactList />
            </div>
          </div>

          {/* Chat Messages and Shared files starts here */}
          <div className="col-lg-8 chat-right-layout">
            <div class="row h-100">
              {/* Chat Messages section starts here */}
              <ViewChat />
              {/* Chat Messages section ends here */}

              {/* User chat files section starts here */}
              <div class="sidebar-right col-lg-4">
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
