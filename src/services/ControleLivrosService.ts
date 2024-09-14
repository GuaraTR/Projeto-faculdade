import LivroModel, { ILivro } from '../models/Livro';

export class ControleLivrosService {
  async getLivros(): Promise<ILivro[]> {
    return LivroModel.find().exec();
  }

  async getLivroPorId(id: string): Promise<ILivro | null> {
    return LivroModel.findById(id).exec();
  }

  async criarLivro(livroData: ILivro): Promise<ILivro> {
    const livro = new LivroModel(livroData);
    return livro.save();
  }

  async atualizarLivro(id: string, livroData: Partial<ILivro>): Promise<ILivro | null> {
    return LivroModel.findByIdAndUpdate(id, livroData, { new: true }).exec();
  }

  async deletarLivro(id: string): Promise<ILivro | null> {
    return LivroModel.findByIdAndDelete(id).exec();
  }
}
