    document.getElementById('title-button').addEventListener('click', (changePage) => {
    changePage.preventDefault();
    
    let randomPage = 'report' + (Math.floor(Math.random() * 3) + 1) + '.html';
    
    window.location.href = randomPage;
    });