import Navbar from "./component/navbar";
import Footer from "./component/footer"
import Card from "./component/card";

function App() {
  return (
    <>

      <Navbar />

      <div className="cards">
        <Card title="Props Title 1 " descritpion="This is props description 1"/>
        <Card title="Props Title 2 " descritpion="This is props description 2"/>
        <Card title="Props Title 3 " descritpion="This is props description 3"/>
        <Card title="Props Title 4 " descritpion="This is props description 4"/>
        <Card title="Props Title 5 " descritpion="This is props description 5"/>
        <Card title="Props Title 6 " descritpion="This is props description 6"/>
        <Card title="Props Title 7 " descritpion="This is props description 7"/>
        <Card title="Props Title 8 " descritpion="This is props description 8"/>
      </div>

      <Footer />


    </>
  );
}

export default App;
