let score = 0;

function showScore(){
  const totalScore = document.getElementById('score-message');
    
  if(score === 3) {
    totalScore.innerHTML = score + "点：満点！あなたの東広島愛は本物よ！"
  } else if(score === 2) {
    totalScore.innerHTML = score + "点：惜しいわね！";
  } else if(score === 1) {
    totalScore.innerHTML = score + "点：あなた本当に東広島の人間？怪しいわね";
  } else {
    totalScore.innerHTML = score + "点：東広島について勉強しなさい";
  }   
}
const correct = '正解';
const incorrect = '不正解';

function answerQuiz1() {
  const quiz_1 = document.getElementById('quiz-1');
  const select = '1問目：' + quiz_1.answer.value + 'を選択しました';

  if (quiz_1.answer.value == 'a') {
    console.log(select);
    console.log(incorrect);
  } else if (quiz_1.answer.value == 'b') {
    score++;
    console.log(select);
    console.log(correct);
  } else if (quiz_1.answer.value == 'c') {
    console.log(select);
    console.log(incorrect);
  } else {
    alert('1問目の答えを入力してください');
  }
  console.log('現在の点数：' + score); 
}
function answerQuiz2(){
    const quiz_2 = document.getElementById('quiz-2');
    const select = '2問目：' + quiz_2.answer.value + 'を選択しました';
   if (quiz_2.answer.value == 'a') {
        console.log(select);
        console.log(correct);
      } else if (quiz_2.answer.value == 'b') {    
        console.log(select);
        console.log(incorrect);
      } else if (quiz_2.answer.value == 'c') {
        score++;
        console.log(select);
        console.log(incorrect);
      } else {
        alert('2問目の答えを入力してください');
      }
      console.log('現在の点数：' + score); 
    }
    function answerQuiz3(){
        const quiz_3 = document.getElementById('quiz-3');
        const select = '3問目：' + quiz_3.answer.value + 'を選択しました';
        if (quiz_3.answer.value == 'a') {
            console.log(select);
            console.log(incorrect);
          } else if (quiz_3.answer.value == 'b') {        
            console.log(select);
            console.log(incorrect);
          } else if (quiz_3.answer.value == 'c') {
            score++;
            console.log(select);
            console.log(correct);
          } else {
            alert('3問目の答えを入力してください');
          }
          console.log('現在の点数：' + score); 
        }
                
    