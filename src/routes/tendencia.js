const router=require('express').Router();
router.get('/tendencias',(req,res)=>{
    res.render('tendencia')
});
router.post('/tendencia_register',(req,res)=>{
    const {sexo,posicion}=req.body;
    req.session.sexualidad={sexo,posicion};
    req.flash('success', 'Te gusta poco');
    res.redirect('/tendencia_profile');
})
router.get('/tendencia_profile',(req,res)=>{
    const sexualidad=req.session.sexualidad;
    res.render('tendencia_profile', {sexualidad})
})
module.exports=router;