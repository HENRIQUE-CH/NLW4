import { Entity, Column, PrimaryColumn, CreateDateColumn } from "typeorm";

import { v4 as uuid } from "uuid";
@Entity("pesquisa")
class Pesquisa {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Pesquisa };
