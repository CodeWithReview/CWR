DROP TABLE IF EXISTS `review`;
DROP TABLE IF EXISTS `request`;
DROP TABLE IF EXISTS `memberdevelopskill`;
DROP TABLE IF EXISTS `developskill`;
DROP TABLE IF EXISTS `memberapi`;
DROP TABLE IF EXISTS `member`;

CREATE TABLE `member` (
	`userNo`	int	NOT NULL	COMMENT '유저번호',
	`userId`	varchar(10)	NOT NULL  unique	COMMENT '유저아이디',
	`userPwd`	varchar(500)	NOT NULL	COMMENT '비밀번호',
    `nickName` varchar(15) NOT NULL unique	COMMENT '닉네임',
	`profileImg`	varchar(500)	NULL	COMMENT '프로필이미지',
	`userInfo`	varchar(100)	NULL	COMMENT '자기소개',
	`status`	varchar(10)	 NOT NULL	DEFAULT 'default'	COMMENT '계정상태(default / disabled / prevent)',
	`mento`	char(1)	NOT NULL	DEFAULT 'N'	COMMENT '멘토여부(Y/N)',
	`mentoDate`	datetime	NOT NULL	COMMENT '멘토여부수정날짜',
	`disabledDate`	datetime	NULL	COMMENT '탈퇴/차단일',
	`enrollDate`	datetime	NOT NULL	COMMENT '가입일'
);

CREATE TABLE `request` (
	`requestNo`	int	NOT NULL	COMMENT '의뢰번호',
	`menteeNo`	int	NOT NULL	COMMENT '멘티no',
	`mentoNo`	int	NULL	COMMENT '멘토no(null가능)',
	`status`	varchar(10)	NOT NULL	COMMENT '상태(waiting / progress / complete / cancle)',
	`title`	varchar(50)	NOT NULL	COMMENT '제목',
	`content`	varchar(500)	NOT NULL	COMMENT '내용',
	`saveRoot`	varchar(100)	NULL	COMMENT '파일저장경로',
    `requestDate`	datetime	NOT NULL	COMMENT '의뢰일'
);

CREATE TABLE `review` (
	`reviewNo`	int	NOT NULL	COMMENT '리뷰번호',
	`requestNo`	int	NOT NULL	COMMENT '의뢰번호',
	`topReviewNo`	int	NULL	COMMENT '상위리뷰번호',
	`userNo`	int	NULL	COMMENT '작성자',
	`content`	text(65535)	NOT NULL	COMMENT '내용',
	`reviewDate`	datetime	NOT NULL	COMMENT '작성일'
);

CREATE TABLE `memberapi` (
	`userNo`	int	NOT NULL	COMMENT '유저번호',
	`apiType`	varchar(10)	NOT NULL	COMMENT 'api종류(google / github)',
	`apiKey`	varchar(300)	NOT NULL	COMMENT 'api키값',
	`apiId`	varchar(100)	NULL	COMMENT 'api 아이디값'
);

CREATE TABLE `developskill` (
	`skill`	varchar(100)	NOT NULL	COMMENT '개발언어'
);

CREATE TABLE `memberdevelopskill` (
	`userNo`	int	NOT NULL	COMMENT '유저번호',
	`skill`	varchar(100)	NOT NULL	COMMENT '개발언어'
);




ALTER TABLE `member` ADD CONSTRAINT `PK_MEMBER` PRIMARY KEY (
	`userNo`
);

ALTER TABLE `request` ADD CONSTRAINT `PK_REQUEST` PRIMARY KEY (
	`requestNo`
);

ALTER TABLE `review` ADD CONSTRAINT `PK_REVIEW` PRIMARY KEY (
	`reviewNo`
);

ALTER TABLE `memberapi` ADD CONSTRAINT `PK_MEMBERAPI` PRIMARY KEY (
	`userNo`,
    `apiType`
);

ALTER TABLE `developskill` ADD CONSTRAINT `PK_DEVELOPSKILL` PRIMARY KEY (
	`skill`
);

ALTER TABLE `memberdevelopskill` ADD CONSTRAINT `PK_MEMBERDEVELOPSKILL` PRIMARY KEY (
	`userNo`,
	`skill`
);

ALTER TABLE member MODIFY userNo INT NOT NULL AUTO_INCREMENT;
ALTER TABLE review MODIFY reviewNo INT NOT NULL AUTO_INCREMENT;
ALTER TABLE request MODIFY requestNo INT NOT NULL AUTO_INCREMENT;

ALTER TABLE `request` ADD CONSTRAINT `FK_member_TO_request_1` FOREIGN KEY (
	`menteeNo`
)
REFERENCES `member` (
	`userNo`
) ON DELETE CASCADE;

ALTER TABLE `request` ADD CONSTRAINT `FK_member_TO_request_2` FOREIGN KEY (
	`mentoNo`
)
REFERENCES `member` (
	`userNo`
) ON DELETE SET NULL;

ALTER TABLE `review` ADD CONSTRAINT `FK_request_TO_review_1` FOREIGN KEY (
	`requestNo`
)
REFERENCES `request` (
	`requestNo`
) ON DELETE CASCADE;

ALTER TABLE `review` ADD CONSTRAINT `FK_member_TO_review_1` FOREIGN KEY (
	`userNo`
)
REFERENCES `member` (
	`userNo`
) ON DELETE SET NULL;

ALTER TABLE `memberapi` ADD CONSTRAINT `FK_member_TO_memberApi_1` FOREIGN KEY (
	`userNo`
)
REFERENCES `member` (
	`userNo`
) ON DELETE CASCADE;

ALTER TABLE `memberdevelopskill` ADD CONSTRAINT `FK_member_TO_memberDevelopSkill_1` FOREIGN KEY (
	`userNo`
)
REFERENCES `member` (
	`userNo`
) ON DELETE CASCADE;

ALTER TABLE `memberdevelopskill` ADD CONSTRAINT `FK_developSkill_TO_memberDevelopSkill_1` FOREIGN KEY (
	`skill`
)
REFERENCES `developskill` (
	`skill`
) ON DELETE CASCADE;


INSERT INTO developskill (skill) 
VALUES ( 'Java' ),
		( 'JavaScript' ),
		( 'Python' ),
		( 'C#' ),
		( 'C++' ),
		( 'TypeScript' ),
		( 'PHP' ),
		( 'Swift' ),
		( 'Ruby' ),
		( 'Go' ),
		( 'Kotlin' ),
		( 'Rust' ),
		( 'Shell session-session' ),
		( 'HTML' ),
		( 'CSS' ),
		( 'SQL' ),
		( 'JSON' ),
		( 'XML' ),
		( 'YAML' ),
		( 'Markdown' ),
		( 'Bash' ),
		( 'C' ),
		( 'Objective-C' ),
		( 'Scala' ),
		( 'Perl' ),
		( 'Groovy' ),
		( 'Lua' ),
		( 'R' ),
		( 'Dart' ),
		( 'Haskell' ),
		( 'Spring' ),
		( 'React.js' ),
		( 'Angular' ),
		( 'Django' ),
		( 'ASP.NET' ),
		( 'Ruby on Rails' ),
		( 'Express.js' ),
		( 'Laravel' ),
		( 'Vue.js' ),
		( 'ASP.NET Core' ),
		( 'Node.js' ),
		( 'Flask' );