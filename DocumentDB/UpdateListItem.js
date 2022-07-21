var result = db.query_test.aggregate(
    [
        { $unwind: "$sections" },
        { $unwind: "$sections.item_groups" },
        { $unwind: "$sections.item_groups.items" },
        {
            $match: {
                "sections.item_groups.items.item_class_l_id": 1.0,
                "sections.item_groups.items.item_class_m_id": 2.0,
                "sections.item_groups.items.item_class_s_id": 3.0,
                "sections.item_groups.items.item_class_t_id": 4.0,
                "sections.item_groups.items.answer.answer_major_cd": 99.0
            }
        }
    ]
)

result.forEach(function (form_result) {
    var _id = form_result._id
    var section_id = form_result.sections.section_id
    var item_group_id = form_result.sections.item_groups.item_group_id
    var q_id = form_result.sections.item_groups.items.item_id

    var update_result = db.query_test.update(
        {
            "_id": _id,
        },
        {
            $set:
                {
                    "sections.$[sec].item_groups.$[qg].items.$[q].answer.answer_format_m_cd": 0.0
                }
        },
        {
            multi: true,
            arrayFilters: [
                { "sec.section_id": section_id },
                { "qg.item_group_id": item_group_id },
                { "q.item_id": q_id }
            ]
        }
    )

    printjson(update_result)
}
)