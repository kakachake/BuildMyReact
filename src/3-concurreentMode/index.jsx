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
  function createTextElement(text) {
    return {
      type: "TEXT_ELEMENT",
      props: {
        nodeValue: text,
        children: [],
      },
    };
  }

  let nextUnitOfWork = null;

  function workLoop(deadline) {
    let shouldYield = false;
    while (nextUnitOfWork && !shouldYield) {
      nextUnitOfWork = perfomUnitOfWork(nextUnitOfWork);
      shouldYield = deadline.timeRemaining() < 1;
    }
    requestIdleCallback(workLoop);
  }

  requestIdleCallback(workLoop);

  function perfomUnitOfWork(nextUnitOfWork) {
    // TODO
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
