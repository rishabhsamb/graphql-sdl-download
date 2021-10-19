const axios = require('axios').default

const getSDLSchema = async (ENDPOINT_URL) => {
  const { buildClientSchema, getIntrospectionQuery, printSchema } = require('graphql')
  const res = await axios.post(ENDPOINT_URL, { query: getIntrospectionQuery() })
  const schema = buildClientSchema(res.data.data)
  const sdl = printSchema(schema)
  const fs = require('fs');

  fs.writeFile("./schema.graphql", sdl, function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The file was saved!");
  }); 
}

const ENDPOINT_URL = ""
getSDLSchema(ENDPOINT_URL)
