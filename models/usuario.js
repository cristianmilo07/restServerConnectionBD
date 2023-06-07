import { Schema, model } from 'mongoose';

const UsuarioSchema = Schema({

    nombre:{
        type: String,
        require: [true, 'El nombre es obligatorio']
    },
    correo:{
        type: String,
        require: [true, 'El correo es obligatorio'],
        unique: true
    },
    password:{
        type: String,
        require: [true, 'La contraseña es obligatoria']
    },
    img:{
        type: String,
    },
    rol:{
        type: String,
        require: true,
        enum: ['ADMIN_ROLE' , 'USER_ROLE']
    },
    estado:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    },

})

//Create a new model of user
const Usuario = model('Usuario', UsuarioSchema);
//Export the model
export { Usuario }; 