module.exports = function(app)
{
     app.get('/',function(req,res){
        res.send('Hello');
     });
     app.get('/user',function(req,res){
        res.send('User');
    });
}