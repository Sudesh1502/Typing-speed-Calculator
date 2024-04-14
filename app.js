//Complete the given scaffold to implement all the functionalities mentioned in the problem Statement.
const sentences = 
  `The quick brown fox jumps over the lazy dog.
  Sphinx of black quartz, judge my vow.
  Pack my box with five dozen liquor jugs.
  How vexingly quick daft zebras jump!`
;

const words = sentences.split(' ');

const startBtn = document.querySelector('#start-btn');
const inputBar = document.querySelector('#input');
const para = document.querySelector('#sentence');
const timer = document.querySelector('#timer');
const result = document.querySelector('#result');
const retryBtn = document.querySelector('#retry-btn');
const speed = document.querySelector('#speed');
const accuracy = document.querySelector('#accuracy');
startBtn.addEventListener('click', function(){
    startBtn.disabled = true;
    inputBar.disabled = false;
    para.textContent = sentences;
    startTimer();
});

const startTimer = () => {
    let t = 30;
    const time = setInterval(function(){
        timer.textContent = `Time Left : ${t}s`;
        t--;
        if(t <= -1){
            closeTimer(time);
        }
    }, 1000)
}
let typedWords = [];
const closeTimer = (time) => {
    clearInterval(time);
    typedWords = inputBar.value.split(' ');
    
    result.style.display = 'block';
    startBtn.disabled = true;
    inputBar.disabled = true;
    let correctWords = typedWords.filter((word, index) => {
    
        return word === words[index];
    });
    let speedcal = (correctWords.length/30)*60;
    let acc = (correctWords.length/words.length) * 100;
    speed.textContent = speedcal;
    accuracy.textContent = acc;
}





retryBtn.addEventListener('click', function(){
	result.style.display = 'none'
    inputBar.value = '';
    startBtn.disabled = false;
    para.textContent = '';
    timer.textContent = '';
})