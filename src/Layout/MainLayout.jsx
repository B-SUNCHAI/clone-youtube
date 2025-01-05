import Nav from "../Components/Nav/Nav";
import Content from "../Components/Contents/Content";
import Sidebar from "../Components/Sidebar/Sidebar";

function MainLayout() {
  return (
    <section id="main-layout">
      <Nav></Nav>
      <Sidebar></Sidebar>
      <Content></Content>
    </section>
  );
}

export default MainLayout;
