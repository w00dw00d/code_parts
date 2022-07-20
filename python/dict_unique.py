"""
dictの特定のキー（hogeId等）を条件にしてユニーク化
"""
def get_unique_list(seq):
    ret =[]
    for s in seq:
        if next((item for item in ret
            if all([
                item['attr_l_id'] == s['attr_l_id'], 
                item['attr_m_id'] == s['attr_m_id'], 
                item['attr_s_id'] == s['attr_s_id']
                ])
            ), None) is None:
            ret.append(s)
    return ret
    
values = []
values = [
    {
        'attr_l_id': 1,
        'attr_m_id': 1,
        'attr_s_id': 1,
        'value': 1
    },
    {
        'attr_l_id': 1,
        'attr_m_id': 1,
        'attr_s_id': 2,
        'value': 1
    },
    {
        'attr_l_id': 1,
        'attr_m_id': 1,
        'attr_s_id': 3,
        'value': 1
    },
    {
        'attr_l_id': 1,
        'attr_m_id': 1,
        'attr_s_id': 2,
        'value': 2
    },
]

print(get_unique_list(values))