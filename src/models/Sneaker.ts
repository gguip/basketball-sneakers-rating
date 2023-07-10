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
  starRating: {
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
  stats: [
    {
      name: {
        type: String,
        required: [true, 'Por favor, informe o nome tração'],
      },
      value: {
        type: Number,
        required: [true, 'Por favor, informe o valor de tração do tênis'],
      },
    },
    {
      name: {
        type: String,
        required: [true, 'Por favor, informe o nome conforto'],
      },
      value: {
        type: Number,
        required: [true, 'Por favor, informe o valor de conforto do tênis'],
      },
    },
    {
      name: {
        type: String,
        required: [true, 'Por favor, informe o nome material'],
      },
      value: {
        type: Number,
        required: [
          true,
          'Por favor, informe o valor de qualidade do material do tênis',
        ],
      },
    },
    {
      name: {
        type: String,
        required: [true, 'Por favor, informe o nome suporte'],
      },
      value: {
        type: Number,
        required: [true, 'Por favor, informe o valor de suporte do tênis'],
      },
    },
    {
      name: {
        type: String,
        required: [true, 'Por favor, informe o nome ajuste'],
      },
      value: {
        type: Number,
        required: [true, 'Por favor, informe o valor do ajuste do tênis'],
      },
    },
  ],
  url: {
    type: String,
  },
});

export default mongoose.models.Sneaker ||
  mongoose.model('Sneaker', SneakerSchema);
