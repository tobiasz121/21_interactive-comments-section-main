const replies = document.querySelectorAll('.comment-inner-reply')
const keepAlive = () => {
    const sendComment = document.querySelectorAll('.comment-submit')
    sendComment.forEach(send => {
        send.addEventListener('click', event => {
            event.preventDefault()
            console.log(event.currentTarget.previousElementSibling)    
        })
    }) 
}

replies.forEach(reply => {
    reply.addEventListener('click', event => {
        console.log('Clicked')   
        const insertSend = event.currentTarget.parentNode.parentNode  
        console.log(insertSend)
        insertSend.insertAdjacentHTML('beforeend', `
        <form action="" class="comment-inner comment-form flex">
        <img src="./images/avatars/image-juliusomo.png" alt="">        
        <textarea name="" id="" cols="30" rows="7" placeholder="Add a comment..."></textarea>
        <button type="submit" class="bg-moderate-blue fs-400 lh-big text-white comment-submit">SEND</button>
        </form>`)
        // keepAlive()
        const sendComment = document.querySelectorAll('.comment-submit')   
        sendComment.forEach(send => {
            send.addEventListener('click', event => {
                event.preventDefault()
                console.log(event.currentTarget.previousElementSibling)    
            })
        }) 
         


        const newReply = event.currentTarget.parentNode.nextElementSibling.children.item(1)




        // newReply.insertAdjacentHTML('beforeend', `
        // <div class="comment-inner grid">
        //     <div class="comment-inner-rating flex">
        //       <img src="./images/icon-plus.svg" alt="">
        //       <p class="text-moderate-blue fw-bold">2</p>
        //       <img src="./images/icon-minus.svg" alt="">
        //     </div>
        //     <div class="comment-inner-user flex">
        //       <img src="./images/avatars/image-juliusomo.png" alt="">
        //       <p class="fw-bold text-dark-blue">juliusomo</p>
        //       <p class="fh-big">2 days ago</p>
        //     </div>
        //     <button class="comment-inner-reply flex text-moderate-blue">
        //       <img src="./images/icon-reply.svg" alt="">
        //       <p class="fs-400 fw-bold">Reply</p>
        //     </button>
        //     <p class="lh-big">
        //       @ramsesmiron I couldn’t agree more with this. 
        //       Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.
        //     </p>       
        // </div>`)
    })
})
 