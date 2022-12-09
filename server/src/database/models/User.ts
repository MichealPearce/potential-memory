import { Model, ModelData } from 'server/database/Model'
import { Column, Entity, PrimaryColumn } from 'typeorm'

export interface UserData extends ModelData {
	name: string
	email: string
	password: string
}

@Entity()
export class User extends Model<UserData> implements UserData {
	@Column('varchar', { length: 255, unique: true })
	@PrimaryColumn()
	declare name: string

	@Column('varchar', { length: 255 })
	declare email: string

	@Column('varchar', { length: 255, select: false })
	declare password: string
}
