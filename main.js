//// our service
const serviceLinkArr = document.querySelectorAll(".service-link");
const serviceContentArr = document.querySelectorAll(".service-content");

serviceLinkArr.forEach((link) => {
  link.addEventListener("click", () => {
    const dataLink = link.getAttribute("data-link");
    const content = document.querySelector(dataLink);

    if (!link.classList.contains("active-service-link")) {
      serviceLinkArr.forEach((item) => {
        item.classList.remove("active-service-link");
      });

      serviceContentArr.forEach((item) => {
        item.classList.remove("clickable-info");
      });

      link.classList.add("active-service-link");
      content.classList.add("clickable-info");
    }
  });
});

serviceLinkArr[0].click();

//////work section

const workSectionNav = document.querySelector(".work-section-menu");
const workSectionBtns = document.querySelectorAll(".work-section-menu-tab");
const workSectionContentContainer =
  document.querySelector(".work-section-grid");
const workSectionContentItems = document.querySelectorAll(
  ".work-section-item-container"
);
const loadMoreBtn = document.querySelector(".load-more-button");
const loader = document.querySelector(".lds-ellipsis");

workSectionNav.addEventListener("click", (e) => {
  const workBtnData = e.target.dataset.id;

  if (e.target.classList.contains("work-section-menu-tab")) {
    workSectionBtns.forEach((btn) => {
      btn.classList.remove("active-work-section-tab");
      e.target.classList.add("active-work-section-tab");
    });
  }

  const objOfCategories = {
    all: "all",
    graphicDesign: "graphicDesign",
    webDesign: "webDesign",
    landingPages: "landingPages",
    wordPress: "wordPress",
  };

  for (let categorie in objOfCategories) {
    if (objOfCategories[categorie] === workBtnData) {
      workSectionContentItems.forEach((item) => {
        item.style.display = "none";

        if (item.getAttribute("data-id") === workBtnData) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }

        if (workBtnData === "all") {
          item.style.display = "block";
        }
      });
    }
  }
});

document.querySelector(".work-section-menu-tab").click();

const categoriesArr = [
  "graphicDesign",
  "webDesign",
  "landingPages",
  "wordPress",
  "webDesign",
  "landingPages",
  "graphicDesign",
  "wordPress",
  "graphicDesign",
  "landingPages",
  "webDesign",
  "wordPress",
];

const hoveredAdditionalItemContent = [
  "Graphic design",
  "Web design",
  "LandingPages",
  "WordPress",
  "Web design",
  "LandingPages",
  "Graphic design",
  "WordPress",
  "Graphic design",
  "LandingPages",
  "Web design",
  "WordPress",
];

const additionalImgArr = [
  "img/work-section-grid/graphic-design/graphic-design1.jpg",
  "img/work-section-grid/web-design/web-design1.jpg",
  "img/work-section-grid/landing-pages/landing-page3.jpg",
  "img/work-section-grid/wordpress/wordpress1.jpg",
  "img/work-section-grid/web-design/web-design2.jpg",
  "img/work-section-grid/landing-pages/landing-page6.jpg",
  "img/work-section-grid/graphic-design/graphic-design2.jpg",
  "img/work-section-grid/wordpress/wordpress2.jpg",
  "img/work-section-grid/graphic-design/graphic-design3.jpg",
  "img/work-section-grid/landing-pages/landing-page7.jpg",
  "img/work-section-grid/web-design/web-design3.jpg",
  "img/work-section-grid/wordpress/wordpress3.jpg",
];

loadMoreBtn.addEventListener("click", (e) => {
  loadMoreBtn.style.display = "none";
  loader.style.display = "inline-block";

  setTimeout(() => {
    loader.style.display = "none";

    additionalImgArr.forEach((img, index) => {
      const additionalItemClone = document
        .querySelector(".work-section-item-container")
        .cloneNode(true);

      additionalItemClone.dataset.id = categoriesArr[index];

      const additionalImg = additionalItemClone.querySelector(
        ".work-section-link-img"
      );
      const additionalText = additionalItemClone.querySelector(
        ".work-section-link-text"
      );
      const addtionalTitle = additionalItemClone.querySelector(
        ".work-section-link-title"
      );

      addtionalTitle.textContent = hoveredAdditionalItemContent[index];

      additionalText.textContent = hoveredAdditionalItemContent[index];
      additionalImg.src = additionalImgArr[index];

      workSectionContentContainer.append(additionalItemClone);
    });

    const activeWorkSectionTabId = document.querySelector(
      ".active-work-section-tab"
    ).dataset.id;

    const newItemsArr = document.querySelectorAll(
      ".work-section-item-container"
    );

    const objOfCategories = {
      all: "all",
      graphicDesign: "graphicDesign",
      webDesign: "webDesign",
      landingPages: "landingPages",
      wordPress: "wordPress",
    };

    for (let categorie in objOfCategories) {
      if (objOfCategories[categorie] === activeWorkSectionTabId) {
        newItemsArr.forEach((item) => {
          item.style.display = "none";

          if (item.getAttribute("data-id") === activeWorkSectionTabId) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }

          if (activeWorkSectionTabId === "all") {
            item.style.display = "block";
          }
        });
      }
    }

    workSectionNav.addEventListener("click", (e) => {
      const navBtnId = e.target.dataset.id;
      for (let categorie in objOfCategories) {
        if (objOfCategories[categorie] === navBtnId) {
          newItemsArr.forEach((item) => {
            item.style.display = "none";

            if (item.getAttribute("data-id") === navBtnId) {
              item.style.display = "block";
            } else {
              item.style.display = "none";
            }

            if (navBtnId === "all") {
              item.style.display = "block";
            }
          });
        }
      }
    });
  }, 1000);
});

/////// slider
const prevBtn = document.querySelector(".left-slider-btn");
const nextBtn = document.querySelector(".right-slider-btn");
const slides = document.querySelectorAll(".client-feedback-content");
const smallImgDots = document.querySelectorAll(".small-slider-avatar");

let currentItem = 1;

const activeSlide = (index) => {
  slides.forEach((slide) =>
    slide.classList.remove("client-feedback-content-active")
  );

  slides[index].classList.add("client-feedback-content-active");
};

const activeSmallImgDot = (index) => {
  smallImgDots.forEach((smallImgDot) =>
    smallImgDot.classList.remove("small-slider-avatar-active")
  );

  smallImgDots[index].classList.add("small-slider-avatar-active");
};

const nextSlide = () => {
  if (currentItem == slides.length - 1) {
    currentItem = 0;
    activeSlide(currentItem);
    activeSmallImgDot(currentItem);
  } else {
    currentItem++;
    activeSlide(currentItem);
    activeSmallImgDot(currentItem);
  }
};

const prevSlide = () => {
  if (currentItem == 0) {
    currentItem = slides.length - 1;
    activeSlide(currentItem);
    activeSmallImgDot(currentItem);
  } else {
    currentItem--;
    activeSlide(currentItem);
    activeSmallImgDot(currentItem);
  }
};

smallImgDots.forEach((smallAv, index) => {
  smallAv.addEventListener("click", () => {
    currentItem = index;
    activeSlide(currentItem);
    activeSmallImgDot(currentItem);
  });
});

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);
