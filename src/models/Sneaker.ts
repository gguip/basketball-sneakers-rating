import mongoose from 'mongoose';

const SneakerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Por favor, informe o nome do tênis'],
  },
  description: {
    type: String,
    required: [true, 'Por favor, informe a descrição do tênis'],
  },
  rating: {
    type: Number,
    required: [true, 'Por favor, informe a avaliação do tênis'],
  },
  image: {
    type: String,
    required: [true, 'Por favor, insira a imagem'],
  },
  sneakerType: {
    type: String,
    required: [true, 'Por favor, informe qual o tipo do tênis'],
  },
  traction: {
    type: Number,
    required: [true, 'Por favor, informe a tração do tênis'],
  },
  cushion: {
    type: Number,
    required: [true, 'Por favor, informe o conforto do tênis'],
  },
  material: {
    type: Number,
    required: [true, 'Por favor, informe a qualidade do material do tênis'],
  },
  support: {
    type: Number,
    required: [true, 'Por favor, informe o suporte do tênis'],
  },
  fit: {
    type: Number,
    required: [true, 'Por favor, informe o ajuste do tênis'],
  },
});

export default mongoose.models.Sneaker ||
  mongoose.model('Sneaker', SneakerSchema);
