// const express = require("express");
// const Sequelize = require("sequelize");

// const app = express();
// const urlencodedParser = express.urlencoded({extended: false});

// // определяем объект Sequelize
// const sequelize = new Sequelize("testdb", "testuser", "123456", {
//   dialect: "postgres",
//   host: "localhost",
//   define: {
//     timestamps: false
//   }
// });

// // определяем модель User
// const User = sequelize.define("user", {
//     id: {
//       type: Sequelize.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//       allowNull: false
//     },
//     name: {
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     post: {
//       type: Sequelize.STRING,
//       allowNull: false
//     }
//   });
   
//   app.set("view engine", "hbs");

//   // синхронизация с бд, после успшной синхронизации запускаем сервер
// sequelize.sync().then(()=>{
//     app.listen(3000, function(){
//       console.log("Сервер ожидает подключения...");
//     });
//   }).catch(err=>console.log(err));

//   // получение данных
// app.get("/", function(req, res){
//     User.findAll({raw: true }).then(data=>{
//       res.render("index.hbs", {
//         users: data
//       });
//     }).catch(err=>console.log(err));
// });

// static associate(models) {
//     User.belongsTo(models.role, {
//       foreignKey: 'roleValue',
//     });
//     User.hasMany(models.post, {
//       foreignKey: 'owner',
//       onDelete: 'CASCADE',
//     });
//     User.hasMany (models.comment, {
//       as: 'aythor',
//       foregnKey: 'userID',
      
//     });
//   }
// }