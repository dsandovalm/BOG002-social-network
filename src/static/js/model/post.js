function createPost( ubicationReport, photoReport, descriptionReport ) {
  return {
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
}

db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
