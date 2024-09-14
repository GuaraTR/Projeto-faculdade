import { Request, Response } from 'express';
import { ControleLivrosService } from '../services/ControleLivrosService';

const controleLivrosService = new ControleLivrosService();

export const getLivros = async (req: Request, res: Response): Promise<void> => {
  try {
    const livros = await controleLivrosService.getLivros();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter livros' });
  }
};

export const getLivroPorId = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const livro = await controleLivrosService.getLivroPorId(id);
    if (livro) {
      res.json(livro);
    } else {
      res.status(404).json({ message: 'Livro não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter livro' });
  }
};

export const criarLivro = async (req: Request, res: Response): Promise<void> => {
  try {
    const livro = await controleLivrosService.criarLivro(req.body);
    res.status(201).json(livro);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar livro' });
  }
};

export const atualizarLivro = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const livro = await controleLivrosService.atualizarLivro(id, req.body);
    if (livro) {
      res.json(livro);
    } else {
      res.status(404).json({ message: 'Livro não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar livro' });
  }
};

export const deletarLivro = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const livro = await controleLivrosService.deletarLivro(id);
    if (livro) {
      res.status(204).send(); // No content
    } else {
      res.status(404).json({ message: 'Livro não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar livro' });
  }
};
