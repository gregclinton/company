const account = 'account-375491'

const chat = {
    prompt: async prompt => {
        await fetch('/company/messages/' + account, {
            method: 'POST',
            headers:  { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                prompt: prompt
            })
        })
    },

    clear: () => {
        document.getElementById('chat').innerHTML = "";
        fetch('/company/messages/' + account, { method: 'DELETE' });
    }
};

chat.clear();

setInterval(() => {
    fetch('/company/messages/' + account, { method: 'GET' })
        .then(res => res.json())
        .then(msgs => {
            const chat = document.getElementById('chat');

            chat.innerHTML = '';

            msgs.forEach(msg => {
                const name = chat.children.length % 2 ? 'ai' : 'me';
                const title = document.createElement('span');
    
                title.innerHTML = name
                title.classList.add('name');
    
                const top = document.createElement('div');
    
                top.append(title);
    
                const bottom = document.createElement('div');
                bottom.innerHTML = msg.body;
    
                const post = document.createElement('div');
                post.append(top, bottom);
                post.classList.add('post');
                document.getElementById('chat').appendChild(post);
    
                post.scrollIntoView({ behavior: 'smooth' });
            });
        })}, 500);