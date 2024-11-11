let counter = 0;

            function count() {
                counter ++;
                document.querySelector("h1").innerHTML = counter;

                if (counter % 10 === 0) {
                    alert(`Counter is now ${counter}`);
                }
                //alert(counter) (сповіщення на сторінці, вспливаюче вікно);
                
            }

            //додати слухача подій DOM - обʼєктна модель документа, структура сторінки):
            document.addEventListener("DOMContentLoaded", function () {
                //document.querySelector ("button").addEventListener ("click", count);
                document.querySelector ("button").onclick = count;


                setInterval(count, 1000);
            })