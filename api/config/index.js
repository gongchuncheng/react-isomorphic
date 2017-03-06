var config = {
  host: 'http://localhost',
  port: "8000",
  testMongodb: "mongodb://localhost/test",
  mongodb: "mongodb://localhost/dremy_blog",
  options : {
	  server: {
		  auto_reconnect: true,
		  poolSize: 5
	  }
  }
};

module.exports = config;