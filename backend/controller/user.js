const UserModel = require('../models/user')

module.exports.signup = (req, res) => {
    console.log(req.body)
    const newUser = new UserModel ({ 
        email: req.body.email , 
        password : req.body.password
    });

    newUser.save().then(() => {
        res.send({ code : 200, message: 'Signup success'})
    }).catch((err) => {
         res.send({ code: 500, message: 'Signup Er'})
            })


    
}
module.exports.login = (req, res) => {
    console.log(req.body) 
    
    // email and password match

    UserModel.findOne({ email: req.body.email })
        .then(result=> {
            console.log(result, '11')

        // match password with req.body.password
             if(result.password === req.body.password) {
                 res.send({ code: 404, message : 'password wrong'})
             } else {
                 res.send({ 
                    code: 200, 
                    message : 'user Found',
                    token: 'fafgshu'

            })
        }

        })
        .catch( err => {
             res.send({ code: 500, message: 'user not found'})
    })

    // newUser.save().then(() => {
    //     res.send({ code : 200, message: 'Login success'})
    // }).catch((err) => {
    //      res.send({ code: 500, message: 'Login Err'})
    //         })


    
}