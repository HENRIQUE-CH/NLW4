import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { PesquisaRepository } from "../repositories/PesquisaRepository";

class PesquisaController {
  async create(request: Request, response: Response) {
    const { title, description } = request.body;

    const pesquisaRepository = getCustomRepository(PesquisaRepository);

    const pesquisa = pesquisaRepository.create({
      title,
      description,
    });

    await pesquisaRepository.save(pesquisa);
    console.log(pesquisa);

    return response.status(201).json(pesquisa);
  }

  async show(request: Request, response: Response) {
    const pesquisaRepository = getCustomRepository(PesquisaRepository);

    const all = await pesquisaRepository.find();

    return response.json(all);
  }
}
export { PesquisaController };
