document.getElementById('donate-btn-quota')
.addEventListener('click', function(){


    const inputDonateQuota = getInputFieldValueById('input-donate-quota');
    const donateBalanceQuota = getTextFieldValueById('donate-balance-quota');
    const mainBalance = getTextFieldValueById('main-balance');
    console.log(inputDonateQuota, donateBalanceQuota, mainBalance);

    
    if(isNaN(inputDonateQuota)){
        document.getElementById('my_modal_1').close();
        alert('Failed to donate the money');
        return;
    }
    


    const newDonateBalanceQuota = donateBalanceQuota + inputDonateQuota;
    document.getElementById('donate-balance-quota').innerText = newDonateBalanceQuota;

    const newMainBalance = mainBalance - inputDonateQuota;
    document.getElementById('main-balance').innerText = newMainBalance;





// history
    const p = document.createElement('p');
    p.innerText = `
        ${inputDonateQuota} Taka is Donated for Donate for flood at Quota Movememt
        ${new Date()}
    `;

    document.getElementById('History-container').appendChild(p);




    
})




