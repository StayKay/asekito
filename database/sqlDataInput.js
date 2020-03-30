const Sequelize = require("sequelize");
const {
  userSampleData,
  mockLocation,
  mockAmenities
} = require("./mockdata.js");

const sequelize = new Sequelize("locationInfo", "root", "password", {
  // host: "database",
  dialect: "mysql"
});

const User = sequelize.define("users", {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  first_name: { type: Sequelize.STRING },
  profile_picture: { type: Sequelize.STRING },
  join_date: { type: Sequelize.STRING },
  is_host: { type: Sequelize.BOOLEAN },
  is_superhost: { type: Sequelize.BOOLEAN, allowNull: true },
  response_rate: { type: Sequelize.INTEGER, allowNull: true },
  response_time: { type: Sequelize.STRING, allowNull: true },
  accommodation_bio: { type: Sequelize.STRING, allowNull: true }
});

const Location = sequelize.define("locations", {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  guest_limit: { type: Sequelize.INTEGER },
  bedrooms: { type: Sequelize.INTEGER },
  beds: { type: Sequelize.INTEGER },
  baths: { type: Sequelize.INTEGER },
  entire_home: { type: Sequelize.BOOLEAN },
  location_bio: { type: Sequelize.TEXT },
  userId: { type: Sequelize.INTEGER }
});

const Amenities = sequelize.define("amenities", {
  hairdryer: { type: Sequelize.BOOLEAN },
  breakfast: { type: Sequelize.BOOLEAN },
  first_aid: { type: Sequelize.BOOLEAN },
  kitchen: { type: Sequelize.BOOLEAN },
  laptop_friendly: { type: Sequelize.BOOLEAN },
  essentials: { type: Sequelize.BOOLEAN },
  fire_extinguisher: { type: Sequelize.BOOLEAN },
  cooking_basics: { type: Sequelize.BOOLEAN },
  patio: { type: Sequelize.BOOLEAN },
  wifi: { type: Sequelize.BOOLEAN },
  location_id: { type: Sequelize.INTEGER }
});

User.sync({ force: true })
  .then(() => {
    User.bulkCreate(userSampleData);
  })
  .then(() => {
    Location.sync({ force: true })
      .then(() => {
        Location.bulkCreate(mockLocation);
      })
      .then(() => {
        Amenities.sync({ force: true })
          .then(() => {
            Amenities.bulkCreate(mockAmenities);
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  })
  .catch(err => {
    console.log(err);
  });
