import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const creatGroup = async (data, groupId) => {
  try {
    return prisma.lolgroup.create({ data: { nickname: data.nickName, userid: data.userId, group: groupId } });
  } catch (err) {
    console.error(err);
  }
};

export const deletGroup = async groupId => {
  try {
    return prisma.lolgroup.deleteMany({ where: { group: groupId } });
  } catch (err) {
    console.error(err);
  }
};

export const findByGroup = async nickname => {
  try {
    return prisma.lolgroup.findUnique({ where: { nickname: nickname } });
  } catch (err) {
    console.error(err);
  }
};
