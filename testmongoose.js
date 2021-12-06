const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const schema={
    name: String,
    age:Number,
    health:String
}
const mydata = mongoose.model('datas', schema);

// const kitty = new mydata({ name: 'Zaierlda2' });
// kitty.save().then(() => console.log('meow'));
// const kitty1 = new mydata({ name: 'Kaven2',age:2,health:"good" });
// kitty1.save().then(()=>console.log("new schema writed!"))
mydata.find({name:"Kaven2"},(err,data)=>{console.log(data[0]._doc.name)})