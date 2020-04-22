import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';

import { Device } from './device.model';
import { Role } from './role.model';
import { User } from './user.model';

@Table({
    tableName: 'log',
    modelName: 'log'
})
export class Log extends Model<Log> {
    @Column({ primaryKey: true, autoIncrement: true }) i_log: number;

    @ForeignKey(() => Device) @Column({ onDelete: 'SET NULL' }) i_device: number;
    @Column device_name: string;

    @ForeignKey(() => Role) @Column({ onDelete: 'SET NULL' }) i_role: number;
    @Column role_name: string;

    @ForeignKey(() => User) @Column({ onDelete: 'SET NULL' }) i_user: number;
    @Column user_name: string;

    @Column({ type: DataType.DATE }) time: Date;
    @Column access: boolean;
    @Column device_ip: string;
    @Column uuid: string;
    @Column error: string;
}