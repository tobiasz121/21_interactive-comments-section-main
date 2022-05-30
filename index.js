import productdb, { bulkCreate, getData } from './module.js'

let db = productdb('CommentsDb', {
    comments: `++id,username, comment, reply, replyTo`
})

let replies = document.querySelectorAll('.comment-inner-reply')
const sendForm = document.querySelector('.comment-submit')
const modal = document.querySelector('.delete-modal')
const main = document.querySelector('.main')

const insertData =(bd,data) => {
    
    bd.insertAdjacentHTML('afterbegin',`
    <div class="comment-container flow">
      <div class="comment-inner grid">
        <div class="comment-inner-rating flex">
          <img src="./images/icon-plus.svg" alt="">
          <p class="text-moderate-blue fw-bold">12</p>
          <img src="./images/icon-minus.svg" alt="">
        </div>
        <div class="comment-inner-user flex">
          <img src="./images/avatars/image-amyrobson.png" alt="">
          <p class="fw-bold text-dark-blue">amyrobson</p>
          <p class="fh-big">1 month ago</p>
        </div>
        <button class="comment-inner-reply flex text-moderate-blue fw-bold">
          <img src="./images/icon-reply.svg" alt="">
          <p class="fs-400 fw-bold">Reply</p>
        </button>        
        <p class="lh-big">
          ${data.comment}
        </p>       
      </div>
      
    </div>`)
}

// Search for all reply buttons and after clicking add fild with SEND option using insertAdjacentHTML

sendForm.addEventListener('click', event => {
    event.preventDefault()
    console.log(event.target.previousElementSibling.value)
    let commentText = event.currentTarget.previousElementSibling
    event.currentTarget.parentNode.parentNode.insertAdjacentHTML('beforebegin', `
    <div class="comment-container flow">    
        <div class="comment-inner grid">
                    <div class="comment-inner-rating flex">
                        <img src="./images/icon-plus.svg" alt="">
                        <p class="text-moderate-blue fw-bold">4</p>
                        <img src="./images/icon-minus.svg" alt="">
                    </div>
                    <div class="comment-inner-user flex">
                        <img src="./images/avatars/image-juliusomo.png" alt="">
                        <p class="fw-bold text-dark-blue">juliousomo</p>
                        <p class="fh-big">X ago</p>
                    </div>
                    <div class="flex comment-inner-change">
                        <button class="comment-main-delete button-change text-soft-red flex">
                            <img src="./images/icon-delete.svg" alt="">
                            <p class="fs-400 fw-bold">Delete</p>
                        </button>
                        <button class="comment-main-edit button-change flex text-moderate-blue fw-bold">
                            <img src="./images/icon-edit.svg" alt="">
                            <p class="fs-400 fw-bold">Edit</p>
                        </button>
                    </div>
                    <p class="lh-big">
                    <span>@juliusomo</span> ${commentText.value} 
                    </p>       
            </div>
     </div>
    `)
    let flag = bulkCreate(db.comments,{
        username: 'lolek',
        comment: event.target.previousElementSibling.value,
        reply: 'false',
        replyTo: '0'
    })
    commentText.value = ''
    
})


// Manage state of the likes
document.getElementById('main').addEventListener('click', event => {
    if(event.target && event.target.matches('.comment-inner-rating> img:first-child')){
        console.log('lastImg')                
        let curNum = Number.parseInt(event.target.nextElementSibling.textContent, 10)
        curNum +=1
        event.target.nextElementSibling.textContent = curNum
    }
    if(event.target && event.target.matches('.comment-inner-rating> img:last-child')){
        console.log('lastImg')                
        let curNum = Number.parseInt(event.target.previousElementSibling.textContent, 10)
        curNum -=1
        event.target.previousElementSibling.textContent = curNum
        
    }
})

// Remove main comment
document.getElementById('main').addEventListener('click', event => {
    if(event.target && event.target.matches('.comment-main-delete, .comment-main-delete > *')){                
        console.log(event.target.parentNode.parentNode.parentNode.remove())
           
    }
})

