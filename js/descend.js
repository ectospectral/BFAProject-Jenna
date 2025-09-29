const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('fadein-link');
        }
    });
});

observer.observe(document.querySelector('#descend-link'));
observer.observe(document.querySelector('#surface-link'));


