const fetch = require('node-fetch')
  	

function getExperiences(data) {
    var object = [{
      experienceTitle: data.results[0].data.cv.experiences.value[0]["experience-title"].value[0].text,
      dateEnd: data.results[0].data.cv.experiences.value[0]["date-end"].value,
      dateStart: data.results[0].data.cv.experiences.value[0]["date-start"].value
    },
    {
      experienceTitle: data.results[0].data.cv.experiences.value[1]["experience-title"].value[0].text,
      dateEnd: data.results[0].data.cv.experiences.value[1]["date-end"].value,
      dateStart: data.results[0].data.cv.experiences.value[1]["date-start"].value
    }
  ]
  return object;
}

exports.createPages = ({actions: {createPage}}) => {

 /* const prismicData = await getPrismicData();
  console.log(prismicData)

  createPage({
      path: `/`,
      component: path.resolve("./src/pages/index.js"),
      context: {pageContext: prismicData}
  });
  */

  return new Promise((resolve, reject) => {
    fetch('https://cv-page.prismic.io/api/v1/documents/search?ref=YDNpXBUAAMmV9aOD#format=json').then(result => result.json()).then(result => {
      const prismicData = getExperiences(result)
      createPage({
        path: `/`,
        component: require.resolve("./src/pages/index.js"),
        context: {prismicData}
    });
  })
  resolve()
})
}