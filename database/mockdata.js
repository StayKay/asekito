const fake = require("faker");

const userSampleData = [
  {
    first_name: "Andrea",
    profile_picture: fake.image.avatar(),
    join_date: new Date(2020, 2, 23),
    is_host: true,
    is_superhost: true,
    response_rate: 90,
    response_time: "hour",
    accommodation_bio:
      "I will be happy to help guests plan their ideal vacation by phone or email."
  },
  {
    first_name: "Jason",
    profile_picture: fake.image.avatar(),
    join_date: new Date(2020, 3, 1),
    is_host: true,
    is_superhost: true,
    response_rate: 90,
    response_time: "hour",
    accommodation_bio:
      "This listing even directly calls out who it’s best for, as well, a tactic we definitely recommend: “Particularly suitable for music lovers, with a guitar and a record player for guests to enjoy."
  }
];

const mockLocation = [
  {
    guest_limit: 4,
    bedrooms: 2,
    beds: 2,
    baths: 2,
    entire_home: true,
    location_bio: `Beautiful ocean front home, 2 bedroom, 3 beds, 2 bath, sleeps 4 comfortable guests. Mahogany and granite throughout. Private spa, kick back and plush day bed under the canvas shade at this delux contemporary hideway. Fresh air aith a snack bar and all household utilities provided. ${fake.lorem.paragraph(
      1
    )}`,
    userId: 2,
    guest_limit: 4,
    bedrooms: 2,
    beds: 2,
    baths: 2,
    entire_home: true,
    userId: 2
  }
];

const mockAmenities = [
  {
    hairdryer: true,
    breakfast: true,
    first_aid: true,
    kitchen: true,
    laptop_friendly: true,
    essentials: true,
    fire_extinguisher: true,
    cooking_basics: true,
    patio: true,
    wifi: true,
    location_id: 1
  }
];

module.exports = {
  userSampleData,
  mockLocation,
  mockAmenities
};
