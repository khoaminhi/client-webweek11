const {models} = require('../../models')
const Account = models.customers
exports.signup = async (email, password) => {
    const account = await Account.findOne({where: {email: email}, raw: true});
    if(account){
        throw new Error('Email already registered');
    }
    // const hashPassword = await bcrypt.hash(password, 10);
    const new_account = await Account.create({email: email, password: password, username: email, id: email});
    console.log(new_account.email);
    return new_account;
};