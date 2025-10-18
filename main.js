//DOM
const $ =(sel)=> document.querySelector(sel);
const $input = $('.value');
const $judgeBtn = $('.judge');
const $wordCount = $('.word-count');
//FUNCTION


//EVENT
$judgeBtn.addEventListener('click',function() {
    let value = $input.value;
})

$input.addEventListener('keyup',function() {
    let count = $input.value.length;
    $wordCount.textContent = `${count}/30`;
});