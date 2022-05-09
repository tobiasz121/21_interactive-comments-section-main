let replies = document.querySelectorAll('.comment-inner-reply')
const sendForm = document.querySelector('.comment-submit')

// Search for all reply buttons and after clicking add fild with SEND option using insertAdjacentHTML

sendForm.addEventListener('click', event => {
    event.preventDefault()
    let commentText = event.currentTarget.previousElementSibling
    event.currentTarget.parentNode.parentNode.insertAdjacentHTML('beforebegin', `
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
                    <span>@juliusomo</span> ${commentText.value} 
                    </p>       
                </div>
    `)
    commentText.value = ''
    
})


// updateReplies().forEach(reply => {
//     reply.addEventListener('click', event => {      
//         const repliedUser = event.currentTarget.previousElementSibling.children.item(1).textContent        
//         const replyBtn = event.currentTarget
//         updateReplies().forEach(reply => {
//             reply.disabled = true;
//         })
//         //If there are no replies add replies container.
//         checkReplies(replyBtn)
//         // replyBtn.disabled=true;
//         // Go up in the DOM tree and insert Comment
//         const insertSend = event.currentTarget.parentNode.parentNode              
//         insertSend.insertAdjacentHTML('beforeend', `
//         <form action="" class="comment-inner comment-form flex">
//         <img src="./images/avatars/image-juliusomo.png" alt="">        
//         <textarea name="" id="" cols="30" rows="7" placeholder="Add a comment..."></textarea>
//         <button type="submit" class="bg-moderate-blue fs-400 lh-big text-white reply-submit">REPLY</button>
//         </form>`)
        
//         // Get replies container and then create a reply there
//         const newReply = event.currentTarget.parentNode.nextElementSibling.children.item(1)
//         //Search for the SEND button inside of the replied comment    
//         const sendComment = document.querySelectorAll('.reply-submit')   
//         sendComment.forEach(send => {
//             send.addEventListener('click', event => {
//                 // After clicking send, get text value, insert comment under parent comment, disable  comment.
//                 event.preventDefault()
//                 console.log(event.currentTarget.previousElementSibling)
//                 const commentText = event.currentTarget.previousElementSibling.value
//                 console.log(commentText)
//                 newReply.insertAdjacentHTML('beforeend', `
//                 <div class="comment-container flow">
//                     <div class="comment-inner grid">
//                         <div class="comment-inner-rating flex">
//                             <img src="./images/icon-plus.svg" alt="">
//                             <p class="text-moderate-blue fw-bold">4</p>
//                             <img src="./images/icon-minus.svg" alt="">
//                         </div>
//                         <div class="comment-inner-user flex">
//                             <img src="./images/avatars/image-juliusomo.png" alt="">
//                             <p class="fw-bold text-dark-blue">juliousomo</p>
//                             <p class="fh-big">X ago</p>
//                         </div>
//                         <button class="comment-inner-reply flex text-moderate-blue">
//                             <img src="./images/icon-reply.svg" alt="">
//                             <p class="fs-400 fw-bold">Reply</p>
//                         </button>
//                         <p class="lh-big">
//                         <span>@${repliedUser}</span> ${commentText} 
//                         </p>       
//                     </div>
//                 </div>`)
//                 event.currentTarget.parentNode.remove()
//                 updateReplies().forEach(reply => {
//                     reply.disabled = false;
//                 })                                    
//             })
//         })       
//     })
// })     


// replies.forEach(reply => {
//     reply.addEventListener('click', event => {      
//         const repliedUser = event.currentTarget.previousElementSibling.children.item(1).textContent        
//         const replyBtn = event.currentTarget
//         replies.forEach(reply => {
//             reply.disabled = true;
//         })
//         //If there are no replies add replies container.
//         checkReplies(replyBtn)
//         // replyBtn.disabled=true;
//         // Go up in the DOM tree and insert Comment
//         const insertSend = event.currentTarget.parentNode.parentNode              
//         insertSend.insertAdjacentHTML('beforeend', `
//         <form action="" class="comment-inner comment-form flex">
//         <img src="./images/avatars/image-juliusomo.png" alt="">        
//         <textarea name="" id="" cols="30" rows="7" placeholder="Add a comment..."></textarea>
//         <button type="submit" class="bg-moderate-blue fs-400 lh-big text-white reply-submit">REPLY</button>
//         </form>`)
        
//         // Get replies container and then create a reply there
//         const newReply = event.currentTarget.parentNode.nextElementSibling.children.item(1)
//         //Search for the SEND button inside of the replied comment    
//         const sendComment = document.querySelectorAll('.reply-submit')   
//         sendComment.forEach(send => {
//             send.addEventListener('click', event => {
//                 // After clicking send, get text value, insert comment under parent comment, disable  comment.
//                 event.preventDefault()
//                 console.log(event.currentTarget.previousElementSibling)
//                 const commentText = event.currentTarget.previousElementSibling.value
//                 console.log(commentText)
//                 newReply.insertAdjacentHTML('beforeend', `
//                 <div class="comment-container flow">
//                     <div class="comment-inner grid">
//                         <div class="comment-inner-rating flex">
//                             <img src="./images/icon-plus.svg" alt="">
//                             <p class="text-moderate-blue fw-bold">4</p>
//                             <img src="./images/icon-minus.svg" alt="">
//                         </div>
//                         <div class="comment-inner-user flex">
//                             <img src="./images/avatars/image-juliusomo.png" alt="">
//                             <p class="fw-bold text-dark-blue">juliousomo</p>
//                             <p class="fh-big">X ago</p>
//                         </div>
//                         <div class="flex comment-inner-change">
//                             <button class="comment-inner-delete button-change text-soft-red flex">
//                                 <img src="./images/icon-delete.svg" alt="">
//                                 <p class="fs-400 fw-bold">Delete</p>
//                             </button>
//                             <button class="comment-inner-edit button-change flex text-moderate-blue fw-bold">
//                                 <img src="./images/icon-edit.svg" alt="">
//                                 <p class="fs-400 fw-bold">Edit</p>
//                             </button>
//                         </div>
//                         <p class="lh-big">
//                         <span>@${repliedUser}</span> ${commentText} 
//                         </p>       
//                     </div>
//                 </div>`)
//                 event.currentTarget.parentNode.remove()
//                 replies.forEach(reply => {
//                     reply.disabled = false;
//                 }) 
                         
//             })
//         })       
//     })
// })

document.getElementById('main').addEventListener('click', event => {
    if(event.target && event.target.matches('.comment-inner-delete')){
        console.log('lol')
        console.log(event.target.parentNode.parentNode.parentNode.remove())
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
        checkReplies(replyBtn)
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







const checkReplies = (clickedReply) => {
    console.log(clickedReply.parentNode.parentNode.children)
    if (clickedReply.parentNode.parentNode.children.length < 2){
        clickedReply.parentNode.parentNode.insertAdjacentHTML('beforeend', `
        <div class="replies flex">
        <div class="replies-line">
        </div>
        <div class="flow reply-section">
        </div>
      </div>`)
    }
}
 
const deleted = document.querySelectorAll('.comment-inner-delete')
deleted.forEach(del => {
    event.preventDefault()
    del.disabled = true
    console.log('lOL')
})