import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm"
import { Time } from "./Time"

@Entity()
export class Titulos {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({nullable: false, type: 'text'})
    campeonato: string

    @Column({nullable: false, type: 'int'})
    ano: number

    @ManyToOne(() => Time, time => time.listagem)
    @JoinColumn({ name: "time_id" })
    time: Time
}