import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const creatGroup = async (data, groupId) => {
  try {
    return prisma.lolgroup.create({ data: { nickname: data.nickName, userid: data.userId, group: groupId, img: data.img } });
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

export const findImgByNickName = async nickname => {
  try {
    return prisma.lolgroup.findMany({ where: { nickname: nickname } });
  } catch (err) {
    console.error(err);
  }
};

export const updateByChime = async (nickname, chimeId) => {
  try {
    return prisma.lolgroup.update({ where: { nickname }, data: { chimeId } });
  } catch (err) {
    console.error(err);
  }
};

export const findByChimeId = async chimeId => {
  try {
    return prisma.lolgroup.findMany({ where: { chimeId } });
  } catch (err) {
    console.error(err);
  }
};
