import { Request, Response } from 'express';
import { ControleEditoraService } from '../services/ControleEditoraService';

const controleEditoraService = new ControleEditoraService();

export const getEditoras = async (req: Request, res: Response): Promise<void> => {
  try {
    const editoras = await controleEditoraService.getEditoras();
    res.json(editoras);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter editoras' });
  }
};

export const getNomeEditora = async (req: Request, res: Response): Promise<void> => {
  const codEditora = parseInt(req.params.codEditora);
  try {
    const nomeEditora = await controleEditoraService.getNomeEditora(codEditora);
    if (nomeEditora) {
      res.json({ nome: nomeEditora });
    } else {
      res.status(404).json({ message: 'Editora não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter nome da editora' });
  }
};
