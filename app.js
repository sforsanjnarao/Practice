const express=require('express')
const userModel=require('./models/user.model')
const postModel=require('./models/post.model')

const app=express()


app.get('/',(req,res)=>{
    res.send('hey')
})
app.get('/create',async (req,res)=>{
    const user= await userModel.create({
        username:"sanjanar",
        email:"sanjana@gmail.com",
        age:"20",
    
    })
    res.send(user)
})
app.get('/post/create', async(req,res)=>{
    let post=await postModel.create({
        postdata:'hello sara log kasisa ho',
        user:'67a11cd7d4af12fd1c487bbe'
    })
    await post.save();

    let user= await userModel.findOne({_id:'67a11cd7d4af12fd1c487bbe'})
    user.post.push(post._id);
    await user.save();


    res.send({post,user})

})


app.listen(3003,()=>{
    console.log('app is listening')
});