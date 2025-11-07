let systemDBs = ["admin", "config", "local"];
let databases = db.getMongo().getDBNames(); 

databases.forEach((d) => {
    if (!systemDBs.includes(d)) {
        db = db.getSiblingDB(d);
        db.dropDatabase();
        print(d + " supprimée !");
    } else {
        print(d + " est une base système, ignorée.");
    }
});
