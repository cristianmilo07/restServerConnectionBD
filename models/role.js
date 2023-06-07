import { Schema, model } from 'mongoose';

const RoleSchema = Schema({
    rol: {
        type: String,
        required: [true, 'El rol es obligatorio']
    }
});


//Create a new model of role
const Role = model('Role', RoleSchema);
//Export the model
export { Role }; 
