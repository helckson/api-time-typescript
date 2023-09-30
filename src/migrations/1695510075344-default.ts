import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1695510075344 implements MigrationInterface {
    name = 'Default1695510075344'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "titulos" DROP COLUMN "campeonato"`);
        await queryRunner.query(`ALTER TABLE "titulos" ADD "campeonato" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "time" DROP COLUMN "nome"`);
        await queryRunner.query(`ALTER TABLE "time" ADD "nome" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "time" DROP COLUMN "nome"`);
        await queryRunner.query(`ALTER TABLE "time" ADD "nome" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "titulos" DROP COLUMN "campeonato"`);
        await queryRunner.query(`ALTER TABLE "titulos" ADD "campeonato" character varying NOT NULL`);
    }

}
