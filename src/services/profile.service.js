const { prisma } = require("./prisma.service");

class ProfileService {
  constructor() {
    this.prisma = prisma;
  }

  async getProfile(id) {
    try {
      const getProfile = await this.prisma.profile.findUnique({
        where: {
          userId: Number(id),
        },
        include: {
          user: true,
        },
      });
      return getProfile;
    } catch (error) {
      console.log(error);
      throw new Error("Error creating users");
    }
  }
  //Create profile data
  async create(data) {
    try {
      const createProfile = await this.prisma.profile.create({
        data: {
          address: data.address,
          picture: data.picture,
          user: { connect: { email: data.email } },
        },
      });
      return createProfile;
    } catch (error) {
      console.log(error);
      throw new Error("Error creating users");
    }
  }
  async update(data) {
    let { id, ...rest } = data;
    console.log(data);
    try {
      const updateProfile = await this.prisma.profile.update({
        where: {
          id: Number(id),
        },
        data: rest,
      });
      return updateProfile;
    } catch (error) {
      console.log(error);
      throw new Error("Error creating users");
    }
  }
}

const profileService = new ProfileService();

module.exports = {
  profileService,
};