// Remove replies to the comments.
document.getElementById('main').addEventListener('click', event => {
    if(event.target && event.target.matches('.comment-inner-delete, .comment-inner-delete > *')){ 
        // When delete button is clicked, open delete modal        
        const deletingCom = event.target
        console.log(modal)
        modal.style.display= 'flex'
        document.getElementById('modal').addEventListener('click', event => {
            if(event.target && event.target.matches('.delete-option-button:last-child')){
                modal.style.display= 'none'
                checkReplies(deletingCom, 'delete')                
            }
            if(event.target && event.target.matches('.delete-option-button:first-child')) {
                modal.style.display= 'none'
            }
        })         
        // event.target.parentNode.parentNode.parentNode.remove()             
    }
})

document.getElementById('main').addEventListener('click', event => {
    if(event.target && event.target.matches('.comment-inner-reply')){
        console.log(event.target)
        const repliedUser = event.target.previousElementSibling.children.item(1).textContent        
        const replyBtn = event.target
        replies.forEach(reply => {
            reply.disabled = true;
        })
        //If there are no replies add replies container.
        checkReplies(replyBtn, 'reply')
        // replyBtn.disabled=true;
        // Go up in the DOM tree and insert Comment
        const insertSend = event.target.parentNode.parentNode              
        insertSend.insertAdjacentHTML('beforeend', `
        <form action="" class="comment-inner comment-form flex">
        <img src="./images/avatars/image-juliusomo.png" alt="">        
        <textarea name="" id="" cols="30" rows="7" placeholder="Add a comment..."></textarea>
        <button type="submit" class="bg-moderate-blue fs-400 lh-big text-white reply-submit">REPLY</button>
        </form>`)
        
        // Get replies container and then create a reply there
        const newReply = event.target.parentNode.nextElementSibling.children.item(1)
        //Search for the SEND button inside of the replied comment    
        const sendComment = document.querySelectorAll('.reply-submit')   
        sendComment.forEach(send => {
            send.addEventListener('click', event => {
                // After clicking send, get text value, insert comment under parent comment, disable  comment.
                event.preventDefault()
                console.log(event.target.previousElementSibling)
                const commentText = event.target.previousElementSibling.value
                console.log(commentText)
                newReply.insertAdjacentHTML('beforeend', `
                <div class="comment-container flow">
                    <div class="comment-inner grid">
                        <div class="comment-inner-rating flex">
                            <img src="./images/icon-plus.svg" alt="">
                            <p class="text-moderate-blue fw-bold">4</p>
                            <img src="./images/icon-minus.svg" alt="">
                        </div>
                        <div class="comment-inner-user flex">
                            <img src="./images/avatars/image-juliusomo.png" alt="">
                            <p class="fw-bold text-dark-blue">juliousomo</p>
                            <p class="fh-big">X ago</p>
                        </div>
                        <div class="flex comment-inner-change">
                            <button class="comment-inner-delete button-change text-soft-red flex">
                                <img src="./images/icon-delete.svg" alt="">
                                <p class="fs-400 fw-bold">Delete</p>
                            </button>
                            <button class="comment-inner-edit button-change flex text-moderate-blue fw-bold">
                                <img src="./images/icon-edit.svg" alt="">
                                <p class="fs-400 fw-bold">Edit</p>
                            </button>
                        </div>
                        <p class="lh-big">
                        <span>@${repliedUser}</span> ${commentText} 
                        </p>       
                    </div>
                </div>`)
                event.target.parentNode.remove()
                replies.forEach(reply => {
                    reply.disabled = false;
                }) 
                         
            })
        })
    }
})


const checkReplies = (clickedBtn, mode) => {    
    if(mode==='reply'){
        if(clickedBtn.parentNode.parentNode.children.length < 2){
            clickedBtn.parentNode.parentNode.insertAdjacentHTML('beforeend', `
            <div class="replies flex">
                <div class="replies-line">
                </div>
                <div class="flow reply-section">
                </div>
            </div>`)
        }
    }
    if (mode ==='delete'){
        // Go up to the parent comment and check whether there are multiple replies aside from the deleting one. If not, delete replies section
        if (clickedBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children.item(1).children.item(1).children.length ===1){
            clickedBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children.item(1).remove()
        }  
        else {
            clickedBtn.parentNode.parentNode.parentNode.remove()
        }      
    }   
} 

window.addEventListener('click', event => {
    if(event.target ==modal){
        modal.style.display = 'none'
    }
})

window.addEventListener('load', event => {
    console.log('lol')
    getData(db.comments, data =>{
        console.log('lol2')
        if(data){            
            insertData(main, data)
        }
        else {
            console.log('nothin')
        }    
    }) 
})





