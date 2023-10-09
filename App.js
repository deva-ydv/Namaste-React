/*<div id="parent">
    <div id="child">
        <h1>h1 </h1>
        <h1>h1 </h1>
    </div>
</div>

ReactElement(Object) => HTML(Browser Understand)
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "iam h1 tag"),
    React.createElement("h1", {}, "iam h1 tag"),
  ])
);
// this is the core react to make the html structure 

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);

// const heading = React.createElement("h1", { id: "heading" }, "react app"); //its create a object and its not a h1 tag
// console.log(heading) // return object to you
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // its basically responsible for converting a object to a h1 tag and put it on the dom
