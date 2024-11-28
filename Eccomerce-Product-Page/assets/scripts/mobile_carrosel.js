if(window.innerWidth < 810){
    let left_arrow = document.querySelector("#left_arrow");
    let right_arrow = document.querySelector("#right_arrow");
    let carrosem_dom = document.querySelector("#carrosem_dom");
    let index = 0;
    function leftindexupdate(){
        if(index > 0 && index <= 3){
            index --;
        }
    }
    left_arrow.addEventListener("click", function(){
        if(index > 0 && index <= 3){
            index --;
            switch(index){
                case 0:
                    carrosem_dom.src = 'assets/images/image-product-1.jpg'
                    break
                case 1:
                    carrosem_dom.src = 'assets/images/image-product-2.jpg'
                    break
                case 2:
                    carrosem_dom.src = 'assets/images/image-product-3.jpg'
                    break
                case 3:
                    carrosem_dom.src = 'assets/images/image-product-4.jpg'
                    break
            }
        }
    })
    right_arrow.addEventListener("click", function(){
        if(index >= 0 && index <= 2){
            index ++;
            switch(index){
                case 0:
                    carrosem_dom.src = 'assets/images/image-product-1.jpg'
                    break
                case 1:
                    carrosem_dom.src = 'assets/images/image-product-2.jpg'
                    break
                case 2:
                    carrosem_dom.src = 'assets/images/image-product-3.jpg'
                    break
                case 3:
                    carrosem_dom.src = 'assets/images/image-product-4.jpg'
                    break
            }
        }
    })
}