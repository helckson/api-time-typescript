import { AppDataSource } from "../data-source";
import { Time } from "../entities/Time";


export const timeRepository = AppDataSource.getRepository(Time)

export async function updateTime(id: string, timeBody: Partial<Time>): Promise<void> {
    try {
        const existeTime = await timeRepository.findOneBy({id: id});

        if(!existeTime) {
            throw new Error("Time não encontrado")
        }

        if(timeBody.nome !== undefined) {
            existeTime.nome = timeBody.nome
        }

        await timeRepository.save(existeTime)
    } catch (error) {
        console.error(error);
        throw new Error("Erro ao atualizar o time");
    }
}