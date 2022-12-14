const columnInBoard = document.querySelectorAll('.step > .step_display > ul > li');

// console.log(columnInBoard);

for(var i=0; i<columnInBoard.length; i++) {
    let number = parseInt(columnInBoard[i].innerText) * 30;
    let toHeight = number.toString();
    columnInBoard[i].style.height = toHeight + 'px';
}

const previousStep = document.querySelector('#goBack');
const nextStep = document.querySelector('#go');
const toTop = document.querySelector('#toTop');

var currentStep = 1;

// open step1

const step = document.querySelectorAll('.step');

for(var i=0; i<step.length; i++) {
    step[i].style.display = "none";
}

step[currentStep-1].style.display = "flex";

// move from step to step

// console.log(stringCurrentStep);

toTop.onclick = function(e) {
    currentStep = 1;
    for(var i=0; i<step.length; i++) {
        step[i].style.display = "none";
    }
    
    step[currentStep-1].style.display = "flex";
}

previousStep.onclick = function(e) {
    if(currentStep === 1) return;
    else  {
        currentStep--;
        var stringCurrentStep = "step" + currentStep.toString();
        // document.getElementById(stringCurrentStep).scrollIntoView();
        for(var i=0; i<step.length; i++) {
            step[i].style.display = "none";
        }
        
        step[currentStep-1].style.display = "flex";
    }
}

nextStep.onclick = function(e) {
    if(currentStep === 6) return;
    else {
        currentStep++;
        var stringCurrentStep = "step" + currentStep.toString();
        // document.getElementById(stringCurrentStep).scrollIntoView();
        for(var i=0; i<step.length; i++) {
            step[i].style.display = "none";
        }
        
        step[currentStep-1].style.display = "flex";
    }
}

// change the language

const intro = document.querySelector('.intro');

const changeLanguage = document.querySelector('#language');

var isEng = true;

