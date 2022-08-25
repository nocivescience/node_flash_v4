const router=require('express').Router();
router.get('/user',(req,res)=>{
    res.render('user')
})
router.post('/user_register',(req,res)=>{
    const {nombre, apellido, edad}= req.body;
    req.session.datos={nombre, apellido, edad}
    req.flash('success','Now I know you')
    res.redirect('/user_profile')
});
router.get('/user_profile',(req,res)=>{
    const datos=req.session.datos
    res.render('user_profile', {datos})
})
module.exports=router;