import React from "react";
import { createRoot } from "react-dom/client";
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am an H1 tag"),
//     React.createElement("h2", {}, "I am an H2 tag hhhhhh"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am an H1 tag"),
//     React.createElement("h2", {}, "I am an H2 tag"),
//   ]),
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
const heading = (
  <h1 id="heading" tabIndex="0">
    Hello World by sandy 💕
  </h1>
);

const HeadingComponent = () => {
  return (
    <div>
      {heading}
      <h2 className="heading">Namaste React by Sandy 🚀</h2>;
      <h2> just checking how it works</h2>;
    </div>
  );
};

const HeadingComponent2 = () => (
  <div id="container">
    {heading}
    {HeadingComponent()}
    <h1>Hello i am Container from component 2</h1>
    <h2>Hello i am h2 tag from component 2</h2>
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<HeadingComponent2 />);
