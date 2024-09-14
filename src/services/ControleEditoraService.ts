import EditoraModel, { IEditora } from '../models/Editora';

export class ControleEditoraService {
  async getEditoras(): Promise<IEditora[]> {
    return EditoraModel.find().exec();
  }

  async getNomeEditora(codEditora: number): Promise<string | undefined> {
    const editora = await EditoraModel.findOne({ codEditora }).exec();
    return editora?.nome;
  }
}
