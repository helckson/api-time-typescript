import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Titulos } from "./Titulos"

@Entity()
export class Time {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({nullable: false, type: 'text'})
    nome: string

    @OneToMany(() => Titulos, titulo => titulo.time)
    listagem: Titulos[]
}