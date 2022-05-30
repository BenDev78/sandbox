const container = document.querySelector('.container-grid');
const watcher = document.querySelector('.intersection-watcher');

const addContent = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await result.json();

    data.forEach(post => {
        const card = document.createElement('div');
        card.classList.add('card');
    
        const subtitle = document.createElement('h3');
        subtitle.innerHTML = post.title;
    
        const content = document.createElement('p');
        content.innerHTML = post.body;
    
        card.appendChild(subtitle, content);
        container.appendChild(card); 
    });
}

const handleIntersect = entries => {
    if (entries[0].isIntersecting) {
        addContent();
    }
}

new IntersectionObserver(handleIntersect).observe(watcher);