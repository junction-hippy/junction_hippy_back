import axios from 'axios';
import env from '../configs';
import * as LolGroupRepository from '../repositorys/LolGroupRepository';
import { changeChampionIdToName } from '../utils/ChampionMapping';
export const createGroup = async (req, res, next) => {
  const { nickname } = req.body;
  try {
    const id = req.body.lol;
    console.log('유저 id');
    console.log(id);

    const MatchResponse = await axios({
      url: `https://kr.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${id}?api_key=${env.LOLAPPKEY}`,
      method: 'get',
      Headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
        'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
        'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
        Origin: 'https://developer.riotgames.com',
      },
    });

    if (MatchResponse.status === 200) {
      //게임중일때
      const TeamData = [];
      let userTeamId = 0;
      let img = 0;

      const imgBaseUrl = 'http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/';
      MatchResponse.data.participants.map(item => {
        if (item.summonerName === nickname) {
          userTeamId = item.teamId;
        }
      });
      MatchResponse.data.participants.map(item => {
        if (item.teamId === userTeamId) {
          const img = `${imgBaseUrl}${changeChampionIdToName(item.championId)}.png`;
          TeamData.push({ nickName: item.summonerName, userId: item.summonerId, img: img });
        }
      });

      const GroupCheck = await LolGroupRepository.findByGroup(nickname);
      console.log('test 입니다.');
      console.log(TeamData);
      const gameId = String(MatchResponse.data.gameId) + String(userTeamId);
      TeamData.map(item => {
        if (item.nickName === nickname) {
          img = item.img;
        }
      });
      //그룹이 없으면 그룹 생성하고 리턴
      // 그룹이 있다면 바로 리턴
      if (GroupCheck === null) {
        TeamData.map(async item => {
          await LolGroupRepository.creatGroup(item, gameId);
        });
        res.send({ isGaming: true, isNew: true, userid: id, groupid: gameId, img: img, message: '게임중입니다.(그룹생성)' });
      } else {
        const group = await LolGroupRepository.findAllByGroup(gameId);
        const groupNotNull = group.filter(user => {
          return user.chimeId;
        });
        res.send({ isGaming: true, isNew: false, userid: id, groupid: gameId, img: img, message: '게임중입니다', groupNotNull });
      }
    } else {
      //그 외
      res.status(500).send({ message: '알수 없는 에러' });
    }
  } catch (err) {
    console.log(err);
    if (err.response.status === 404) {
      console.error(err.response);
      return res.send({
        isGaming: false,
        message: '게임 중이 아닙니다.',
      });
    }
    console.error(err);
    next(err);
  }
};

export const connectCheck = async (req, res, next) => {
  try {
    const { userid, groupid } = req.body;
    const MatchResponse = await axios({
      url: `https://kr.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${userid}?api_key=${env.LOLAPPKEY}`,
      method: 'get',
      Headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
        'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
        'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
        Origin: 'https://developer.riotgames.com',
      },
    });
    if (MatchResponse.status === 200) {
      const group = await LolGroupRepository.findAllByGroup(groupid);
      const groupNotNull = group.filter(user => {
        return user.chimeId;
      });
      res.send({ isGaming: true, message: '게임중', groupNotNull });
    }
  } catch (err) {
    const { groupid } = req.body;
    if (err.response.status === 404) {
      console.error(err.response);
      const response = await LolGroupRepository.deletGroup(groupid);
      if (response) {
        return res.send({
          isGaming: false,
          message: '게임 중이 아닙니다.',
        });
      }
    } else {
      return res.send({
        message: '그룹삭제실패',
      });
    }
    console.error(err);
    next(err);
  }
};

export const updateChimeId = async (req, res, next) => {
  try {
    const updateUser = await LolGroupRepository.updateByChime(req.body.nickname, req.body.chimeId);
    return res.send(updateUser);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const findUserChimeId = async (req, res, next) => {
  try {
    const user = await LolGroupRepository.findByChimeId(req.params.chimeId);
    return res.send(user[0]);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const deleteChimeId = async (req, res, next) => {
  try {
    const user = await LolGroupRepository.deleteChimeId(req.params.chimeId);
    return res.send(user);
  } catch (err) {
    console.error(err);
    next(err);
  }
};
