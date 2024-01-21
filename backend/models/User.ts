import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm'
import { Group } from './Group'
import { Email } from './Email'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @CreateDateColumn({ default: new Date() })
    creationDate: Date

    @Column()
    phone: string

    @Column()
    phoneIsVerified: boolean

    @Column()
    primaryEmail: Email

    @OneToMany(() => Email, (email) => email.user)
    emails: Email[]

    @ManyToMany((type) => Group, { onDelete: 'CASCADE' })
    @JoinTable()
    groups: Group[]
}
