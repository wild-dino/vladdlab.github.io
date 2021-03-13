let comment;
let commentsArr;
loadComments();

document.getElementById('comment-add').onclick = function () {
    let commentText = document.getElementById ('comment');
    comment = commentText.value;
    commentText.value = '';
    commentsArr.push({"comment": comment});
    saveComments();
    let commentSpace = document.querySelector('.comment__space');
    commentSpace.innerHTML += `<p>${comment}</p>`;
}

function saveComments () {
    localStorage.setItem('comment', JSON.stringify(commentsArr));
}

function showComments () {
    let commentSpace = document.querySelector('.comment__space');
    let out = '';
    if(commentsArr){
        commentsArr.forEach(item => {
            commentSpace.innerHTML += `<p>${item.comment}</p>`;
        });
    }
}

function loadComments() {

    if (JSON.parse(localStorage.getItem('comment'))){
        commentsArr = JSON.parse(localStorage.getItem('comment'));
    }
    else {
        commentsArr = new Array();
    }

    showComments();
}

