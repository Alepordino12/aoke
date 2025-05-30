const swiper = new Swiper('.hero__swiper', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 3000,    
      disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 1,
    pagination: false,
    navigation: false,
  });
  


  function setupGroup(groupId) {
    const group = document.getElementById(groupId);
    const buttons = group.querySelectorAll('.button-group__button');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('selected'));
        button.classList.add('selected');
        console.log(`Selected in ${groupId}:`, button.dataset.value);
      });
    });
  }

  setupGroup('equipment-group');
  setupGroup('term-group');
  setupGroup('battery-group');




  // FAQ

  document.querySelectorAll('.faq__question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const toggle = question.querySelector('.faq__toggle');
        document.querySelectorAll('.faq__answer').forEach(item => item.classList.remove('active'));
        
        question.classList.toggle('active')
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            // toggle.textContent = '+';
            
        } else {
            document.querySelectorAll('.faq__answer').forEach(item => item.style.maxHeight = null);
            answer.classList.toggle('active')

            answer.style.maxHeight = answer.scrollHeight + 'px';
            // toggle.textContent = '×';
           
        }
    });
});


/*
    MODAL
  */

    const heroOpenModalBtn = document.querySelector('.short-info__button');

    const modal = document.querySelector('.modal');
    // const closeModalBtn = document.querySelector('.modal__close');
    const modalContent = document.querySelector('.modal__content');
    const modalSuccess = document.querySelector('.success__content');
    const modalForm =  document.querySelector('.modal__form')
    const modalSuccessButton = document.querySelector('.modal__success-button')
    
    function openModal(){
      modal.style.display = 'flex';
      modalContent.style.display = 'block'; // Показываем форму
      modalSuccess.style.display = 'none'; // Прячем сообщение об успехе
    }
    
    // Открытие модального окна
    heroOpenModalBtn.addEventListener('click', () => {
      openModal()
    });
    
    
    // Закрытие модального окна
    document.querySelectorAll('.modal__close').forEach(closeBtn => {
      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    })
    
    modalSuccessButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    
    // Закрытие окна при клике вне его области
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
    
    // Обработка отправки формы
    modalContent.addEventListener('submit', async(event) => {
      event.preventDefault(); 
      const name = modalContent.querySelector('.input-name').value
      const phone = modalContent.querySelector('.input-phone').value
      if(!phone || phone.includes('_')){
        alert('Введіть номер телефону повністю')
      }else{
        try{
          sendMessage(token, chatId, `Заявка на оренду: \nІм'я: ${name}\nТелефон: ${phone}`)
          modalContent.style.display = 'none';
          modalSuccess.style.display = 'block';
        }catch(e){
          console.log(e)
        }
      }
     
    });

  
    
    const token = '7662713226:AAHKS0OKr0FpRoaMBjGtq5jRHqseedcMcHg';  
    const chatId = '-4528761132';
    
    async function sendMessage(token, chatId, message){
      const url = `https://api.telegram.org/bot${token}/sendMessage`;
      const data = {
          chat_id: chatId,
          text: message
      };
    
      try {
          const response = await fetch(url, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
               
              },
              body: JSON.stringify(data)
          });
    
          if (response.ok) {
           
          } else {
              console.error('Error sending message:', response.status, response.statusText);
          }
      } catch (error) {
          console.error('Fetch error:', error);
      }
      
    
    }
    
    
    
    /*
      MASK
    */
    $(document).ready(function(){
      $('.input-phone').inputmask({
         mask: '+380 (99) 999 99 99',
         placeholder: "+380 (__) ___ __ __",
           clearMaskOnLostFocus: false,
          
       });
    
    });