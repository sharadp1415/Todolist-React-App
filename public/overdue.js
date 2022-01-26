const timer = setInterval(() => {
  const now = Date.now();

  const elements = document.querySelectorAll(".todo-item-container");

  elements.forEach((element) => {
    const isCompleted = element.getAttribute("data-isCompleted");
    const date = new Date(
      element.getAttribute("data-time") +
        " " +
        element.getAttribute("data-date")
    );

    if (date < now) {
      if (isCompleted === "true") {
        element.classList.remove("overdue");
      } else {
        element.classList.add("overdue");
      }
    }
  });
}, 1000);
