import mongoose, { Document, Schema } from 'mongoose';

export interface IEditora extends Document {
  codEditora: number;
  nome: string;
}

const editoraSchema = new Schema<IEditora>({
  codEditora: { type: Number, required: true },
  nome: { type: String, required: true }
});

const EditoraModel = mongoose.model<IEditora>('Editora', editoraSchema);

export default EditoraModel;
