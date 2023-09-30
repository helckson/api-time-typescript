import { Request, Response } from "express";
import { titulosRepository } from "../repositories/TitulosRepository";
import { timeRepository } from "../repositories/TimeRepository";
import { Time } from "../entities/Time";


export class TitulosController {
    async create(req: Request, res: Response) {
        const { campeonato, ano, idTime } = req.body

        try {
            const time = await timeRepository.findOneBy({id: idTime})

            if(!time) {
                return res.status(404).json({message: "Time não existe"})
            }
            
            const newTitulos = titulosRepository.create({
                campeonato,
                ano,
                time: time
            })

            await titulosRepository.save(newTitulos)

            res.status(201).json(newTitulos)
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "Internal Server Error"})
        }
    }
    
    async delete(req:Request, res: Response) {
        const { idTitulos } = req.params

        try {
            const titulo = await titulosRepository.findOneBy({id: idTitulos})

            if(!titulo) {
                return res.status(404).json('Titulo não encontrado')
            }

            await titulosRepository.delete(titulo)

            return res.status(204).json('Titulo deletado com sucesso');
        } catch (error) {
            console.error('Erro ao deletar titulo:', error);
            return res.status(500).json('Erro interno do servidor');
        }
    }
    
    async update(req: Request, res: Response) {
        const { idTitulos } = req.params
        const tituloData = req.body

        try {
            const titulo = await titulosRepository.findOneBy({id: idTitulos})

            if(!titulo) {
                return res.status(404).json({message: "Titulo não encontrado"})
            }

            await titulosRepository.update(titulo, tituloData)

            return res.json("Titulo atualizado com sucesso")
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "Internal Server Error"})
        }
    }

    async list(req: Request, res: Response) {
        
        try {
            const titulo = await titulosRepository.find()

            if(!titulo) {
                return res.status(404).json({message: "Tituls não encontrado"})
            }

            return res.json(titulo)
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "Internal Server Error"})
        }
    }
}