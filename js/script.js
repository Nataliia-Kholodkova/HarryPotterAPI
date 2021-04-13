function sliderMove(element) {
    const direction = +element.dataset.dir;
    const width = slider.querySelector(".hero-card__small").offsetWidth;
    let left = slider.style.left ? parseInt(slider.style.left) : 0;
    if (Math.abs(left + direction * width) == slider.children.length * width) {
        slider.style.left = "0px";
    } else if (left + direction * width > 0) {
        slider.style.left = `-${
            (slider.children.length * width - width) * direction
        }px`;
    } else {
        slider.style.left = `${left + width * direction}px`;
    }
}

function modalFormHandler() {
    modalForm.classList.remove("modal-closed");
    modalForm.classList.add("modal-open");
    modalForm
        .querySelector(".btn-modal")
        .addEventListener("click", function () {
            modalForm.classList.add("modal-closed");
            modalForm.classList.remove("modal-open");
        });
}

const sliderButtons = document.querySelectorAll(".btn-list");
const slider = document.querySelector(".hero-list__slider");
const findButton = document.querySelector(".btn-find");
const modalForm = document.querySelector(".modal");

sliderButtons.forEach((btn) =>
    btn.addEventListener("click", ({ target }) => {
        sliderMove(target);
    })
);

findButton.addEventListener('click', modalFormHandler)
