import axios from 'axios';
import env from '../configs';
import * as LolGroupRepository from '../repositorys/LolGroupRepository';

export const UserCheckByLol = async (req, res, next) => {
  const { nickname } = req.body;
  try {
    const response = await axios({
      url: encodeURI(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickname}?api_key=${env.LOLAPPKEY}`),
      method: 'get',
      Headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
        'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
        'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
        Origin: 'https://developer.riotgames.com',
      },
    });
    const id = response.data.id;
    req.body.lol = id;
    console.log('유저id(check)');
    console.log(req.body.lol);
    next();
  } catch (err) {
    if (err.response.status) {
      console.error(err.response);
      return res.send({
        userdata: false,
        message: '유저 정보가 없습니다',
      });
    }
    console.error(err);
    next(err);
  }
};
