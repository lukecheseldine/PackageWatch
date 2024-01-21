import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { User } from './User'

@Entity()
export class Email {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 100 })
    address: string

    @Column({ default: false })
    isVerified: boolean

    @Column({ default: false })
    isActive: boolean

    @ManyToOne(() => User, (user) => user.emails, { onDelete: 'CASCADE' })
    user: User
}
