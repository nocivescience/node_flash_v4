const router=require('express').Router();
router.get('/peticion',(req,res)=>{
    res.render('peticion')
});
router.post('/peticion_register',(req,res)=>{
    const {articulo,descripcion}=req.body;
    req.session.articulo={articulo,descripcion};
    req.flash('success','You article is ready!');
    res.redirect('/peticion_profile')
});
router.get('/peticion_profile',(req,res)=>{
    const articulos= req.session.articulo;
    res.render('peticion_profile',{articulos})
})
module.exports= router;