# 자동 보이스 매칭 서비스 Gamp

## 서비스 소개
> 게임 시작 후 팀 멤버들과 자동으로 매칭되는 보이스 채팅 서비스</br>
> 본 서비스는 2021 JunctionX Seoul AWS GameTech Track에서 진행했습니다.

'Gamp'는 팀 보이스가 지원되지 않는 게임을 위한 서비스입니다.</br>
게임이 시작되면 팀 멤버들과 자동으로 보이스가 매칭됩니다.</br>
AWS의 Chime을 기반으로 개발을 진행했습니다.

기획안을 보고 싶다면! -> [여기](https://www.notion.so/Gamp-s-Start-02d543129a5d4e78aac151881b7343e8) 

## 시연 영상
![image](https://user-images.githubusercontent.com/28949165/128905429-1cdcc41c-e570-4819-a112-608936563d79.png)
- 영상을 보기 위해서는 -> [Go Youtube!](https://github.com/junction-hippy/junction_hippy_back.git)

## 주요 기능
- WebRTC와 AWS Chime을 활용한 서비스
- 미디어 채널링 서버는 AWS lambda를 이용해 Serverless로 구현
- LoL API를통한 특정 게임이 현재 플레이 중 인지 확인하는 API 서버 개발

## 아키택처
![아키택처](https://user-images.githubusercontent.com/28949165/128905916-ad802082-7784-4e72-8638-e16b2793a443.png)

## API 문서
[Gamp API 문서](https://documenter.getpostman.com/view/14004824/Tzz4RziS)