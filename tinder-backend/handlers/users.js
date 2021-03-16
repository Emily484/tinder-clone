import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import validateRegisterInput from '../validation/register.js';

//Register new user account
export default function register(req, res){

    const {errors, isValid} = validateRegisterInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({email: req.body.email})
        .then(user => {
            if(user){
                return res.status(400).json({ email: 'This email is already registerd' });
            } else {
                const newUser = new User({
                    firstName: req.body.firstName,
                    email: req.body.email,
                    password: req.body.password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    if (err) throw err;

                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;

                        newUser.password = hash;
                        newUser
                            .save()
                            .then((user) => res.json(user))
                            .catch((err) => console.log(err));
                    });                    
                });
            }
        })
        .catch(err => console.log(err));
    };


    /* if(!email || typeof email !== 'string'){
        return res.json({ status: 'error', error: 'Invalid email' })
    }

    if(!plainTextPassword || typeof plainTextPassword !== 'string'){
        return res.json({ status: 'error', error: 'Invalid password' })
    }

    if(password.length < 7) {
        return res.json({ status: 'error', error: 'Password should be at least 7 characters' })
    } */

    //const password = await bcrypt.hash(password, 10)
    
