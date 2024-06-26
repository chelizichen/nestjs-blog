import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { getRepository, Repository } from 'typeorm'
import { Role } from './role.entity'

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private readonly repository: Repository<Role>,
  ) {}

  async create(body: Role): Promise<Role> {
    const record = this.repository.create(body)
    return await this.repository.save(record)
  }

  async findAll(): Promise<Role[]> {
    return this.repository
      .createQueryBuilder('role')
      .leftJoinAndSelect('role.auths', 'auth')
      .getMany()
  }

  async update(id: number, body: Role): Promise<any> {
    const record = this.repository.create(body)
    record.id = id
    return await this.repository.save(record)
  }

  async delete(id: number): Promise<any> {
    return await this.repository.delete(id)
  }
}
