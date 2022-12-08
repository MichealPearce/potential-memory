import {
	BaseEntity,
	CreateDateColumn,
	DeleteDateColumn,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

export class BaseModel<Data extends object = object> extends BaseEntity {
	static init<M extends BaseModel>(
		this: new () => M,
		data: Partial<M['@data']> = {},
	): M {
		return new this().assign(data)
	}

	// this is a type property, does not actually exist
	declare '@data': Data

	assign(data: Partial<Data>) {
		for (const [key, value] of Object.entries(data)) {
			// @ts-ignore - we don't care about the type here
			this[key] = value
		}

		return this
	}
}

export interface ModelData {
	created: Date
	updated?: Date
	deleted?: Date
}

export class Model<Data extends ModelData>
	extends BaseModel<Data>
	implements ModelData
{
	@CreateDateColumn()
	declare created: Date

	@UpdateDateColumn()
	declare updated?: Date

	@DeleteDateColumn()
	declare deleted?: Date
}

export interface ModelIDData extends ModelData {
	id: number
}

export class ModelID<Data extends ModelIDData>
	extends Model<Data>
	implements ModelIDData
{
	@PrimaryGeneratedColumn()
	declare id: number
}

export interface ModelUUIDData extends ModelData {
	uuid: string
}

export class ModelUUID<Data extends ModelUUIDData>
	extends Model<Data>
	implements ModelUUIDData
{
	@PrimaryGeneratedColumn('uuid')
	declare uuid: string
}
