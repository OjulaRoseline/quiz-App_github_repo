const questions=[
    {
        question:"What does HTML stand for?",
        options:[
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "hyperlinks and Text markup language",
        ],
        answer:0
    },
    {
        question:"Which Language runs in aweb browser?",
        options:[
            "Java",
            "C",
            "Python",
            "JavaScript",
        ],
        answer:3
    },
    {
        question:"What does CSS stand for?",
        options:[
            "cascading stylesheets",
            "colourful stylesheet",
            "creative stylesheets",
        ],
        answer:0
    },
]
let currentIndex=0;
let score=0;
const questionEl=document.getElementById("question");
const optionsEL=document.getElementById("options");
const nextBtn=document.getElementById("nextBtn");
const scoreBox=document.getElementById("scoreBox");

function loadQuestion(){
    optionsEL.innerHTML='';
    scoreBox.textContent='';
    const currentQ=questions[currentIndex];
    console.log(currentQ)
    questionEl.textContent=currentQ.question;
    currentQ.options.forEach((option,i)=>{
        const btn=document.createElement('button');
        btn.classList.add('option');
        btn.textContent=option;
        btn.addEventListener('click',()=>selectAnswer(i))
        optionsEL.appendChild(btn)
    })
}
function selectAnswer(selectedIndex){
    const correctIndex=questions[currentIndex].answer;
    const optionButtons=document.querySelectorAll('.option');
    console.log(optionButtons)
    optionButtons.forEach(btn=>btn.disabled=true);
    if(selectedIndex===correctIndex){
        optionButtons[selectedIndex].classList.add('correct');
        score++;
    }else{
        optionButtons[selectedIndex].classList.add('wrong');
        optionButtons[correctIndex].classList.add('correct')
    }
}



//  function selectAnswer(selectedIndex) {
//   const correctIndex = question[currentQ].correct;
//   const buttons = document.querySelectorAll(".option-btn");

//   buttons.forEach((btn, index) => {
//     btn.disabled = true; 
//     if (index === correctIndex) {
//       btn.classList.add("correct"); 
//     }
//     if (index === selectedIndex && index !== correctIndex) {
//       btn.classList.add("wrong"); 
//     }
//   });
//     nextBtn.disabled = false;
//  }
 nextBtn.addEventListener("click", () => {
  currentIndex++;
//   console.log(currentIndex)
  if (currentIndex<questions.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Quiz complete!";
    // optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreBox.textContent=`Your Score:${score}/${questions.length}`;
  }
});


loadQuestion();

