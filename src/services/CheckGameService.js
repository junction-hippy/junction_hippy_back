import axios from 'axios';
import env from '../configs';
import * as LolGroupRepository from '../repositorys/LolGroupRepository';

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
      let test = [];
      let userTeamId = 0;

      MatchResponse.data.participants.map(item => {
        if (item.summonerName === nickname) {
          userTeamId = item.teamId;
        }
      });
      MatchResponse.data.participants.map(item => {
        if (item.teamId === userTeamId) {
          test.push({ nickName: item.summonerName, userId: item.summonerId });
        }
      });

      console.log(nickname);
      const GroupCheck = await LolGroupRepository.findByGroup(nickname);
      console.log('test', GroupCheck);
      console.log(test);
      let gameId = MatchResponse.data.gameId;
      if (GroupCheck === null) {
        test.map(async item => {
          await LolGroupRepository.creatGroup(item, String(gameId));
        });
        res.send({ isGaming: true, userid: id, groupid: gameId, message: '게임중입니다.(그룹생성)' });
      } else {
        res.send({ isGaming: true, userid: id, groupid: String(gameId), message: '게임중입니다' });
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
    const { userid } = req.body;
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
      res.send({ isGaming: true, message: '게임중' });
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
