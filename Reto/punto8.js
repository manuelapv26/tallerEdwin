document.addEventListener('DOMContentLoaded', function(){
    const comment = document.getElementById('comment')
    const submitButton = document.getElementById('submit-comment')
    const upperCaseButton= document.getElementById('uppercase-comment')
    const lowerCaseButton= document.getElementById('lowercase-comment')
    const upperLowerButton = document.getElementById('Upperlower');
    const commentList= document.getElementById('comment-list')
    const counter= document.getElementById('counter')

    let characters= 255
    function firstCapital(text) {
        return text
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    submitButton.addEventListener('click', function(){
        const commentText= comment.value.trim()
        if (commentText) {
            if (characters >=  commentText.length) {
                const list= document.createElement('li')
                const paragraph= document.createElement('p')  
                paragraph.innerHTML = `<strong>Usuario:</strong> <span style="color: green; font-weight: bold;">${commentText}</span>`;
                list.appendChild(paragraph);
                commentList.appendChild(list);      
                characters -= commentText.length;
                counter.textContent = characters;
                comment.value = ''; 
             }else{
                alert('Se ha excedido el límite de caracteres.')
             }

        }
    })
    upperCaseButton.addEventListener('click', function(){
        comment.value=comment.value.trim().toUpperCase()
    })
    lowerCaseButton.addEventListener('click', function(){
        comment.value=comment.value.trim().toLowerCase()
    })
    upperLowerButton.addEventListener('click', function(){
        comment.value = firstCapital(comment.value.trim());
    });

    comment.addEventListener('click',function(){
        characters= 255 - comment.value.length
        counter.textContent= characters
    })
});