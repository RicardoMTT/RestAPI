const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database.js');


router.get('/',(req,res)=>{
    mysqlConnection.query("SELECT * FROM nodejs.proveedor",(err,rows,fields)=>{
        if(err){
            res.send(err.fatal);
            console.log(err.fatal);
        }else{
            res.json(rows);
        }
    });
});

router.get('/:id',(req,res)=>{
    const { id } = req.params;
    console.log(id);
    mysqlConnection.query('SELECT * FROM nodejs.proveedor WHERE id_proveedor = ?',[id],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    });
});


// DELETE An Employee
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM nodejs.proveedor WHERE id_proveedor = ?', [id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'nodejs.proveedor Deleted'});
      } else {
        console.log(err);
      }
    });
  });


  //Create an employee
  
router.post('/',(req,res)=>{
    const { id,name,salary } = req.body;
    const query = `
    INSERT INTO nodejs.proveedor (id_proveedor,name, salary) VALUES (?,?,?)
    `
    mysqlConnection.query(query,[id,name,salary],(err,rows,field)=>{
        if(err){
            console.log(err);
        }else{
            res.json({
                Status:"Proveedor Guardado"
            });
        }
    });
})

router.put('/:id',(req,res)=>{
    const { name,salary } = req.body;
    const { id } = req.params;
    const query = `UPDATE nodejs.proveedor SET name=?,salary=? WHERE id_proveedor = ?`;

    mysqlConnection.query(query,[id,name,salary],(err,rows,fields)=>{
        if(!err){
            res.json({
                status:'Proveedor Edit'
            });
        }else{
            console.log(err);
        }
    })
})
  

module.exports = router;