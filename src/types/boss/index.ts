export interface Boss {
  boss_id: any;
  address: string;
  email: string;
  identification: number;
  last_name: string;
  name: string;
  photo: string;
}

export interface CreateBossDto extends Omit<Boss, 'boss_id'> {}

export type PartialBoss = Partial<Boss>;

export interface Credentials {
  email: string;
  password: string;
}
