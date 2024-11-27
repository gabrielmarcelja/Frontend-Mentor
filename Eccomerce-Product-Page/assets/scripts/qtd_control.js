let minus_btn = document.querySelector("#minus_btn");
let max_btn = document.querySelector("#max_btn");
let qtd_span_h = document.querySelector("#cart_icon_qtdv");

minus_btn.addEventListener("click", min_qtd);
max_btn.addEventListener("click", max_qtd);

function updateQtdDisplay(qtd) {
    document.querySelector("#qtd_value").innerHTML = qtd;
    qtd_span_h.innerHTML = qtd;

    if (qtd > 0) {
        qtd_span_h.style.display = 'block';
    } else {
        qtd_span_h.style.display = 'none';
    }
}

function max_qtd() {
    let qtd = parseInt(document.querySelector("#qtd_value").innerHTML);
    if (qtd < 100) {
        qtd++;
        updateQtdDisplay(qtd);
    }
}

function min_qtd() {
    let qtd = parseInt(document.querySelector("#qtd_value").innerHTML);
    if (qtd > 0) {
        qtd--;
        updateQtdDisplay(qtd);
    }
}
