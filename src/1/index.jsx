const Karo = (() => {
  const TEXT_ELEMENT = "TEXT_ELEMENT";

  function createElement(type, props, ...children) {
    return {
      type,
      props: {
        ...props,
        children: children.map((child) => {
          return typeof child === "object" ? child : createTextElement(child);
        }),
      },
    };
  }

  function render(element, container) {
    const dom =
      element.type === TEXT_ELEMENT
        ? document.createTextNode("")
        : document.createElement(element.type);
    Object.keys(element.props).forEach((key) => {
      if (key !== "children") {
        dom[key] = element.props[key];
      }
    });

    element.props.children.forEach((child) => {
      render(child, dom);
    });
    container.appendChild(dom);
  }

  function createTextElement(text) {
    return {
      type: "TEXT_ELEMENT",
      props: {
        nodeValue: text,
        children: [],
      },
    };
  }
  return {
    createElement,
    render,
  };
})();

/** @jsx Karo.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);

const container = document.getElementById("root");
console.log(element);
Karo.render(element, container);
