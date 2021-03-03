import { EntityRepository, Repository } from "typeorm";
import { Pesquisa } from "../models/Pesquisa";

@EntityRepository(Pesquisa)
class PesquisaRepository extends Repository<Pesquisa> {}

export { PesquisaRepository };
