const Title = () => {
  return <h1>Topics covered</h1>;
};

const MyPara1 = () => {
  return (
    <p>
      The following is a list of all the topics we cover in the MDN learning
      area.
    </p>
  );
};
const MyPara2 = () => {
  return (
    <p>
      <a href="https://developer.mozilla.org/en-US/docs/Learn">
        Getting started with the web
      </a>
    </p>
  );
};
const MyPara3 = () => {
  return (
    <p style={{ marginLeft: "20px" }}>
      Provides a practical introduction to web development for complete
      beginners.
    </p>
  );
};
const MyPara4 = () => {
  return (
    <p>
      <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML">
        HTML — Structuring the web
      </a>
    </p>
  );
};
const MyPara5 = () => {
  return (
    <p style={{ marginLeft: "20px" }}>
      HTML is the language that we use to structure the different parts of our
      content and define what their meaning or purpose is. This topic teaches
      HTML in detail.
    </p>
  );
};
const MyPara6 = () => {
  return (
    <p>
      <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS">
        CSS — Styling the web
      </a>
    </p>
  );
};
const MyPara7 = () => {
  return (
    <p style={{ marginLeft: "20px" }}>
      CSS is the language that we use to control our web content's style and
      layout, as well as adding behavior like animation. This topic provides
      comprehensive coverage of CSS.
    </p>
  );
};

const MainContainer = () => {
  return (
    <div
      style={{
        // border: "2px solid black",
        maxWidth: "750px",
        margin: "0 auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        fontSize: "1.5em",
      }}
    >
      <Title />
      <MyPara1 />
      <MyPara2 />
      <MyPara3 />
      <MyPara4 />
      <MyPara5 />
      <MyPara6 />
      <MyPara7 />
    </div>
  );
};
ReactDOM.render(<MainContainer />, document.querySelector("#root"));
