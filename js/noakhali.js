document.getElementById('donate-btn-noakhali')
.addEventListener('click', function(){


    const inputDonateNoakhali = getInputFieldValueById('input-donate-noakhali');
    const donateBalanceNoakhili = getTextFieldValueById('donate-balance-noakhali');
    const mainBalance = getTextFieldValueById('main-balance');

    
    if(isNaN(inputDonateNoakhali)){
        document.getElementById('my_modal_1').close()
        alert('Failed to donate the money');
        return;
    }


    const newDonateBalanceNoakhili = donateBalanceNoakhili + inputDonateNoakhali;
    document.getElementById('donate-balance-noakhali').innerText = newDonateBalanceNoakhili;

    const newMainBalance = mainBalance - inputDonateNoakhali;
    document.getElementById('main-balance').innerText = newMainBalance;





    // history
    const p = document.createElement('p');
    p.innerText = `
        ${inputDonateNoakhali

        } Taka is Donated for Donate for flood at Noakhali, Bangladesh 
        Date: ${new Date()}
    `;

    document.getElementById('History-container').appendChild(p);


})