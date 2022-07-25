/*
対象ドキュメントの対象Listの中のオブジェクトのプロパティを更新する
*/
db.getCollection("test_collection").update(
{
    "_id" : ObjectId("62c62c22ffac27de53d56390"), "values._id": ObjectId("62c62c22ffac27de53d5638e")
},
{
    $set: {"values.$.value": "hogehoge"}
})