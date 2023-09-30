import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1695507723214 implements MigrationInterface {
    name = 'Default1695507723214'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "titulos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "campeonato" character varying NOT NULL, "ano" integer NOT NULL, "time_id" uuid, CONSTRAINT "PK_a154acd5930fd7907b5ca54d21a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "titulos" ADD CONSTRAINT "FK_43236edb77c01478de345a06a4d" FOREIGN KEY ("time_id") REFERENCES "time"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "titulos" DROP CONSTRAINT "FK_43236edb77c01478de345a06a4d"`);
        await queryRunner.query(`DROP TABLE "titulos"`);
    }

}
