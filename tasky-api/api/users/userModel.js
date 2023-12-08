import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const passwordValitor =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: {type:String , required: true , Math:passwordValitor}
});


export default mongoose.model('User', UserSchema);