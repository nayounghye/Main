// 테이블의 구조를 정의
// orm 은 객체와 db의 table을 매핑하는 기술
// sequelize를 이용해서 table의 구조를 정의할 필요가 있음.

function Visitor(Sequelize, DataTypes) {
  return Sequelize.define(
    'visitor',
    {
      id: {
        type: DataTypes,
        INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING(10),
      },
      comment: {
        type: DataTypes.TEXT('medium'),
      },
    },
    {
      tableName: 'visitor',
      freezeTableName: true,
      timestamps: false,
    }
  );
}

module.exports = Visitor;
