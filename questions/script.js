// const btns = document.querySelectorAll('.question-btn');

const questions = document.querySelectorAll('.question');
questions.forEach(function(item) { 
  const btn = item.querySelector('.question-btn');
  btn.addEventListener('click', function() {

    questions.forEach(function(q) {
      if(q !== item) {
        q.classList.remove("show-text");
      }
    })
    item.classList.toggle('show-text');
  })
});



// btns.forEach(function(btn) {
//   btn.addEventListener('click', function(e) {
//     //traversing DOM
//     const question = e.currentTarget.parentElement.parentElement
//     question.classList.toggle('show-text');
//   })
// })