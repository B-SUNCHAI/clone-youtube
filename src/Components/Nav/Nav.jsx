import "./NavStyle.css";

function Nav() {
  return (
    <section id="nav">
      <div className="-brand">
        <div className="-ham">
          <img src="https://www.svgrepo.com/show/510067/menu.svg" alt="" />
        </div>
        <div className="-logo">
          <img src="https://www.svgrepo.com/show/354594/youtube.svg" alt="" />
        </div>
      </div>
      <div className="-center">
        <div className="-search">
          <div className="-search-box">
            <input type="text" placeholder="ค้นหา" className="-search-input" />
          </div>
          <div className="-btn">
            <img src="https://www.svgrepo.com/show/489791/search.svg" alt="" />
          </div>
        </div>
        <div className="-voice">
          <img
            src="https://www.svgrepo.com/show/522179/microphone.svg"
            alt=""
          />
        </div>
      </div>
      <div className="-end">
        <div className="-end-item-adding">
          <div className="-plus">+</div>
          <div className="-create">สร้าง</div>
        </div>
        <div className="-end-item">
          <img src="https://www.svgrepo.com/show/532089/bell-alt.svg" alt="" />
        </div>
        <div className="-end-item-user">
          <img
            onclick="myFunction()"
            src="https://yt3.ggpht.com/yti/ANjgQV_N66crY8h3s7jjoJBoJ76exCJgiq6TIHbjQJyt7A=s88-c-k-c0x00ffffff-no-rj"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Nav;
