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
        intro.innerHTML = "Thuật toán Quick sort";

        //direct
        previousStep.innerHTML = "Bước trước";
        nextStep.innerHTML = "Bước sau";
        toTop.innerHTML = "Quay lại bước 1";
        changeLanguage.innerHTML = "Thay đổi ngôn ngữ";

        // step 1

        var step1_h4 = document.querySelector('#step1 > .step_des > h4');
        var step1_p = document.querySelectorAll('#step1 > .step_des > p');

        step1_h4.innerHTML = "Bước đầu tiên";
        step1_p[0].innerHTML = " - Đầu tiên, Ta có 9 số nguyên dương khác nhau có giá trị được cho bởi các cột như hình bên trái";
        step1_p[1].innerHTML = " - Ta phải chọn 1 số (pivot number) trong các số đã cho. Thường thì ta sẽ chọ trung vị của dãy số làm pivot number đầu tiên";
        step1_p[2].innerHTML = " - Trong ví dụ này ta chọn số 6"; 

        // step 2

        var step2_h4 = document.querySelector('#step2 > .step_des > h4');
        var step2_p = document.querySelectorAll('#step2 > .step_des > p');

        step2_h4.innerHTML = "Sau đó";
        step2_p[0].innerHTML = " - Ở phía bên trái của pivot number, ta sẽ giữ lại những số bé hơn nó và chuyển những số lớn hơn sang bên phải, và làm tương tự với bên còn lại";
        step2_p[1].innerHTML = " - Sau bước này ta sẽ có được thứ tự như bên trái";
        step2_p[2].innerHTML = " - Tiếp theo, ta lặp lại quá trình tương tự với các số ở phía bên trái số 6, với 1 pivot number mới là 5";

        // step 3

        var step3_h4 = document.querySelector('#step3 > .step_des > h4');
        var step3_p = document.querySelectorAll('#step3 > .step_des > p');

        step3_h4.innerHTML = "Tiếp theo";
        step3_p[0].innerHTML = " - Làm tương tự với phía bên phải bằng cách chọn pivot number là 9";

        // step 4

        var step4_h4 = document.querySelector('#step4 > .step_des > h4');
        var step4_p = document.querySelectorAll('#step4 > .step_des > p');

        step4_h4.innerHTML = "Tiếp theo đó";
        step4_p[0].innerHTML = " - Sau khi đã thực hiện các bước giống như đã làm trước đó, chúng ta sẽ có thứ tự như sau. Lưu ý rằng chương trình vẫn sẽ chạy thêm 1 bước nữa, cũng tương tự như các bước trên với 2 số đó là 7 và 8, những vì chúng đã ở đúng vị trí nên thứ tự của chúng không bị thay đổi";

        // step 5

        var step5_h4 = document.querySelector('#step5 > .step_des > h4');
        var step5_p = document.querySelectorAll('#step5 > .step_des > p');

        step5_h4.innerHTML = "Và ... ";

        // step 6 

        var step6_h4 = document.querySelector('#step6 > .step_des > h4');
        var step6_p = document.querySelectorAll('#step6 > .step_des > p');

        step6_h4.innerHTML = "Chúng ta có các số được sắp xếp";
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

