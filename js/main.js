
            var countDownDate, spele;
            function sakt(bv, bsk, pt) {//burtu veidi, katra burta sk, punkti par darbibu
                document.getElementById("myForm").style.display = "none";
                var punkti=0;
                countDownDate = new Date().getTime();
                spele = setInterval(skaita, 1000);
                taimeris();//uztaisis redzamu laika skaitisanu
                tablo();//izveido punktu skaita vietu
                izvburtus(bv,bsk);//izveido burtus
            }
        // Update the count down every 1 second
            function skaita() {
                let now = new Date().getTime();
                // Find the distance between now and the count down date
                let distance = now - countDownDate;

 

                // Time calculations for days, hours, minutes and seconds
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);

 

                // Output the result in an element with id="demo"
                document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";

 

                // If the count down is over, write some text 
                if (distance > 5000) {
                    clearInterval(spele);
                    document.getElementById("demo").innerHTML = "EXPIRED";
                }
            }
            function taimeris(){
            
            }
            function izvburtus(bv,bsk){
                for(let i=0; i<bv.length; i++){
                    for(let j=0; j<bsk;j++){
                        if(j===0){
                            let k = document.laukums.createElement("DIV"); k.id="kaste";//cikla 1. reizee izveido burta kasti
                            document.laukums.appendChild(k); k.innerHTML="i";
                            
                        }
                    }
                }
            }

            function dragElement(elmnt) {
                var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
                if (document.getElementById(elmnt.id + "header")) {
                    /* if present, the header is where you move the DIV from:*/
                    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
                } else {
                    /* otherwise, move the DIV from anywhere inside the DIV:*/
                    elmnt.onmousedown = dragMouseDown;
                }
                function dragMouseDown(e) {
                    e = e || window.event;
                    e.preventDefault();
                    // get the mouse cursor position at startup:
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    document.onmouseup = closeDragElement;
                    // call a function whenever the cursor moves:
                    document.onmousemove = elementDrag;
                }
                function elementDrag(e) {
                    e = e || window.event;
                    e.preventDefault();
                    // calculate the new cursor position:
                    pos1 = pos3 - e.clientX;
                    pos2 = pos4 - e.clientY;
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    // set the element's new position:
                    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                }
                function closeDragElement() {
                    /* stop moving when mouse button is released:*/
                    document.onmouseup = null;
                    document.onmousemove = null;
                }
            }
            function vards(){
                 document.getElementById("myForm").style.display = "block";
            }