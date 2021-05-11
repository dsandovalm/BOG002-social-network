function createPost( ubicationReport, photoReport, descriptionReport ) {
  let post = {
    date: new Date(),
    ubication: ubicationReport,
    photo: photoReport,
    description: descriptionReport,
    stats: {
      like: 0,
      meh: 0,
      dislike: 0,
      views: 0
    }
  }
  
  db.collection("Posts").add({ post })
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  }); 
  return post
}
