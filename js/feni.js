document.getElementById('donate-btn-feni')
.addEventListener('click', function(){


    const inputDonateFeni = getInputFieldValueById('input-donate-feni');
    const donateBalanceFeni = getTextFieldValueById('donate-balance-feni');
    const mainBalance = getTextFieldValueById('main-balance');
    console.log(inputDonateFeni, donateBalanceFeni, mainBalance);

    
    if(isNaN(inputDonateFeni)){
        alert('Failed to add the money');
        return;
    }


    const newDonateBalanceFeni = donateBalanceFeni + inputDonateFeni;
    document.getElementById('donate-balance-feni').innerText = newDonateBalanceFeni;

    const newMainBalance = mainBalance - inputDonateFeni;
    document.getElementById('main-balance').innerText = newMainBalance;


    // history added
    const p = document.createElement('p');
    p.innerText = `
        ${inputDonateFeni} Taka is Donated for flood at Feni, Bangladesh 
        ${new Date()}
    `;
    
    document.getElementById('History-container').appendChild(p);
})