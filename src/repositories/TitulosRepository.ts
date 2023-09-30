import { AppDataSource } from "../data-source";
import { Titulos } from "../entities/Titulos";


export const titulosRepository = AppDataSource.getRepository(Titulos)