 /*
    Calculator
  */ 
    const modalCalculationsButton = document.querySelector('.modal__calculations-button')

    let equipmentIndex = null;
    let termIndex = null;
    let batteryIndex = null;

  function setupGroup(groupId, onSelect) {
    const group = document.getElementById(groupId);
    const buttons = group.querySelectorAll('.button-group__button');

    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        if(button.classList.contains('selected')){
          button.classList.remove('selected')
          onSelect(null);
        }else{
          buttons.forEach(b => b.classList.remove('selected'));
          button.classList.add('selected');
          onSelect(index);
        }
      });
    });
  }

  setupGroup('equipment-group', index => equipmentIndex = index);
  setupGroup('term-group', index => termIndex = index);
  setupGroup('battery-group', index => batteryIndex = index);


 

 
  document.querySelector('.calculator__calculate ').addEventListener('click', () => {
    if (equipmentIndex === null || termIndex === null) {
      alert('Будь ласка, оберіть Тип обладнання та Термін оренди.');
      return;
    }
    let dailyPaymentValue;
    let monthlyPaymentValue;
    let specialPricePaymentValue;
   
    [dailyPaymentValue, monthlyPaymentValue, specialPricePaymentValue] = 
    calculatePaymentsData(equipmentIndex, termIndex, batteryIndex);

    document.querySelector('.calculations__price-daily').innerHTML = dailyPaymentValue;
    document.querySelector('.calculations__price-monthly').innerHTML = monthlyPaymentValue;
    document.querySelector('.calculations__price-special').innerHTML = specialPricePaymentValue;

    modalContent.style.display = 'none'
    modalCalculations.style.display = 'block'
    modal.style.display = 'flex';
   
  });

  modalCalculationsButton.addEventListener('click', ()=>{
     modalContent.style.display = 'block';
      modalCalculations.style.display = 'none'
  })



  

  const calculatePaymentsData = (equipmentIndex, termIndex, batteryIndex) => {
    // Aoke no battery
    if(equipmentIndex === 0, termIndex === 0, batteryIndex == null){
        return ['359,79', '10 793,58', '52 761,45']
    }
    if(equipmentIndex === 0, termIndex === 1, batteryIndex == null){
        return ['244,84', '7 345,18', '29 380,73']
    }
    if(equipmentIndex === 0, termIndex === 2, batteryIndex == null){
        return ['138,74', '4 162,27', '17 628,44']
    }

       // Aoke + 1 battery
    if(equipmentIndex === 0, termIndex === 0, batteryIndex === 0){
        return ['492,36', '14 770,76', '76 624,58']
    }
    if(equipmentIndex === 0, termIndex === 1, batteryIndex === 0){
        return ['344,27', '10 328,07', '41 312,29']
    }
    if(equipmentIndex === 0, termIndex === 2, batteryIndex === 0){
        return ['195,09', '5 852,57', '24 787,37']
    }

    // Aoke + 2 battery
    if(equipmentIndex === 0, termIndex === 0, batteryIndex === 1){
        return ['624,93', '18 747,95', '100 487,70']
     }
    if(equipmentIndex === 0, termIndex === 1, batteryIndex === 1){
        return ['443,70', '13 310,96', '53 243,85']
    }
    if(equipmentIndex === 0, termIndex === 2, batteryIndex === 1){
        return ['251,43', '7 542,88', '31 946,31']
    }
    // Aoke + 3 battery
    if(equipmentIndex === 0, termIndex === 0, batteryIndex === 2){
        return ['757,50', '22 725,14', '124 350,83']
        }
     if(equipmentIndex === 0, termIndex === 1, batteryIndex === 2){
        return ['543,13', '16 293,85', '65 175,41']
    }
    if(equipmentIndex === 0, termIndex === 2, batteryIndex === 2){
        return ['307,77', '9 233,18', '39 105,25']
    }

       // Deye 1
    if(equipmentIndex === 1, termIndex === 0, batteryIndex === null){
     return ['383,27', '11 498,18', '56 989,06']
    }
    if(equipmentIndex === 1, termIndex === 1, batteryIndex === null){
        return ['262,45', '7 873,63', '31 494,53']
    }
    if(equipmentIndex === 1, termIndex === 2, batteryIndex === null){
        return ['148,72', '4 461,73', '18 896,72']
    }
        // Deye 1 + 1 battery
    if(equipmentIndex === 1, termIndex === 0, batteryIndex === null){
        return ['544,71', '16 341,30', '86 047,81']
    }
    if(equipmentIndex === 1, termIndex === 1, batteryIndex === null){
        return ['361,88', '10 856,52', '53 817,34']
    }
    if(equipmentIndex === 1, termIndex === 2, batteryIndex === null){
        return ['205,07', '6 152,03', '36 446,91']
    }
    // Deye 1 + 2 battery
    if(equipmentIndex === 1, termIndex === 0, batteryIndex === null){
        return ['706,15', '21 184,43', '115 106,56']
    }
    if(equipmentIndex === 1, termIndex === 1, batteryIndex === null){
        return ['461,31', '13 839,41', '76 140,16']
    }
    if(equipmentIndex === 1, termIndex === 2, batteryIndex === null){
        return ['261,41', '7 842,33', '53 997,09']
    }
     // Deye 1 + 3 battery
     if(equipmentIndex === 1, termIndex === 0, batteryIndex === null){
        return ['867,59', '26 027,55', '144 165,31']
    }
    if(equipmentIndex === 1, termIndex === 1, batteryIndex === null){
        return ['560,74', '16 822,30', '98 462,97']
    }
    if(equipmentIndex === 1, termIndex === 2, batteryIndex === null){
        return ['317,75', '9 532,64', '71 547,28']
    }
      // Deye 2 
      if(equipmentIndex === 1, termIndex === 0, batteryIndex === null){
        return ['392,25', '11 767,56', '58 605,35']
    }
    if(equipmentIndex === 1, termIndex === 1, batteryIndex === null){
        return ['269,19', '8 075,67', '32 302,67']
    }
    if(equipmentIndex === 1, termIndex === 2, batteryIndex === null){
        return ['152,54', '4 576,21', '19 381,60']
    }
    // Deye 2 + 1 battery
    if(equipmentIndex === 1, termIndex === 0, batteryIndex === null){
        return ['544,71', '16 341,30', '89 280,38']
    }
    if(equipmentIndex === 1, termIndex === 1, batteryIndex === null){
        return ['361,88', '4 342,61', '135 216,88']
    }
    if(equipmentIndex === 1, termIndex === 2, batteryIndex === null){
        return ['205,07', '6 152,03', '39 679,48']
    }
    // Deye 2 + 2 battery
    if(equipmentIndex === 1, termIndex === 0, batteryIndex === null){
        return ['706,15', '21 184,43', '118 339,13']
    }
    if(equipmentIndex === 1, termIndex === 1, batteryIndex === null){
        return ['461,31', '5 535,77', '179 016,50']
    }
    if(equipmentIndex === 1, termIndex === 2, batteryIndex === null){
        return ['261,41', '7 842,33', '57 229,66']
    }
    // Deye 2 + 3 battery
    if(equipmentIndex === 1, termIndex === 0, batteryIndex === null){
        return ['867,59', '26 027,55', '147 397,88']
    }
    if(equipmentIndex === 1, termIndex === 1, batteryIndex === null){
        return ['560,74', '6 728,92', '222 816,13']
    }
    if(equipmentIndex === 1, termIndex === 2, batteryIndex === null){
        return ['317,75', '9 532,64', '74 779,85']
    }
  }

  