import { DataSource } from 'apollo-datasource'
import { User } from '../../entity/User'

type Input = {
  name: string
  email: string
}

class Internal extends DataSource {
  async addUser(input: Input) {
    const user = User.create({
      name: input.name,
      email: input?.email,
    })

    await user.save()
    return user
  }
  async getUsers() {
    const users = await User.find()
    return users
  }
  async getUser(id: string) {
    const users = await User.findOne({ where: { id } })
    return users
  }
}

export default Internal
