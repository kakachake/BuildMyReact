const element = {
  type: "h1",
  props: {
    title: "foo",
    className: "bar",
    children: [
      "Hello",
      {
        type: "h2",
        props: {
          children: "World",
        },
      },
    ],
  },
};

const container = document.getElementById("root");
function render(element, container) {
  const node = document.createElement(element.type);
  Object.keys(element.props).forEach((key) => {
    if (key !== "children") {
      node[key] = element.props[key];
    }
  });

  const children =
    typeof element.props.children === "string"
      ? [element.props.children]
      : element.props.children;
  children.forEach((child) => {
    if (typeof child === "string") {
      const textNode = document.createTextNode("");
      textNode.nodeValue = child;
      node.appendChild(textNode);
    } else {
      render(child, node);
    }
  });
  container.appendChild(node);
}

render(element, container);
