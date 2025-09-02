const dice = document.querySelector('.Dice');
const adviceText = document.querySelector('.textAdvice');
const adviceId = document.querySelector('.AdviceId');

dice.addEventListener('click', () => {
    console.log('Dice clicked');
    fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
  
    // console.log(data.slip.id);
    // console.log(data.slip.advice);
    adviceText.textContent = data.slip.advice;
    adviceId.textContent = data.slip.id;
  })
  .catch(error => {
    console.error('Error fetching advice:', error);
  });
});