import { Role } from "./roles.js";
import { ViewColumn, ViewEntity } from "typeorm";
import { type IAutenticavel } from "./IAutenticavel.js";

@ViewEntity({
  expression: `
    SELECT "email", "senha", "id", '/paciente' AS "rota" FROM "paciente"
    UNION ALL
    SELECT "email", "senha", "id", '/especialista' AS "rota" FROM "especialista"
  `,
})
export class Autenticaveis implements IAutenticavel {
  @ViewColumn()
  id: string;

  @ViewColumn()
  email: string;

  @ViewColumn()
  senha: string;

  @ViewColumn()
  rota: string;
}
