import { Schema, model } from 'mongoose';

const CategoriaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    usuario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});


//Create a new model of role
const Categoria = model('Categoria', CategoriaSchema);
//Export the model
export { Categoria }; 
