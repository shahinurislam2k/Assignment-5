//  Donation
document.getElementById('donation-btn')
    .addEventListener('click', function(){
        showSectionById('donation-page');
        buttonColorById('donation-btn');

});

// history
document.getElementById('history-btn')
    .addEventListener('click', function(){
    showSectionById('history-page');
    buttonColorById('history-btn');
   

});

// Blog 
document.getElementById('blog-btn')
    .addEventListener('click', function(){
        // window.location.href = './blog.html';
        console.log('btn-blog')
});


// home 
document.getElementById('shahin-btn')
    .addEventListener('click', function(){
        // window.location.href = './index.html';
        console.log('btn-home')
});

