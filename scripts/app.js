const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const timeline = document.querySelector(".timeline");
const timelineImages = document.querySelectorAll(
  ".timeline__element__decoration"
);
const timelineButtons = document.querySelectorAll(".timeline__element__button");
const timelineElements = document.querySelectorAll(".timeline__element");

// toggle timeline element info
function toggleTimelineElement(elementIndex, timelineElements) {
  try {
    const elementPhase = timelineElements[elementIndex].querySelector(
      ".timeline__element__body"
    );
    const elementInfo = timelineElements[elementIndex].querySelector(
      ".timeline__element__info"
    );

    // phase info is hidden
    if (elementPhase.classList.contains("hidden")) {
      elementInfo.classList.add("visuallyHidden");
      elementInfo.addEventListener(
        "transitionend",
        function (e) {
          elementInfo.classList.add("hidden");
          elementPhase.classList.remove("hidden");
        },
        {
          capture: false,
          once: true,
          passive: false,
        }
      );
    } else {
      elementPhase.classList.add("hidden");
      elementInfo.classList.remove("hidden");
      setTimeout(() => {
        elementInfo.classList.remove("visuallyHidden");
      }, 20);
    }
  } catch (e) {
    return;
  }
}

function resetTimelineElements(timeline) {
  try {
    const elementPhaseArr = timeline.querySelectorAll(
      ".timeline__element__body"
    );
    const elementInfoArr = timeline.querySelectorAll(
      ".timeline__element__info"
    );

    // reset all timeline elements to default
    for (const [index, elementInfo] of Object.entries(elementInfoArr)) {
      if (!elementInfo.classList.contains("hidden")) {
        elementInfo.classList.add("visuallyHidden");
        elementInfo.addEventListener(
          "transitionend",
          function (e) {
            elementInfo.classList.add("hidden");
            elementPhaseArr[index].classList.remove("hidden");
          },
          {
            capture: false,
            once: true,
            passive: false,
          }
        );
      }
    }
  } catch (e) {
    return;
  }
}

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

for (const [elementIndex, timelineImage] of Object.entries(timelineImages)) {
  timelineImage.addEventListener("click", () => {
    resetTimelineElements(timeline);
    toggleTimelineElement(elementIndex, timelineElements);
  });
}

for (const [elementIndex, timelineButton] of Object.entries(timelineButtons)) {
  timelineButton.addEventListener("click", () => {
    toggleTimelineElement(elementIndex, timelineElements);
  });
}
