const { prisma } = require("./prisma.service");

class UserService {
  constructor() {
    this.prisma = prisma;
  }
  //Find all users
  async findUsers() {
    try {
      const allUsers = await this.prisma.user.findMany({
        include: {
          profile: true,
          purchases: true,
        },
      });
      return allUsers;
    } catch (error) {
      console.log(error);
      throw new Error("Error Getting users");
    }
  }
  async createUser(data) {
    try {
      const createUser = await this.prisma.user.create({ data: data });
      return createUser;
    } catch (error) {
      console.log(error);
      throw new Error("Error creating users");
    }
  }
}

const userService = new UserService();

module.exports = {
  userService,
};
