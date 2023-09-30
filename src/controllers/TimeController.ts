import { Request, Response } from "express";
import { timeRepository, updateTime } from "../repositories/TimeRepository";



export class TimeController {
    async create(req: Request, res: Response) {
        const { nome } = req.body

        try {
            const newTime = timeRepository.create({nome})
            await timeRepository.save(newTime)
            return res.status(201).json(newTime)
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: "Internal Server Error"})
        }
    }
    async list(req: Request, res: Response) {

        try {
            const time =  await timeRepository.find()
            return res.json(time)
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: "Internal Server Error"})
        }
    }
    async listById(req: Request, res: Response) {
        const { idTime } = req.params

        try {
            const time = await timeRepository.find({where: {id: idTime}, relations: ['listagem']})
             
            if(!time) {
                res.status(404).json({message: "Time não encontrado"})
            }else {
                res.json(time)
            }
        } catch (error) {
            console.log(error) 
            res.status(500).json({message: "Internal Server Error"})
        }
    }
    async update(req: Request, res: Response) {
        const { idTime } = req.params
        const timeBody = req.body

        try {
            
            const time = await timeRepository.findOneBy({id: idTime})

            if(!time) {
                res.status(404).json({message: "Time não encontrado"})
            }

            await updateTime(idTime, timeBody)

            return res.json("Time atualizado com sucesso")
        } catch (error) {
            console.log(error) 
            res.status(500).json({message: "Internal Server Error"})
        }
    }
}