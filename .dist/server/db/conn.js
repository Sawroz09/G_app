const mongoose=require('mongoose');
const db="mongodb://localhost:27017/CRUD";
mongoose.connect(db).then(
console.log('connected'))