changeLanguage.onclick = function(e) {

    // from english to vietnamese
    if(isEng) {
        isEng = false;

        // intro
        intro.innerHTML = "Thu???t to??n Quick sort";

        //direct
        previousStep.innerHTML = "B?????c tr?????c";
        nextStep.innerHTML = "B?????c sau";
        toTop.innerHTML = "Quay l???i b?????c 1";
        changeLanguage.innerHTML = "Thay ?????i ng??n ng???";

        // step 1

        var step1_h4 = document.querySelector('#step1 > .step_des > h4');
        var step1_p = document.querySelectorAll('#step1 > .step_des > p');

        step1_h4.innerHTML = "B?????c ?????u ti??n";
        step1_p[0].innerHTML = " - ?????u ti??n, Ta c?? 9 s??? nguy??n d????ng kh??c nhau c?? gi?? tr??? ???????c cho b???i c??c c???t nh?? h??nh b??n tr??i";
        step1_p[1].innerHTML = " - Ta ph???i ch???n 1 s??? (pivot number) trong c??c s??? ???? cho. Th?????ng th?? ta s??? ch??? trung v??? c???a d??y s??? l??m pivot number ?????u ti??n";
        step1_p[2].innerHTML = " - Trong v?? d??? n??y ta ch???n s??? 6"; 

        // step 2

        var step2_h4 = document.querySelector('#step2 > .step_des > h4');
        var step2_p = document.querySelectorAll('#step2 > .step_des > p');

        step2_h4.innerHTML = "Sau ????";
        step2_p[0].innerHTML = " - ??? ph??a b??n tr??i c???a pivot number, ta s??? gi??? l???i nh???ng s??? b?? h??n n?? v?? chuy???n nh???ng s??? l???n h??n sang b??n ph???i, v?? l??m t????ng t??? v???i b??n c??n l???i";
        step2_p[1].innerHTML = " - Sau b?????c n??y ta s??? c?? ???????c th??? t??? nh?? b??n tr??i";
        step2_p[2].innerHTML = " - Ti???p theo, ta l???p l???i qu?? tr??nh t????ng t??? v???i c??c s??? ??? ph??a b??n tr??i s??? 6, v???i 1 pivot number m???i l?? 5";

        // step 3

        var step3_h4 = document.querySelector('#step3 > .step_des > h4');
        var step3_p = document.querySelectorAll('#step3 > .step_des > p');

        step3_h4.innerHTML = "Ti???p theo";
        step3_p[0].innerHTML = " - L??m t????ng t??? v???i ph??a b??n ph???i b???ng c??ch ch???n pivot number l?? 9";

        // step 4

        var step4_h4 = document.querySelector('#step4 > .step_des > h4');
        var step4_p = document.querySelectorAll('#step4 > .step_des > p');

        step4_h4.innerHTML = "Ti???p theo ????";
        step4_p[0].innerHTML = " - Sau khi ???? th???c hi???n c??c b?????c gi???ng nh?? ???? l??m tr?????c ????, ch??ng ta s??? c?? th??? t??? nh?? sau. L??u ?? r???ng ch????ng tr??nh v???n s??? ch???y th??m 1 b?????c n???a, c??ng t????ng t??? nh?? c??c b?????c tr??n v???i 2 s??? ???? l?? 7 v?? 8, nh???ng v?? ch??ng ???? ??? ????ng v??? tr?? n??n th??? t??? c???a ch??ng kh??ng b??? thay ?????i";

        // step 5

        var step5_h4 = document.querySelector('#step5 > .step_des > h4');
        var step5_p = document.querySelectorAll('#step5 > .step_des > p');

        step5_h4.innerHTML = "V?? ... ";

        // step 6 

        var step6_h4 = document.querySelector('#step6 > .step_des > h4');
        var step6_p = document.querySelectorAll('#step6 > .step_des > p');

        step6_h4.innerHTML = "Ch??ng ta c?? c??c s??? ???????c s???p x???p";
    }

    else {
        isEng = true;

        // intro
        intro.innerHTML = "QUICK SORT ALGORITHM";

        //direct
        previousStep.innerHTML = "Previous step";
        nextStep.innerHTML = "Next step";
        toTop.innerHTML = "Go back";
        changeLanguage.innerHTML = "Language change";

        // step 1

        var step1_h4 = document.querySelector('#step1 > .step_des > h4');
        var step1_p = document.querySelectorAll('#step1 > .step_des > p');

        step1_h4.innerHTML = "Starting step";
        step1_p[0].innerHTML = " - First, we have 9 different integers whose value given by those column on the left";
        step1_p[1].innerHTML = " - We have to chose the pivot number of those numbers. Normally, the median of the array will be the first pivot";
        step1_p[2].innerHTML = " - On this example, number 6 will be our first pivot"; 

        // step 2

        var step2_h4 = document.querySelector('#step2 > .step_des > h4');
        var step2_p = document.querySelectorAll('#step2 > .step_des > p');

        step2_h4.innerHTML = "After that";
        step2_p[0].innerHTML = " - On the left side of the chosen pivot, those numbers which smaller than the pivot will be kept and those bigger ones will be moved to the other side. On the other side, remained numbers will be the number that bigger than pivot.";
        step2_p[1].innerHTML = " - After this step we will have the order like the bar chart on the left";
        step2_p[2].innerHTML = " - To continue, we will repeat the same process with the left side of the first pivot (6), and the new pivot will be (5)";

        // step 3

        var step3_h4 = document.querySelector('#step3 > .step_des > h4');
        var step3_p = document.querySelectorAll('#step3 > .step_des > p');

        step3_h4.innerHTML = "Next ";
        step3_p[0].innerHTML = " - Do the same things with the other side by chosing the pivot (9)";

        // step 4

        var step4_h4 = document.querySelector('#step4 > .step_des > h4');
        var step4_p = document.querySelectorAll('#step4 > .step_des > p');

        step4_h4.innerHTML = "Next to it";
        step4_p[0].innerHTML = " - After the same step as the previous ones, we will have this order. As can be clearly recognized, the right side have the correct order. But the program will still run one more step, which is creating the same process to sort the remained pair of numbers (7 and 8), but those numbers are in the correct order so there will be no change.";

        // step 5

        var step5_h4 = document.querySelector('#step5 > .step_des > h4');
        var step5_p = document.querySelectorAll('#step5 > .step_des > p');

        step5_h4.innerHTML = "And ... ";

        // step 6 

        var step6_h4 = document.querySelector('#step6 > .step_des > h4');
        var step6_p = document.querySelectorAll('#step6 > .step_des > p');

        step6_h4.innerHTML = "We have done";
    }
}

console.log(window.innerHeight);

