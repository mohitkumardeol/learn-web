function docReady() {
    var parent = document.querySelectorAll(".parent > span");

    Array.from(parent).forEach((parent) => {
        parent.addEventListener("click", (event) => {
            event.stopImmediatePropagation();
            event.preventDefault();

            // var subCategories = parent.getElementsByClassName("sub-category");
            var subCategory = parent.nextElementSibling;

            var oldClassName = subCategory.classList.contains("collapse") ? "collapse" : "expand";
            var newClassName = oldClassName === "collapse" ? "expand" : "collapse";

            subCategory.classList.remove(oldClassName);
            subCategory.classList.add(newClassName);

        })
    })
}