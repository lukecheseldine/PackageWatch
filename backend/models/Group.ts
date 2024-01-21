import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, CreateDateColumn } from 'typeorm'
import { User } from './User'

@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @ManyToMany((type) => User, (user) => user.groups)
    @JoinTable()
    members: User[]

    @ManyToMany((type) => User, (user) => user.adminGroups)
    @JoinTable()
    admins: User[]

    @CreateDateColumn()
    creationTime: Date
}
