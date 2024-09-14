import mongoose, { Document, Schema } from 'mongoose';

export interface ILivro extends Document {
  titulo: string;
  autor: string;
  anoPublicacao: number;
}

const livroSchema = new Schema<ILivro>({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  anoPublicacao: { type: Number, required: true }
});

const LivroModel = mongoose.model<ILivro>('Livro', livroSchema);

export default LivroModel;
