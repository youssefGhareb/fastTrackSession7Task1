window.onload = function () {
    var numOfBoxes = 4;
    var container = document.createElement("section");
    container.className = "container my-5"
    document.body.append(container);
    var blueThemeBtn = document.createElement("button");
    blueThemeBtn.classList.add("rounded-circle", "btn", "btn-primary", "p-3", "mb-5");
    blueThemeBtn.id = "blueThemeToggle";
    var orangeThemBtn = document.createElement("button");
    orangeThemBtn.classList.add("rounded-circle", "btn", "btn-warning", "p-3", "mb-5", "ms-2");
    orangeThemBtn.id = "orangeThemeToggle";
    container.append(blueThemeBtn);
    container.append(orangeThemBtn);
    var row = document.createElement("div");
    row.classList.add("row", "gy-3");
    container.append(row);

    for (var i = 0; i < numOfBoxes; i++) {
        var col =
            '<div class="col-md-4"> \n' +
            '<div class="d-flex align-items-center gap-3 bg-primary text-white p-4 rounded card-cont"> \n' +
            '<div> \n' +
            '<h1>card title</h1> \n' +
            '<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque dolore nemo vero sit facere cum in velit, vel quaerat accusamus id inventore perferendis deleniti natus dolor </p> \n' +
            '</div > \n' +
            '<button type="button" class="btn btn-danger delete-card">delete</button> \n' +
            '</div> \n' +
            '</div>'

        row.innerHTML += col;
    }

    var deleteBtns = document.getElementsByClassName("delete-card");
    for (var i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener("click", function (e) {
            e.target.parentElement.parentElement.remove();
        })
    }

    document.getElementById("orangeThemeToggle").addEventListener("click", function () {
        var cards = document.getElementsByClassName("card-cont");
        for (var i = 0; i < cards.length; i++) {
            cards[i].classList.remove('bg-primary');
            cards[i].classList.add('bg-warning');
        }
    });

    document.getElementById("blueThemeToggle").addEventListener("click", function () {
        var cards = document.getElementsByClassName("card-cont");
        for (var i = 0; i < cards.length; i++) {
            cards[i].classList.remove('bg-warning');
            cards[i].classList.add('bg-primary');
        }
    });

}