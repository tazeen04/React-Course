/* 
    <div id ="parent">
        <div id ="child">
            <h1>I'm h1 text</h1>
            <h2>I'm h1 text</h2>
        </div>
    </div>

    ReactElement(Object) => HTML(browser Understand)
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");//creates a object and this is react element

console.log(parent); //returns a object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); //converts to html
