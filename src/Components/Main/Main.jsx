import "./Main.scss";

function Main() {
  return (
    <section className="hero-section">
      <img
        alt="Main banner"
        className="hero-img"
        width="50%"
        height="400px"
        src={require("../../images/hero.jpg")}
      />
      <div className="hero-info">
        <p className="title">LOREM IPSUM</p>
        <p className="article">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was in the 1960s with the release of sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </section>
  );
}

export default Main;