const CaseRoutes = require("./Case_routes");
const CoolerRoutes = require("./Cooler_routes");
const CPURoutes = require("./CPU_routes");
const MemoryRoutes = require("./Memory_routes");
const MotherboardRoutes = require("./Motherboard_routes");
const PowerSupplyRoutes = require("./PowerSupply_routes");
const StorageRoutes = require("./Storage_routes");
const VideoCardRoutes = require("./VideoCard_routes");

module.exports = function (app, db) {
  CaseRoutes(app, db);
  CoolerRoutes(app, db);
  CPURoutes(app, db);
  MemoryRoutes(app, db);
  MotherboardRoutes(app, db);
  PowerSupplyRoutes(app, db);
  StorageRoutes(app, db);
  VideoCardRoutes(app, db);
};
